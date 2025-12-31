import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
// import Products from "./components/Products";
import Security from "./components/Security";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import HorizontalParallax from "./components/HorizontalParallax";
import BottomLeftCarousel from "./components/BottomLeftCarousel";
import TechStack from "./components/TechStack.jsx";

import { useState } from "react";
import Modal from "./components/ui/Modal";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      {/* <Team /> */}
      <Stats />
      <Services />
      {/* <Products /> */}
      <HorizontalParallax />
      <TechStack />
      <Security />
      <Team />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />

      {/* Bottom-left mini carousel to jump to Products */}
      <BottomLeftCarousel />

      <Modal open={contactOpen} onClose={() => setContactOpen(false)} title="Contact us">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Placeholder submit handler
            setContactOpen(false);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Tell us a bit about your project..."
            />
          </label>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
