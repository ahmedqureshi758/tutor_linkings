import React from 'react'
import Navbar from '../Navbar/Navbar'
// import NavBanner from '../Navbar/Navbanner'
import ResponsiveMenu from '../Navbar/ResponsiveMenu'

function Header() {
  return (
    <>
    <Navbar />
    {/* <NavBanner/> */}
    <ResponsiveMenu />
    </>
  )
}

export default Header