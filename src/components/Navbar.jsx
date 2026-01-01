// src/components/Navbar.jsx
import {  ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ onContactClick }) {
  return (
    <div className="fixed inset-x-0 top-6 z-50 flex justify-center">
      <nav className="pointer-events-auto flex items-center justify-between w-[90%] max-w-6xl px-8 py-4 rounded-full bg-black/90 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white text-lg font-semibold tracking-wide">
            Buildbot
          </Link>
          <div className="flex gap-1 text-yellow-400"> <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white"><Link to="/#services" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm">Services</Link></li>
          <li className="hover:text-white"><Link to="/#horizontal" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm">Case Studies</Link></li>
          <li className="hover:text-white"><Link to="/#leadership" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm">Leadership</Link></li>
          <li className="hover:text-white"><Link to="/#insights" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm">Insights</Link></li>
          <li className="hover:text-white"><Link to="/careers" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-sm">Careers</Link></li>
        </ul>

        {/* CTA Button */}
        <button  className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400">
          <Link to="/#cta">Contact us</Link>
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
    
