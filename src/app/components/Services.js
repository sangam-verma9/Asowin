import Image from "next/image";

const services = [
  {
    icon: "/img2.png",
    category: "END-TO-END SERVICE",
    title: "Full-Service ASO", 
    description:
      "Boost your app's discoverability and downloads with our comprehensive ASO services. From optimizing metadata to refining your app store listing, we help you rank higher and attract the right audience.",
  },
  {
    icon: "/img3.png",  
    testimonial: {
      text: '"We absolutely love the work the ASOWin team does for our App on a daily basis. Super satisfied and we highly value the dedication and high quality service offered."',
      author: "Pepperfry", 
    },
  },
  {
    icon: "/img3.png",
    category: "STAYING AHEAD OF COMPETITION",
    title: "Keyword Research & Rankings",
    description:
      "We identify the most relevant and high-performing keywords for your app, enabling it to appear in top searches. Our data-driven approach ensures your app stays ahead of the competition.",
  },
  {
    icon: "/img6.png",
    category: "A/B TESTING",
    title: "Design Services & A/B Testing",
    description:
      "Make a lasting first impression with stunning app screenshots, videos, and icons. We conduct rigorous A/B testing to identify visuals that convert and resonate most with your audience.",
  },
  {
    icon: "/img4.png",
    category: "REPUTATION MANAGEMENT",
    title: "App Reputation Management",
    description:
      "Maintain a positive app image with our reputation management services. We handle user reviews and ratings, respond to feedback, and ensure your app's public perception aligns with your brand's values.",
  },
  {
    icon: "/img5.png",
    category: "MAXIMIZE ROI",
    title: "Paid User Acquisition (UA) and Apple Search Ads",
    description:
      "Supercharge your growth with targeted user acquisition campaigns. We leverage Apple Search Ads and other paid channels to maximize ROI and drive high-quality users to your app.",
  },
];

const Services = () => {
  return (
    <div className="w-full px-4 py-16 max-w-[90rem] mx-auto">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-[80px] font-medium font-serif text-center mb-12">
        Services We Provide
      </h2>

      {/* Main Content Box */}
      <div className="bg-[#014458] rounded-2xl p-4 sm:p-8 md:p-12 text-white relative overflow-hidden h-auto md:h-[500px]">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 h-full">
          {/* Left Content */}
          <div className="w-full md:w-[60%] flex flex-col justify-between h-full py-4 md:py-0">
            <div className="mt-4 md:mt-8">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium mb-2 md:mb-4 leading-tight">
                Rank Highest For Your Keywords
              </h2>
              <p className="text-gray-300 text-[14px] sm:text-[16px] font-sans mt-2 md:mt-4 max-w-[600px] lg:text-[18px]">
                Get your App to be a leader in all targeted keywords.
                <br className="hidden sm:block" />
                Clients witnessed significant improvement in overall numbers.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-0">
              <div>
                <h3 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold mb-2">
                  50%
                </h3>
                <p className="text-[14px] sm:text-[16px] text-white font-sans">
                  Keywords Went From <br className="hidden sm:block" /> Unranked
                  To Ranked Status
                </p>
              </div>

              <div>
                <h3 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold mb-2">
                  3x
                </h3>
                <p className="text-[14px] sm:text-[16px] text-white font-sans">
                  Improvement In <br className="hidden sm:block" /> Conversion
                  Rates
                </p>
              </div>

              <div>
                <h3 className="text-[40px] sm:text-[50px] md:text-[60px] font-semibold mb-2">
                  10
                </h3>
                <p className="text-[14px] sm:text-[16px] text-white font-sans">
                  Keywords Per Client <br className="hidden sm:block" /> Reached
                  Top 3
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Image */}
          <div className="w-full md:w-[40%] md:min-h-[505px] md:mt-[-40px] md:h-full flex justify-center md:justify-end">
            <Image
              src="/phone.png"
              alt="Phone with bubbles"
              width={300}
              height={500}
              className="w-full md:max-w-none md:w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            if (service.testimonial) {
              return (
                <div
                  key={index}
                  className="bg-[#FF8712] text-white p-8 rounded-lg shadow-lg"
                >
                  <div className="space-y-14">
                    <p className="text-lg font-medium">
                      {service.testimonial.text}
                    </p>
                    <p className="font-semibold text-white">
                      {service.testimonial.author}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="space-y-4">
                  <Image
                    src={service.icon}
                    alt="icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] object-contain"
                  />
                  <div>
                    <p className="text-orange-500 text-[11px] font-medium tracking-wider">
                      {service.category}
                    </p>
                    <h3 className="text-[24px] font-normal mt-2 text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#535353] text-[14px]">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
