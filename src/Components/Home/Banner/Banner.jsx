// Banner.jsx
import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../Utility/Animation";
import img1 from "../../../Assets/banner1.jpeg";
import img2 from "../../../Assets/banner2.jpeg";

const banners = [
  {
    Image: img1,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personalized Professional Online Tutor on Your Schedule",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
    link: "#",
    reverse: false,
  },
  {
    Image: img2,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Talented and Qualified Tutors to Serve You for Help",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used.",
    link: "#",
    reverse: true,
  },
];

function Banner() {
  return (
    <div>
      {banners.map((banner, index) => (
        <div key={index} className="bg-[#f9f9f9] pb-14">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
              {/* Image Section */}
              <div
                className={`flex justify-start items-center 
                  ${banner.reverse && "md:order-last md:justify-end"}
                `}
              >
                <motion.img
                  variants={SlideUp(0.5)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  src={banner.Image}
                  className="w-[400px] h-full object-cover"
                  alt=""
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="text-orange-600 uppercase font-semibold"
                >
                  {banner.tag}
                </motion.p>
                <motion.p
                  variants={SlideUp(0.7)}
                  initial="hidden"
                  animate="visible"
                  className="text-xl md:text-2xl font-semibold"
                >
                  {banner.title}
                </motion.p>
                <motion.p
                  variants={SlideUp(0.9)}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-600 text-sm"
                >
                  {banner.subtitle}
                </motion.p>
                <div>
                  <motion.button
                    variants={SlideUp(1.1)}
                    initial="hidden"
                    animate="visible"
                    className="bg-primary text-black rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold text-sm md:text-base"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
