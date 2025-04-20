import React, { useState } from 'react';

const tutors = [
    {
        id: 1,
        name: 'Alice Johnson',
        subject: 'Math',
        experience: '5 years',
        rating: 4.8,
        profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
        description: "Alice has a passion for making math understandable and enjoyable for students of all levels. She uses real-world examples and interactive exercises to help students grasp complex concepts.",
    },
    {
        id: 2,
        name: 'Bob Williams',
        subject: 'Physics',
        experience: '3 years',
        rating: 4.5,
        profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
        description: "Bob is a dedicated physics tutor with a knack for simplifying difficult topics. He focuses on building a strong foundation and encourages students to ask questions.",
    },
    {
        id: 3,
        name: 'Eva Garcia',
        subject: 'Chemistry',
        experience: '7 years',
        rating: 4.9,
        profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
        description: "Eva is an experienced chemistry tutor who is passionate about helping students succeed. She provides personalized support and tailors her teaching methods to each student's needs.",
    },
    {
        id: 4,
        name: 'David Rodriguez',
        subject: 'Computer Science',
        experience: '4 years',
        rating: 4.2,
        profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
        description: "David is a skilled computer science tutor with a strong background in programming and software development. He helps students understand fundamental concepts and develop practical skills.",
    },
    {
        id: 5,
        name: 'Maria Martinez',
        subject: 'English',
        experience: '6 years',
        rating: 4.7,
        profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
        description: "Maria is an enthusiastic English tutor who is dedicated to helping students improve their reading, writing, and communication skills. She creates a supportive and engaging learning environment.",
    },
];

function SearchTutors() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTutors, setFilteredTutors] = useState(tutors);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = tutors.filter((tutor) =>
            tutor.name.toLowerCase().includes(term) || tutor.subject.toLowerCase().includes(term)
        );
        setFilteredTutors(filtered);
    };

    const handleViewProfile = (tutor) => {
        setSelectedTutor(tutor);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setSelectedTutor(null);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-7xl mx-auto"> {/* Added max-width and margin */}
            <h2 className="text-2xl font-bold mb-4 text-center">Search Tutors</h2>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by name or subject..."
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors.length > 0 ? (
                    filteredTutors.map((tutor) => (
                        <div key={tutor.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
                            <div className="flex items-center mb-2">
                                <img
                                    src={tutor.profilePicture}
                                    alt={tutor.name}
                                    className="rounded-full w-16 h-16 object-cover mr-3" // Increased image size
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/64"; // Increased placeholder size
                                    }}
                                />
                                <div>
                                    <h3 className="font-semibold">{tutor.name}</h3>
                                    <p className="text-gray-600 text-sm">{tutor.subject}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">Experience: {tutor.experience}</p>
                            <p className="text-gray-700 text-sm">Rating: {tutor.rating}</p>
                            <button
                                className="mt-4 bg-[#0063ff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                onClick={() => handleViewProfile(tutor)}
                            >
                                View Profile
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No tutors found.</p>
                )}
            </div>

            {isOpen && selectedTutor && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"> {/* Added z-index */}
                    <div className="bg-white p-8 rounded-lg max-w-lg w-full overflow-y-auto"> {/* Added max-width, width, and overflow */}
                        <div className="flex justify-between items-center mb-4"> {/* Added close button container */}
                            <h2 className="text-2xl font-bold">{selectedTutor.name}</h2>
                            <button className="text-gray-600 hover:text-gray-800" onClick={closePopup}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-start mb-4"> {/* Added image to popup */}
                            <img
                                src={selectedTutor.profilePicture}
                                alt={selectedTutor.name}
                                className="rounded-full w-24 h-24 object-cover mr-4"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/96";
                                }}
                            />
                            <div>
                                <p>Subject: {selectedTutor.subject}</p>
                                <p>Experience: {selectedTutor.experience}</p>
                                <p>Rating: {selectedTutor.rating}</p>
                            </div>
                        </div>
                        <p>{selectedTutor.description}</p> {/* Added description */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchTutors;