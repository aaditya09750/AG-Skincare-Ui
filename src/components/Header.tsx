import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BagIcon from '../svg/bag-4-svgrepo-com 1.svg?react';
import HeartIcon from '../svg/heart-svgrepo-com (1) 1.svg?react';
import VectorIcon from '../svg/Vector.svg?react';

interface HeaderProps {
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = ['All Products', 'Serum', 'Sunscreen', 'Bundle'];

  return (
    <header className={`sticky top-0 z-50 bg-[#f8f9f2] px-3 sm:px-5 lg:px-6 xl:px-[80px] py-3 lg:py-5 xl:py-[39px] transition-all duration-300 ${scrollY > 100 ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-[#2d3b36] z-20 relative hover:scale-105 transition-transform duration-300 cursor-pointer animate-slide-in-left">
          SKINCARE
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-6">
          {navigationItems.map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="font-normal text-sm lg:text-lg text-[#2d3b36] tracking-[-0.5px] lg:tracking-[-1.00px] hover:opacity-70 transition-all duration-300 relative group animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2d3b36] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Icons & Cart */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f6dd] hover:scale-110 transition-all duration-300 group animate-scale-in">
              <BagIcon className="w-5 h-5 text-[#2d3b36] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-[#2d3b36] font-normal text-lg">Cart (1)</span>
          </div>
          <button 
            className="w-10 h-10 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f6dd] hover:scale-110 transition-all duration-300 group animate-scale-in"
            aria-label="Wishlist"
            style={{ animationDelay: '0.1s' }}
          >
            <HeartIcon className="w-5 h-5 text-[#2d3b36] group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button 
            className="w-10 h-10 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f6dd] hover:scale-110 transition-all duration-300 group animate-scale-in"
            aria-label="Search"
            style={{ animationDelay: '0.2s' }}>
            <VectorIcon className="w-5 h-5 text-[#2d3b36] group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 bg-[#f8fee5] rounded-[16px] flex items-center justify-center z-20 relative hover:scale-110 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 transition-all duration-300 rotate-180" />
          ) : (
            <Menu className="w-4 h-4 transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#f8f9f2]/95 backdrop-blur-md z-40 pt-16 animate-fade-in">
          <nav className="flex flex-col space-y-5 px-5 py-6">
            {navigationItems.map((item, index) => (
              <a 
                key={item}
                href="#" 
                className="font-normal text-lg text-[#2d3b36] py-2.5 border-b border-[#2d3b36]/20 hover:bg-[#f8fee5] hover:pl-3 transition-all duration-300 rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Icons */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f8fee5] rounded-full flex items-center justify-center">
                  <BagIcon className="w-5 h-5 text-[#2d3b36]" />
                </div>
                <span className="text-[#2d3b36] font-normal text-sm">Cart (1)</span>
              </div>
              <button 
                className="w-10 h-10 bg-[#f8fee5] rounded-[16px] flex items-center justify-center hover:scale-110 hover:bg-[#f0f6dd] transition-all duration-300"
                aria-label="Currency"
              >
                <span className="text-[#2d3b36] font-bold text-base">$</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}; 