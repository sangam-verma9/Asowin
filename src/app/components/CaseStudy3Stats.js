import Image from 'next/image';

const CaseStudy3Stats = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-[500px]">
      {/* Left Section */}
      <div className="w-full md:w-[45%] bg-zinc-900 p-6 md:p-12 flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold mb-1">Top #2</div>
            <div className="text-white text-[22px]">Rank</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">+12,000</div>
            <div className="text-white text-[22px]">Daily Downloads</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">2-Months</div>
            <div className="text-white text-[22px]">Sustained</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[55%] bg-[#D7CECE] p-6 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl aspect-[4/3]">
          <Image
            src="/phone.png"
            alt="Phone mockups group"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy3Stats;