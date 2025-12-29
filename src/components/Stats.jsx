// src/components/Stats.jsx
export default function Stats() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <div>
          {/* Mission badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            OUR MISSION
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            We turn <span className="text-yellow-400">ambitious ideas</span>{" "}
            into investable, scalable products.
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-xl">
            From zero to one and beyond, we partner with founders and product
            leaders to design, build, and operate digital products that feel
            premium on day one and compound value over time.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-full border border-white/10 bg-white/5">
              <span className="text-yellow-400">✦</span>
              <p className="text-sm text-gray-300">
                We help you shape, validate, and position your product before a
                single line of code.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-full border border-white/10 bg-white/5">
              <span className="text-yellow-400">✦</span>
              <p className="text-sm text-gray-300">
                Dedicated AI & product squads that build and operate as if they
                own the roadmap.
              </p>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-full border border-white/10 bg-white/5">
              <span className="text-yellow-400">✦</span>
              <p className="text-sm text-gray-300">
                Clean handover and full ownership transfer when you're ready to
                scale in-house.
              </p>
            </div>
          </div>

          {/* Outcome pill */}
          <div className="mt-8 inline-flex items-center gap-4 px-5 py-3 rounded-xl border border-teal-400/30 bg-teal-400/10">
            <span className="text-xs font-semibold text-teal-400 tracking-wide">
              OUTCOME FIRST
            </span>
            <p className="text-sm text-gray-300">
              We measure success in shipped products, active users, and
              follow-on funding — not story decks.
            </p>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            {
              value: "50+",
              title: "PRODUCTS SHIPPED",
              desc: "From SaaS to AI copilots, launched across 12+ markets.",
              highlight: true,
            },
            {
              value: "$2B+",
              title: "VALUE CREATED",
              desc: "Backed by top-tier funds and strategic investors.",
            },
            {
              value: "6–12 wk",
              title: "TO FIRST RELEASE",
              desc: "Opinionated delivery playbooks, no endless discovery.",
            },
            {
              value: "100%",
              title: "CODE OWNERSHIP",
              desc: "You own the IP, repo, infra, and the playbook we build.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${
                item.highlight
                  ? "border-yellow-400/40 bg-yellow-400/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="mt-2 text-xs tracking-widest text-gray-400">
                {item.title}
              </p>
              <p className="mt-3 text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
