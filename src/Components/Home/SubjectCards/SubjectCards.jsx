import React from "react";
import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa6";

const SubjectList = [
  {
    id: 1,
    name: "Engineering",
    icon: <FaBook />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Science",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaBook />,
    color: "#922aee",
    delay: 0.6,
  },
  {
    id: 4,
    name: "English",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Math",
    icon: <FaBook />,
    color: "#075267",
    delay: 1,
  },
  {
    id: 6,
    name: "History",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 1.2,
  },
  {
    id: 7,
    name: "Geography",
    icon: <FaBook />,
    color: "#b93838",
    delay: 1.4,
  },
  {
    id: 8,
    name: "Economics",
    icon: <FaBook />,
    color: "#464646",
    delay: 1.6,
  },
];

function SubjectCard() {
  return (
    <div className="container py-14 md:py-24 flex flex-col">
      {/* header section  */}
      <div className="p-6 space-y-4 mx-auto mb-5 ">
        <h1 className="text-orange-600 uppercase text-center max-w-[600px] font-semibold">
          Our tutor subjects
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Find Online Tutor in Any Subject
        </p>
      </div>
      {/* card section  */}
      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        {SubjectList.map((items) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                delay: items.delay,
                stiffness: 200,
              }}
              className="border rounded-lg border-secondary/10
                         p-6 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: items.color,
                  backgroundColor: items.color + 20,
                }}
              >
                {items.icon}
              </div>
              <p className="md:text-sm lg:text-lg">{items.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SubjectCard;
