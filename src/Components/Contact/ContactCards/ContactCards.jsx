import React from "react";
import { GrPhone } from "react-icons/gr";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../Utility/Animation";

// Card Component for rendering individual contact cards
const ContactCard = ({ title, description, icon, bgColor, delay }) => {
  return (
    <motion.div
      variants={SlideLeft(delay)}
      initial="hidden"
      whileInView="visible"
      className="space-y-4 p-6 rounded-xl shadow-lg"
    >
      {/* Icon section */}
      <div
        style={{ backgroundColor: bgColor }}
        className="text-2xl w-10 h-10 rounded-lg flex justify-center items-center text-white"
      >
        {icon}
      </div>

      {/* Title and description */}
      <p className="text-sm md:text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};


function ContactCards() {
  const contactCards = [
    {
      id: 1,
      title: "Our Phone",
      description: "+92 300 1234567",
      icon: <GrPhone />,
      bgColor: "#0063ff",
      delay: 0.3,
    },
    {
      id: 2,
      title: "Our Email",
      description: "linkingtutorial@gmail.com",
      icon: <FaEnvelope />,
      bgColor: "#73bc00",
      delay: 0.6,
    },
    {
      id: 3,
      title: "Our Address",
      description: "Islamabad, Pakistan",
      icon: <FaMapMarkerAlt />,
      bgColor: "#fa6400",
      delay: 0.9,
    },
  ];

  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-14">
        {/* Header Section */}
        <div className="p-6 space-y-4 text-center mx-auto max-w-[500px] mb-5">
          <h1 className="text-orange-600 uppercase font-semibold">Reach Out to Us</h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Contact us via phone, email, or visit our office.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <ContactCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              bgColor={card.bgColor}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
