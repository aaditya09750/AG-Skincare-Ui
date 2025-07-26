import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 xl:px-[100px] py-8 lg:py-12 xl:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-20 items-start mb-12 lg:mb-16 xl:mb-20">
          {/* Left Content - Description */}
          <div className="lg:col-span-1 animate-on-scroll order-2 lg:order-1">
            <p className="font-normal text-base sm:text-lg lg:text-xl xl:text-[20px] text-[#2d3b36] leading-relaxed lg:leading-[24px] max-w-md lg:max-w-none">
              Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
            </p>
          </div>

          {/* Center - Large Title */}
          <div className="lg:col-span-1 animate-on-scroll order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-bold text-[#2d3b36] text-4xl sm:text-6xl lg:text-8xl xl:text-[100px] leading-tight lg:leading-[90px] tracking-[-0.03em] uppercase hover:scale-105 transition-transform duration-700">
              GLOW<br/>NATUR-<br/>ALLY
            </h2>
          </div>

          {/* Right Image - Small product tube */}
          <div className="lg:col-span-1 animate-on-scroll order-3 flex justify-center lg:justify-end">
            <img
              src="/assets/skincare-product.png"
              alt="Premium skincare product bottle"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-[222.61px] xl:h-[220px] object-cover rounded-[20px] hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-xl"
            />
          </div>
        </div>

        {/* Hero Section with Background SKINCARE Text */}
        <div className="relative animate-on-scroll min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
          {/* Large Background SKINCARE Text */}
          <div className="absolute inset-0 flex items-end justify-center z-0 pb-8 sm:pb-12 lg:pb-16">
            <h1 className="font-extrabold text-6xl sm:text-8xl lg:text-[200px] xl:text-[300px] 2xl:text-[378px] leading-none tracking-[-0.02em] uppercase text-[#2d3b36] opacity-20 hover:scale-105 transition-transform duration-1000 text-center">
              SKINCARE
            </h1>
          </div>

          {/* Shop Now Button - Lower Left */}
          <div className="absolute top-1/2 left-4 sm:left-6 z-10">
            <button className="bg-[#2d3b36] text-[#f8f9f2] rounded-[100px] h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg hover:bg-[#1f2b26] hover:scale-110 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Central Hero Image */}
          <div className="flex justify-center items-center relative z-10 h-full pt-16 sm:pt-20 lg:pt-24">
            <div className="relative group">
              <img
                src="/assets/hero-woman.png"
                alt="Woman applying skincare routine with natural lighting"
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-[610px] h-auto object-cover rounded-3xl hover:scale-105 transition-transform duration-700 shadow-2xl"
              />
              
              {/* Floating Info Card - Centered and Larger */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f8fee5] rounded-[200px] w-64 sm:w-80 lg:w-96 xl:w-[476px] h-16 sm:h-20 lg:h-24 xl:h-[100px] flex items-center px-4 shadow-lg hover:scale-105 transition-all duration-500 border border-dashed border-[#2d3b36]/30">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-[90px] xl:h-[90px] bg-white rounded-full border border-dashed border-[#2d3b36] flex items-center justify-center ml-1 flex-shrink-0 hover:rotate-12 transition-transform duration-300 overflow-hidden">
                  <img
                    src="/assets/skincare-circle.png"
                    alt="Skincare packaging"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="ml-4 sm:ml-6 lg:ml-8 xl:ml-[80px] font-normal text-sm sm:text-base lg:text-lg xl:text-[20px] text-[#2d3b36] leading-tight lg:leading-[24px]">
                  While giving you an invigorating cleansing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 