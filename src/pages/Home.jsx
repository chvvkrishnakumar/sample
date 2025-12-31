import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Security from "../components/Security";
import Team from "../components/Team";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import HorizontalParallax from "../components/HorizontalParallax";
import BottomLeftCarousel from "../components/BottomLeftCarousel";
import TechStack from "../components/TechStack.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HorizontalParallax />
      <TechStack />
      <Security />
      <Team />
      <CTA />
      <Testimonials />
      <FAQ />
      {/* Bottom-left mini carousel to jump to Case Studies */}
      <BottomLeftCarousel />
    </>
  );
}
