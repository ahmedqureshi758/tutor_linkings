import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/about_5_1.png";
import image2 from "../../../Assets/about_5_2.png";
import Book from "../../../Assets/about-grid-icon2-2.svg";
import image3 from "../../../Assets/about-grid-icon2-1.svg";
import image4 from "../../../Assets/about-grid-icon2-2.svg";
import image5 from "../../../Assets/about_1_4.png";
import { SlideLeft, SlideUp, SlideRight, SlideDown } from "../../Utility/Animation";

const TeacherTips = () => {
  return (
    <div className="bg-[#f3f7fb] grid grid-cols-1 md:grid-cols-2 px-4 py-8 md:py-24 md:px-12 gap-8">
      {/* Left Container */}
      <div className="flex justify-between gap-5">
        <div className="flex gap-5">
          <div className="w-[60%]">
            <motion.img
              variants={SlideUp(0.5)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              src={image1}
              alt="Teacher Tip 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-[40%] flex flex-col gap-5">
            <div className="bg-secondary text-white px-4 py-16 rounded-lg">
              <h3 className="text-4xl font-bold text-center pb-2">5k+</h3>
              <p className="text-white text-center">Teachers Empowered</p>
            </div>
            <div className="hidden md:block">
              <motion.img
                variants={SlideDown(0.5)}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                src={image2}
                alt="Teacher Tip 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex gap-4">
          <img src={Book} alt="Section Icon" className="w-8 h-8 object-cover" />
          <h2 className="text-lg font-medium text-secondary">Teacher's Resources</h2>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-xl md:text-4xl mb-4 text-primary font-bold">
            Tips for Effective Teaching
          </h1>
          <p className="text-sm md:text-md">
            Use flexible tools, stay updated, and create engaging content to enhance your teaching on Tutor Links.
          </p>
        </div>

        <div className="flex gap-8 mb-8">
          <div className="flex w-1/2 items-center">
            <img src={image3} alt="Tip 1" className="w-1/6 h-auto mr-4" />
            <div className="flex flex-col">
              <h2 className="text-md font-medium mb-2 text-secondary">Engage Students</h2>
              <p className="text-md">Create interactive, fun lessons.</p>
            </div>
          </div>

          <div className="flex w-1/2 items-center">
            <img src={image4} alt="Tip 2" className="w-1/6 h-auto mr-4" />
            <div className="flex flex-col">
              <h2 className="text-md font-medium mb-2 text-secondary">Build Community</h2>
              <p className="text-md">Foster interaction and collaboration.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 mb-8">
          <div className="w-2/5">
            <motion.img
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              src={image5}
              alt="Teacher Image"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-3/5 flex flex-col justify-center">
            <ul>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white rounded-full bg-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Access top teaching resources</span>
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white rounded-full bg-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Stay updated with teaching trends</span>
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white rounded-full bg-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Connect with other educators</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.button
          variants={SlideLeft(0.7)}
          initial="hidden"
          animate="visible"
          className="bg-primary text-white border-black rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default TeacherTips;
