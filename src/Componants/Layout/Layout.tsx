import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`fixed top-0 left-0 right-0 z-[1000000] transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        <NavBar />
      </div>
      <div className="flex-grow pb-[155px] pt-[144px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
