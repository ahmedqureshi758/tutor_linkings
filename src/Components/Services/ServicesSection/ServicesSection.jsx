import React from "react";
import { FaUserPlus, FaSearch, FaCalendarCheck, FaBookOpen } from "react-icons/fa";

const steps = [
  {
    step: "1",
    title: "Sign Up",
    description: "Register as a student or tutor easily.",
    icon: <FaUserPlus />,
  },
  {
    step: "2",
    title: "Find a Tutor",
    description: "Search for tutors by subject or rating.",
    icon: <FaSearch />,
  },
  {
    step: "3",
    title: "Book a Session",
    description: "Schedule a session that suits your time.",
    icon: <FaCalendarCheck />,
  },
  {
    step: "4",
    title: "Start Learning",
    description: "Begin your journey of improvement.",
    icon: <FaBookOpen />,
  },
];

function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-12">
          How It <span className="text-[#0063FF]">Works</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center space-y-12">
          {/* Continuous Vertical Line */}
          <div className="absolute w-1 h-full bg-[#0063FF] left-1/2 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row w-full items-center justify-center"
            >
              {/* Content Box with Icon */}
              <div
                className={`relative bg-white shadow-lg rounded-lg p-6 flex items-center gap-4 w-full md:w-[40%] z-10 ${
                  index % 2 === 0
                    ? "flex-row-reverse text-right mr-auto"
                    : "text-left ml-auto"
                }`}
              >
                {/* Step Icon (inside the box) */}
                <div className="w-12 h-12 bg-[#0063FF] text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div>
                  <div className="text-primary text-sm font-bold mb-1">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>

              {/* Connecting Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#0063FF] rounded-full z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
