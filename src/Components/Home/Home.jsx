// Home.jsx
import React from "react";
import Hero from "./Hero/Hero";
import NumberCounter from "./NumberCounter/NumberCounter";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Banner from "./Banner/Banner";
import SubjectCard from "./SubjectCards/SubjectCards";
import Testimonial from "./Testimonial/Testimonial";
import Navbanner from '../Navbar/Navbanner'


function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navbanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner />
      <SubjectCard />
      <Testimonial />
    </>
  );
}

export default Home;
