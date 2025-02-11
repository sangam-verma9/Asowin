import React from 'react';
import { Metadata } from 'next';

import GetStarted from '../components/GetStarted';
import BlogContact from '../components/CaseStudyContact';
import Footer from '../components/Footer';
import CaseStudy2Hero from '../components/CaseStudy2Hero';
import CaseStudyAbout2 from '../components/CaseStudyAbout2';
import CaseStudy2Stats from '../components/CaseStudy2Stats';
import CaseStudyResult2 from '../components/CaseStudyResult2';

export const metadata = {
  title: 'Case Study 2',
  description: 'Discover how ASOWin helped optimize the Indiabulls app with expert ASO strategies. Boosting visibility, enhancing user experience, and driving growth through targeted solutions for this financial services platform.',
  keywords: 'indiabulls aso, aso strategy indiabulls, asowin indiabulls, finance app aso, trading aso, asowin strategy'
};

export default function CaseStudy2() {
  return (
    <div className="min-h-screen">

      <CaseStudy2Hero/>
      <CaseStudyAbout2/>
      <CaseStudy2Stats/>
      <CaseStudyResult2/>
        <GetStarted/>
        <BlogContact/>
        <br />
        <Footer/>



  
    </div>
  );
}