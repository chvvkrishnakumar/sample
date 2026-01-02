// src/components/Hero.jsx
import { BackgroundBeams } from '@/components/aceternity/background-beams';
import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import BottomLeftCarousel from './BottomLeftCarousel';

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Background Beams Effect */}
        <BackgroundBeams className="absolute inset-0 pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <Reveal y={8} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-bold text-accent">
              BUILD · OPERATE · TRANSFER
            </span>
          </Reveal>

          {/* Heading */}
          <Reveal delay={80} y={10} as="h1" className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
            We help you to build products <br />
            <span className="text-muted-foreground">out of your ideas.</span>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={160} y={12} as="p" className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
           We'll build your idea, we'll operate the product and we'll transfer the ownership.
          </Reveal>

          {/* Actions */}
          <Reveal delay={220} y={14} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#cta" className="flex items-center justify-center gap-2 bg-accent text-black px-7 py-3 rounded-full text-sm font-medium hover:bg-accent-hover trans-300 hover:lift tap:shrink" role="button">
              Start your project
              <ArrowRight />
            </a>

            <a href="#insights" className="flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3 rounded-full text-sm hover:border-muted trans-300 hover:lift tap:shrink" role="button">
              View our work
              <ArrowBigRight />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Carousel is now a sibling, fully fixed to viewport */}
      <BottomLeftCarousel />
    </>
  );
}