"use client";
import Head from "next/head"; 
import ServicesHero from "../components/ServicesHero";
import ASOSection from "../components/ASOSection";
import ASOSection2 from "../components/ASOSection2";
import ASOSection3 from "../components/ASOSection3";
import ASOSection4 from "../components/ASOSection4";
import PricingSection from "../components/PricingSection";
import Quality from "../components/Quality";
import WhyASO from "../components/WhyAso";
import Footer from "../components/Footer";


const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Head for dynamic title and meta tags */}
      <Head>
        <title>Services - App Store Optimization - ASOWin</title>
        <meta
          name="description"
          content="Discover ASOWin's expert app optimisation services. We offer impeccable services."
        />
        <meta
          name="keywords"
          content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research."
        />
      </Head>

      {/* Page components */}
      <ServicesHero/>
      <ASOSection/>
      <ASOSection2/>
      <ASOSection3/>
      <ASOSection4/>
      

      <PricingSection/>
      <Quality/>
      <WhyASO/>
      <Footer/>



      {/* <ServicesHero />
      <ASOSection />
      <ASOSection2 />
      <ASOSection3 />
      <ASOSection4 />
      <PricingSection />
      <Quality />
      <WhyAso />
      <Footer /> */}
    </div>
  );
};

export default ServicesPage;
