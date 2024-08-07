import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className=" container p-5  ">
        <p className="text-3xl font-normal m-7 text-center text-black">
          Welcome to our Shop Stock Website , enjoy your shopping !
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="text"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="•••••••••"
              required
            />
          </div>

          <button type="submit" className="text-white btn-primary">
            Login
          </button>
          <Link
            to="/register"
            className="my-3 text-black hover:text-gray-500 block"
          >
            You don't have an account ?
          </Link>
        </form>
      </div>
    </>
  );
}
