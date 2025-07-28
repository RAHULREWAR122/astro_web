'use client'
import React, { useState, useEffect } from 'react';

 const VastuBonousBooks = ()=> {
  const [timeLeft, setTimeLeft] = useState({
    hours: 15,
    minutes: 30,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bonuses = [
    {
      id: 1,
      title: "Tarot Card Reading Course",
      subtitle: " From Basics to Advanced – Learn to decode life through cards",
      image: "/images/books/tarot_card__.png",
      price: "₹9,000/-",
      bgColor: "from-yellow-600 to-orange-700"
    },
    {
      id: 2,
      title: "Numerology Course", 
      subtitle: "Master the science of numbers to unlock your destiny",
      image: "/images/books/numerology__.png",
      price: "₹25,000/-",
      bgColor: "from-red-600 to-red-800"
    },
    {
      id: 3,
      title: " Vastu Shastra Course",
      subtitle: "Deep Vedic knowledge to harmonize your home & office",
      image: "/images/books/Vastu__.png", 
      price: "₹35,000/-",
      bgColor: "from-yellow-600 to-orange-700"
    },
    {
      id: 4,
      title: "Lal Kitab Astrology Course",
      subtitle: "Powerful remedies & predictions through Lal Kitab",
      image: "/images/books/lal_kitab.png",
      price: "₹18,000/-",
      bgColor: "from-yellow-600 to-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-700 to-red-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 lg:visible hidden">
        <img src='/images/bg_stars_img.png' className="absolute inset-0"/>
       </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#e9bb65] lg:text-[42px] mb-4">
            Other Courses Offered by Acharya Rajnish Pandey
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-[24px] text-[#fff] font-semibold">
           Expand your spiritual journey with these transformative programs:
          </h2>
          <div className="animate-opacity text-4xl md:text-5xl lg:text-[42px] font-bold text-[#e9bb65] mt-4">
            FREE!
          </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-8">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-[#212121]  md:h-auto h-auto max-w-[380px] bg-opacity-60 rounded-[24px] p-6 ">
              <div className="flex justify-center items-center mb-4">
                <h3 className="text-[#fff1db]  font-bold text-lg">🎁 {bonus.title}</h3>
              </div>
              
              <div className="text-center">
                <p className="text-[#e9bb65] text-[20px] text-sm mb-4 font-medium">{bonus.subtitle}</p>
                
                <div className="mb-4">
                  <div className={`p-4 rounded-lg inline-block`}>
                    <img 
                      src={bonus.image} 
                      alt={bonus.subtitle}
                      className="w-42 h-52 object-cover rounded"
                    />
                  </div>
                </div>
                
                <div className="bg-[#e9bb65]  text-[22px] cursor-pointer text-black font-bold py-2 px-10 rounded inline-block">
                  Price {bonus.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl lg:text-[35px] font-bold text-[#e9bb65] mb-2">
           All courses are certified and include practical training, live sessions, and PDF manuals
          </h3>
          <p className="text-[#ffffff] md:text-[30px] text-lg  font-semibold">
            Limited Seats Available – Secure Your Spot Now!
          </p>
        </div>

        <div className="text-center mb-6">
          <button className="bg-[#e9bb65] zoom-anim cursor-pointer text-black font-bold text-lg md:text-xl px-8 md:px-12 py-4 rounded-lg shadow-md transform duration-300 shadow-[#e9bb65]">
            ENROLL NOW <span className='line-through'>₹999/-</span> ₹99/-
          </button>
         <p className="animate-opacity mt-4 font-semibold text-xs md:text-[17px] text-[#fff] mb-2">
              (First 100 People Will Get Exclusive Bonuses & Offers)
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

export default VastuBonousBooks;