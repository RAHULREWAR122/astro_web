'use client'
import React, { useState, useEffect } from 'react';

 const Footer = ()=> {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 47,
    seconds: 27
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 rounded-t-2xl  left-0 right-0 bg-black border-t-2 border-white z-50 shadow-2xl">
      <div className="container mx-auto py-3 sm:py-4 md:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="text-white flex gap-2 md:block items-center">
              <p className="text-base sm:text-lg font-semibold">Registration Closing in</p>
               <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-white text-sm sm:text-base">Next</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-yellow-400 text-xl sm:text-2xl font-bold">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span className="text-white text-sm sm:text-base">Min</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-yellow-400 text-xl sm:text-2xl font-bold">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <span className="text-white text-sm sm:text-base">Sec</span>
              </div>
            </div> 
            </div>
           
          </div>

          <div className="w-full sm:w-auto flex justify-center items-center">
            <button className="zoom-anim btn_shadow inset-0 w-[90%] md:w-[240px] font-bold bg-[#e9bb65] cursor-pointer text-black text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-2xl transform transition-all duration-300 min-w-[160px] sm:min-w-[200px]">
              Register Now
            </button>
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

export default Footer