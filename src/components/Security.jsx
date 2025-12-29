export default function Security() {
  const pills = [
    { label: 'Clutch Global B2B Leader' },
    { label: 'ISO 9001 & ISO 27001 ready delivery' },
    { label: 'AWS & Google Cloud ecosystem partners' },
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
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          ISO-certified. Secure. Ready for mission-critical products.
        </h1>

        {/* Subheading */}
        <p className="mt-4 mx-auto max-w-3xl text-sm md:text-base text-gray-400">
          Buildbot teams have shipped and scaled products with global enterprises
          and fast-moving startups across healthcare, fintech, mobility, and manufacturing.
        </p>

        {/* Pills */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {pills.map((p) => (
            <span
              key={p.label}
              className="flex items-center gap-2 rounded-full border border-white/15
                         bg-white/5 px-4 py-2 text-xs text-white backdrop-blur"
            >
              {p.label}
            </span>
          ))}
        </div>

        {/* Trust line */}
        <p className="mt-8 text-[11px] tracking-widest text-gray-500">
          TRUSTED BY PRODUCT & INNOVATION TEAMS WORLDWIDE
        </p>

        {/* Logos */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium tracking-wide text-gray-500"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
