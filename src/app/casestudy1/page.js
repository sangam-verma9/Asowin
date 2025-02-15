
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
