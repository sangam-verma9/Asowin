import { useRouter } from 'next/navigation';

const PricingSection = () => {
  const router = useRouter();

  // Replace navigate('/contact') with router.push('/contact')
  const handleClick = () => {
    router.push('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className="w-full py-20 px-4 md:px-8 bg-black text-white mb-[50px]"
      style={{
        backgroundImage: 'url(/pricing.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Heading */}
          <div className="lg:col-span-4">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium mb-4">
              Plans &<br />Pricing
            </h1>
            <p className="text-2xl md:text-3xl font-medium">
              The right plan<br />for your needs
            </p>
          </div>

          {/* Right Column - Pricing Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* One Time Plan */}
            <div className="relative">
              {/* Orange accent boxes */}
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute right-0 w-3 h-[99%] top-2 bg-[#F37A60] translate-x-2" />
                <div className="absolute bottom-0 w-[calc(100%-1rem)] h-8 bg-[#F37A60] translate-y-2" />
              </div>
              
              {/* Card Content - Added flex container */}
              <div className="bg-white text-black p-8 h-full relative flex flex-col">
                {/* Content wrapper */}
                <div className="flex-grow">
                  <h2 className="text-[35px] text-[#F37A60] font-semibold mb-4">One Time</h2>
                  <p className="text-[#535353] text-[16px] mb-8">
                    Ideal for sellers levelling up their operations and marketing.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold text-[16px] text-[#111111] mb-4">Everything You Need To Know:</h3>
                    <ul className="space-y-4">
                      {[
                        "One time heavy push to rank Top 1 - Top 3",
                        "Immediate results",
                        "Confirmed ranked status for 10 days",
                        "Jump ahead of competition",
                        "Exponential traffic growth via trigger action",
                        "Impactful Investments"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-1 text-[#F37A60]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button at the bottom */}
                <button
                  className="w-full bg-teal-900 text-white py-3 text-center hover:bg-teal-800 transition-colors mt-auto"
                  onClick={handleClick}
                >
                  LET'S TALK
                </button>

              </div>
            </div>

            {/* Monthly Plan */}
            <div className="relative">
              {/* Orange accent boxes */}
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute right-0 w-3 h-[99%] top-2 bg-[#F37A60] translate-x-2" />
                <div className="absolute bottom-0 w-[calc(100%-1rem)] h-8 bg-[#F37A60] translate-y-2" />
              </div>
              
              {/* Card Content - Added flex container */}
              <div className="bg-white text-black p-8 h-full relative flex flex-col">
                {/* Content wrapper */}
                <div className="flex-grow">
                  <h2 className="text-[35px] text-[#F37A60] font-semibold mb-4">Monthly</h2>
                  <p className="text-[#535353] text-[16px] mb-8">
                    Ideal for sellers levelling up their operations and marketing.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-[16px] text-[#111111]">Everything You Need To Know:</h3>
                    <ul className="space-y-4">
                      {[
                        "Foundational growth per ASO element",
                        "Backed by experts - customized analysis",
                        "Iterative Methodology - A/B split testing",
                        "Results build-up over 3 months",
                        "Weekly reporting deliverables",
                        "Serviced By Top ASO Experts"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 mt-1 text-[#F37A60]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button at the bottom */}
                <button
                  className="w-full bg-teal-900 text-white py-3 text-center hover:bg-teal-800 transition-colors mt-auto"
                  onClick={handleClick}
                >
                  LET'S TALK
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Link */}
        <div className="mt-16 text-center">
          <p className="text-white">
            Unsure of what's right for you? {' '}
            <a href="/contact" className="underline hover:text-white">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
