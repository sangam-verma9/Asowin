// import React from 'react';

// import GetStarted from '../components/GetStarted';
// import BlogContact from '../components/CaseStudyContact';
// import Footer from '../components/Footer';
// import CaseStudy3Hero from '../components/CaseStudy3Hero';
// import CaseStudyAbout3 from '../components/CaseStudyAbout3';
// import CaseStudy3Stats from '../components/CaseStudy3Stats';
// import CaseStudyResult3 from '../components/CaseStudyResult3';

// export const metadata = {
//   title: 'Case Study 1',
//   description:"Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's  leading LSM app" ,
//   keywords: 'aso strategy, asowin strategy, asowin LSM, easyphone aso strategy, easyphone app store optimisation, aso services LSM',
// };

// export default function CaseStudy3() {
//   return (
//     <div className="min-h-screen">

//       <CaseStudy3Hero/>
//       <CaseStudyAbout3/>
//       <CaseStudy3Stats/>
//       <CaseStudyResult3/>
//         <GetStarted/>
//         <BlogContact/>
//         <br />
//         <Footer/>



  
//     </div>
//   );
// }


import Head from "next/head";
import GetStarted from "../components/GetStarted";
import BlogContact from "../components/CaseStudyContact";
import Footer from "../components/Footer";
import CaseStudy3Hero from "../components/CaseStudy3Hero";
import CaseStudyAbout3 from "../components/CaseStudyAbout3";
import CaseStudy3Stats from "../components/CaseStudy3Stats";
import CaseStudyResult3 from "../components/CaseStudyResult3";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function CaseStudy3() {
  return (
    <div className="min-h-screen">
      {/* Next.js Head for SEO Metadata */}
      <Head>
        <title>Case Study 3 - ASOWin</title>
        <meta
          name="description"
          content="Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's leading LSM app."
        />
        <meta
          name="keywords"
          content="ASO strategy, ASOWin strategy, ASOWin LSM, EasyPhone ASO strategy, EasyPhone app store optimization, ASO services LSM"
        />
        <meta property="og:title" content="Case Study 3 - ASOWin" />
        <meta
          property="og:description"
          content="Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's leading LSM app."
        />
        <meta property="og:url" content="https://www.asowin.com/case-study-3" />
        <meta property="og:site_name" content="ASOWin" />
        <meta property="og:image" content="/og-case-study-3.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Study 3 - ASOWin" />
        <meta
          name="twitter:description"
          content="Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's leading LSM app."
        />
        <meta name="twitter:image" content="/og-case-study-3.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics />
      </Head>

      {/* Page Content */}
      <CaseStudy3Hero />
      <CaseStudyAbout3 />
      <CaseStudy3Stats />
      <CaseStudyResult3 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
