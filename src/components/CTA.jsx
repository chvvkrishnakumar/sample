export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-6 py-24">
      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs tracking-widest text-neutral-400">
          BUILD · OPERATE · TRANSFER
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Let’s <span className="text-amber-400">build your idea</span> together.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
          30 min free discovery call with our experts. Talk product strategy,
          software architecture, and IoT feasibility in one focused session.
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto mt-14 max-w-6xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-xl backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left content */}
          <div className="text-left">
            <p className="text-xs font-semibold tracking-wide text-neutral-400">
              FREE CONSULTATION
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Book a 30-min call with our CTO team.
            </h3>

            <p className="mt-4 text-sm text-neutral-400">
              Share your product vision, unpack technical risks, and leave with
              a clear next step for your build journey.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Project discovery: scope, milestones, and success metrics.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Architecture & tech stack recommendations.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                IoT & edge feasibility guidance from build veterans.
              </li>
            </ul>

            <p className="mt-6 text-xs text-neutral-400">
              Led by a senior{" "}
              <span className="font-medium text-emerald-400">
                CTO / Product Expert
              </span>
              . From first sketch to production-grade systems.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
              Schedule now
            </button>

            <p className="mt-3 text-xs text-neutral-500">
              No preparation required. We’ll meet you where you are.
            </p>
          </div>

          {/* Right booking mock */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-left">
            <p className="text-sm font-medium text-white">
              October 2025 · 30 min
            </p>

            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-neutral-400">
              {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-7 gap-2 text-sm">
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-md border border-neutral-800 py-2 text-center ${
                    [9, 10, 11, 17, 18].includes(i)
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-500"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-neutral-400">
              Available times (local time)
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["09:00", "10:30", "13:00", "15:30", "17:00"].map((t) => (
                <button
                  key={t}
                  className={`rounded-full border px-4 py-1 text-xs ${
                    t === "09:00"
                      ? "border-emerald-400 text-emerald-400"
                      : "border-neutral-700 text-neutral-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="mt-4 text-[10px] text-neutral-500">
              Timezone auto-detected · Powered by Buildbot booking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
