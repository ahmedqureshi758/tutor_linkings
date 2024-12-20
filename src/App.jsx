import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"; 
import About from "./Components/About/About"; 
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Resources from "./Components/Resources/HeroResources/Resources";
import Contact from "./Components/Contact/Contact";
import SignInPage from "./Components/SignIn/SignInPage/SignInpage";
import SignUpPage from "./Components/SignUp/SignUpPage/SignUpPage";
import Resources from "./Components/Resources/Resources";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element = {< Contact />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
