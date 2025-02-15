// import React from 'react';
// import { Metadata } from 'next';

// import GetStarted from '../components/GetStarted';
// import BlogContact from '../components/CaseStudyContact';
// import Footer from '../components/Footer';
// import CaseStudy2Hero from '../components/CaseStudy2Hero';
// import CaseStudyAbout2 from '../components/CaseStudyAbout2';
// import CaseStudy2Stats from '../components/CaseStudy2Stats';
// import CaseStudyResult2 from '../components/CaseStudyResult2';

// export const metadata = {
//   title: 'Case Study 2',
//   description: 'Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform.',
//   keywords: 'indiabulls aso, aso strategy indiabulls, asowin indiabulls, finance app aso, trading aso, asowin strategy'
// };

// export default function CaseStudy2() {
//   return (
//     <div className="min-h-screen">

//       <CaseStudy2Hero/>
//       <CaseStudyAbout2/>
//       <CaseStudy2Stats/>
//       <CaseStudyResult2/>
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
import CaseStudy2Hero from "../components/CaseStudy2Hero";
import CaseStudyAbout2 from "../components/CaseStudyAbout2";
import CaseStudy2Stats from "../components/CaseStudy2Stats";
import CaseStudyResult2 from "../components/CaseStudyResult2";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function CaseStudy2() {
  return (
    <div className="min-h-screen">
      {/* Next.js Head for SEO Metadata */}
      <Head>
        <title>Case Study 2 - ASOWin</title>
        <meta
          name="description"
          content="Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform."
        />
        <meta
          name="keywords"
          content="Indiabulls ASO, ASO Strategy Indiabulls, ASOWin Indiabulls, Finance App ASO, Trading ASO, ASOWin Strategy"
        />
        <meta property="og:title" content="Case Study 2 - ASOWin" />
        <meta
          property="og:description"
          content="Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform."
        />
        <meta property="og:url" content="https://www.asowin.com/case-study-2" />
        <meta property="og:site_name" content="ASOWin" />
        <meta property="og:image" content="/og-case-study-2.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Study 2 - ASOWin" />
        <meta
          name="twitter:description"
          content="Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform."
        />
        <meta name="twitter:image" content="/og-case-study-2.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics />
      </Head>

      {/* Page Content */}
      <CaseStudy2Hero />
      <CaseStudyAbout2 />
      <CaseStudy2Stats />
      <CaseStudyResult2 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
