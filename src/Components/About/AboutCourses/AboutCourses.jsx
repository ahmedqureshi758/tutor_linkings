import React from "react";
import firstImage from "../../../Assets/cta-bg_3_1.png";
import secondImage from "../../../Assets/cta-bg_3_2.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../Utility/Animation";
import { useNavigate } from "react-router-dom";

function AboutCourses() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      variants={SlideLeft(0.1)}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col md:flex-row gap-8 md:px-12 px-4 py-8 md:py-24"
    >
      {/* Card 1 */}
      <div
        className="cta-card p-8 md:p-16 rounded-2xl bg-no-repeat bg-cover w-full md:w-1/2"
        style={{ backgroundImage: `url(${firstImage})` }}
      >
        <div>
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-lg font-medium text-white">Popular Courses</h2>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Get The Best Courses & <br />
              Upgrade Your Skills
            </h2>
          </div>
        </div>

        <button
          onClick={() => handleNavigation("/contact")}
          className="text-white border-2 border-white py-2 px-3 rounded-md hover:bg-white hover:text-black transition-all"
        >
          Join With Us
          <i className="fas fa-arrow-right ms-2 text-white"></i>
        </button>
      </div>

      {/* Card 2 */}
      <div
        className="cta-card p-8 md:p-16 rounded-2xl bg-no-repeat bg-cover w-full md:w-1/2"
        style={{ backgroundImage: `url(${secondImage})` }}
      >
        <div>
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-lg font-medium text-white">Popular Courses</h2>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Get The Best Courses & <br />
              Upgrade Your Skills
            </h2>
          </div>
        </div>

        <button
          onClick={() => handleNavigation("/contact")}
          className="text-white border-2 border-white py-2 px-3 rounded-md hover:bg-white hover:text-black transition-all"
        >
          Join With Us
          <i className="fas fa-arrow-right ms-2 text-white"></i>
        </button>
      </div>
    </motion.div>
  );
}

export default AboutCourses;
