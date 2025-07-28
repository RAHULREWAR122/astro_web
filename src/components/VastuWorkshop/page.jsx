'use client'
import React, { useState, useEffect } from 'react';

export default function LogicalVastuWorkshop() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 45,
    seconds: 23
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
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}>
        </div>
      </div>
      <div className="relative w-full px-4 py-16">
    
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-[45px] font-bold text-[#e9bb65] mb-4">
           WHY Join the Vedic Astrology Workshop<br />
             by - Acharya Rajnish Pandey?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-[20px] mb-16 max-w-6xl mx-auto">
          <div className="flex items-start gap-3 ">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-[#e9bb65] font-semibold">Learn Astrology From </span>
              <span className="text-[#e9bb65] font-semibold">Basics to Kundli Mastery </span>
              <span className="text-white"> In </span>
              <span className="text-white font-bold"> Just 45 Days </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-[#e9bb65] font-semibold">Interactive & Practical Approach</span>
              <span className="text-white"> To </span>
              <span className="text-white font-bold">Understanding Jyotish Shastra</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-white">Discover </span>
              <span className="text-[#e9bb65] font-semibold">The Hidden Connection Between Planets, Karma & Life Events</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-white">Master the Art of Reading </span>
              <span className="text-[#e9bb65] font-semibold">Birth Charts for Accurate Life Predictions.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-white">Get Powerful </span>
              <span className="text-[#e9bb65] font-semibold">Vedic Remedies for Career, Health & Relationships.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-[#e9bb65] text-black p-1 rounded text-sm font-bold mt-1">📚</div>
            <div>
              <span className="text-white">Start Your </span>
              <span className="text-[#e9bb65] font-semibold">Astrology Consultation </span>
              <span className="text-white"> Practice & Guide Others</span>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[30px] font-bold text-white mb-8">
            Limited Seats Available – Secure Your Spot Now!
          </h2>
          
          <button className="bg-[#e9bb65] zoom-anim btn_shadow cursor-pointer text-black font-bold py-4 px-12 rounded-lg text-xl mb-8  ">
            ENROLL NOW <span className='line-through'>₹999/</span> ₹99/-
          </button>
          
          <p className="text-[#fff] animate-opacity text-sm md:text-[17px] mb-8">
            (Limited Time Offer – {`Don’t`} Miss Out!)
          </p>
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