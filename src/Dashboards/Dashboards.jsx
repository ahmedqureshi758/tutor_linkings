// import React, { useState } from 'react';

// const DashboardLayout = ({ title, children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isMenuOpen ? 'w-64' : 'w-16'
//         } bg-[#0063ff] transition-all duration-300 text-white flex flex-col`}
//       >
//         <button
//           className="p-4 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? '< Close' : '☰'}
//         </button>
//         <nav className="flex flex-col gap-4 mt-4">
//           <a href="#" className="p-2 hover:bg-[#ffcf3a] rounded">
//             Dashboard
//           </a>
//           <a href="#" className="p-2 hover:bg-[#ffcf3a] rounded">
//             Profile
//           </a>
//           <a href="#" className="p-2 hover:bg-[#ffcf3a] rounded">
//             Settings
//           </a>
//           <a href="#" className="p-2 hover:bg-[#ffcf3a] rounded">
//             Logout
//           </a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <h1 className="text-2xl font-bold text-[#0063ff]">{title}</h1>
//         <div className="mt-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// // Teacher Dashboard
// const TeacherDashboard = () => {
//   return (
//     <DashboardLayout title="Teacher Dashboard">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Class Schedules</h2>
//           <p>View and manage your class timings.</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Student Assignments</h2>
//           <p>Review and grade assignments.</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// // Student Dashboard
// const StudentDashboard = () => {
//   return (
//     <DashboardLayout title="Student Dashboard">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Upcoming Classes</h2>
//           <p>Check your upcoming schedules.</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Assignments</h2>
//           <p>Submit and track your assignments.</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// // Admin Dashboard
// const AdminDashboard = () => {
//   return (
//     <DashboardLayout title="Admin Dashboard">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">User Management</h2>
//           <p>Manage users and their roles.</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">System Logs</h2>
//           <p>View and analyze system activities.</p>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export { TeacherDashboard, StudentDashboard, AdminDashboard };
