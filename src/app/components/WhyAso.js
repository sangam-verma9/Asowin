'use client';

import React from 'react';
import { Box } from 'lucide-react';

const WhyASO = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - 35% */}
        <div className="w-full lg:w-[35%] bg-[#E7EEF9] px-6 py-16 md:py-24 lg:px-12">
          <div className="max-w-[400px] mx-auto lg:mx-0">
            {/* App Store Icon */}
            <div className="w-full aspect-square mb-8">
              <img 
                src="/whyaso.png"
                alt="App Store Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[70px] font-semibold text-[#2B323E] mb-6">
              Why ASO?
            </h2>
            
            <p className="text-[#494949] text-[14px] font-normal leading-relaxed">
              Your App's key to top charts is here. ASO can help boost discoverability, increase organic installs and conversion rates. 

              Our excellent team of over 100+ experts are here to help your App reach the brand recognition you could've only imagined.
            </p>
          </div>
        </div>

        {/* Right Column - 65% */}
        <div className="w-full lg:w-[65%] px-6 py-16 md:py-24 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Higher Ranks Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-orange-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                Higher Ranks
              </h3>
              <p className="text-gray-600">
                Achieve top positions in app store search results and category rankings to maximize visibility.
              </p>
            </div>

            {/* Top Charts Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-pink-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                Top Charts
              </h3>
              <p className="text-gray-600">
                Secure a spot in trending or top apps to drive credibility and downloads.
              </p>
            </div>

            {/* Increased Search Visibility Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-yellow-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                Increased Search Visibility
              </h3>
              <p className="text-gray-600">
                Improve keyword targeting to ensure your app is easily discoverable by the right audience.
              </p>
            </div>

            {/* More Downloads Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                More Downloads
              </h3>
              <p className="text-gray-600">
                Boost organic installs by making your app appealing and relevant to users.
              </p>
            </div>

            {/* New Target Users Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-cyan-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                New Target Users
              </h3>
              <p className="text-gray-600">
                Reach untapped demographics by optimizing for localized and niche markets.
              </p>
            </div>

            {/* Increased Revenue Card */}
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-rose-100 rounded-full mb-6 flex items-center justify-center">
                <Box className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-[28px] font-normal text-gray-900 mb-4">
                Increased Revenue
              </h3>
              <p className="text-gray-600">
                Drive higher ROI by converting more users into loyal customers organically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyASO;