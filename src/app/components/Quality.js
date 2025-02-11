"use client";

import Image from "next/image";

const Quality = () => {
  return (
    <div
      className="relative w-full min-h-[750px] lg:h-[750px] py-10 sm:py-16 lg:py-10 px-4 overflow-hidden mb-[50px]"
      style={{
        backgroundImage: `url('/quality.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main container */}
      <div className="max-w-[1440px] mx-auto relative h-full">
        {/* Title */}
        <div className="w-full mx-auto mb-8 sm:mb-12 lg:mb-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[97px] font-medium text-center text-white leading-tight px-4">
            How We Deliver Excellence
          </h2>
        </div>

        {/* Content Grid - Adjusted spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start relative">
          {/* Left Column - Moved down with margin-top */}
          <div className="space-y-6 sm:space-y-8 z-10 px-4 sm:px-6 lg:mt-32">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Discovery Call
              </h3>
              <p className="text-gray-600 text-base sm:text-[20px] font-semibold">
                Understand your app, audience, and goals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Customized Strategy
              </h3>
              <p className="text-gray-600 text-base sm:text-[20px] font-semibold">
                Tailor our services to your specific needs and niche.
              </p>
            </div>
          </div>

          {/* Center Column - Phone moved up with negative margin */}
          <div className="relative w-full flex items-center justify-center order-first lg:order-none mb-8 lg:mb-0 lg:-mt-20">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-full mx-auto">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[950px] flex items-center justify-center">
                <Image
                  src="/phone1.png"
                  alt="Phone Interface"
                  width={500}
                  height={950}
                  className="w-full h-full max-h-full object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Moved down with margin-top */}
          <div className="space-y-6 sm:space-y-8 z-10 px-4 sm:px-6 lg:mt-32">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Results & Reporting
              </h3>
              <p className="text-gray-600 text-base sm:text-[20px] font-semibold">
                Provide detailed insights into your app's performance and growth metrics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Execution & Monitoring
              </h3>
              <p className="text-gray-600 text-base sm:text-[20px] font-semibold">
                Deliver optimized solutions with consistent tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
