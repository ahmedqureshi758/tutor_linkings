import React from 'react'
import HeroAbout from './HeroAbout/HeroAbout'
import CardsAbout from './CardsAbout/CardsAbout'
import AboutSection from './AboutSection/AboutSection'
import NumberCounter from '../Home/NumberCounter/NumberCounter'
import AboutCourses from './AboutCourses/AboutCourses'
import NavBanner from '../Navbar/Navbanner'

function About() {
  return (
    <>
    <NavBanner />
    <HeroAbout />
    <CardsAbout />
    <AboutSection />
    <NumberCounter />
    <AboutCourses />
    </>
  )
}

export default About