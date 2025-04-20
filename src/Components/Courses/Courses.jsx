import React from 'react'
import HeroCourses from '../Courses/HeroCourses/HeroCourses'
import NavBanner from '../Navbar/Navbanner'
import CourseCards from './CourseCards/CourseCards'
// import SearchCourses from './SearchCourses/SearchCourses'

function Courses() {
  return (
    <>
    <NavBanner />
    <HeroCourses/>
    {/* <SearchCourses /> */}
    <CourseCards />
    </>
  )
}

export default Courses