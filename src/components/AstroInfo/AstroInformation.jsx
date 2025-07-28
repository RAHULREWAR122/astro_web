'use client'
import React from 'react';

const AstroInformation = () => {
  return (
    <div className="md:h-[screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">

      <div className=" py-8 md:py-16 relative z-10 ">
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-8 lg:gap-16">
          <div className="relative flex justify-center items-start  flex-col">
            <div className="overflow-hidden rounded-full md:h-auto md:w-auto max-h-[380px] max-w-[380px]">
              <img
                src="/images/astro_img.jpeg"
                alt="Divvya Chhabra"
                className="h-full w-full object-fit"
              />
            </div>
            <div className='w-full justify-center items-center md:mt-[-40px] mt-[-18px] z-20'>
              <div className='bg-[#213E53] w-[70%] justify-self-center  p-3 shadow-md shadow-gray-600 rounded-md flex justify-center items-center flex-col'>
                <span className='text-[#e9bb75] font-semibold md:text-[16px] text-sm'>Acharya Rajnish Pandey</span>
                <span className='text-white font-semibold  md:text-[18px] text-lg '>Vedic Expert</span>
              </div>
            </div>
            <div className="mt-[-10px] bg-[#212121] backdrop-blur border-2 border-[#e9bb75] rounded-2xl p-6 max-w-sm mx-auto">

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#e9bb75] rounded-full"></div>
                  <span className="text-white text-sm">Founder of Shree Rishi Darshan Jyotish Vastu Sansthan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#e9bb75] rounded-full"></div>
                  <span className="text-white text-sm">Mentored 1000+ Students in Vedic Astrology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#e9bb75] rounded-full"></div>
                  <span className="text-white text-sm">Awarded by VP of India, Governor & CM of Rajasthan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#e9bb75] rounded-full"></div>
                  <span className="text-white text-sm">Expert in Vedic Remedies, Kundli Analysis & Pooja Science</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mt-6 md:px-2 px-3">
            <h1 className="text-white text-2xl md:text-3xl font-light mb-4 text-[24px] ">
              Meet Your Mentor
            </h1>
            <h2 className="text-[#e9bb75] text-4xl md:text-[40px] font-bold mb-8">
              Acharya Rajnish Pandey
            </h2>

            <div className="space-y-3 text-white">
              <p className="text-lg text-[18px] leading-relaxed">
                <span className="text-[#e9bb75] font-semibold">Acharya Rajnish Pandey</span> is globally renowned for his expertise in{' '}
                <span className="text-[#e9bb75] font-semibold">Vedic Astrology, Vastu, Palmistry & Healing</span>. With decades of experience and thousands of accurate predictions, he has become a trusted name in the world of astrology. His remedies are not only effective but deeply rooted in ancient Vedic knowledge.
              </p>

              <p className="text-lg text-[18px] leading-relaxed">
                He has provided consultations to{' '}
                <span className="text-[#e9bb75] font-semibold">over 1 Lakh individuals</span>, resolving issues related to family, career, education, relationships, and business through personalized birth chart analysis and astrological guidance.
              </p>

              <p className="text-[18px] leading-relaxed">
                His insights have been featured on{' '}
                <span className="text-[#e9bb75] font-semibold">top Indian news channels</span>, and his articles have been published in leading newspapers. He has also been{' '}
                <span className="text-[#e9bb75] font-semibold">honored by dignitaries</span> including the{' '}
                <span className="text-[#e9bb75] font-semibold">Vice President of India, Governor, and Chief Minister of Rajasthan</span> for his contributions to the field of astrology.
              </p>

              <p className="text-[18px] leading-relaxed">
                Acharya Rajnish is also the{' '}
                <span className="text-[#e9bb75] font-semibold">Founder of Shree Rishi Darshan Jyotish Vastu Sansthan</span>, where he has{' '}
                <span className="text-[#e9bb75] font-semibold">mentored 1000+ students</span> in Vedic astrology and traditional Pooja practices.
              </p>

            </div>

            <div className="mt-8 ">
              <button className="md:w-[50%] w-[96%] zoom-anim btn_shadow cursor-pointer bg-[#e9bb75] text-black text-xl font-bold py-4 px-8 rounded-lg transition-colors">
                ENROLL NOW ₹999/- ₹99/-
              </button>
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

export default AstroInformation;