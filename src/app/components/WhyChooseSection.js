"use client"; // Ensures client-side rendering

import React from "react";
import Image from "next/image";

const WhyChooseSection = () => {
  const features = [
    {
      title: "10+ Years of Excellence:",
      description: "A decade of industry expertise and proven results."
    },
    {
      title: "Customer-Centric Philosophy:",
      description: "Exceptional customer service is the cornerstone of everything we do."
    },
    {
      title: "Vision-Focused Growth:",
      description: "Leveraging innovative AI tools to redefine app marketing success."
    },
    {
      title: "Global Presence:",
      description:
        "Headquartered in Fremont, California, with offices worldwide, offering region-specific strategies."
    },
    {
      title: "Comprehensive Solutions:",
      description:
        "From ASO to reputation management, our end-to-end services ensure your app achieves its full potential."
    },
    {
      title: "Team Strength:",
      description: "Over 100 experts who live and breathe mobile app growth."
    }
  ];

  return (
    <div className="relative w-full min-h-screen mb-[50px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/whyus.png')" }} 
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 mt-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 ">
              Why Choose ASOWin?
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              We offer advanced AI-focused App Optimization solutions to help your app boost core metrics in the most advanced way.
            </p>
          </div> 


          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                {/* Icon Container */}
                <div className="mb-4 w-6 h-6 flex items-center justify-center">
                  <Image src="/Union.png" alt="Icon" width={48} height={48} /> {/* ✅ Next.js Image Optimization */}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-normal mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-[#000000]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
