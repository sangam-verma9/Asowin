import Image from 'next/image';

const CaseStudyResult2 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 space-y-10 md:space-y-12">
      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0 relative">
            <Image
              src="/tick.png"
              alt="Results icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            RESULTS
          </h2>
        </div>

        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • 50+ Keywords:
            </span>
            <span className="min-w-0">
              Took over 50 keywords from unranked to Top 50 rankings on both
              stores.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Visibility Boost:
            </span>
            <span className="min-w-0">
              Achieved significant visibility for competitive keywords in the
              Indian market.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Creative Success:
            </span>
            <span className="min-w-0">
              Increased Play Store and App Store conversion rates through
              optimized screenshots and icons.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Reputation:
            </span>
            <span className="min-w-0">
              Enhanced ratings with consistent review management and user
              engagement.
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0 relative">
            <Image
              src="/bars.png"
              alt="Metrics icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            KEY METRICS
          </h2>
        </div>
        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <p>• 50+ unranked to Top 50 rankings for targeted keywords.</p>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="min-w-0">
              <span className="text-[#333333]">•</span> Increased download conversions with A/B-tested creatives.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="min-w-0">
              <span className="text-[#333333]">•</span> Successfully handled app launch and long-term ASO management for
              two platforms.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult2;