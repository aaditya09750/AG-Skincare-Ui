import React from 'react';
import BagIcon from '../svg/bag-4-svgrepo-com 1.svg?react';
import CartIcon from '../svg/cart-large-2-svgrepo-com 5.svg?react';
import PersonIcon from '../svg/person 1.svg?react';
import HeartIcon from '../svg/heart-svgrepo-com (1) 1.svg?react';
import AwardIcon from '../svg/award-svgrepo-com 1.svg?react';
import LeftArrowIcon from '../svg/left arrow 1.svg?react';
import RightArrowIcon from '../svg/right arrow 1.svg?react';
import HeadphoneIcon from '../svg/headphone-svgrepo-com 1.svg?react';

export const PixelPerfectLayout = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen max-w-screen-2xl mx-auto bg-[#eff5e1] overflow-x-hidden">
      {/* Header Section */}
      <header className="w-full sticky top-0 z-30 bg-[#eff5e1] flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-4 sm:py-6 gap-4 shadow-sm">
        <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-[#2d3b36] font-inter">SKINCARE</h1>
        <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-8" role="navigation" aria-label="Main navigation">
          <a href="#" className="font-normal text-sm sm:text-base md:text-xl text-[#2d3b36] font-inter tracking-tight hover:text-[#1a2a25] transition-colors">All Products</a>
          <a href="#" className="font-normal text-sm sm:text-base md:text-xl text-[#2d3b36] font-inter tracking-tight hover:text-[#1a2a25] transition-colors">Serum</a>
          <a href="#" className="font-normal text-sm sm:text-base md:text-xl text-[#2d3b36] font-inter tracking-tight hover:text-[#1a2a25] transition-colors">Sunscreen</a>
          <a href="#" className="font-normal text-sm sm:text-base md:text-xl text-[#2d3b36] font-inter tracking-tight hover:text-[#1a2a25] transition-colors">Bundle</a>
        </nav>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f8d8] transition-colors">
              <BagIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#2d3b36]" aria-label="Shopping cart" />
            </div>
            <span className="font-normal text-lg sm:text-xl md:text-2xl text-[#2d3b36] font-inter">Cart (1)</span>
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f8d8] transition-colors">
            <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#2d3b36]" aria-label="Wishlist" />
          </div>
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#f8fee5] rounded-full flex items-center justify-center hover:bg-[#f0f8d8] transition-colors">
            <PersonIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#2d3b36]" aria-label="User account" />
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32">
        {/* Hero Section */}
        <section className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-8 sm:pt-12 md:pt-16 lg:pt-24 gap-8 md:gap-12 lg:gap-16">
          <div className="max-w-md lg:max-w-lg xl:max-w-xl flex-1 flex flex-col gap-6 sm:gap-8">
            <p className="font-normal text-base sm:text-lg md:text-xl text-[#2d3b36] font-inter leading-relaxed">Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.</p>
            <button className="bg-[#2d3b36] text-[#eff5e1] rounded-full h-12 sm:h-14 w-36 sm:w-40 md:w-44 text-base sm:text-lg md:text-xl font-inter hover:bg-[#1a2a25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2">Shop Now</button>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="font-bold uppercase text-[#2d3b36] font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5vw] leading-tight tracking-tight text-center">GLOW<br />NATUR-ALLY</h2>
            <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-extrabold text-[#2d3b36] font-inter whitespace-nowrap leading-none text-center opacity-20">SKINCARE</h2>
          </div>
        </section>

        {/* Top right product image */}
        <section className="w-full flex justify-end px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-cover bg-center rounded-2xl shadow-lg" style={{backgroundImage: 'url("https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400")'}}></div>
        </section>

        {/* Central hero image */}
        <section className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Woman with skincare routine" className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover shadow-xl" />
        </section>

        {/* Content Section - Your Skin Deserves */}
        <section className="w-full bg-[#fefff4] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col gap-6 sm:gap-8">
          <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] font-inter leading-tight">YOUR SKIN DESERVES<br />THE BEST CARE.</h2>
          <p className="font-normal text-sm sm:text-base md:text-lg text-[#525349] font-inter leading-relaxed max-w-2xl">Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.</p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center bg-[#fefff4] text-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 py-3 border border-solid border-[#2d3b36] text-base sm:text-lg md:text-xl font-normal">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2d3b36] rounded-lg mr-3 sm:mr-4"></div>
              Why Our Products
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
              {["Bio Ingredients", "Everything Natural", "All Handmade"].map((title, i) => (
                <div key={title} className="flex items-start gap-4 sm:gap-6 md:gap-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#2d3b36] font-inter flex-shrink-0">{`0${i+1}`}</h3>
                  <div>
                    <h4 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#2d3b36] font-inter">{title}</h4>
                    <p className="mt-2 sm:mt-3 md:mt-4 font-normal text-sm sm:text-base md:text-lg text-[#525349] font-inter leading-relaxed">{[
                      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
                      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
                      "Made with love and care. Just for you. Give your skin the tender loving care it deserves."
                    ][i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Award section image */}
        <section className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <img src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Skincare model with natural lighting" className="w-full max-w-2xl sm:max-w-3xl rounded-3xl object-cover shadow-xl" />
        </section>

        {/* Best Selling Products Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
            <div className="inline-flex items-center bg-[#fefff4] text-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 py-3 border border-solid border-[#2d3b36] text-base sm:text-lg md:text-xl font-normal">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2d3b36] rounded-lg mr-3 sm:mr-4"></div>
              Best Selling Products
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-normal text-base sm:text-lg md:text-xl text-[#2d3b36] font-inter">SINCE 2001</span>
              <span className="font-normal text-base sm:text-lg md:text-xl text-[#2d3b36] font-inter">LEARN MORE</span>
            </div>
          </div>
          <h2 className="text-center font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] font-inter leading-tight">Skincare That Brings Out<br />Your Natural Radiance</h2>
        </section>

        {/* Product Cards Grid */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {[{
            img: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "ALYA SKIN CLEANSER.",
            price: "FROM $29.99",
            bg: "bg-[#2d3b361a]"
          }, {
            img: "https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "RITUAL OF SAKURA.",
            price: "FROM $27.99",
            bg: "bg-[#2d3b36]"
          }, {
            img: "https://images.pexels.com/photos/3685534/pexels-photo-3685534.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "THE BODY LOTION.",
            price: "FROM $19.99",
            bg: "bg-[#2d3b361a]"
          }].map((product, i) => (
            <article key={product.title} className="relative flex flex-col items-center group">
              <img src={product.img} alt={product.title} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-[#fefff4] rounded-xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
                <div>
                  <h3 className="font-normal text-base sm:text-lg md:text-xl text-[#2d3b36] font-inter">{product.title}</h3>
                  <p className="font-normal text-sm sm:text-base text-[#2d3b3680] font-inter mt-1 sm:mt-2">{product.price}</p>
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${product.bg} rounded-lg flex items-center justify-center hover:scale-105 transition-transform`}>
                  <CartIcon className="w-6 h-6 sm:w-7 sm:h-7" aria-label="Add to cart" />
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Banner Section */}
        <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
          <img src="https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Model with skincare products banner" className="w-full max-w-4xl lg:max-w-5xl rounded-3xl object-cover shadow-xl" />
          <div className="w-full max-w-2xl sm:max-w-3xl mx-auto -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 bg-gradient-to-t from-[#2d3b36] to-transparent rounded-3xl flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-24">
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#fefff4] font-inter leading-tight text-center px-4 sm:px-6">Feel Beautiful Inside and Out<br />with Every Product.</h2>
            <button className="mt-6 sm:mt-8 bg-[#fefff4] text-[#2d3b36] rounded-full h-12 sm:h-14 w-36 sm:w-40 md:w-44 text-base sm:text-lg md:text-xl font-inter hover:bg-[#f0f8d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fefff4] focus:ring-offset-2">Shop Now</button>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 flex flex-col gap-6 sm:gap-8">
          <h2 className="text-center font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] font-inter leading-tight mb-6 sm:mb-8">Feel Beautiful Inside and Out<br />with Every Product.</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button className="bg-[#2d3b36] text-[#fefff4] rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-inter hover:bg-[#1a2a25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2">NEW ARRIVAL</button>
            <button className="bg-[#fefff4] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-inter hover:bg-[#f0f8d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2">CLEANSING</button>
            <button className="bg-[#fefff4] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-inter hover:bg-[#f0f8d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2">ACNE FIGHTER</button>
            <button className="bg-[#fefff4] text-[#2d3b36] border border-solid border-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-inter hover:bg-[#f0f8d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2">ANTI AGING</button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Customer support image */}
          <div className="flex-1 flex flex-col items-center">
            <img src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Customer support representative" className="w-full max-w-md sm:max-w-lg rounded-3xl object-cover shadow-lg" />
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2d3b36] rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2d3b36]"></div>
                  <HeadphoneIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-label="Customer support" />
                </div>
              </div>
              <div className="bg-[#eff5e1] rounded-full px-6 sm:px-8 py-3 sm:py-4">
                <p className="font-normal text-base sm:text-lg md:text-xl text-[#2d3b36] font-inter">24/7 We're Here<br />to Help You</p>
              </div>
            </div>
          </div>
          {/* FAQ Content */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center bg-[#fefff4] text-[#2d3b36] rounded-full h-12 sm:h-14 px-6 sm:px-8 py-3 border border-solid border-[#2d3b36] text-base sm:text-lg md:text-xl font-normal">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2d3b36] rounded-lg mr-3 sm:mr-4"></div>
              Frequently Asked Question
            </div>
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2d3b36] font-inter leading-tight">Answers to Your<br />Skincare Questions, All<br />in One Place.</h2>
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-lg sm:max-w-xl">
              {["Are your products cruelty-free?", "Are your products safe for sensitive skin?", "What's your return policy?", "Do you ship internationally?", "How do I choose the right product?"].map((q, i) => (
                <details key={q} className="border border-solid border-[#2d3b36] rounded-lg p-4 sm:p-6 hover:bg-[#f8fee5] transition-colors">
                  <summary className="text-base sm:text-lg md:text-xl font-normal text-[#2d3b36] font-inter cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d3b36] focus:ring-offset-2 rounded">{q}</summary>
                  {i === 0 && <p className="mt-3 sm:mt-4 text-sm sm:text-base font-normal text-[#525349] font-inter leading-relaxed">Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.</p>}
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2d3b36] text-[#e7e8e0] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 overflow-hidden mt-12 sm:mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 md:gap-0 relative z-10">
          <div>
            <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter leading-tight">Join The Skincare<br />Community Now.</h2>
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32">
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Facebook</a>
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Instagram</a>
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Youtube</a>
            </div>
          </div>
          <div className="text-right">
            <h3 className="font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter">Get in Touch</h3>
            <p className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter mt-1 sm:mt-2 leading-tight">contact.skincare.com</p>
            <div className="flex justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32">
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="font-normal text-base sm:text-lg md:text-xl text-[#eff5e1] font-inter tracking-tight hover:text-white transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
        {/* Large background text */}
        <div className="absolute bottom-0 left-0 font-bold text-[#35433e] text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] font-inter whitespace-nowrap leading-none opacity-40 pointer-events-none select-none w-full text-center">SKINCARE</div>
      </footer>
    </div>
  );
};