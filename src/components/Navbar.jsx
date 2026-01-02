// src/components/Navbar.jsx
import {  ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from './ThemeToggle';

export default function Navbar({ onContactClick }) {
  return (
    <div className="fixed inset-x-0 top-6 z-50 flex justify-center">
      <nav className="pointer-events-auto flex items-center justify-between w-[90%] max-w-6xl px-8 py-4 rounded-full bg-background/90 backdrop-blur-md shadow-lg border border-border">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-foreground text-lg font-semibold tracking-wide">
            Buildbot
          </Link>
          <div className="flex gap-1 text-accent">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li className="hover:text-foreground transition-colors"><Link to="/#services" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Services</Link></li>
          <li className="hover:text-foreground transition-colors"><Link to="/#horizontal" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Products</Link></li>
          <li className="hover:text-foreground transition-colors"><Link to="/#leadership" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Leadership</Link></li>
          <li className="hover:text-foreground transition-colors"><Link to="/careers" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Careers</Link></li>
          <li className="hover:text-foreground transition-colors"><Link to="/#insights" className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">Insights</Link></li>
        </ul>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* CTA Button */}
        <button  className="flex items-center gap-2 bg-accent text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-hover transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
          <Link to="/#cta">Contact us</Link>
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    </div>
  );
}
    
