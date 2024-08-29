// src/Components/AppRouter/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Componants/Layout/Layout";
import { lazy, Suspense } from "react";
import Loading from "../Componants/Loading/Loading";
import Orders from "../Paegs/Orders/Orders";
//pages
const Home = lazy(() => import("../Paegs/Home/Home"));
const Categories = lazy(() => import("../Paegs/Categories/Categories."));
const AboutUs = lazy(() => import("../Paegs/AboutUs/AboutUs"));
const AllProducts = lazy(() => import("../Paegs/AllProducts/AllProducts"));
const Products = lazy(() => import("../Paegs/Products/Products"));
const Login = lazy(() => import("../Paegs/Login/Login"));
const Register = lazy(() => import("../Paegs/Register/Register"));
const PageNotFound = lazy(() => import("../Paegs/PageNotFound/PageNotFound"));
const CartItems = lazy(() => import("../Paegs/CartItems/CartItems"));

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "home",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "category",
          element: (
            <Suspense fallback={<Loading />}>
              <Categories />
            </Suspense>
          ),
        },
        {
          path: "aboutus",
          element: (
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          ),
        },

        {
          path: "allproducts",
          element: (
            <Suspense fallback={<Loading />}>
              <AllProducts />
            </Suspense>
          ),
        },

        {
          path: "orders",
          element: (
            <Suspense fallback={<Loading />}>
              <Orders />
            </Suspense>
          ),
        },
        {
          path: "category/products/:prefix",
          element: (
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "cartItem",
          element: (
            <Suspense fallback={<Loading />}>
              <CartItems />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              <PageNotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
