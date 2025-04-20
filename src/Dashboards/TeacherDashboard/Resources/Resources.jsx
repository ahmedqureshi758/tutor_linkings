import React, { useState, useEffect } from "react";

const allResources = [
  { id: 1, title: "Understanding React Hooks", category: "Articles", description: "Learn the basics of React Hooks and how to use them effectively.", content: "In-depth guide to understanding how React hooks work, including useState, useEffect, and custom hooks." },
  { id: 2, title: "JavaScript ES6 Guide", category: "Articles", description: "A complete guide to ES6 features and best practices.", content: "Explore new features introduced in ES6, including let, const, arrow functions, promises, and template literals." },
  { id: 3, title: "CSS Grid vs Flexbox", category: "Articles", description: "Which one should you use? Learn the differences and best use cases.", content: "Learn how CSS Grid and Flexbox are used for building responsive layouts and when to choose one over the other." },

  { id: 4, title: "React State Management", category: "Videos", videoUrl: "https://www.youtube.com/embed/9U3IhLAnSxM", content: "A video guide on state management in React, including useState, Context API, and Redux." },
  { id: 5, title: "Async JavaScript Explained", category: "Videos", videoUrl: "https://www.youtube.com/embed/ZYb_ZU8LNxs", content: "Understand async/await and promises with this comprehensive video tutorial." },

  { id: 6, title: "Free HTML Templates", category: "Downloads", description: "Download free responsive HTML templates for your projects.", content: "Explore a wide variety of free, responsive HTML templates for both personal and commercial use." },
  { id: 7, title: "CSS Animations Pack", category: "Downloads", description: "A collection of CSS animations to enhance your UI.", content: "A pack of customizable CSS animations that you can use to make your websites more dynamic." }
];

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [downloads, setDownloads] = useState([]);
  const [downloadNotification, setDownloadNotification] = useState(null);

  // Load saved downloads from localStorage on component mount
  useEffect(() => {
    const savedDownloads = JSON.parse(localStorage.getItem("downloads")) || [];
    setDownloads(savedDownloads);
  }, []);

  const filteredResources = selectedCategory === "All"
    ? allResources
    : allResources.filter(resource => resource.category === selectedCategory);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const handleDownload = (resource) => {
    if (!downloads.some((download) => download.id === resource.id)) {
      const newDownloads = [...downloads, resource];
      setDownloads(newDownloads);
      localStorage.setItem("downloads", JSON.stringify(newDownloads)); // Save to localStorage

      setDownloadNotification(`"${resource.title}" has been downloaded!`);

      // Set timeout to hide the notification
      setTimeout(() => {
        setDownloadNotification(null);
      }, 5000); // Adjust this time (5000ms = 5 seconds)
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#0063ff] mb-6">Learning Resources</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["All", "Articles", "Videos", "Downloads"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md shadow-md transition ${
              selectedCategory === category
                ? "bg-[#0063ff] text-white"
                : "bg-[#ffcf3a] text-black hover:bg-yellow-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
              {/* Render videos if category is "Videos" */}
              {resource.category === "Videos" ? (
                <div className="relative">
                  <iframe 
                    src={resource.videoUrl} 
                    title={resource.title}
                    allowFullScreen 
                    className="w-full h-48 rounded-lg"
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-[#0063ff]">{resource.title}</h2>
                  <p className="text-gray-600 mt-2">{resource.description}</p>
                  <button
                    onClick={() => openModal(resource.content)}
                    className="text-[#ffcf3a] font-semibold mt-3 inline-block hover:text-yellow-500 bg-transparent border-none cursor-pointer"
                  >
                    Read More →
                  </button>
                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(resource)}
                    className="bg-[#0063ff] text-white px-4 py-2 rounded-md mt-3 w-full"
                  >
                    Download
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No resources available in this category.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-xl font-semibold text-[#0063ff] mb-4">Additional Information</h2>
            <p className="text-gray-600">{modalContent}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#ffcf3a] text-black px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Downloads Section */}
      {selectedCategory === "Downloads" && downloads.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-[#0063ff]">Downloaded Resources</h2>
          <ul className="mt-4">
            {downloads.map((download, index) => (
              <li key={index} className="bg-white p-4 mb-4 shadow-md rounded-lg">
                <h3 className="font-semibold text-[#0063ff]">{download.title}</h3>
                <p>{download.description}</p>
                <button
                  onClick={() => openModal(download.content)}
                  className="text-[#ffcf3a] font-semibold mt-3 inline-block hover:text-yellow-500 bg-transparent border-none cursor-pointer"
                >
                  Read More →
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Download Notification */}
      {downloadNotification && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0063ff] text-white px-6 py-3 rounded-lg shadow-md text-center z-50"
          style={{ transition: "opacity 0.5s ease" }}
        >
          <p>{downloadNotification}</p>
        </div>
      )}
    </div>
  );
}

export default Resources;
