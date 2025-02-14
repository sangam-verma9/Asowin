export const metadata = {
  title: "Case Study 1 - ASOWin",
  description:
    "Explore ASOWin's success story with the Pepperfry app. Learn how our tailored ASO strategies and AI-driven solutions boosted app visibility, user engagement, and downloads for this leading furniture platform.",
  keywords:
    "pepperfry aso, pepperfry strategy, asowin pepperfry, app store optimisation strategy, pepperfry visibility",
};

import CaseStudy1Hero from "../components/CaseStudy1Hero";
import CaseStudyAbout1 from "../components/CaseStudyAbout1";
import CaseStudy1Stats from "../components/CaseStudy1Stats";
import CaseStudyResult1 from "../components/CaseStudyResult1";
import GetStarted from "../components/GetStarted";
import BlogContact from "../components/CaseStudyContact";
import Footer from "../components/Footer";

export default function CaseStudy1() {
  return (
    <div className="min-h-screen">
      <CaseStudy1Hero />
      <CaseStudyAbout1 />
      <CaseStudy1Stats />
      <CaseStudyResult1 />
      <GetStarted />
      <BlogContact />
      <br />
      <Footer />
    </div>
  );
}
