import React, { useState } from 'react';
import { FaDollarSign, FaCalendarAlt, FaFileInvoiceDollar } from 'react-icons/fa'; // Import icons

const EarningPage = () => {
  const [earnings, setEarnings] = useState([
    { date: '2024-07-26', description: 'Online Tutoring - Math', amount: 50 },
    { date: '2024-07-25', description: 'Lesson Plan Sale', amount: 25 },
    { date: '2024-07-24', description: 'Online Tutoring - Science', amount: 75 },
    { date: '2024-07-20', description: 'Webinar Hosting', amount: 120 },
    { date: '2024-07-18', description: 'Consultation Fee', amount: 90 },
  ]);

  const calculateTotalEarnings = () =>
    earnings.reduce((sum, earning) => sum + earning.amount, 0);

  return (
    <div className=" min-h-screen "> {/* Gradient background */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"> {/* Increased max-width and added overflow-hidden */}
        <div className="bg-blue-600 text-white py-6 px-8 flex items-center justify-between"> {/* Blue header */}
          <div>
            <h2 className="text-3xl font-bold">Earnings Summary</h2>
            <p className="text-lg">Track your income effortlessly.</p>
          </div>
          <FaFileInvoiceDollar className="text-5xl" /> {/* Large icon */}
        </div>

        <div className="p-8">
          <div className="bg-yellow-100 rounded-lg p-6 mb-8 shadow-inner flex items-center"> {/* Highlighted total earnings */}
            <FaDollarSign className="text-3xl text-yellow-600 mr-4" />
            <div>
              <p className="text-xl font-medium">Total Earnings:</p>
              <p className="text-3xl font-bold text-yellow-800">${calculateTotalEarnings()}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300"> {/* Improved table styling */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center"><FaCalendarAlt className="mr-2" /> Date</div> {/* Icon in header */}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {earnings.map((earning, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-200"> {/* Hover effect */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{earning.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{earning.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">${earning.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningPage;