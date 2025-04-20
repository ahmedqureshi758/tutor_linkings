import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import engineeringImage  from "./engineering.jpeg";
import scienceImage from './Science.jpeg';
import ProgrammingImage from './Programming.jpeg';
import EnglishImage from './English.jpeg';
import mathImage from './Math.jpeg';
import historyImage from './History.jpeg';
import geographyImage from './Geography.jpeg';
import economicImage from './Economics.jpeg'


const SubjectList = [
  {
    id: 1,
    name: "Engineering",
    color: "#0063ff",
    delay: 0.2,
    details:
      "Engineering is a broad discipline that involves applying scientific principles to design and build structures, machines, and technology. It includes various fields such as mechanical, electrical, civil, and software engineering. This course provides an in-depth understanding of engineering fundamentals, practical applications, and innovative solutions to modern challenges.",
    tutor: "Dr. John Doe",
    duration: "12 Weeks",
    level: "Advanced",
    image: engineeringImage,
  },
  {
    id: 2,
    name: "Science",
    color: "#00c986",
    delay: 0.3,
    details:
      "Science explores the natural world through observation, experimentation, and analysis. This course covers major scientific disciplines, including physics, chemistry, biology, and environmental science. Students will develop critical thinking skills and gain practical knowledge applicable in research, medicine, and technology.",
    tutor: "Dr. Alice Smith",
    duration: "10 Weeks",
    level: "Intermediate",
    image: scienceImage,
  },
  {
    id: 3,
    name: "Programming",
    color: "#922aee",
    delay: 0.4,
    details:
      "Learn the fundamentals of coding with hands-on experience in Python, JavaScript, Java, and other programming languages. This course covers data structures, algorithms, and real-world applications, preparing students for careers in software development, artificial intelligence, and web technologies.",
    tutor: "Prof. Mark Wilson",
    duration: "8 Weeks",
    level: "Beginner",
    image: ProgrammingImage,
  },
  {
    id: 4,
    name: "English",
    color: "#ea7516",
    delay: 0.5,
    details:
      "This course enhances communication skills through in-depth studies of English grammar, literature, writing techniques, and public speaking. Ideal for students looking to improve their writing skills, comprehension, and overall command of the English language.",
    tutor: "Ms. Emily Johnson",
    duration: "6 Weeks",
    level: "Beginner",
    image: EnglishImage,
  },
  {
    id: 5,
    name: "Math",
    color: "#075267",
    delay: 0.6,
    details: "Includes algebra, calculus, geometry, and statistics.",
    tutor: "Dr. Alan Turing",
    duration: "10 Weeks",
    level: "Intermediate",
    image: mathImage,
  },
  {
    id: 6,
    name: "History",
    color: "#986d1d",
    delay: 0.7,
    details: "Covers world history, ancient civilizations, and modern events.",
    tutor: "Prof. Linda Carter",
    duration: "8 Weeks",
    level: "Beginner",
    image: historyImage,
  },
  {
    id: 7,
    name: "Geography",
    color: "#b93838",
    delay: 0.8,
    details: "Studies physical landscapes, maps, and environmental changes.",
    tutor: "Dr. Richard Evans",
    duration: "7 Weeks",
    level: "Intermediate",
    image: geographyImage,
  },
  {
    id: 8,
    name: "Economics",
    color: "#464646",
    delay: 0.9,
    details: "Teaches markets, finance, business strategies, and global economy.",
    tutor: "Dr. Susan Clarke",
    duration: "9 Weeks",
    level: "Advanced",
    image: economicImage,
  },
  // {
  //   id: 9,
  //   name: "Physics",
  //   color: "#008080",
  //   delay: 1.0,
  //   details: "Focuses on mechanics, electricity, thermodynamics, and optics.",
  //   tutor: "Dr. Albert Newton",
  //   duration: "11 Weeks",
  //   level: "Advanced",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 10,
  //   name: "Chemistry",
  //   color: "#ff5733",
  //   delay: 1.1,
  //   details: "Studies chemical reactions, organic chemistry, and lab techniques.",
  //   tutor: "Prof. Jane Foster",
  //   duration: "10 Weeks",
  //   level: "Intermediate",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 11,
  //   name: "Biology",
  //   color: "#228B22",
  //   delay: 1.2,
  //   details: "Explores genetics, human anatomy, microbiology, and ecosystems.",
  //   tutor: "Dr. Hannah Green",
  //   duration: "9 Weeks",
  //   level: "Beginner",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 12,
  //   name: "Psychology",
  //   color: "#8A2BE2",
  //   delay: 1.3,
  //   details: "Covers human behavior, cognition, and mental health studies.",
  //   tutor: "Dr. Robert Lee",
  //   duration: "8 Weeks",
  //   level: "Intermediate",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 13,
  //   name: "Business Studies",
  //   color: "#DAA520",
  //   delay: 1.4,
  //   details: "Includes management, entrepreneurship, and marketing principles.",
  //   tutor: "Prof. William Scott",
  //   duration: "12 Weeks",
  //   level: "Advanced",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 14,
  //   name: "Finance",
  //   color: "#2E8B57",
  //   delay: 1.5,
  //   details: "Focuses on accounting, investment, and financial planning.",
  //   tutor: "Dr. Emily Brown",
  //   duration: "10 Weeks",
  //   level: "Advanced",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 15,
  //   name: "Law",
  //   color: "#A52A2A",
  //   delay: 1.6,
  //   details: "Covers legal systems, contracts, and international law.",
  //   tutor: "Dr. Sarah White",
  //   duration: "11 Weeks",
  //   level: "Intermediate",
  //   image: "https://via.placeholder.com/250",
  // },
  // {
  //   id: 16,
  //   name: "Sociology",
  //   color: "#6A5ACD",
  //   delay: 1.7,
  //   details: "Studies human society, culture, and social interactions.",
  //   tutor: "Prof. James Reed",
  //   duration: "8 Weeks",
  //   level: "Beginner",
  //   image: "https://via.placeholder.com/250",
  // },
];


function SubjectCard() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="container py-14 md:py-24 flex flex-col items-center">
      {/* Header Section */}
      <div className="p-6 space-y-4 text-center mb-8">
        <h1 className="text-[#ff8c00] uppercase text-lg font-semibold tracking-wider">
          Our Tutor Subjects
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-900">
          Find an Online Tutor in Any Subject
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {SubjectList.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: item.delay, stiffness: 150 }}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-md 
                      flex flex-col items-center gap-4 transform hover:scale-105 transition-all 
                      hover:shadow-lg cursor-pointer"
          >
            <div
              className="w-12 h-12 rounded-lg flex justify-center items-center"
              style={{ color: item.color, backgroundColor: item.color + "20" }}
            >
              <FaBook />
            </div>
            <p className="text-lg font-medium text-gray-800">{item.name}</p>
            <button
              onClick={() => setSelectedSubject(item)}
              className="px-4 py-2 bg-[#0063ff] text-white rounded-md shadow-md hover:bg-[#004bbd] transition-all"
            >
              Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedSubject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md p-6"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSubject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <img
                  src={selectedSubject.image}
                  alt={selectedSubject.name}
                  className="w-60 h-60 object-cover rounded-md"
                />
              </div>

              {/* Right Column - Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedSubject.name}
                </h2>
                <p className="text-gray-700 mt-3 text-lg">
                  {selectedSubject.details}
                </p>
                <p className="text-gray-600 mt-4">
                  <strong>Instructor:</strong> {selectedSubject.tutor}
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Duration:</strong> {selectedSubject.duration}
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Level:</strong> {selectedSubject.level}
                </p>
              </div>
            </div>

            {/* Enroll Button */}
            {/* <button
              onClick={() => alert("Enrollment Successful!")}
              className="mt-6 w-full px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-md shadow-md hover:bg-primary transition-all"
            >
              Enroll Now
            </button> */}

                        {/* Enroll Button with Navigation */}
                        <button
              onClick={() => navigate("/signup?role=student")}
              className="mt-6 w-full px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-md shadow-md hover:bg-primary transition-all"
            >
              Enroll Now
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default SubjectCard;
