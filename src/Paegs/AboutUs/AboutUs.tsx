import { Helmet } from "react-helmet";
import team from "../../assets/team.jpeg";
import team2 from "../../assets/team2.jpeg";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <meta name="description" content="About us" />
        <title>About Us Page</title>
      </Helmet>
      <div className=" min-h-screen p-5 flex flex-col items-center justify-center">
        <section className="text-center p-8 max-w-3xl bg-slate-100 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="text-gray-600 leading-relaxed p-7 mb-6">
            Welcome to our shop! We are passionate about providing the best
            products and services to our customers. Our team is dedicated to
            ensuring you have a wonderful shopping experience with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hover:shadow-md transition duration-300">
              <img
                src={team}
                alt="Our Team"
                className="w-full rounded-md hover:opacity-90 transition duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Our Team
              </h3>
              <p className="text-gray-600 mt-2">
                Our team is made up of industry professionals who are committed
                to delivering high-quality products.
              </p>
            </div>
            <div className="hover:shadow-md transition duration-300">
              <img
                src={team2}
                alt="Our Mission"
                className="w-full rounded-md hover:opacity-90 transition duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mt-2 p-7">
                We aim to be a leader in our industry by offering exceptional
                products and service.
              </p>
            </div>
          </div>
          <Link
            to=""
            className="inline-block mt-8 bg-primary text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}
