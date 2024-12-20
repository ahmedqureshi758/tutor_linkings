import { color } from "framer-motion";
import React from "react";
import { FaUsers, FaChalkboardTeacher, FaClock, FaGraduationCap } from "react-icons/fa";

const approachItems = [
  {
    step: "1",
    title: "Collaborative Learning",
    description:
      "Our platform encourages collaborative learning, where both students and tutors actively engage in the learning process.",
    icon: <FaUsers />,
  },
  {
    step: "2",
    title: "Expert Tutors",
    description:
      "We carefully vet our tutors to ensure they have the expertise and experience to guide students through their learning journey.",
    icon: <FaChalkboardTeacher />,
  },
  {
    step: "3",
    title: "Flexible Scheduling",
    description:
      "Our flexible scheduling system allows you to book sessions that fit perfectly into your busy lifestyle, anytime, anywhere.",
    icon: <FaClock />,
  },
  {
    step: "4",
    title: "Quality Education",
    description:
      "We are committed to providing high-quality education through interactive learning methods and personalized instruction.",
    icon: <FaGraduationCap />,
  },
];

function ApproachServices() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
          Our Approach to <span className="text-[#0063FF]">Learning</span>
    
        </h2>

        {/* Approach Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Circle Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-500 text-white text-3xl rounded-full mb-6 group-hover:bg-blue-600 transition">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 group-hover:text-gray-700 transition">
                {item.description}
              </p>
              {/* Step Number Badge */}
              <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-bl-2xl">
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachServices;
