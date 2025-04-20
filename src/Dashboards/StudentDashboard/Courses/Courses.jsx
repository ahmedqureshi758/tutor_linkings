import React, { useState } from "react";
import Lectures from "./Lectures/Lectures";
import RequestLiveSession from "./RequestLiveSessions/RequestLiveSessions";
import ScheduledLiveSession from "./ScheduledLiveSessions/ScheduledLiveSessions";
import Community from "./Community/Community";
import Feedback from "./Feedback/Feedback";

const Overview = () => {
    const courses = [
        { id: 1, title: "Web Development Bootcamp", description: "Learn the basics of web development with hands-on projects." },
        { id: 2, title: "Data Science Fundamentals", description: "Master the foundations of data science with Python and ML." },
        { id: 3, title: "UI/UX Design Principles", description: "Design stunning and user-friendly interfaces." },
        { id: 4, title: "Cybersecurity Essentials", description: "Protect your digital assets with cybersecurity skills." },
        { id: 5, title: "Cloud Computing Basics", description: "Understand cloud platforms and their services." },
        { id: 6, title: "DevOps Practices", description: "Learn automation and CI/CD workflows." },
        { id: 7, title: "AI & Machine Learning", description: "Explore AI technologies and build intelligent systems." },
        { id: 8, title: "Digital Marketing", description: "Master online marketing strategies." },
        { id: 9, title: "Mobile App Development", description: "Create mobile apps for iOS and Android." },
    ];

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Courses Overview</h2>
            <p className="text-lg mb-8 text-center text-gray-600">
                Explore our diverse range of courses designed to help you excel.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

function Courses() {
    const [activeSubpage, setActiveSubpage] = useState("overview");

    const handleSubpageChange = (subpage) => {
        setActiveSubpage(subpage);
    };

    return (
        <div className="py-5">
            <div className="container mx-auto px-8">
                <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-500 text-white rounded-xl shadow-lg mb-12 p-6 text-center">
                    <h1 className="text-5xl font-bold">All Courses </h1>
                    <p className="mt-2 text-lg font-light">Explore all your learning materials and resources here.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <button
                        onClick={() => handleSubpageChange("overview")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "overview"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleSubpageChange("lectures")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "lectures"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Lectures
                    </button>
                    <button
                        onClick={() => handleSubpageChange("request-live")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "request-live"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Request Live Session
                    </button>
                    <button
                        onClick={() => handleSubpageChange("scheduled-live")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "scheduled-live"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Scheduled Live Sessions
                    </button>
                    <button
                        onClick={() => handleSubpageChange("community")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "community"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Community
                    </button>
                    <button
                        onClick={() => handleSubpageChange("feedback")}
                        className={`text-lg font-medium px-6 py-3 rounded-full transition ${
                            activeSubpage === "feedback"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Feedback
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-10">
                    {activeSubpage === "overview" && <Overview />}
                    {activeSubpage === "lectures" && <Lectures />}
                    {activeSubpage === "request-live" && <RequestLiveSession />}
                    {activeSubpage === "scheduled-live" && <ScheduledLiveSession />}
                    {activeSubpage === "community" && <Community />}
                    {activeSubpage === "feedback" && <Feedback />}
                </div>
            </div>
        </div>
    );
}

export default Courses;
