import React from 'react';
import CartIcon from '../svg/cart-large-2-svgrepo-com 5.svg?react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  alt: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  name, 
  price, 
  alt, 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-2xl lg:rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-64 sm:h-80 lg:h-96 xl:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-normal text-lg sm:text-xl lg:text-2xl text-[#2d3b36] tracking-[-0.5px] lg:tracking-[-1.00px] mb-2 lg:mb-3">
          {name}
        </h3>
        <p className="font-normal text-sm sm:text-base lg:text-lg text-[#2d3b36] tracking-[-0.4px] lg:tracking-[-0.80px] mb-4 lg:mb-6">
          {price}
        </p>
        <button 
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#f8f9f2] rounded-[8px] lg:rounded-[10px] flex items-center justify-center hover:bg-[#2d3b36] hover:text-white transition-all duration-300 group-hover:scale-110"
          aria-label={`Add ${name} to cart`}
        >
          <CartIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </div>
  );
}; 