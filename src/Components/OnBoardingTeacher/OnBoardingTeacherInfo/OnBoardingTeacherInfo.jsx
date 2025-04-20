import React, { useState } from 'react';

function TeacherEducationalInfo({ onNext }) {
  const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Step 1: Your Educational Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-600">Education</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your educational qualifications"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">Next</button>
        </div>
      </form>
    </div>
  );
}

function TeacherCourseCreation({ onSubmit }) {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Step 2: Create Your Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-600">Course Title</label>
          <input
            type="text"
            id="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Enter course title"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-600">Course Description</label>
          <textarea
            id="courseDescription"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Enter course description"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full py-2 mt-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300">Finish & Go to Dashboard</button>
        </div>
      </form>
    </div>
  );
}

function OnBoardingTeacherInfo() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);

  const handleFinish = () => {
    // Redirect to the teacher's dashboard
    window.location.href = '/teacher-dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {step === 1 ? (
        <TeacherEducationalInfo onNext={handleNext} />
      ) : (
        <TeacherCourseCreation onSubmit={handleFinish} />
      )}
    </div>
  );
}

export default OnBoardingTeacherInfo;
