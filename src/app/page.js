import Head from 'next/head';
import AIAgent from "./components/AIAgent";
import Carousel from "./components/Carousel";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Discover how ASOWin helps you optimize your app store presence and increase visibility. Learn more about our services and case studies." />
        <title>ASOWin | Optimize Your App</title>

      </Head>
      <main>
        {/* <Navbar /> */}
        <HeroSection />
        <Services />
        <Carousel />
        <AIAgent />
        <Stats />
        <CaseStudy />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
