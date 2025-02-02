import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8 mt-auto">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Links */}
            <div className="flex flex-col md:flex-row md:space-x-6">
              <Link
                to="home"
                className="py-2 px-4 text-white hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                to="about"
                className="py-2 px-4 text-white hover:text-gray-300"
              >
                About
              </Link>
              <Link
                to="category"
                className="py-2 px-4 text-white hover:text-gray-300"
              >
                Categories
              </Link>
              <Link
                to="allproducts"
                className="py-2 px-4 text-white hover:text-gray-300"
              >
                All Products
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center mt-6 text-white">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
