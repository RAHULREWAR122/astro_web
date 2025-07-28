'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is this course about?",
      answer: "This course is a complete guide to Vedic Astrology, covering essential topics like planets, houses, zodiac signs, dashas, chart reading, remedies, and accurate predictions — all taught in a simple and practical way."
    },
    {
      question: "Is this course live or pre-recorded?",
      answer: "This is a 100% live course, conducted via Zoom. You will attend real-time classes and interact directly with Acharya Rajnish Pandey."
    },
    {
      question: "Do I need any prior knowledge of astrology to join?",
      answer: "No prior knowledge is required! The course is beginner-friendly and gradually moves to intermediate and advanced levels."
    },
    {
      question: "How will I access the live classes after enrollment?",
      answer: "After enrolling, you'll receive a Zoom link and class schedule via email and WhatsApp. All sessions are hosted live at scheduled timings."
    },
    {
      question: "Will I get placement or work opportunities after the course?",
      answer: " Yes! Top-performing students will be given a chance to get listed on astrology apps and platforms for professional consultation opportunities."
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          fill
          src="/images/hero_bg.png"
          alt="Workshop Background"
          style={{backgroundRepeat :'repeat-x'}}
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-80 h-80 border border-gray-600/30 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-gray-600/30 rounded-full opacity-15 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-gray-500/20 rounded-full opacity-10"></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 border border-gray-500/20 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-gray-400/30 rounded-full opacity-15"></div>

        <div className="absolute top-1/2 right-10 w-24 h-24 border border-gray-400/25 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-10 w-20 h-20 border border-gray-400/30 rounded-full opacity-25"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 md:space-y-4 mb-12 md:mb-16">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-600/40 rounded-lg bg-black/40 backdrop-blur-md shadow-xl"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-gray-700/30 transition-all duration-300 rounded-lg"
                >
                  <span className="text-base md:text-lg font-medium pr-4 text-white">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300">
                    {openItem === index ? (
                      <Minus className="w-full h-full text-gray-400 transform rotate-0" />
                    ) : (
                      <Plus className="w-full h-full text-gray-400" />
                    )}
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-4 md:px-6 md:pb-5 border-t border-gray-600/40">
                    <div className="pt-4 text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Limited Seats Available – Secure Your Spot Now!
            </h3>

            <div className="mb-6 md:mb-8 animate-fade">
              <button
                className="shadow-lg btn_shadow md:w-[450px] text-black font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg text-base md:text-lg transition-all duration-300 transform cursor-pointer"
                style={{
                  background: 'linear-gradient(60deg, #e3ba68, #e3ba68, #e3ba68, #e3ba68, #e3ba68)'
                }}
              >
                ENROLL NOW <span className="line-through ml-1">₹999/-</span> ₹99/-
              </button>
            </div>

            <p className="animate-opacity font-semibold text-xs md:text-sm text-gray-400 mb-20 md:mb-6">
              (First 100 People Will Get Exclusive Bonuses & Offers)
            </p>
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
            opacity: 1; 
          }
          50% { 
            opacity: 0; 
            
          }
          100% { 
            opacity: 1; 
          }
        }
        .animate-fade {
          animation: zoom-in-out 1s ease-in-out infinite;
        }

        .animate-opacity {
          animation: opacity-anim  1s ease-in-out infinite;
        }

      `}</style>
    </div>
  );
};

export default FAQ;