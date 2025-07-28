'use client'
import React from 'react';

export default function ModulePackegs() {
   
  const cards = [
    {
      title: "Consulted 1,00,000+ Clients",
     
    },
    {
      title: "Trained 1,000+ Students",
     
    },
    {
      title: "Founder – Rishi Darshan Sansthan",
    
    },
    {
      title: "Vedic Pooja Expert",
     
    }
  ];  
   
  return (
    <div className="min-h-screen  bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative ">
      <div className="absolute lg:visible hidden inset-0 opacity-20 ">
        <img src='/images/bg_stars_img.png' className="absolute inset-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8 z-50 mt-[-130px] mb-[30px]">
        {cards.map((card, index) => (
          <div key={index} className="relative mt-8">
            <div className="hexagon-container relative">
              <div className="hexagon btn_shadow ">
                <div className="hexagon-inner bg-black/90">
                  <div className="hexagon-content  flex flex-col items-center justify-center text-center p-4">
                      <>
                        <div className="text-white text-sm font-bold mb-1">{card.title}</div>
                      </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-[45px] font-bold text-[#e9bb65] mb-8">
            What Will You Learn?
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 1</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
              <img src='/images/module_icons/1.jpeg' className='rounded-full'/>
            </div>
            <div className="text-white text-center text-sm md:text-[18px] leading-relaxed">
             Introduction to Vedic Astrology
            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
            <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 2</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/2.jpg' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
              12 Houses & Their Significance
            </div>
          </div>

           <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
              <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 3</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/3.jpg' className='rounded-full md:h-[60px]'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
              Planets & Their Effects
            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 4</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/4.jpg' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
               Zodiac Signs & Personality
            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 5</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/5_.jpg' className='rounded-[100%] md:h-[65px]'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
               How to Read a Kundli (Birth Chart)
            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 6</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/6.webp' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
               Dasha System & Timing Events

            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 7</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/7.png' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
               Vedic Remedies & Pooja Practices

            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 8</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
               <img src='/images/module_icons/8.webp' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
             Career as a Professional Astrologer
            </div>
          </div>

          <div className="bg-black bg-opacity-70 p-8 rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors">
             <div className="text-[#e9bb65] text-center text-xl md:text-[28px] font-bold mb-6">Module 9</div>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center">
              <img src='/images/module_icons/9.png' className='rounded-full'/>
            </div>
            <div className="text-white md:text-[18px] text-center text-sm leading-relaxed">
             Advanced Tips, Secrets & Case Studies
            </div>
          </div>

          
        </div>

        <div className="text-center">
          <button className="zoom-anim bg-[#e9bb65] cursor-pointer text-black font-bold py-4 px-12 rounded-lg text-xl  shadow-2xl">
            <div className="text-lg">ENROLL NOW at Just<span className='line-through'>₹999/</span> - ₹99/-</div>
          </button>
          <div className="text-[#fff] animate-opacity  text-sm md:text-[18px] mt-4">
            (First 100 People Will Get Exclusive Bonuses & Offers)
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
         .hexagon-container {
          width: 140px;
          height: 140px;
          position: relative;
        }
        
        .hexagon {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(0deg);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
        }
        
        .hexagon:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        
        .hexagon-inner {
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .hexagon-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        @media (max-width: 768px) {
          .hexagon-container {
            width: 120px;
            height: 120px;
          }
        } 

      `}</style>
    </div>
  );
}