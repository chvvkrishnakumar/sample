// Google Calendar Appointment Scheduling Link
const GOOGLE_CALENDAR_BOOKING_URL = 'https://calendar.app.google/NW4vEMHeTrEYjiEu6'

export default function CTA() {

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left: Text */}
          <div>
            <p className="mb-3 text-xs tracking-widest text-neutral-400">
              BUILD · OPERATE · TRANSFER
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Let's <span className="text-amber-400">build your idea</span> together.
            </h2>

            <p className="mt-4 max-w-xl text-sm text-neutral-400">
              30 min free discovery call with our experts. Talk product strategy,
              software architecture, and IoT feasibility in one focused session.
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold tracking-wide text-neutral-400">
                FREE CONSULTATION
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Book a 30-min call with our CTO team.
              </h3>

              <p className="mt-4 text-sm text-neutral-400 max-w-xl">
                Share your product vision, unpack technical risks, and leave with
                a clear next step for your build journey.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>Project discovery: scope, milestones, and success metrics.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>Architecture & tech stack recommendations.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>IoT & edge feasibility guidance from build veterans.</span>
                </li>
              </ul>

              <p className="mt-8 text-xs text-neutral-400">
                Led by a senior{' '}
                <span className="font-medium text-emerald-400">CTO / Product Expert</span>.
                From first sketch to production-grade systems.
              </p>
            </div>
          </div>

          {/* Right: Second card (booking) */}
          <div className="md:sticky md:top-20">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-xl backdrop-blur">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/10 mb-4">
                    <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Calendar icon</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Ready to get started?</h4>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Pick a time that works for you. Our calendar shows real-time availability.
                  </p>
                </div>

                <a
                  href={GOOGLE_CALENDAR_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-amber-400 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-amber-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>Calendar icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>Arrow icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Check icon</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Check icon</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Google Meet link included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}