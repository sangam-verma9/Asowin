import React from 'react';

const ASOSection3 = () => {
  return (
    <div className="w-full bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card - App Reputation Management */}
          <div className="relative">
            {/* Blue accent strip */}
            <div className="absolute hidden sm:block -top-6 left-0 w-full h-60 bg-[#dedcd1] transform -skew-x-1 -ml-6" />

            <div className="relative bg-[#f2de71] p-8 lg:p-12 rounded-lg h-full">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-[56px] font-medium leading-[60px] text-gray-900 mb-12">
                  4. Keyword <br /> Installs
                </h2>

                <div className="mb-12">
                  <h3 className="text-[24px] font-medium text-gray-900 mb-4">
                    Key Deliverables:
                  </h3>
                  <ul className="space-y-2 text-[11px] text-red-800 font-bold tracking-widest uppercase">
                    <li>• Keyword research and targeting</li>
                    <li>• Controlled and measured installs</li>
                    <li>• Tracking ranking improvements</li>
                  </ul>
                </div>

                <div className="space-y-6 text-right">
                  <div>
                    <h3 className="text-[24px] font-medium text-gray-900 mb-2">
                      What We Do:
                    </h3>
                    <p className="text-[14px] text-gray-700">
                      Target specific keywords to boost your app’s <br /> rankings
                      and relevance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-medium text-gray-900 mb-2">
                      Why It Matters:
                    </h3>
                    <p className="text-[14px] text-gray-700">
                      Higher keyword rankings bring in more <br /> organic traffic
                      over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Creative A/B Testing */}
          <div className="relative">
            {/* Teal accent strip */}
            <div className="absolute hidden sm:block -top-6 right-0 w-full h-60 bg-[#8eafff] transform -skew-x-1 -mr-6" />

            <div className="relative bg-[#0f1934] p-8 lg:p-12 rounded-lg h-full">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-[50px] font-medium leading-[60px] text-white mb-12">
                  5. Automated ASO <br /> with AI
                </h2>

                <div className="mb-12">
                  <h3 className="text-[24px] font-medium text-white mb-4">
                    Key Deliverables:
                  </h3>
                  <ul className="space-y-2 text-[11px] font-bold text-white tracking-widest">
                    <li>• RESPONDING TO USER REVIEWS</li>
                    <li>• PROACTIVE RATING MANAGEMENT</li>
                    <li>• COMMUNITY-DRIVEN RATING IMPROVEMENTS</li>
                  </ul>
                </div>

                <div className="space-y-6 text-right">
                  <div>
                    <h3 className="text-[24px] font-medium text-white mb-2">
                      What We Do:
                    </h3>
                    <p className="text-[14px] font-normal text-white">
                      Improve your app's ratings and reviews,<br />
                      enhancing user trust and appeal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-medium text-white mb-2">
                      Why It Matters:
                    </h3>
                    <p className="text-[14px] text-white">
                      A higher rating directly impacts<br />
                      downloads and user acquisition.
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

export default ASOSection3;
