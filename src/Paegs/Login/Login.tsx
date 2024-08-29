import { useForm, SubmitHandler } from "react-hook-form";
import { signinSchema, TInputs } from "../../Validations/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    mode: "onBlur",
    resolver: zodResolver(signinSchema),
  });

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log("Form Submitted with Data:", data); // Verify data is being passed

    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        data
      );

      console.log("Server Response:", response.data); // Check response from the server

      const { token } = response.data;

      if (token) {
        localStorage.setItem("authToken", token);
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Login failed, no token received.");
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error("Error during login:", error); // Check for any errors in the network request
    }
  };

  return (
    <>
      <Helmet>
        <meta name="Login" content="Login" />
        <title> Login page</title>
      </Helmet>
      <div className="container p-5">
        <p className="text-xl font-normal m-7 text-center text-black sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
          Welcome back! enjoy your shopping 🛒
        </p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="name@gmail.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="•••••••••"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-dark dark:focus:ring-primary"
          >
            Submit
          </button>
          <Link
            to="/register"
            className="text-black hover:text-gray-500 block mt-3 "
          >
            {" "}
            Didn't you have an account?
          </Link>
        </form>
      </div>
    </>
  );
}
