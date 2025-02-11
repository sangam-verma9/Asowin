'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const CaseStudyAbout3 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* About Section - 40% */}
      <div className="w-full md:w-[40%] bg-[#EEE1DA] p-8 md:p-12 lg:p-16">
        <h2 className="text-4xl md:text-5xl lg:text-[50px] text-[#7D6D54] font-serif font-bold mb-6">
          ABOUT
        </h2>
        <p className="text-[#858285] lg:max-w-[400px] text-base font-medium md:text-[18px] leading-loose">
          LSM Apps is an Android developer that has been active since 2014. The
          current app portfolio contains 3 apps. Overall, we estimate that LSM
          Apps's apps have collected about 30 million installs, 90 thousand of
          them in the last 30 days. A popular app is Easy Phone: Dialer & Caller
          ID, which is highly ranked in several countries and, with over
          10 million installs, is one of the most popular apps in the Android
          ecosystem.
        </p>

        {/* ASOWin Card */}
        <div className="bg-white rounded-xl p-6 mt-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#FDB124]">
              ASO<span className="text-[#FFD36F]">Win</span>
            </span>
          </h3>
          <h4 className="text-xl md:text-2xl font-bold mb-1">
            Want to achieve similar results?
          </h4>
          <p className="text-[#434343] font-[13px] mb-4">
            Book a call with ASOWin
          </p>
          <button
            className="bg-[#FD5F03] text-white px-6 py-2 rounded-full text-sm hover:bg-[#FF6347] transition-colors"
            onClick={() => {
              router.push('/contact');
              window.scrollTo(0, 0);
            }}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>

      {/* Strategy Section - 60% */}
      <div className="w-full md:w-[60%] bg-white p-8 md:p-12 lg:p-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative h-8 w-8">
            <Image
              src="/bulb.png"
              alt="Strategy icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#7D6D54] font-bold font-serif">
            STRATEGY
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>
                Conducted keyword research to optimize the app for "Phone" in
                the US market.
              </li>
              <li>
                Enhanced Play Store metadata (title, description) with strategic
                keyword placement.
              </li>
              <li>
                Created optimized screenshots and videos to improve conversions.
              </li>
              <li>
                Performed rigorous A/B testing for creatives and messaging.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAbout3;