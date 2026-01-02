import { ArrowBigRightIcon } from 'lucide-react';
import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal'

import { Link } from 'react-router-dom'

export default function Testimonials() {
  
  return (
    <section id="careers" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <Reveal y={8}>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            CAREERS
          </p>

          <h2 className="text-4xl font-bold text-white leading-tight">
            Join our fast-growing team
          </h2>

          <p className="mt-6 text-sm text-gray-300 max-w-md">
            <span className="text-amber-400 font-medium">
              Work with product-first teams
            </span>{" "}
            on problems that actually matter.
          </p>

          <p className="mt-4 text-sm text-gray-400 max-w-md">
            Remote-friendly, async by default, and built for senior talent that
            wants ownership, not just tickets.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-400">
            <li>• Product-aligned squads, not siloed functions</li>
            <li>• Learning budget & dedicated maker time</li>
            <li>• Flexible location with overlapping core hours</li>
          </ul>

          <Link to="/careers" className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black trans-300 hover:bg-amber-300 hover:lift tap:shrink focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400">
            View open roles
            <ArrowBigRightIcon></ArrowBigRightIcon>
          </Link>
        </Reveal>

        {/* Right image collage */}
        <div className="grid grid-cols-2 gap-6">
          {/* Large left image */}
          <Reveal y={16} className="row-span-2 overflow-hidden rounded-2xl">
            <img
              src="/cer.png"
              alt="Team collaborating"
              className="h-full w-full object-cover trans-500 hover:scale-[1.05]"
              loading="lazy"
            />
          </Reveal>

          {/* Top right */}
          <Reveal y={16} delay={120} className="overflow-hidden rounded-2xl">
            <img
              src="/group.jpeg"
              alt="High five moment"
              className="h-full w-full object-cover trans-500 hover:scale-[1.05]"
              loading="lazy"
            />
          </Reveal>

          {/* Bottom right */}
          <Reveal y={16} delay={200} className="overflow-hidden rounded-2xl">
            <img
              src="/group2.png"
              alt="Team planning session"
              className="h-full w-full object-cover trans-500 hover:scale-[1.05]"
              loading="lazy"
            />
          </Reveal>
       </div>
       </div>
      
    </section>
  );
}
