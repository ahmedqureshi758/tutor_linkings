import React, { useState } from 'react';

function RequestLiveSession() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission (e.g., API call, form handling, etc.)
    console.log('Form submitted', { name, email, sessionType, preferredDate, preferredTime, message });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Request Live Session</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Fill out the form below to request a live session with one of our experts. We will get back to you shortly to confirm the details.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="sessionType" className="text-gray-700 mb-2">Session Type</label>
            <select
              id="sessionType"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
              required
            >
              <option value="">Select Session Type</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="ai-ml">AI & Machine Learning</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="preferredDate" className="text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="preferredTime" className="text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                id="preferredTime"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-gray-700 mb-2">Message (Optional)</label>
            <textarea
              id="message"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us more about your request"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestLiveSession;
