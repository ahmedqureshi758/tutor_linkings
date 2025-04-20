import React, { useState } from 'react';

function AskQuestion() {
  const [questionData, setQuestionData] = useState({
    subject: '',
    topic: '',
    question: '',
    name: '',
    email: '',
    description: '',
    attachments: [],
    category: '',
    tags: [],
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? Array.from(files) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    const formData = new FormData();
    for (const key in questionData) {
      if (key === 'attachments') {
        questionData.attachments.forEach((file) => formData.append('attachments', file));
      } else if (key === 'tags') {
          formData.append(key, JSON.stringify(questionData[key]));
      }
       else {
        formData.append(key, questionData[key]);
      }
    }

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit question');
      }

      setSubmissionStatus('success');
      setQuestionData({
        subject: '',
        topic: '',
        question: '',
        name: '',
        email: '',
        description: '',
        attachments: [],
        category: '',
        tags: [],
      });
      setErrorMessage('');
    } catch (error) {
      console.error("Error submitting question:", error);
      setSubmissionStatus('error');
      setErrorMessage(error.message);
    } finally {
      setSubmissionStatus(null);
    }
  };

    const categories = ['Math', 'Science', 'History', 'Programming', 'Other']; // Example categories
    const availableTags = ['React', 'JavaScript', 'Python', 'Algorithms', 'Data Structures'];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Ask a Question</h2>

      {submissionStatus === 'loading' && <div className="text-center mb-4">Loading...</div>}
      {submissionStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          <strong className="font-bold">Success!</strong> Question submitted successfully.
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <strong className="font-bold">Error!</strong> {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject:</label>
          <input type="text" id="subject" name="subject" value={questionData.subject} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" required />
        </div>
        <div>
          <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">Topic:</label>
          <input type="text" id="topic" name="topic" value={questionData.topic} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" required />
        </div>
        <div>
          <label htmlFor="question" className="block text-gray-700 font-medium mb-2">Question:</label>
          <textarea id="question" name="question" value={questionData.question} onChange={handleChange} rows="4" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" required />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name (Optional):</label>
          <input type="text" id="name" name="name" value={questionData.name} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email (Optional):</label>
          <input type="email" id="email" name="email" value={questionData.email} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description (Optional):</label>
          <textarea id="description" name="description" value={questionData.description} onChange={handleChange} rows="3" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div>
            <label htmlFor="attachments" className="block text-gray-700 font-medium mb-2">Attachments (Optional):</label>
            <input type="file" id="attachments" name="attachments" multiple onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category:</label>
            <select id="category" name="category" value={questionData.category} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">Tags (Optional):</label>
            <select id="tags" name="tags" multiple value={questionData.tags} onChange={handleChange} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                {availableTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
        </div>
        <button type="submit" className="bg-[#0063ff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 w-full">Submit Question</button>
      </form>
    </div>
  );
}

export default AskQuestion;