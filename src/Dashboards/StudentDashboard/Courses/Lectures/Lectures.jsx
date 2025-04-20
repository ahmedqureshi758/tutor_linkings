import React, { useState } from "react";

const Lectures = () => {
  const lectures = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description:
        "Learn the basics of web development including HTML, CSS, and JavaScript.",
      category: "web-dev",
    },
    {
      id: 2,
      title: "Mastering Data Science",
      description:
        "Dive deep into the world of data science with hands-on exercises and real-life examples.",
      category: "data-science",
    },
    {
      id: 3,
      title: "UI/UX Design for Beginners",
      description:
        "A beginner's guide to designing intuitive and beautiful user interfaces.",
      category: "ui-ux",
    },
    {
      id: 4,
      title: "Cybersecurity for Everyone",
      description:
        "Understand the fundamentals of cybersecurity and how to protect your digital life.",
      category: "cybersecurity",
    },
    {
      id: 5,
      title: "Cloud Computing Explained",
      description:
        "Master cloud platforms like AWS, Google Cloud, and Microsoft Azure.",
      category: "cloud-computing",
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description:
        "An introduction to AI technologies and how to build intelligent systems.",
      category: "ai-ml",
    },
    {
      id: 7,
      title: "Advanced JavaScript Concepts",
      description:
        "Deep dive into JavaScript with advanced concepts like closures, promises, and async/await.",
      category: "web-dev",
    },
    {
      id: 8,
      title: "Data Visualization with Python",
      description:
        "Learn how to create impactful data visualizations using Python libraries like Matplotlib and Seaborn.",
      category: "data-science",
    },
    {
      id: 9,
      title: "Responsive Web Design",
      description:
        "Master the techniques of building responsive websites using HTML, CSS, and modern frameworks.",
      category: "web-dev",
    },
    {
      id: 10,
      title: "Introduction to Blockchain",
      description:
        "Understand the fundamental concepts of blockchain technology and how it works.",
      category: "cybersecurity",
    },
    {
      id: 11,
      title: "UI/UX Design with Figma",
      description:
        "Learn UI/UX design using Figma, a powerful design tool for creating web and mobile interfaces.",
      category: "ui-ux",
    },
    {
      id: 12,
      title: "Cloud Security Best Practices",
      description:
        "Learn how to secure cloud-based systems and data, focusing on best practices and tools.",
      category: "cybersecurity",
    },
    {
      id: 13,
      title: "Introduction to Cloud Platforms",
      description:
        "An overview of leading cloud platforms including AWS, Google Cloud, and Microsoft Azure.",
      category: "cloud-computing",
    },
    {
      id: 14,
      title: "Python for Data Science",
      description:
        "A beginner's guide to using Python for data analysis and machine learning tasks.",
      category: "data-science",
    },
    {
      id: 15,
      title: "Digital Marketing Strategies",
      description:
        "Learn the core principles and strategies behind successful digital marketing campaigns.",
      category: "digital-marketing",
    },
    {
      id: 16,
      title: "Building Scalable Web Apps",
      description:
        "Learn how to design and build scalable web applications with modern frameworks and tools.",
      category: "web-dev",
    },
    {
      id: 17,
      title: "Machine Learning Algorithms",
      description:
        "Explore popular machine learning algorithms and their implementation using Python.",
      category: "ai-ml",
    },
    {
      id: 18,
      title: "Introduction to DevOps",
      description:
        "Get familiar with DevOps principles and practices, including CI/CD pipelines and automation tools.",
      category: "cloud-computing",
    },
    {
      id: 19,
      title: "Advanced UI/UX Prototyping",
      description:
        "Learn advanced prototyping techniques in UI/UX design to create high-fidelity prototypes.",
      category: "ui-ux",
    },
    {
      id: 20,
      title: "Introduction to Data Structures",
      description:
        "Learn the basics of data structures such as arrays, linked lists, stacks, and queues.",
      category: "data-science",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredLectures, setFilteredLectures] = useState(lectures);
  const [currentPage, setCurrentPage] = useState(1);
  const lecturesPerPage = 5;

  const handleSearch = () => {
    const filtered = lectures.filter((lecture) => {
      return (
        (category === "" || lecture.category === category) &&
        (lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lecture.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredLectures(filtered);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategory("");
    setFilteredLectures(lectures);
    setCurrentPage(1);
  };

  // Pagination Logic
  const indexOfLastLecture = currentPage * lecturesPerPage;
  const indexOfFirstLecture = indexOfLastLecture - lecturesPerPage;
  const currentLectures = filteredLectures.slice(
    indexOfFirstLecture,
    indexOfLastLecture
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredLectures.length / lecturesPerPage);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Available Lectures
      </h2>
      <p className="text-lg mb-8 text-center text-gray-600">
        Explore a wide range of lectures that cater to your learning needs.
      </p>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white shadow-lg rounded-xl p-6 mb-6 md:mb-0 mr-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Search Lectures</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Categories</label>
              <select
                className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="web-dev">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-computing">Cloud Computing</option>
                <option value="ai-ml">AI & Machine Learning</option>
              </select>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                onClick={handleSearch}
              >
                Apply Filters
              </button>
              <button
                className="w-full bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Lectures Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentLectures.length === 0 ? (
            <div className="col-span-full text-center text-xl text-gray-600">
              No lectures found.
            </div>
          ) : (
            currentLectures.map((lecture) => (
              <div
                key={lecture.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {lecture.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{lecture.description}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                    Join Lecture
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l-lg hover:bg-gray-400"
          onClick={() =>
            paginate(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-md mx-1 hover:bg-gray-300`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r-lg hover:bg-gray-400"
          onClick={() =>
            paginate(currentPage < totalPages ? currentPage + 1 : currentPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lectures;
