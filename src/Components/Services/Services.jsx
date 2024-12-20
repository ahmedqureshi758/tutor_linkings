import React from 'react'
import HeroServices from './HeroServices/HeroServices'
import HeroSection from './HeroSection/HeroSection'
import ServicesSection from './ServicesSection/ServicesSection'
import CTASection from './CTA Services/CTASection'
import ServicesTestimonials from './ServicesTestimonials/ServicesTestimonials'
import NavBanner from '../Navbar/Navbanner'
import ApproachServices from './ApproachServices/ApproachServices'

function Services() {
  return (
    <>
    <NavBanner />
    <HeroServices />
    <HeroSection />
    <ServicesSection />
    <ApproachServices />
    <ServicesTestimonials />
    <CTASection />
    </>
  )
}

export default Services