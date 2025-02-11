'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CaseStudyAbout1 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* About Section - 40% */}
      <div className="w-full md:w-[40%] bg-[#EEE1DA] p-8 md:p-12 lg:p-16">
        <h2 className="text-4xl md:text-5xl lg:text-[50px] text-[#7D6D54] font-serif font-bold mb-6">
          ABOUT
        </h2>
        <p className="text-[#858285] lg:max-w-[400px] text-base font-medium md:text-[18px] leading-loose">
          Among India's top leading online marketplace for furniture and home decor is Pepperfry. Founded in July, 2011, the company is headquartered in Mumbai. As of 2023, Pepperfry has 43 company-owned studios and 142 studios operating under its franchise model across country.
        </p>

        {/* ASOWin Card */}
        <div className="bg-white rounded-xl p-6 mt-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#FDB124]">ASO<span className='text-[#FFD36F]'>Win</span></span> 
          </h3>
          <h4 className="text-xl md:text-2xl font-bold mb-1">
            Want to achieve similar results?
          </h4>
          <p className="text-[#434343] font-[13px] mb-4">Book a call with ASOWin</p>
          <button
            className="bg-[#FD5F03] text-white px-6 py-2 rounded-full text-sm hover:bg-[#FF6347] transition-colors"
            onClick={() => {
              router.push('/contact');
              window.scrollTo(0, 0);
            }}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>

      {/* Strategy Section - 60% */}
      <div className="w-full md:w-[60%] bg-white p-8 md:p-12 lg:p-16">
        <div className="flex items-center gap-3 mb-8">
          <img className='h-8 w-8' src="/bulb.png" alt="Strategy Icon" />
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#7D6D54] font-bold font-serif">
            STRATEGY
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">1. Comprehensive ASO:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Targeted high-volume and competitive keywords, driving Pepperfry to #1 rankings for the "Furniture" keyword on both App Store and Play Store leaving behind competitors like IKEA and Urban Ladder.</li>
              <li>Optimized metadata (titles, descriptions, keywords) to improve discoverability.</li>
              <li>A/B tested screenshots, icons, and promotional creatives to enhance conversion rates.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">2. Reputation Management:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Managed app reviews and ratings on both stores.</li>
              <li>Implemented AI-driven automated responses to reviews, ensuring timely and relevant feedback to users.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">3. Data-Driven Insights & Competitor Analysis:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Utilized AI and data-driven techniques to continuously monitor performance, identify gaps, and stay ahead of competitors.</li>
              <li>Regularly updated app creatives and metadata based on evolving market trends.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAbout1;