import React, { useState } from 'react';

function ScheduledLiveSessions() {
  const sessions = [
    { id: 1, title: "Web Development Basics", status: "Pending", date: "2025-01-12", time: "10:00 AM", student: { name: "John Doe", email: "john@example.com" } },
    { id: 2, title: "AI in Healthcare", status: "Completed", date: "2025-01-05", time: "2:00 PM", student: { name: "Jane Smith", email: "jane@example.com" } },
    { id: 3, title: "Introduction to Cloud Computing", status: "Pending", date: "2025-01-15", time: "1:00 PM", student: { name: "Alice Brown", email: "alice@example.com" } },
    { id: 4, title: "Machine Learning with Python", status: "Completed", date: "2025-01-10", time: "4:00 PM", student: { name: "Bob White", email: "bob@example.com" } },
    { id: 5, title: "Cybersecurity Essentials", status: "Pending", date: "2025-01-18", time: "11:00 AM", student: { name: "Charlie Green", email: "charlie@example.com" } },
    { id: 6, title: "Data Science with R", status: "Completed", date: "2025-01-07", time: "9:00 AM", student: { name: "Emily Black", email: "emily@example.com" } },
  ];

  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedSession, setSelectedSession] = useState(null);

  const filteredSessions = sessions.filter(session => {
    if (statusFilter === 'All') return true;
    return session.status === statusFilter;
  });

  const handleViewDetails = (session) => {
    setSelectedSession(session);
  };

  const handleCloseDetails = () => {
    setSelectedSession(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Scheduled Live Sessions</h2>

      {/* Status Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['All', 'Pending', 'Completed'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 text-sm sm:text-base ${statusFilter === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md hover:bg-gray-300`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Session Cards */}
      <div className="space-y-4">
        {filteredSessions.length === 0 ? (
          <div className="text-center text-lg text-gray-600">No sessions available.</div>
        ) : (
          filteredSessions.map(session => (
            <div key={session.id} className="bg-white shadow-md rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{session.title}</h3>
                <p className="text-gray-600">Date: {session.date} | Time: {session.time}</p>
                <p className={`text-sm mt-2 ${session.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  Status: {session.status}
                </p>
              </div>
              <button
                className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition"
                onClick={() => handleViewDetails(session)}
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for Session Details */}
      {selectedSession && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{selectedSession.title}</h3>
            <p className="text-gray-600">Date: {selectedSession.date} | Time: {selectedSession.time}</p>
            <div className="mt-4">
              <h4 className="text-base font-semibold">Student Details:</h4>
              <p><strong>Name:</strong> {selectedSession.student.name}</p>
              <p><strong>Email:</strong> {selectedSession.student.email}</p>
            </div>
            <div className="mt-6 text-right">
              <button
                className="bg-gray-500 text-white px-4 py-2 text-sm rounded-md hover:bg-gray-600 transition"
                onClick={handleCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduledLiveSessions;
