'use client';

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const CaseStudy1Hero = () => {
  return (
    <div className="relative h-[450px] md:h-screen w-full overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/blogbg1.png"
          alt="" // decorative background → keep empty alt
          fill
          priority // preload if it's part of LCP
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
        {/* Main Heading Container */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            {/* First Line */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
              How ASOWin Manages Reputation
            </h1>
            {/* Second Line */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight">
              And ASO Rankings For Pepperfry
            </h1>
          </div>
        </div>

        {/* Client Name */}
        <div className="mt-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl transition-all duration-300">
            <span className="opacity-80">Client:</span>
            <span className="font-normal">Pepperfry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy1Hero;