import React from "react";
import { motion } from "framer-motion"; // Add the import for motion
import Book from "../../../Assets/about-grid-icon2-2.svg";
import svg1 from "../../../Assets/service-icon-3-1.svg";
import svg2 from "../../../Assets/service-icon-3-2.svg";
import svg3 from "../../../Assets/service-icon-3-3.svg";
import { SlideLeft } from "../../Utility/Animation"; // Ensure this is correctly defined

function CardsAbout() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-12 md:py-24 text-center">
      {/* Section with Image and Title */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <img src={Book} alt="Section Image" className="w-8 h-8 object-cover" />
        <h2 className="text-lg font-medium text-secondary">What We Do</h2>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl text-primary  md:text-4xl font-bold mb-12">
        Online Education Tailored to You
      </h1>

      {/* Three Cards Section */}
      <motion.div
        variants={SlideLeft(0.1)} // Ensure that SlideLeft is correctly defined
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center text-center border border-secondary rounded-lg p-[40px] shadow-md transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300">
            {/* Image */}
            <img
              src={svg1}
              alt="Card 1"
              className="w-full h-full object-cover hover:bg-white"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300">
          <br /> Learn From Anywhere
          </h3>
          <p className="text-sm md:text-lg text-center text-gray-600 transition-all duration-300">
            Competently unleash competitive initiatives for alternative
            interfaces. Enthusiastically supply resource leveling platforms.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center text-center border border-secondary rounded-lg p-[30px] shadow-md transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center  mb-4 transition-all duration-300">
            {/* Image */}
            <img
              src={svg2}
              alt="Card 2"
              className="w-full h-full object-cover "
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300">
            Expert Instructor
          </h3>
          <p className="text-sm md:text-lg text-gray-600 transition-all duration-300">
            Competently unleash competitive initiatives for alternative
            interfaces. Enthusiastically supply resource leveling platforms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center text-center border border-secondary rounded-lg p-[30px] shadow-md transition-all duration-300">
          <div className="w-16 h-16 flex items-center justify-center  mb-4 transition-all duration-300">
            {/* Image */}
            <img
              src={svg3}
              alt="Card 3"
              className="w-full h-full object-cover "
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300">
            24/7 Live Support
          </h3>
          <p className="text-sm md:text-lg text-gray-600 transition-all duration-300">
            Competently unleash competitive initiatives for alternative
            interfaces. Enthusiastically supply resource leveling platforms.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default CardsAbout;
