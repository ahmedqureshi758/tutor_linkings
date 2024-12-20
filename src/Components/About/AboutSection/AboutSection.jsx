import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../Assets/about_5_1.png";
import image2 from "../../../Assets/about_5_2.png";
import Book from "../../../Assets/about-grid-icon2-2.svg";
import image3 from "../../../Assets/about-grid-icon2-1.svg";
import image4 from "../../../Assets/about-grid-icon2-2.svg";
import image5 from "../../../Assets/about_1_4.png";
import { SlideLeft } from "../../Utility/Animation";
import { SlideUp } from "../../Utility/Animation";
import { SlideRight } from "../../Utility/Animation";
import { SlideDown } from "../../Utility/Animation";
// import Slider from "react-slick";

function AboutSection() {
  return (
    <div className="bg-[#f3f7fb] grid grid-cols-1 md:grid-cols-2 px-4 py-8 md:py-24 md:px-12 gap-8">
      {/* left container  */}
      <div className="flex justify-between gap-5">
        {/* First Container */}
        <div className="flex  gap-5">
          {/* Container One */}
          <div className="w-[60%]">
            <motion.img
              variants={SlideUp(0.5)}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              src={image1}
              alt="First"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Container Two */}
          <div className="w-[40%] flex flex-col gap-5">
            <div className=" bg-secondary text-white px-4 py-16 rounded-lg">
              <h3 className="text-4xl font-bold text-center pb-2">10k+</h3>
              <p className="text-white text-center">
                Students Active Our Courses
              </p>
            </div>
            <div className="hidden md:block ">
              <motion.img
                variants={SlideDown(0.5)}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                src={image2}
                alt="Second"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* right container  */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex gap-4">
          <img
            src={Book}
            alt="Section Image"
            className="w-8 h-8 object-cover"
          />
          <h2 className="text-lg font-medium text-secondary">
            About Our University
          </h2>
        </div>

        <div className="container mx-auto p-4">
          <h1 className="text-xl md:text-4xl mb-4 text-primary font-bold">
            Welcome to Tutor Links.
          </h1>
          <p className="text-sm md:text-md">
            Collaboratively simplify user friendly networks after principle
            centered coordinate effective methods of empowerment distributed
            niche markets pursue market positioning web-readiness after resource
            sucking applications.
          </p>
        </div>
        <div className="flex gap-8 mb-8">
          {/* <!-- First Image Box --> */}
          <div className="flex w-1/2 items-center">
            <img
              src={image3}
              alt="Image 1"
              className="w-1/6 h-auto object-cover mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-md font-medium mb-2 text-secondary">
                Undergraduate Education
              </h2>
              <p className="text-md">With flexible courses</p>
            </div>
          </div>

          {/* <!-- Second Image Box --> */}
          <div className="flex w-1/2 items-center">
            <img
              src={image4}
              alt="Image 2"
              className="w-1/6 h-auto object-cover mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-md font-medium mb-2 text-secondary">
                Postgraduate Education
              </h2>
              <p className="text-md">Study flexibly online</p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 mb-8">
          {/* <!-- Image on the Left (40% width) --> */}
          <div className="w-2/5 ">
            <motion.img
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              src={image5}
              alt="Image"
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* <!-- Icon List on the Right (60% width) --> */}
          <div className="w-3/5 flex flex-col justify-center">
            <ul>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white rounded-full bg-secondary mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Get access to 4,000+ of our top courses
                </span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-white rounded-full bg-secondary mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Popular topics to learn now</span>
              </li>
              <li className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  text-white rounded-full bg-secondary mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Find the right instructor for you
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <motion.button
            variants={SlideLeft(0.7)}
            initial="hidden"
            animate="visible"
            className="bg-primary text-white  border-black rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base"
          >
            Know About Us
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
