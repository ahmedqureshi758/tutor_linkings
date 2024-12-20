import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center items-center bg-primary text-sm p-1 font-semibold relative"
      >
        <div className="lg:block">
          Are you a university or school student for an online tutoring partnership?
          <button
            onClick={handleNavigate}
            className="text-secondary ml-2 bg-transparent border-none cursor-pointer hover:underline"
          >
            Talk to us
          </button>
          <div
            className="absolute top-1/2 right-4 cursor-pointer -translate-y-1/2 text-xl font-bold text-gray-800"
            onClick={() => setIsOpen(false)}
            role="button"
            aria-label="Close Banner"
          >
            ×
          </div>
        </div>
      </motion.div>
    )
  );
}

export default NavBanner;
