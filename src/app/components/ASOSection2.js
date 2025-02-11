// components/ASOSection.js

import React from 'react';

const ASOSection2 = () => {
  return (
    <div className="w-full bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card - App Reputation Management */}
          <div className="relative">
            {/* Blue accent strip */}
            <div className="absolute hidden md:block -top-6 left-0 w-full h-60 bg-[#3284ff] transform -skew-x-1 -ml-6" />

            <div className="relative bg-[#ffb3dc] p-6 sm:p-8 lg:p-12 rounded-lg h-full">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-[56px] font-medium leading-[40px] sm:leading-[60px] text-gray-900 mb-8 sm:mb-12">
                  2. App Reputation<br />Management
                </h2>

                <div className="mb-8 sm:mb-12">
                  <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-4">Key Deliverables:</h3>
                  <ul className="space-y-2 text-[10px] sm:text-[11px] text-red-800 font-bold tracking-widest">
                    <li>• RESPONDING TO USER REVIEWS</li>
                    <li>• PROACTIVE RATING MANAGEMENT</li>
                    <li>• COMMUNITY-DRIVEN RATING IMPROVEMENTS</li>
                  </ul>
                </div>

                <div className="space-y-6 text-right">
                  <div>
                    <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">What We Do:</h3>
                    <p className="text-[12px] sm:text-[14px] text-gray-700">
                      Improve your app's ratings and reviews,<br />
                      enhancing user trust and appeal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">Why It Matters:</h3>
                    <p className="text-[12px] sm:text-[14px] text-gray-700">
                      A higher rating directly impacts downloads<br />
                      and user acquisition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Creative A/B Testing */}
          <div className="relative">
            {/* Teal accent strip */}
            <div className="absolute hidden md:block -top-6 right-0 w-full h-60 bg-[#014458] transform -skew-x-1 -mr-6" />

            <div className="relative bg-[#e1f8ff] p-6 sm:p-8 lg:p-12 rounded-lg h-full">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-[56px] font-medium leading-[40px] sm:leading-[60px] text-gray-900 mb-8 sm:mb-12">
                  3. Creative A/B<br />Testing & Design
                </h2>

                <div className="mb-8 sm:mb-12">
                  <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-4">Key Deliverables:</h3>
                  <ul className="space-y-2 text-[10px] sm:text-[11px] font-bold text-red-800 tracking-widest uppercase">
                    <li>• Eye-catching app icons and screenshots with localization</li>
                    <li>• High-converting video previews</li>
                    <li>• Multiple design variations for testing</li>
                  </ul>
                </div>

                <div className="space-y-6 text-right">
                  <div>
                    <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">What We Do:</h3>
                    <p className="text-[12px] sm:text-[14px] text-gray-700">
                      Conduct thorough A/B testing to identify designs <br /> generating max CTR and drive downloads.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">Why It Matters:</h3>
                    <p className="text-[12px] sm:text-[14px] text-gray-700">
                      Enhances your app visibility, boosts user retention, and <br /> significantly drives download rate and revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASOSection2;
