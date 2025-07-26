import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d3b36] text-white py-12 sm:py-16 lg:py-20 xl:py-[199px] relative overflow-hidden">
      {/* Dark Grey Vertical Bars */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#1a1a1a]"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-[#1a1a1a]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-12 lg:gap-0">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h2 className="font-normal text-xl sm:text-2xl lg:text-3xl xl:text-5xl tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight mb-6 sm:mb-8 lg:mb-12 text-white text-left">
              Join The Skincare<br />Community Now.
            </h2>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <h3 className="font-normal text-base sm:text-lg lg:text-xl xl:text-2xl tracking-[-0.3px] lg:tracking-[-0.60px] mb-2 text-white text-right">
              Get in Touch
            </h3>
            <p className="font-normal text-lg sm:text-xl lg:text-3xl xl:text-5xl tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight mb-6 sm:mb-8 lg:mb-12 text-white text-right">
              contact.skincare.com
            </p>
          </div>
        </div>

        {/* Links Section - Left and Right Aligned */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-0 mt-8 lg:mt-12">
          {/* Left Aligned - Social Media Links */}
          <div className="flex gap-6 sm:gap-8 lg:gap-10">
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              Facebook
            </a>
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              Instagram
            </a>
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              YouTube
            </a>
          </div>

          {/* Right Aligned - Legal Links */}
          <div className="flex gap-6 sm:gap-8 lg:gap-10 lg:justify-end">
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="font-normal text-base sm:text-lg lg:text-xl text-white tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-opacity">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>

      {/* Large Background SKINCARE Text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-bold text-[#1a1a1a] text-4xl sm:text-6xl lg:text-8xl xl:text-[378px] whitespace-nowrap leading-none opacity-30 pointer-events-none">
        SKINCARE
      </div>
    </footer>
  );
}; 