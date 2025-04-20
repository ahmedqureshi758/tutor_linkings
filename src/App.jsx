import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./Components/Home/Home"; 
import About from "./Components/About/About"; 
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Courses from './Components/Courses/Courses'
import Contact from "./Components/Contact/Contact";
import SignInPage from "./Components/SignIn/SignInPage/SignInpage";
import SignUpPage from "./Components/SignUp/SignUpPage/SignUpPage";
import Resources from "./Components/Resources/Resources";

// Dashboards
import TeacherDashboard from './Dashboards/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './Dashboards/StudentDashboard/StudentDashboard'

// Dashboard Pages
import Profile from "./Dashboards/TeacherDashboard/Profile/Profile";
import MyAppointments from "./Dashboards/TeacherDashboard/MyAppointments/MyAppointments";
import MyCourses from "./Dashboards/TeacherDashboard/MyCourses/MyCourses";
import TeacherResources from "./Dashboards/TeacherDashboard/Resources/Resources"
import Earnings from "./Dashboards/TeacherDashboard/Earnings/Earnings";
import Reviews from "./Dashboards/TeacherDashboard/Reviews/Reviews";
// import Messages from "./Dashboards/TeacherDashboard/Messages/Messages";


//onboarding students
import { OnBoardingStudent } from "./Components/OnBoardingStudent/OnBoarding";
import { OnBoardingTeacher } from "./Components/OnBoardingTeacher/OnBoarding";


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); // Now inside Router context

  // Hide Header/Footer in dashboard routes
  const hideHeaderFooter = location.pathname.startsWith("/teacher-dashboard") || location.pathname.startsWith("/student-dashboard");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* OnBoarding routes */}
        <Route path="OnBoardingStudent/" element={<OnBoardingStudent />} />
     <Route path="OnBoardingTeacher/" element={<OnBoardingTeacher/>} />


        {/* Teacher Dashboard Routes */}
        <Route path="/teacher-dashboard/*" element={<TeacherDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="my-appointments" element={<MyAppointments />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="resources" element={<TeacherResources />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="reviews" element={<Reviews />} />
          {/* <Route path="messages" element={<Messages />} /> */}
        </Route>

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        {/* <Route path="/profile" element={<Profile />} ></Route> */}
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
