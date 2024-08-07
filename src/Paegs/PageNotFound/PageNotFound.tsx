import { Link } from "react-router-dom";
import pagenotfound from "../../assets/pagenotfound.png";

export default function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16">
        <div className="text-center">
          <div className="text-6xl font-bold text-black mb-1">404</div>
          <div className="text-2xl font-semibold text-black ">
            Page Not Found !
          </div>
        </div>
        <img
          src={pagenotfound}
          alt="Page Not Found"
          className="max-w-lg w-full h-[30rem] object-cover relative "
        />
        <div className="text-center absolute bottom-32 ">
          <Link to="/home" className="btn-primary ">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}
