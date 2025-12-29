export default function Insights() {
  const posts = [
    {
      category: "PRODUCT",
      title: "From MVP to durable product in 12 months.",
      description:
        "How we structure discovery, launch, and iteration when speed and quality both matter.",
      image: "/insights-1.jpg",
    },
    {
      category: "AI",
      title: "Designing AI features that feel native, not bolted on.",
      description:
        "Patterns we’re seeing across successful AI products — and red flags to avoid.",
      image: "/insights-2.jpg",
    },
    {
      category: "GROWTH",
      title: "Using data & experimentation to tune SaaS pricing.",
      description:
        "A playbook for aligning monetization with customer value using real usage data.",
      image: "/insights-3.jpg",
    },
  ];

  return (
    <section className="bg-black px-6 py-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <p className="mb-3 text-xs tracking-widest text-gray-400">
          INSIGHTS
        </p>
        <h2 className="text-4xl font-bold text-white">
          Thinking from the build frontlines
        </h2>
        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          Practical, product-led perspectives on AI, SaaS, and modern engineering
          — written by the teams shipping the work.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 overflow-hidden transition hover:border-white/20"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/sample.jpg"
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-widest text-gray-400 mb-3">
                {post.category}
              </p>

              <h3 className="text-lg font-semibold text-white leading-snug">
                {post.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {post.description}
              </p>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-300 group-hover:text-white transition">
                  Read more <span aria-hidden>↗</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
