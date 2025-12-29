// src/components/Services.jsx
import { Cpu, Compass, Cog, Megaphone, Shield, Wrench } from "lucide-react";

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
    <section className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            OUR SERVICES AT BUILDBOT TECHNOLOGIES
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            We design, build, and operate products end-to-end
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            End-to-end product delivery from early discovery through launch and
            long-term support.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-9 h-9 rounded-md mb-4 ${service.color}`}
              >
                <service.icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
