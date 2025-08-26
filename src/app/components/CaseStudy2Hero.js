"use client";

import Image from "next/image";
import Navbar from "./Navbar";

const CaseStudy2Hero = () => {
  return (
    <div className="relative h-[450px] md:h-screen w-full overflow-hidden">
      <Navbar />
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/blogbg2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
        {/* Main Heading */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-40 text-center w-full max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-[2.8rem] lg:text-7xl font-serif text-white leading-normal sm:leading-relaxed md:leading-tight lg:leading-snug">
            Launching and Optimizing 
            <br className="hidden md:block" />
            Indiabulls Securities in India
          </h1>
        </div>

        {/* Client Name */}
        <div className="mt-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl transition-all duration-300">
            <span className="opacity-80">Client: </span>
            <span className="font-normal"> Indiabulls Securities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy2Hero;
