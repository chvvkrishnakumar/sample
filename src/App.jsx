import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Products from "./components/Products";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import HorizontalParallax from "./components/HorizontalParallax";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Stats />
      <Services />
      <Products />
      <HorizontalParallax />
      <Team />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
