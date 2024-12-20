import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import {GiPriceTag} from 'react-icons/gi'
import { motion } from "framer-motion";
import { SlideLeft } from "../../Utility/Animation";

function WhyChooseUs() {
  const WhyChooseData = [
    {
      id: 1,
      title: "One-on-one Teaching",
      description:
        "All of our special education experts have a degree in special education.",
      icon: <GrYoga />,
      link: "/",
      bgColor: "#0063ff",
      duration: 0.3,
    },
    {
      id: 2,
      title: "24/7 Tutor Availability",
      description:
        "Our tutors are always available to respond as quick as possible for you",
      icon: <FaDumbbell />,
      link: "/",
      bgColor: "#73bc00",
      duration: 0.6,
    },
    {
      id: 3,
      title: "Interactive Whiteboard",
      description:
        "Our digital whiteboard equipped with audio and video chat fetures.",
      icon: <GiGymBag />,
      link: "/",
      bgColor: "#fa6400",
      duration: 0.9,
    },
    {
      id: 4,
      title: "Affordable Prices",
      description: "Choose an expert tutor based on your budget and per hour.",
      icon: <GiPriceTag />,
      link: "/",
      bgColor: "#fe6baa",
      duration: 0.12,
    },
  ];

  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* Header section */}
        <div className="p-6 space-y-4 text-center mx-auto max-w-[500px] mb-5">
          <h1 className="text-orange-600 uppercase font-semibold">
            Why Choose Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Benefits of online tutoring services with us
          </p>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial = "hidden"
                whileInView={'visible'}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* Icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="text-2xl w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  {item.icon}
                </div>

                {/* Title and description */}
                <p className="text-sm md:text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
