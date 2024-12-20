import React from "react";
import HeroResources from "./HeroResources/HeroResources";
import NavBanner from "../Navbar/Navbanner";
import HeroSectionResources from "./HeroSectionResources/HeroSectionResources";
import LearningResources from "./LearningResources/LearningResources";
import TeacherTips from "./TeacherTips/TeacherTips";

function Resources() {
  return (
    <>
      <NavBanner />
      <HeroResources />
      <HeroSectionResources />
      <TeacherTips />
      <LearningResources />
    </>
  );
}

export default Resources;
