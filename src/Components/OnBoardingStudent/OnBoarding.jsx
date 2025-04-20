import React from 'react'
import OnBoardingHero from './OnBoardingHero/OnBoardingHero'
import OnBoardingCourses from './OnBoardingCourses/OnBoardingCourses'

export function OnBoardingStudent() {
  return (
    <>
    <h1>Welcome</h1>
    <OnBoardingHero/>
    <OnBoardingCourses/>
    </>
  )
}