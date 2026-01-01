// src/components/Services.jsx
import { Cpu, Compass, Cog, Megaphone, Shield, Wrench } from "lucide-react";
import Reveal from './Reveal'

export default function Services() {
  const services = [
    {
      title: "Product Engineering",
      desc: "From MVPs to large-scale systems, we design and build reliable software products.",
      color: "bg-yellow-400/10 text-yellow-400",
      icon: Cpu,
    },
    {
      title: "Consulting",
      desc: "Strategy, architecture, and delivery guidance to unblock teams and scale faster.",
      color: "bg-blue-400/10 text-blue-400",
      icon: Compass,
    },
    {
      title: "DevOps",
      desc: "Reliable infra, CI/CD, observability, and security baked in from day one.",
      color: "bg-green-400/10 text-green-400",
      icon: Cog,
    },
    {
      title: "Digital Marketing",
      desc: "Go-to-market execution, analytics, and growth systems that compound.",
      color: "bg-indigo-400/10 text-indigo-400",
      icon: Megaphone,
    },
    {
      title: "Quality Assurance (QA)",
      desc: "Automated and manual testing to ensure performance, security, and reliability.",
      color: "bg-purple-400/10 text-purple-400",
      icon: Shield,
    },
    {
      title: "Support Engineering",
      desc: "Ongoing maintenance, monitoring, and rapid incident response.",
      color: "bg-red-400/10 text-red-400",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal y={8}>
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            OUR SERVICES AT BUILDBOT TECHNOLOGIES
          </p>
          </Reveal>
          <Reveal delay={80} y={10}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            We design, build, and operate products end-to-end
          </h2>
          </Reveal>
          <Reveal delay={140} y={12}>
          <p className="mt-4 text-xs text-gray-400">
            End-to-end product delivery from early discovery through launch and
            long-term support.
          </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {services.map((service, i) => (
            <Reveal key={service.title} y={14} delay={i * 60}>
            <div
              className="relative group w-full max-w-xs rounded-xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition overflow-hidden ring-1 ring-transparent group-hover:ring-yellow-400/40 hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              {/* Light gradient overlay */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" aria-hidden />
              {/* Inner glow */}
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_30px_rgba(251,191,36,0.22)]" aria-hidden />
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-9 h-9 rounded-md mb-4 ${service.color}`}
              >
                <service.icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <h3 className="text-xs font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-[11px] text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
