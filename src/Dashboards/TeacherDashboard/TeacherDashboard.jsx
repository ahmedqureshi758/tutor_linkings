import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaCalendarCheck, FaBookOpen, FaChartLine, FaDollarSign, FaComments, FaBook } from 'react-icons/fa';

function TeacherDashboard() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const [accountOpen, setAccountOpen] = useState(false);

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
                style={{ height: '160vh' }}
                className={`bg-[#0063ff] text-white w-full md:w-64 p-4 transition-transform duration-300 transform md:translate-x-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'} fixed top-0 left-0 z-10 md:relative shadow-md`}
            >
                <div className="flex justify-between items-center md:block">
                    <h2 className="text-xl font-bold mb-6">Teacher Dashboard</h2>
                    <button
                        className="md:hidden text-white focus:outline-none text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/profile')}`}>
                        <FaUser className="mr-2" />
                        <Link to="/teacher-dashboard/profile" onClick={handleLinkClick}>My Profile</Link>
                    </li>
                    {/* <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/my-appointments')}`}>
                        <FaCalendarCheck className="mr-2" />
                        <Link to="/teacher-dashboard/my-appointments" onClick={handleLinkClick}>My Appointments</Link>
                    </li> */}
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/my-courses')}`}>
                        <FaBookOpen className="mr-2" />
                        <Link to="/teacher-dashboard/my-courses" onClick={handleLinkClick}>My Courses</Link>
                    </li>
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/resources')}`}>
                        <FaBook className="mr-2" />
                        <Link to="/teacher-dashboard/resources" onClick={handleLinkClick}>Resources</Link>
                    </li>
                    {/* <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/earnings')}`}>
                        <FaDollarSign className="mr-2" />
                        <Link to="/teacher-dashboard/earnings" onClick={handleLinkClick}>Earnings</Link>
                    </li> */}
                    <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/reviews')}`}>
                        <FaChartLine className="mr-2" />
                        <Link to="/teacher-dashboard/reviews" onClick={handleLinkClick}>Reviews</Link>
                    </li>
                    {/* <li className={`mb-4 cursor-pointer p-2 rounded flex items-center ${isMenuActive('/teacher-dashboard/messages')}`}>
                        <FaComments className="mr-2" />
                        <Link to="/teacher-dashboard/messages" onClick={handleLinkClick}>Messages</Link>
                    </li> */}
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
                    <h1 className="text-2xl font-bold">Welcome, Teacher!</h1>

                    {/* Account Dropdown */}
                    <div className="relative">
                        <button onClick={toggleAccount} className="focus:outline-none">
                            <FaUser className="text-2xl text-[#0063ff]" />
                        </button>

                        {accountOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                <Link to="/teacher-dashboard/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleAccount}>
                                    Profile
                                </Link>
                                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => { localStorage.clear(); window.location.href = '/' }}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default TeacherDashboard;
