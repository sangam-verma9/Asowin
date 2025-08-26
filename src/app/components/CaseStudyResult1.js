import React from 'react';
import Image from "next/image";
const CaseStudyResult1 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 space-y-10 md:space-y-12">
      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0">
            <Image
              src="/tick.png"
              alt="Results icon"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            RESULTS
          </h2>
        </div>

        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• #1 Rankings:</span>
            <span className="min-w-0">
              Achieved and sustained #1 rankings on both App Store and Play Store.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• AI-Driven Review Management:</span>
            <span className="min-w-0">
              Implemented automated AI-based review responses, maintaining high user satisfaction and engagement.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• Keyword Success:</span>
            <span className="min-w-0">
              Boosted relevant keywords to Top 50 rankings, ensuring high visibility and increased app downloads.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• Reputation Boost:</span>
            <span className="min-w-0">
              Improved app store ratings through proactive engagement and timely responses, ensuring a strong brand presence.
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0">
            <img
              src="/bars.png"
              alt="Metrics icon"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            KEY METRICS
          </h2>
        </div>

        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <p>Achieved #1 rankings on App Store and Play Store.</p>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="min-w-0">
              <span className="text-[#333333]">•</span> Implemented AI-based automated review responses for both platforms, improving user satisfaction.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="min-w-0">
              <span className="text-[#333333]">•</span> Increased app store ratings and user engagement through proactive reputation management. Highest rating in its category.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult1;