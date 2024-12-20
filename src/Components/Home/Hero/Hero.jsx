import React from "react";
import heroImg from "../../../Assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../Utility/Animation";

function Hero() {
  return (
    <div className="container relative grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Brand Info */}
      <div className="flex flex-col justify-center text-center py-14 md:pr-16 xl:pr-40 md:py-0">
        <div className="text-center md:text-left space-y-6">
          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="text-orange-600 uppercase font-semibold"
          >
            100% Satisfaction Guarantee
          </motion.p>
          <motion.h1
            variants={SlideRight(0.5)}
            initial="hidden"
            animate="visible"
            className="text-3xl xl:text-6xl  !leading-tight font-semibold"
          >
            Find Your Perfect <span className="text-primary">Tutor</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-gray-600"
          >
            We help you find perfect tutor for 1-on-1 lessons. It is completely
            free and private.
          </motion.p>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row lg:justify-start gap-4 md:gap-8 items-center mt-6 md:mt-8">
            <motion.button
              variants={SlideRight(0.7)}
              initial="hidden"
              animate="visible"
              className="bg-primary text-black  border-black rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base"
            >
              Get Started
            </motion.button>
            <motion.button
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="flex gap-2 items-center font-semibold text-sm md:text-base"
            >
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/15 flex items-center justify-center">
                <FaPlay className="text-secondary" />
              </span>
              See how it works
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="w-[350px] md:w-[550px] xl:w-[700px]"
          src={heroImg}
          alt="Tutor platform hero illustration"
        />
      </div>
    </div>
  );
}

export default Hero;
