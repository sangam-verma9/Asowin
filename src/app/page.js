// import Head from 'next/head';
// import AIAgent from "./components/AIAgent";
// import Carousel from "./components/Carousel";
// import CaseStudy from "./components/CaseStudy";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import Stats from "./components/Stats";
// import GoogleAnalytics from './components/GoogleAnalytics';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <meta name="description" content="Discover how ASOWin helps you optimize your app store presence and increase visibility. Learn more about our services and case studies." />
//         <title>ASOWin | App Store Optimization for Apps - Leading Global Company</title>
//       <GoogleAnalytics/>
//       </Head>
//       <main>
//         {/* <Navbar /> */}
//         <HeroSection />
//         <Services />
//         <Carousel />
//         <AIAgent />
//         <Stats />
//         <CaseStudy />
//         <Contact />
//         <Footer />
//       </main>
//     </>
//   );
// }

import AIAgent from "./components/AIAgent";
import Carousel from "./components/Carousel";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Stats from "./components/Stats";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
  description:
    "Discover how ASOWin helps you optimize your app store presence and increase visibility. Learn more about our services and case studies.",
  keywords:
    "SEO Agency, ASO, ASOWin, App Store Optimization, Mobile Growth, App Marketing",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  openGraph: {
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    url: "https://www.asowin.com",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    images: ["/og-image.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      {/* Google Analytics */}
      <GoogleAnalytics />

      {/* Page Content */}
      <HeroSection />
      <Services />
      <Carousel />
      <AIAgent />
      <Stats />
      <CaseStudy />
      <Contact />
      <Footer />
    </main>
  );
}
