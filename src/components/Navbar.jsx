// src/components/Navbar.jsx
import { Circle, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-6 z-50 flex justify-center">
      <nav className="pointer-events-auto flex items-center justify-between w-[90%] max-w-7xl px-8 py-4 rounded-full bg-black/90 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-semibold tracking-wide">
            Buildbot
          </span>
          <div className="flex gap-1 text-yellow-400">
            <Circle className="w-3 h-3" />
            <Circle className="w-3 h-3" />
            <Circle className="w-3 h-3" />
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Case Studies</li>
          <li className="hover:text-white cursor-pointer">Leadership</li>
          <li className="hover:text-white cursor-pointer">Insights</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
        </ul>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
          Contact us
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
    
