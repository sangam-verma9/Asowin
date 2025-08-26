'use client';
import Image from 'next/image';

const ASOSection4 = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-[#FAFAFA] mb-[50px]">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/asosection4.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-16 pb-12 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left content container */}
          <div className="max-w-full lg:max-w-7xl">
            {/* Title */}
            <h1 className="text-white text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] font-medium leading-tight mb-12 sm:mb-16 lg:mb-24">
              6. Paid User Acquisition <br />
              & Search Ads
            </h1>

            {/* Content with vertical line */}
            <div className="relative lg:ml-44 ">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 w-[3px] h-full bg-white opacity-50"></div>

              {/* Content sections with proper padding */}
              <div className="pl-4 sm:pl-6 lg:pl-8 lg:-mt-5  ">
                {/* What We Do Section */}
                <div className="mb-6">
                  <h2 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-medium mb-2 sm:mb-3">What We Do:</h2>
                  <p className="text-[#ffffff] text-[12px] sm:text-[13px] lg:text-[14px] font-normal">
                    Run targeted campaigns on Apple Search Ads and <br />
                    other ad platforms for sustained growth.
                  </p>
                </div>

                {/* Why It Matters Section */}
                <div>
                  <h2 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-medium mb-2 sm:mb-3">Why It Matters</h2>
                  <p className="text-[#ffffff] text-[12px] sm:text-[13px] lg:text-[14px] font-normal">
                    Paid acquisition amplifies organic strategies and <br />
                    speeds up results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Key Deliverables */}
          <div className="lg:max-w-lg mt-8 sm:mt-12 lg:mt-auto lg:pr-20">
            <h2 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-bold mb-4 sm:mb-6">Key Deliverables:</h2>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-[#ffffff] text-[9px] sm:text-[12px] lg:text-[14px] uppercase font-bold tracking-widest ">
                • Campaign setup and management
              </li>
              <li className="text-[#ffffff] text-[9px] sm:text-[12px] lg:text-[14px] uppercase font-bold tracking-widest">
                • Bid and keyword optimization
              </li>
              <li className="text-[#ffffff] text-[9px] sm:text-[12px] lg:text-[14px] uppercase font-bold tracking-widest">
                • ROI tracking and reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOSection4;