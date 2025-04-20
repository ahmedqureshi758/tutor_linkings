
import React from 'react';
import FooterImg from "../../Assets/footer.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdComputer } from 'react-icons/md';

const FooterBg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
};

function Footer() {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-4 py-12 border-t-2 border-gray-300/10 text-black">
            
            {/* Brand info */}
            <div className="space-y-4">
              <div className="text-2xl uppercase flex gap-2 items-center font-bold">
                <a href="/home"><MdComputer className="text-secondary text-4xl" /></a>
                {/* <p a href="/home">Tutor-Linking</p> */}
                <a href="/home">Tutor-Linking</a>
              </div>
              <p> Innovative platform that connects students with qualified tutors, ensuring personalized learning and academic success.</p>
              <div className="flex gap-5">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Footer links */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-4 md:ml-14 mt-8 md:mt-0">
              <div className="pb-8 px-4">
                <h1 className="text-xl font-bold text-left mb-5">Important Links</h1>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-secondary">Home</a></li>
                  <li><a href="#" className="hover:text-secondary">About Us</a></li>
                  <li><a href="#" className="hover:text-secondary">For Students</a></li>
                  <li><a href="#" className="hover:text-secondary">Services</a></li>
                </ul>
              </div>
              <div className="pb-8 px-4">
                <h1 className="text-xl font-bold text-left mb-5">Company Links</h1>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-secondary">Our Services</a></li>
                  <li><a href="#" className="hover:text-secondary">Our Company</a></li>
                  <li><a href="#" className="hover:text-secondary">For Students</a></li>
                </ul>
              </div>
              <div className="pb-8 px-4 col-span-2 md:col-span-1">
                <h1 className="text-xl font-bold text-left mb-5">Resources</h1>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-secondary">Home</a></li>
                  <li><a href="#" className="hover:text-secondary">About Us</a></li>
                  <li><a href="#" className="hover:text-secondary">For Students</a></li>
                  <li><a href="#" className="hover:text-secondary">Services</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-black text-sm">
                &copy; 2024 All rights reserved | <span ><a href="/home">Tutor Link</a> </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
