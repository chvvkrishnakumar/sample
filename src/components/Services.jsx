// src/components/Services.jsx
import { Cpu, Compass, Cog, Megaphone, Shield, Wrench } from "lucide-react";
import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal'
import { HoverEffect } from '@/components/aceternity/card-hover-effect'

export default function Services() {
  const services = [
    {
      title: "Product Engineering",
      description: "From MVPs to large-scale systems, we design and build reliable software products.",
      color: "bg-yellow-400/10 text-yellow-400",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Consulting",
      description: "Strategy, architecture, and delivery guidance to unblock teams and scale faster.",
      color: "bg-blue-400/10 text-blue-400",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      title: "DevOps",
      description: "Reliable infra, CI/CD, observability, and security baked in from day one.",
      color: "bg-green-400/10 text-green-400",
      icon: <Cog className="w-5 h-5" />,
    },
    {
      title: "Digital Marketing",
      description: "Go-to-market execution, analytics, and growth systems that compound.",
      color: "bg-indigo-400/10 text-indigo-400",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      title: "Quality Assurance (QA)",
      description: "Automated and manual testing to ensure performance, security, and reliability.",
      color: "bg-purple-400/10 text-purple-400",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Support Engineering",
      description: "Ongoing maintenance, monitoring, and rapid incident response.",
      color: "bg-red-400/10 text-red-400",
      icon: <Wrench className="w-5 h-5" />,
    },
  ];

  return (
    <section id="services" className="relative bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal y={8}>
            <p className="text-xs tracking-widest text-muted-foreground mb-3">
              OUR SERVICES AT BUILDBOT TECHNOLOGIES
            </p>
          </Reveal>
          <Reveal delay={80} y={10}>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              We design, build, and operate products end-to-end
            </h2>
          </Reveal>
          <Reveal delay={140} y={12}>
            <p className="mt-4 text-xs text-muted-foreground">
              End-to-end product delivery from early discovery through launch and
              long-term support.
            </p>
          </Reveal>
        </div>

        {/* Services grid with Aceternity Hover Effect */}
        <Reveal delay={200}>
          <HoverEffect items={services} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
        </Reveal>
      </div>
    </section>
  );
}
