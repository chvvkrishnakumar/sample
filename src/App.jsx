import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "./components/ui/Modal";
import Home from "./pages/Home";
import Careers from "./pages/Careers";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <Routes>
        <Route element={<Layout contactOpen={contactOpen} setContactOpen={setContactOpen} />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </>
  );
}

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    // On route change, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If there's a hash, try to scroll to it after a tick
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // wait for route content to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}

function Layout({ contactOpen, setContactOpen }) {
  return (
    <>
      <ScrollManager />
      <Outlet />
      <Footer />
      <Modal open={contactOpen} onClose={() => setContactOpen(false)} title="Contact us">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
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
