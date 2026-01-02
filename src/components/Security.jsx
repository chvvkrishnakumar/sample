import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal'
import { ShieldCheck, Award, Cloud } from 'lucide-react'

export default function Security() {
  const pills = [
    {
      label: 'ISO 9001 & ISO 27001 certified delivery',
      icon: ShieldCheck,
    },
    {
      label: 'Quality-first product engineering practice',
      icon: Award,
    },
    {
      label: 'Secure AWS & Google Cloud operations',
      icon: Cloud,
    },
  ]

  const stats = [
    { label: 'Experience', value: '10+ yrs' },
    { label: 'Products operated', value: '50+ live' },
    { label: 'Uptime targets', value: '99.9% SLA' },
  ]

  const logos = [
    'NORTEK',
    'FUSO',
    'JANSSEN',
    'COMVIVA',
    'MEDTRONIC',
    'INFOSYS',
    'SIEMENS',
  ]

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      {/* Uniform section-wide gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-yellow-400/10 to-yellow-400/10" />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Eyebrow */}
        <Reveal
          y={6}
          as="p"
          className="text-[11px] tracking-[0.3em] text-gray-500 mb-4"
        >
          ISO-CERTIFIED PARTNER
        </Reveal>

        {/* Heading */}
        <Reveal
          y={8}
          as="h2"
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          ISO-certified. Secure. Ready for mission-critical products.
        </Reveal>

        {/* Subheading */}
        <Reveal
          delay={80}
          y={10}
          as="p"
          className="mt-5 mx-auto max-w-3xl text-sm md:text-base text-gray-400"
        >
          Buildbot operates as an ISO 9001 & ISO 27001 certified product studio —
          combining disciplined engineering, reliable operations, and secure cloud
          practices so global teams can confidently build, operate, and transfer
          products with us.
        </Reveal>

        {/* Pills */}
        <Reveal
          delay={140}
          y={12}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {pills.map((p) => (
            <span
              key={p.label}
              className="flex items-center gap-2 rounded-full border border-white/15
                         bg-white/5 px-4 py-2 text-xs text-white backdrop-blur"
            >
              <p.icon className="h-4 w-4 text-white/80" />
              {p.label}
            </span>
          ))}
        </Reveal>

        {/* Stats */}
        <Reveal
          delay={180}
          y={12}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[11px] uppercase tracking-widest text-gray-500">
                {s.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {s.value}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Trust line */}
        <p className="mt-16 text-[11px] tracking-widest text-gray-500">
          TRUSTED BY TEAMS ACROSS PRODUCT, HEALTHCARE, FINANCE & ENTERPRISE TECH
        </p>

        {/* Logos */}
        <Reveal
          delay={220}
          y={12}
          className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium tracking-wide text-gray-500"
            >
              {logo}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
