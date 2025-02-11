import Image from 'next/image';

const CaseStudyResult3 = () => {
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
            <span className="text-[#333333] whitespace-nowrap">• Rank #10 to Top #2:</span>
            <span className="min-w-0">
              Achieved and maintained a Top #2 ranking for "Phone" in the US Play Store.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• +12,000 Daily Downloads:</span>
            <span className="min-w-0">
              Secured a 400% increase in downloads, adding 360,000 monthly downloads.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">• 2-Months Sustained:</span>
            <span className="min-w-0">
              Maintained peak rankings and traffic for two consecutive months.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult3;