// src/components/Hero.jsx
import { Parallax } from 'react-scroll-parallax'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background glow with subtle vertical parallax */}
      <Parallax translateY={[-20, 20]} className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-white/10 via-black to-black" />
      </Parallax>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <Reveal y={8} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          BUILD · OPERATE · TRANSFER STUDIO
        </Reveal>

        {/* Heading */}
        <Reveal delay={80} y={10} as="h1" className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          We help you to build products <br />
          <span className="text-gray-300">out of your ideas.</span>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={160} y={12} as="p" className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          We'll build your idea. We'll operate your product. We'll transfer the
          ownership.
        </Reveal>

        {/* Actions */}
        <Reveal delay={220} y={14} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-7 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 trans-300 hover:lift tap:shrink">
            Start your project
            <span>→</span>
          </button>

          <button className="flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3 rounded-full text-sm hover:border-white/40 trans-300 hover:lift tap:shrink">
            View our work
            <span>▷</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
