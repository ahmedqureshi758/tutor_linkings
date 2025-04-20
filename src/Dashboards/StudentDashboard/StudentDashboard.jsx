import React, { useState } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch, FaCalendarCheck, FaBookOpen, FaChartLine, FaRegQuestionCircle, FaBook } from 'react-icons/fa';
import Profile from './Profile/Profile';
import SearchTutors from './SearchTutor/SearchTutor';
import MyAppointments from './MyAppointments/MyAppointments';
import Resources from './Resources/Resources';
import Progress from './Progress/Progress';
import AskQuestion from './AskQuestion/AskQuestion';
import Courses from './Courses/Courses';

function StudentDash() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [accountOpen, setAccountOpen] = useState(false); // State for account dropdown

    const isMenuActive = (path) => {
        return location.pathname === path ? 'bg-white text-[#0063ff]' : 'hover:text-[#ffcf3a]';
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setMenuOpen(false);
        }
    };

    const toggleAccount = () => {
        setAccountOpen(!accountOpen);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <div
                style={{ height: '280vh' }}
                className={`bg-[#0063ff] text-white w-full md:w-64 p-4 transition-transform duration-300 transform md:translate-x-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'} fixed top-0 left-0 z-10 md:relative shadow-md`}
            >
                {/* ... (sidebar content - same as before) */}
                <div className="flex justify-between items-center md:block">
                    <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
                    <button
                        className="md:hidden text-white focus:outline-none text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/profile')}`}>
                        <FaUser className="mr-2" />
                        <Link to="/profile" onClick={handleLinkClick}>Profile</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/search-tutors')}`}>
                        <FaSearch className="mr-2" />
                        <Link to="/search-tutors" onClick={handleLinkClick}>Search Tutors</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/my-appointments')}`}>
                        <FaCalendarCheck className="mr-2" />
                        <Link to="/my-appointments" onClick={handleLinkClick}>My Appointments</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/resources')}`}>
                        <FaBookOpen className="mr-2" />
                        <Link to="/resources" onClick={handleLinkClick}>Resources</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/progress')}`}>
                        <FaChartLine className="mr-2" />
                        <Link to="/progress" onClick={handleLinkClick}>Progress</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/askquestion')}`}>
                        <FaRegQuestionCircle className="mr-2" />
                        <Link to="/askquestion" onClick={handleLinkClick}>Ask Questions</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/courses')}`}>
                        <FaBook className="mr-2" />
                        <Link to="/courses" onClick={handleLinkClick}>Courses</Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100">
                <header className="bg-white p-4 shadow-md flex justify-between items-center">
                    <button
                        className="md:hidden text-[#0063ff] focus:outline-none text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaBars />
                    </button>
                    <h1 className="text-2xl font-bold">Welcome, Student!</h1>

                    {/* Account Dropdown */}
                    <div className="relative"> {/* Added relative positioning */}
                        <button onClick={toggleAccount} className="focus:outline-none">
                            <FaUser className="text-2xl text-[#0063ff]" /> {/* Account Icon */}
                        </button>

                        {accountOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"> {/* Dropdown menu */}
                                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleAccount}>
                                    Profile
                                </Link>
                                {/* Add more account options here (e.g., Logout, Settings) */}
                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={()=>{localStorage.clear(); window.location.href = '/'}}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <main className="p-6">
                    <Routes>
                        {/* ... (routes - same as before) */}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/search-tutors" element={<SearchTutors />} />
                        <Route path="/my-appointments" element={<MyAppointments />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/askquestion" element={<AskQuestion />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/" element={<Profile />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default StudentDash;