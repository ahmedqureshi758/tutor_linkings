import React, { useState } from 'react';

// Define the teacher's subject (In a real-world scenario, this could come from user authentication or props)
const teacherSubject = 'Math'; // Example: Mathematics teacher

const initialAppointments = [
  {
    id: 1,
    studentName: 'John Doe',
    subject: 'Math',
    date: '2024-03-15',
    time: '2:00 PM',
    status: 'Upcoming',
    meetingLink: 'https://example.com/meeting1',
  },
  {
    id: 4,
    studentName: 'Lucy Brown',
    subject: 'Math',
    date: '2024-03-25',
    time: '11:00 AM',
    status: 'Upcoming',
    meetingLink: 'https://example.com/meeting4',
  },
  {
    id: 5,
    studentName: 'David Green',
    subject: 'Math',
    date: '2024-03-28',
    time: '1:00 PM',
    status: 'Upcoming',
    meetingLink: 'https://example.com/meeting5',
  },
];

function MyAppointmentsTeacher() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showForm, setShowForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    studentName: '',
    subject: teacherSubject,
    date: '',
    time: '',
  });

  // Filter appointments based on the teacher's subject
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.subject === teacherSubject
  );

  // Handle input change
  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleAddAppointment = () => {
    if (!newAppointment.studentName || !newAppointment.date || !newAppointment.time) {
      alert('Please fill in all fields.');
      return;
    }

    const newEntry = {
      ...newAppointment,
      id: appointments.length + 1,
      status: 'Upcoming',
      meetingLink: `https://example.com/meeting${appointments.length + 1}`,
    };

    setAppointments([...appointments, newEntry]);
    setShowForm(false);
    setNewAppointment({ studentName: '', subject: teacherSubject, date: '', time: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Appointments (Teacher View)</h2>

      {/* Make Appointment Button */}
      <div className="text-center mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? 'Close Form' : 'Make an Appointment'}
        </button>
      </div>

      {/* Appointment Form */}
      {showForm && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Book an Appointment</h3>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={newAppointment.studentName}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleAddAppointment}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Confirm Appointment
          </button>
        </div>
      )}

      {/* Appointments Table */}
      {filteredAppointments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs text-center font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.studentName}</td>
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
                    {appointment.status === 'Upcoming' && (
                      <>
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                          {appointment.meetingLink && (
                            <a href={appointment.meetingLink} target="_blank" rel="noopener noreferrer">Join</a>
                          )}
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 mr-2">Confirm</button>
                        <button className="text-yellow-600 hover:text-yellow-900">Reschedule</button>
                      </>
                    )}
                    {appointment.status === 'Completed' && (
                      <button className="text-gray-600 hover:text-gray-900">Review</button>
                    )}
                    {appointment.status === 'Cancelled' && (
                      <button className="text-gray-600 hover:text-gray-900">Rebook</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 py-4">No appointments scheduled for this subject.</p>
      )}
    </div>
  );
}

export default MyAppointmentsTeacher;
