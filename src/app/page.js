import AIAgent from "./components/AIAgent";
import Carousel from "./components/Carousel";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <HeroSection/>
      <Services/>
      <Carousel/>
      <AIAgent/>
      <Stats/>
      <CaseStudy/>
      <Contact/>
      <Footer/>
    

    </main>
  );
}