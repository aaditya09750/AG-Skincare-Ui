import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import CartIcon from '../svg/cart-large-2-svgrepo-com 5.svg?react';
import AwardIcon from '../svg/award-svgrepo-com 1.svg?react';
import LeftArrowIcon from '../svg/left arrow 1.svg?react';
import RightArrowIcon from '../svg/right arrow 1.svg?react';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProductCard } from './ProductCard';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

export const ResponsiveSkincare = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations and visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqItems = [
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics."
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Yes, our products are formulated with gentle ingredients suitable for sensitive skin. We recommend patch testing before full use."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unopened products. Opened products can be returned within 14 days with proof of purchase."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. International shipping times vary by location, typically 7-14 business days."
    },
    {
      question: "How do I choose the right product?",
      answer: "Our skincare quiz can help determine your skin type and recommend products. You can also consult our ingredient guide."
    }
  ];

  return (
    <div className={`min-h-screen bg-[#f8f9f2] font-inter transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header scrollY={scrollY} />

      <Hero />

      {/* Main Content Section */}
      <section className="bg-[#f8f9f2] py-0 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
          {/* About Section */}
          <div className="mb-16 lg:mb-20 xl:mb-24">
            <div className="relative overflow-hidden">
              <p className="font-normal text-xl sm:text-2xl lg:text-4xl xl:text-[53px] text-[#2d3b36] tracking-[-0.4px] sm:tracking-[-0.6px] lg:tracking-[-0.3px] xl:tracking-[-0.98px] leading-tight lg:leading-[60px] xl:leading-[78px] text-left max-w-6xl mx-auto animate-on-scroll animate-text-fade py-8">
                Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
              </p>
              
              {/* Fade Overlay for Enhanced Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9f2] to-transparent pointer-events-none animate-shimmer"></div>
            </div>
          </div>

          {/* Features Section */}
          <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 mb-16 lg:mb-20 xl:mb-24">
            {/* Left Column - Text */}
            <div className="animate-on-scroll">
              {/* Why Our Products Button */}
              <button className="bg-[#f8f9f2] text-[#2d3b36] border border-[#2d3b36] rounded-[100px] px-4 py-2 text-sm font-medium hover:bg-[#2d3b36] hover:text-white transition-colors flex items-center gap-2 mb-6 lg:mb-8 xl:mb-10 group">
                <div className="w-3 h-3 bg-[#2d3b36] group-hover:bg-white rounded-full transition-colors"></div>
                Why Our Products
              </button>

              <h2 className="font-normal text-[#2d3b36] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight mb-6 lg:mb-8 xl:mb-10 hover:scale-105 transition-transform duration-500">
                YOUR SKIN DESERVES<br />THE BEST CARE.
              </h2>

              <p className="font-normal text-base sm:text-lg lg:text-xl text-[#525349] tracking-[-0.18px] lg:tracking-[-0.36px] leading-6 lg:leading-7 mb-8 lg:mb-12 xl:mb-16 hover:scale-105 transition-transform duration-500">
                Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.
              </p>

              <div className="space-y-8 lg:space-y-10 xl:space-y-12">
                {[
                  {
                    number: "01",
                    title: "Bio Ingredients",
                    description: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."
                  },
                  {
                    number: "02", 
                    title: "Everything Natural",
                    description: "Pure ingredients for pure skin. The Perfect solution for your skin care needs."
                  },
                  {
                    number: "03",
                    title: "All Handmade", 
                    description: "Made with love and care. Just for you. Give your skin the tender loving care it deserves."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-6 xl:gap-8 group">
                    <h3 className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
                      {feature.number}
                    </h3>
                    <div>
                      <h4 className="font-normal text-[#2d3b36] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.6px] lg:tracking-[-1.20px] mb-2 lg:mb-3 xl:mb-4 hover:scale-105 transition-transform duration-300">
                        {feature.title}
                      </h4>
                      <p className="font-normal text-sm sm:text-base lg:text-lg text-[#525349] tracking-[-0.18px] lg:tracking-[-0.36px] leading-5 lg:leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-on-scroll">
              <img
                src="/assets/award-model.png"
                alt="Award-winning skincare model with natural lighting"
                className="w-full max-w-none h-80 sm:h-96 lg:h-[1081px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700 shadow-2xl"
              />
              
              {/* Award Badge */}
              <div className="absolute bottom-10 sm:bottom-14 lg:bottom-20 right-4 sm:right-6 lg:right-8 flex items-center animate-float">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-glow">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                    <AwardIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[50px] lg:h-[50px] text-white" />
                  </div>
                </div>
                <div className="ml-2 sm:ml-3 lg:ml-4 bg-[#f8f9f2] rounded-[100px] sm:rounded-[200px] px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 hover:scale-105 transition-transform duration-300">
                  <p className="font-normal text-xs sm:text-sm lg:text-xl text-[#2d3b36] leading-tight">
                    Best Skin Care Product<br />Award Winning
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="flex justify-between items-center mt-4 lg:mt-8">
                <span className="font-normal text-sm sm:text-base lg:text-lg text-[#2d3b36] tracking-[-0.5px] lg:tracking-[-1.00px]">
                  SINCE 2001
                </span>
                <span className="font-normal text-sm sm:text-base lg:text-lg text-[#2d3b36] tracking-[-0.5px] lg:tracking-[-1.00px] cursor-pointer hover:opacity-70 transition-opacity">
                  LEARN MORE
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* Best Selling Products Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] mb-16 lg:mb-20 xl:mb-24">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 sm:mb-12 lg:mb-16">
            {/* Best Selling Products Button */}
            <button className="bg-[#f8f9f2] text-[#2d3b36] border border-[#2d3b36] rounded-[100px] px-4 py-2 text-sm font-medium hover:bg-[#2d3b36] hover:text-white transition-colors flex items-center gap-2 group">
              <div className="w-3 h-3 bg-[#2d3b36] group-hover:bg-white rounded-full transition-colors"></div>
              Best Selling Products
            </button>

            {/* Centered Title */}
            <h2 className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight text-center">
              Skincare That Brings Out<br/>Your Natural Radiance
            </h2>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="w-10 h-10 lg:w-12 lg:h-12 border border-[#2d3b36] rounded-full flex items-center justify-center hover:bg-[#2d3b36] hover:text-white transition-colors"
                      aria-label="Previous products">
                <LeftArrowIcon className="w-5 h-5 lg:w-6 lg:h-6 text-[#2d3b36]" />
              </button>
              <button className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2d3b36] text-white rounded-full flex items-center justify-center hover:bg-[#1f2b26] transition-colors"
                      aria-label="Next products">
                <RightArrowIcon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: "/assets/product-cleanser.png",
                name: "ALYA SKIN CLEANSER.",
                alt: "ALYA SKIN CLEANSER premium skincare product",
                rounded: "rounded-2xl lg:rounded-[20px]",
                buttonBg: "bg-[#2d3b361a]"
              },
              {
                image: "/assets/product-sakura.png",
                name: "RITUAL OF SAKURA.",
                alt: "RITUAL OF SAKURA premium skincare product",
                rounded: "rounded-2xl lg:rounded-[20px]",
                buttonBg: "bg-[#2d3b361a]"
              },
              {
                image: "/assets/product-lotion.png",
                name: "THE BODY LOTION.",
                alt: "THE BODY LOTION premium skincare product",
                rounded: "rounded-2xl lg:rounded-[20px]",
                buttonBg: "bg-[#2d3b361a]"
              }
            ].map((product, index) => (
              <div key={index} className="group animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden rounded-2xl lg:rounded-[20px] hover:scale-105 transition-transform duration-500 shadow-lg hover:shadow-xl">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className={`w-full h-64 sm:h-80 lg:h-96 xl:h-[839px] object-cover ${product.rounded} group-hover:scale-110 transition-transform duration-700`}
                  />
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 lg:p-6">
                    <h3 className="font-normal text-base sm:text-lg lg:text-xl xl:text-[20px] text-white mb-2 lg:mb-4 tracking-[-0.5px] lg:tracking-[-1.00px]">
                      {product.name}
                    </h3>
                    
                    {/* Add to Cart Button */}
                    <button className={`w-8 h-8 sm:w-10 sm:h-10 ${product.buttonBg} rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:bg-[#2d3b36] hover:text-white transition-all duration-300 group-hover:scale-110`}
                            aria-label={`Add ${product.name} to cart`}>
                      <CartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] mb-16 lg:mb-20 xl:mb-24">
          <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[1146px] rounded-3xl overflow-hidden">
            <img
              src="/assets/banner-model.png"
              alt="Beautiful model showcasing skincare products in natural setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center pb-8 sm:pb-12 lg:pb-16">
              <div className="text-center px-8 sm:px-16 lg:px-24 xl:px-32 mb-4 sm:mb-6 lg:mb-8">
                <h2 className="font-normal text-white text-xl sm:text-2xl lg:text-4xl xl:text-5xl tracking-[-0.8px] lg:tracking-[-1.60px] leading-tight mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
                  Feel Beautiful Inside and Out<br />with Every Product.
                </h2>
                <button className="bg-white text-[#2d3b36] border border-[#2d3b36] rounded-[100px] h-10 sm:h-12 lg:h-[60px] w-32 sm:w-36 lg:w-[180px] text-base sm:text-lg lg:text-xl hover:bg-[#f0f6dd] transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-center font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] tracking-[-0.6px] lg:tracking-[-1.20px] leading-tight mb-8 sm:mb-12 lg:mb-16">
            Feel Beautiful Inside and Out<br />with Every Product.
          </h2>

          {/* Category Buttons - Responsive */}
          <div className="w-full flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 xl:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
              <button className="bg-[#2d3b36] text-white rounded-[100px] h-10 sm:h-12 lg:h-14 xl:h-[60px] px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base xl:text-lg whitespace-nowrap font-medium hover:bg-[#1f2b26] transition-colors flex-shrink-0">
                NEW ARRIVAL
              </button>
              <button className="bg-[#f8f9f2] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-[100px] h-10 sm:h-12 lg:h-14 xl:h-[60px] px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base xl:text-lg hover:bg-[#2d3b36] hover:text-white transition-colors whitespace-nowrap font-medium flex-shrink-0">
                CLEANSING
              </button>
              <button className="bg-[#f8f9f2] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-[100px] h-10 sm:h-12 lg:h-14 xl:h-[60px] px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base xl:text-lg hover:bg-[#2d3b36] hover:text-white transition-colors whitespace-nowrap font-medium flex-shrink-0">
                ACNE FIGHTER
              </button>
              <button className="bg-[#f8f9f2] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-[100px] h-10 sm:h-12 lg:h-14 xl:h-[60px] px-3 sm:px-4 lg:px-6 xl:px-8 text-xs sm:text-sm lg:text-base xl:text-lg hover:bg-[#2d3b36] hover:text-white transition-colors whitespace-nowrap font-medium flex-shrink-0">
                ANTI AGING
              </button>
            </div>
          </div>

          {/* New Arrival Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <ProductCard
              image="/assets/product-cleanser.png"
              name="ALYA SKIN CLEANSER."
              price="FROM $29.99"
                  alt="ALYA SKIN CLEANSER - Foaming Micellar Cleanser"
            />
            <ProductCard
              image="/assets/product-sakura.png"
              name="RITUAL OF SAKURA."
              price="FROM $27.99"
                  alt="RITUAL OF SAKURA - Premium skincare collection"
            />
            <ProductCard
              image="/assets/product-lotion.png"
              name="THE BODY LOTION."
              price="FROM $19.99"
                  alt="THE BODY LOTION - Nourishing body care"
            />
          </div>
        </div>

        <FAQ faqItems={faqItems} />
      </section>

      <Footer />
    </div>
  );
};