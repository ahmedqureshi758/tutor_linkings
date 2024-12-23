import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "../MockData/NavMenu";
import { useNavigate, Link } from "react-router-dom";

function ResponsiveMenu({ isOpen }) {
  const navigate = useNavigate();

  const handleGoToSignIn = () => {
    navigate("/signin"); // Redirects to SignInPage when the button is clicked
  };

  const handleGoToSignUp = () => {
    navigate("/signup"); // Redirects to SignUpPage when the button is clicked
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
          >
            <div className="font-semibold text-lg bg-primary py-10 m-6 rounded-3xl">
              <ul className="flex flex-col items-center justify-center gap-5">
                {NavMenu.map((nav) => {
                  return (
                    <li key={nav.id}>
                      {/* Replace <a> with <Link> */}
                      <Link
                        className="inline-block font-semibold uppercase text-white text-lg xl:text-base py-1 px-2 xl:px-3"
                        to={nav.url}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  );
                })}
                <div className="flex flex-col justify-center items-center gap-3">
                  <button
                    className="font-semibold text-white"
                    onClick={handleGoToSignIn}
                  >
                    Sign In
                  </button>
                  <button
                    className="font-semibold text-white py-2 px-6 rounded-full"
                    onClick={handleGoToSignUp}
                  >
                    Sign Up
                  </button>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ResponsiveMenu;


