'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Globe, Clock, Info } from 'lucide-react';
import Image from 'next/image';
export default function Hero() {
  return (
    <div className="h-auto  relative overflow-hidden">
      <div  className="absolute inset-0 opacity-6 ">
        <Image src={'/images/hero_bg.png'} fill className='absolute' alt='hero'/>
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#e9bb65] rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#e9bb65] rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-[#e9bb65] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-[#e9bb65] rounded-full"></div>
      </div>
      <div className="relative z-10 min-h-screen flex items-center py-10  ">
        <div className=" px-4 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-[40px] font-bold text-[#e9bb65] mb-4">
             Join Acharya Rajnish Pandey’s Transformative Vedic Astrology Masterclass
            </h1>
          </div>
          <div className=" flex justify-center items-start flex-wrap">
            <div className="text-white space-y-8 md:w-[45vw]  mr-5">
              <div className="space-y-6">
                <h2 className="text-lg md:text-4xl lg:text-[42px] font-bold leading-tight text-center">
                  Learn Powerful Vedic Astrology Techniques & Instantly Understand Your 
                  <span className="text-[#e9bb65] underline decoration-[#e9bb65]">{` Life’s ,`}</span>
                  <span className="text-[#e9bb65] underline decoration-[#e9bb65]">{`True Path!`}</span>
                </h2>
                
                <p className="text-lg text-center md:text-xl text-gray-300 leading-relaxed">
                  Perfect For Beginners & Spiritual Seekers Who Want To Effortlessly Attract 
                  Clarity, Confidence, Success & Inner Peace
                </p>
              </div>

              <div className="space-y-4 flex justify-center items-center flex-col ">
                <button className="bg-[#e9bb65] zoom-anim btn_shadow cursor-pointer  text-black font-bold text-xl px-8 py-4 rounded-lg shadow-2xl transform  transition-all duration-300 w-full md:w-auto">
                  ENROLL NOW at Just  <span className='line-through'>999</span> ₹99
                 
                </button>
                <p className="text-sm animate-opacity text-gray-400 text-center md:text-center">
                  (First 100 Registrants Get Bonus PDFs & Remedies – Limited Time Offer!)
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-cenyter  h-full md:mt-0 mt-5">
              <div className="relative w-full">
                  <div className="flex items-center w-full justify-center">
                    <div className="relative w-full">
                      <img 
                        src="/images/astro_img.jpeg"
                        alt="Divya Chhabra"
                        className="w-full h-full  max-h-[300px] md:w-[360px] rounded-lg object-cover border-4 border-[#e9bb65]"
                      />
                    </div>
                  </div>
             
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 py-5 text-white bg-black bg-opacity-50 rounded-lg p-3">
                      <Calendar className="w-5 h-5 text-[#e9bb65]" />
                      <div>
                        <p className="text-sm font-semibold">Date</p>
                        <p className="text-sm">1 Sept 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white  bg-black bg-opacity-50 rounded-lg p-3">
                      <Globe className="w-5 h-5 text-[#e9bb65]" />
                      <div>
                        <p className="text-sm font-semibold">Language</p>
                        <p className="text-sm">Hindi</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-white py-5 bg-black bg-opacity-50 rounded-lg p-3">
                      <Clock className="w-5 h-5 text-[#e9bb65]" />
                      <div>
                        <p className="text-sm font-semibold">Duration</p>
                        <p className="text-sm">2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white bg-black bg-opacity-50 rounded-lg p-3">
                      <Info className="w-5 h-5 text-[#e9bb65]" />
                      <div>
                        <p className="text-sm font-semibold">Time</p>
                        <p className="text-sm">8:00 pm </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <style jsx>{`
       @keyframes zoom-in-out {
          0% { 
            opacity: 1; 
            transform: translateX(14px) ; 
          }
          50% { 
            opacity: 1; 
            transform: translateX(0) ; 
          }
          100% { 
            opacity: 1; 
            transform: translateX(14) ; 
          }
        }
        @keyframes opacity-anim {
          0% { 
            transform:  opacity(1); 
          }
          50% { 
            transform:  opacity(0); 
          }
          100% { 
            transform: opacity(1); 
          }
        }
        .animate-opacity {
          animation: opacity-anim .8s ease-in-out infinite;
        }
        .zoom-anim {
          animation: zoom-in-out 1s ease-in-out infinite;
        }
       
      `}</style>
    </div>
  );
}