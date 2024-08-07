import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import cartlogo from "../../assets/logocart.png";
import { useAppSelector } from "../../app/Hooks/Hooks";
import { getCartQuantity } from "../../app/Selectors";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useAppSelector(getCartQuantity);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    if (totalQuantity > 0) {
      setIsAnimated(true);

      const debounce = setTimeout(() => {
        setIsAnimated(false);
      }, 300);

      return () => clearTimeout(debounce);
    }
  }, [totalQuantity]);

  return (
    <>
      <div className="">
        <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <Link
              to="/home"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={cartlogo} className="h-20 w-auto" alt="Logo" />
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                SHOP STOCK
              </span>
            </Link>

            <div className="hidden md:flex flex-grow justify-center">
              <ul className="font-medium flex space-x-8">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    aria-current="page"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    to="/category"
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    to="/aboutus"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div
              className={`relative flex items-center justify-center px-5 ${
                isAnimated ? "scale-effect" : ""
              }`}
            >
              <Link
                to="/cartItem"
                className="fa-solid fa-cart-shopping text-black text-2xl"
              ></Link>

              <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary text-white text-xs flex items-center justify-center rounded-full">
                {totalQuantity}
              </div>
            </div>

            <div className="hidden md:flex space-x-4">
              <Link to="/login" className="btn-primary px-4 py-2">
                Login
              </Link>
              <Link to="/register" className="btn-primary px-4 py-2  ">
                Signin
                <i className="pl-2 fa-solid fa-right-to-bracket"></i>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} p-4`}>
            <div className="flex flex-col space-y-4">
              <ul className="font-medium flex flex-col space-y-4">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    aria-current="page"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    to="/category"
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "px-4 py-2 text-white bg-black rounded-md"
                        : "block py-2 px-3 text-black rounded md:p-0 text-lg hover:text-slate-600"
                    }
                    to="/aboutus"
                  >
                    About
                  </NavLink>
                </li>
              </ul>

              <Link to="/login" className="btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Signin
                <i className="pl-2 fa-solid fa-right-to-bracket"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
