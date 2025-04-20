import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const progressData = [
  { subject: 'Math', percentage: 75, color: '#3498db' },
  { subject: 'Physics', percentage: 60, color: '#e67e22' },
  { subject: 'Chemistry', percentage: 90, color: '#2ecc71' },
  { subject: 'Computer Science', percentage: 80, color: '#9b59b6' },
  { subject: 'English', percentage: 55, color: '#f1c40f' },
];

function Progress() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {progressData.map((item) => (
          <div key={item.subject} className="flex flex-col items-center">
            <div className="w-32 h-32">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage}%`} // You can keep this simple if you don't need custom styling of the text
                styles={buildStyles({
                  pathColor: item.color,
                  textColor: '#333', // Default text color is fine, but you can change it here
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <h3 className="text-lg font-medium mt-4">{item.subject}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p>Overall progress is calculated based on completed assignments and assessments in each subject.</p>
      </div>
    </div>
  );
}

export default Progress;