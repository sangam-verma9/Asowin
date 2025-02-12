import React from "react";

const Star = ({ color }) => (
  <svg 
    className="absolute top-4 right-4 w-4 h-4" 
    viewBox="0 0 24 24" 
    fill={color}
  >
    <path d="M12 0L14.645 8.355L23 11L14.645 13.645L12 22L9.355 13.645L1 11L9.355 8.355L12 0Z" />
  </svg>
);

const Stats = () => {
  return (
    // Main container with background image
    <div 
      className="w-full lg:h-[35.36vw] lg:max-h-[679px] min-h-[800px] md:min-h-[600px] lg:min-h-[700px] relative overflow-hidden"
      style={{
        backgroundImage: "url('/statsbg.png')", // Reference image from the public folder
        backgroundColor: "#FFF6EA",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Content container */}
      <div className="container mx-auto h-full px-4 py-8 lg:py-0">
        <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[39px] font-medium font-serif text-[#1A1A1A] mb-6 px-4">
            Rank Highest For Your Keywords
          </h2>
          
          <p className="text-[#1A1A1A] font-normal text-base md:text-lg lg:text-xl mb-8 lg:mb-12 max-w-3xl mx-auto px-4">
            Some incredible numbers witnessed across the globe for multiple clients in different locations, across different App categories:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 justify-items-center px-4">
            {/* Conversion Rate Card */}
            <div className="bg-white w-full md:w-[285px] h-[273px] rounded-lg shadow-lg relative flex flex-col items-center justify-center p-6">
              <Star color="#3B82F6" />
              <div className="text-6xl md:text-7xl lg:text-[92px] font-medium font-inter text-blue-500 mb-4 leading-none">
                37%
              </div>
              <p className="text-gray-600 font-manrope text-sm lg:text-[15px] text-center">
                Average Conversion Rate<br />
                for all Clients Combined
              </p>
            </div>
            
            {/* Keywords Ranked Card */}
            <div className="bg-white w-full md:w-[285px] h-[273px] rounded-lg shadow-lg relative flex flex-col items-center justify-center p-6">
              <Star color="#EC4899" />
              <div className="text-6xl md:text-7xl lg:text-[92px] font-medium font-inter text-pink-500 mb-4 leading-none">
                136
              </div>
              <p className="text-gray-600 font-manrope text-sm lg:text-[15px] text-center">
                Keywords Ranked #1
              </p>
            </div>
            
            {/* Downloads Card */}
            <div className="bg-white w-full md:w-[285px] h-[273px] rounded-lg shadow-lg relative flex flex-col items-center justify-center p-6 md:col-span-2 lg:col-span-1">
              <Star color="#EAB308" />
              <div className="text-6xl md:text-7xl lg:text-[92px] font-medium font-inter text-yellow-500 mb-4 leading-none">
                10
              </div>
              <p className="text-gray-600 font-manrope text-sm lg:text-[15px] text-center">
                Million Downloads Delivered<br />
                for all Clients Combined
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
