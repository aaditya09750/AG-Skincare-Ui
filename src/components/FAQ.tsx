import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import HeadphoneIcon from '../svg/headphone-svgrepo-com 1.svg?react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqItems }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] mb-16 lg:mb-20 xl:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
        {/* Left Column - Image */}
        <div className="order-2 lg:order-1 relative animate-on-scroll">
          <img
            src="/assets/support-model.png"
            alt="Customer support representative with skincare products"
            className="w-full h-64 sm:h-80 lg:h-96 xl:h-[1146px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700 shadow-2xl"
          />
          
          {/* Floating Info Card */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex items-center animate-float">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-glow">
                <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                <HeadphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[50px] lg:h-[50px] text-white" />
              </div>
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4 bg-[#f8f9f2] rounded-[100px] sm:rounded-[200px] px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4">
              <p className="font-normal text-xs sm:text-sm lg:text-xl text-[#2d3b36] leading-tight">
                24/7 We're Here<br />to Help You
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Content */}
        <div className="order-1 lg:order-2">
          {/* Frequently Asked Question Tag */}
          <button className="bg-[#f8f9f2] text-[#2d3b36] border border-[#2d3b36] rounded-[100px] px-3 py-1 text-xs font-medium flex items-center gap-2 mb-4 lg:mb-6 group hover:bg-[#2d3b36] hover:text-white transition-colors">
            <div className="w-2 h-2 bg-[#2d3b36] group-hover:bg-white rounded-full transition-colors"></div>
            Frequently Asked Question
          </button>

          <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight mb-8 sm:mb-12 lg:mb-16">
            Answers to Your<br />Skincare Questions, All <br />in One Place.
          </h2>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border border-solid border-[#2d3b36] rounded-[5px] overflow-hidden transition-all duration-500 ease-out hover:shadow-lg hover:border-[#1f2b26] transform hover:-translate-y-1 ${
                  openFaqIndex === index ? 'shadow-lg border-[#1f2b26] bg-[#f8fee5]/50' : ''
                }`}
              >
                <button
                  className={`w-full px-3 sm:px-4 lg:px-6 xl:px-[29px] py-3 sm:py-4 lg:py-5 xl:py-[25px] text-left flex justify-between items-center transition-all duration-300 ease-out group relative overflow-hidden ${
                    openFaqIndex === index ? 'bg-[#f8fee5]' : 'hover:bg-[#f8fee5]/80'
                  }`}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index ? "true" : "false"}
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f8fee5] to-[#f0f6dd] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                  
                  <span className={`font-normal text-sm sm:text-base lg:text-lg xl:text-xl pr-4 transition-all duration-300 ease-out relative z-10 ${
                    openFaqIndex === index 
                      ? 'text-[#1f2b26] font-medium' 
                      : 'text-[#2d3b36] group-hover:text-[#1f2b26]'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 transition-all duration-500 ease-out transform relative z-10 ${
                    openFaqIndex === index 
                      ? 'rotate-180 scale-110' 
                      : 'group-hover:scale-110'
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#2d3b36] transition-all duration-300 ease-out" />
                  </div>
                </button>
                
                {/* Animated Content Container */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    openFaqIndex === index 
                      ? 'max-h-[500px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-3 sm:px-4 lg:px-6 xl:px-[29px] pb-3 sm:pb-4 lg:pb-5 xl:pb-[25px] transform transition-all duration-700 ease-out ${
                    openFaqIndex === index 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}>
                    <div className="border-t border-[#2d3b36]/20 pt-3 sm:pt-4 lg:pt-5 xl:pt-[25px]">
                      <p className="font-normal text-xs sm:text-sm lg:text-base text-[#525349] tracking-[-0.35px] lg:tracking-[-0.70px] leading-relaxed animate-fade-in">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 