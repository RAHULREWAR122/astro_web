'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <div className="bg-white text-white text-center py-3 relative border-b-2 border-red-500">
        <div className="animate-fade-in">
          <span className="font-bold text-red-700 md:text-xl text-md">REGISTER NOW</span>
          <span className="mx-2 text-[#000] md:text-xl text-md">& Get</span>
          <span className="text-orange-600 font-bold mx-2 md:text-xl text-md">Vedic Remedies</span>
          <span className='text-[#000] md:text-xl text-md'>PDF - </span>
          <span className="text-green-400 font-bold text-4xl mx-2 animate-bounce">FREE!</span>
          <span className="text-2xl ml-2">🎁</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-anim {
          0% { 
            transform:  scaleX(1); 
          }
          50% { 
            transform:  scaleX(1.04); 
          }
          100% { 
            transform: scaleX(1); 
          }
        }
        .animate-fade-in {
          animation: scale-anim 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;