import React from "react";

const resources = [
  {
    title: "Study Guides",
    description: "Access in-depth study guides for various subjects.",
    icon: "book-open",
    link: "#", // Add the link to your study guides
  },
  {
    title: "Recommended Apps",
    description: "Explore the best apps to enhance your learning.",
    icon: "tablet-alt",
    link: "#", // Link to app suggestions
  },
  {
    title: "Online Tools",
    description: "Use these online tools to practice and improve skills.",
    icon: "desktop",
    link: "#", // Link to online tools
  },
  {
    title: "Video Tutorials",
    description: "Watch video tutorials to learn complex topics easily.",
    icon: "video",
    link: "#", // Link to video tutorials
  },
  {
    title: "Interactive Quizzes",
    description: "Test your knowledge with fun quizzes.",
    icon: "question-circle",
    link: "#", // Link to quizzes
  },
];

const LearningResources = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center text-gray-900">
        <h2 className="text-4xl font-bold mb-12 tracking-tight">
          Unlock Your Learning Potential with These Resources
        </h2>

        {/* Main resources container */}
        <div className="flex flex-wrap justify-center space-x-10 space-y-10">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-6 bg-white p-8 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
            >
              {/* Icon and title */}
              <div className="flex items-center justify-center w-20 h-20 bg-[#0063ff] text-white rounded-full mb-6">
                <i className={`text-4xl fas fa-${resource.icon}`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#0063ff]">{resource.title}</h3>
              <p className="text-gray-500">{resource.description}</p>

              {/* Button */}
              <a
                href={resource.link}
                className="px-8 py-3 text-white bg-[#0063ff] rounded-full text-lg hover:bg-[#004bb5] transition-colors duration-300 ease-in-out"
              >
                Access Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
