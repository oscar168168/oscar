import Image from "next/image";
import { Hero } from "./sections/Hero";
import { AboutMe } from "./sections/AboutMe";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Portfolio } from "./sections/Portfolio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main
      id="hero"
      className="min-h-screen flex flex-col lg:justify-center  items-between"
    >
      <Header />
      <div className=" p-3 lg:p-24">
        <div>
          <HeroSection />
        </div>
        <div id="aboutme" className="lg:py-10">
          <AboutMe />
        </div>
        <div id="education" className="lg:py-10">
          <Education />
        </div>
        <div id="experience" className="lg:py-10">
          <Experience />
        </div>
        <div id="portfolio" className="lg:py-10">
          <Portfolio />
        </div>
      </div>
      <Footer />
    </main>
  );
}
