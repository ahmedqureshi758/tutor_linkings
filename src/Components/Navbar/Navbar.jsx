import React, { useState, useEffect } from "react";
import { NavMenu } from "../MockData/NavMenu";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // to detect route change

  const handleGoToSignIn = () => {
    navigate("/signin"); // Redirects to SignInPage when the button is clicked
  };

  const handleGoToSignUp = () => {
    navigate("/signup"); // Redirects to SignUpPage when the button is clicked
  };

  // Close the menu on route change
  useEffect(() => {
    setIsOpen(false); // Close the menu when the location changes
  }, [location]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container flex py-6 items-center justify-between gap-2">
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <MdComputer className="text-3xl  text-secondary" />
            {/* Use Link instead of <a> */}
            <Link to="/home">Tutor-Links</Link>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavMenu.map((nav) => {
                return (
                  <li key={nav.id}>
                    <Link
                      className="inline-block font-semibold text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300"
                      to={nav.url}
                    >
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold" onClick={handleGoToSignIn}>
              Sign In
            </button>
            <button
              className="font-semibold bg-secondary text-white py-2 px-6 rounded-full"
              onClick={handleGoToSignUp}
            >
              Sign Up
            </button>
          </div>
          {/* Hamburger Section for Mobile */}
          <div
            className="md:hidden lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl text-secondary font-bold" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar Section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;

