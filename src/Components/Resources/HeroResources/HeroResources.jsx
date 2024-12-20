import React from 'react';
import BannerImage from '../../../Assets/breadcumb-bg.jpg';

function HeroResources() {
    return (
        <div className="relative h-[400px] bg-cover bg-center sm:h-[300px] md:h-[400px]" style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for readability */}
          <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Resources</h1>
            <div className="text-sm sm:text-lg">
              <a href="/" className="underline">Home</a> &gt; Resources
            </div>
          </div>
        </div>
      );
}

export default HeroResources




