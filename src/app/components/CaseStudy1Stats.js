import Image from 'next/image';
import React from 'react';

const CaseStudy1Stats = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-[500px]">
      {/* Left Section */}
      <div className="w-full md:w-[45%] bg-zinc-900 p-6 md:p-12 flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold mb-1">#1</div>
            <div className="text-white text-[22px]">Rankings</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">Keyword</div>
            <div className="text-white text-[22px]">Success</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">Ai-Driven</div>
            <div className="text-white text-[22px]">Review Management</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[55%] bg-gray-200 p-6 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl">
          <Image
            src="/blogphone1.png"
            alt="Phone mockups group"
            width={800}
            height={600}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy1Stats;