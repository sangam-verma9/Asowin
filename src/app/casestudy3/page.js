import React from 'react';
import { Metadata } from 'next';
import CaseStudy1Hero from '../components/CaseStudy1Hero';
import CaseStudyAbout1 from '../components/CaseStudyAbout1';
import CaseStudy1Stats from '../components/CaseStudy1Stats';
import CaseStudyResult1 from '../components/CaseStudyResult1';
import GetStarted from '../components/GetStarted';
import BlogContact from '../components/CaseStudyContact';
import Footer from '../components/Footer';
import CaseStudy3Hero from '../components/CaseStudy3Hero';
import CaseStudyAbout3 from '../components/CaseStudyAbout3';
import CaseStudy3Stats from '../components/CaseStudy3Stats';
import CaseStudyResult3 from '../components/CaseStudyResult3';

export const metadata = {
  title: 'Case Study 1',
  description:"Discover how our tailored ASO strategies and data-driven solutions helped enhance visibility, increase downloads, and drive growth for India's  leading LSM app" ,
  keywords: 'aso strategy, asowin strategy, asowin LSM, easyphone aso strategy, easyphone app store optimisation, aso services LSM',
};

export default function CaseStudy3() {
  return (
    <div className="min-h-screen">

      <CaseStudy3Hero/>
      <CaseStudyAbout3/>
      <CaseStudy3Stats/>
      <CaseStudyResult3/>
        <GetStarted/>
        <BlogContact/>
        <br />
        <Footer/>



  
    </div>
  );
}