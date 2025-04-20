import React from 'react';

const appointments = [
  {
    id: 1,
    tutorName: 'Alice Johnson',
    subject: 'Math',
    date: '2024-03-15',
    time: '2:00 PM',
    status: 'Upcoming',
    meetingLink: 'https://example.com/meeting1', // Example meeting link
  },
  {
    id: 2,
    tutorName: 'Bob Williams',
    subject: 'Physics',
    date: '2024-03-18',
    time: '10:00 AM',
    status: 'Completed',
    meetingLink: null, // No meeting link for completed appointments
  },
  {
    id: 3,
    tutorName: 'Eva Garcia',
    subject: 'Chemistry',
    date: '2024-03-22',
    time: '4:00 PM',
    status: 'Cancelled',
    meetingLink: null,
  },
    {
    id: 4,
    tutorName: 'David Rodriguez',
    subject: 'Computer Science',
    date: '2024-03-25',
    time: '11:00 AM',
    status: 'Upcoming',
      meetingLink: 'https://example.com/meeting4',
  },
    {
    id: 5,
    tutorName: 'Maria Martinez',
    subject: 'English',
    date: '2024-03-28',
    time: '1:00 PM',
    status: 'Upcoming',
      meetingLink: 'https://example.com/meeting5',
  },
    {
    id: 6,
    tutorName: 'Chris Brown',
    subject: 'History',
    date: '2024-04-01',
    time: '3:30 PM',
    status: 'Completed',
      meetingLink: null,
  },
];

function MyAppointments() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Appointments</h2>

      {appointments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200"> {/* Improved table styling */}
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tutor</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.tutorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    appointment.status === 'Upcoming' ? 'text-blue-500' :
                    appointment.status === 'Completed' ? 'text-green-500' :
                    'text-red-500'
                  }`}>
                    {appointment.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {appointment.status === 'Upcoming' && ( // Only show Cancel/Join for Upcoming
                      <>
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                            {appointment.meetingLink && ( // Conditionally render the link
                                <a href={appointment.meetingLink} target="_blank" rel="noopener noreferrer">Join</a>
                            )}
                        </button>
                        <button className="text-red-600 hover:text-red-900">Cancel</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 py-4">No appointments scheduled.</p>
      )}
    </div>
  );
}

export default MyAppointments;