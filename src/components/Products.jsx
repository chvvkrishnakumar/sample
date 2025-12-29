import { useEffect, useRef, useState } from 'react'

export default function Products() {
  const products = [
    {
      title: "HealthSync",
      tag: "Healthcare · SaaS",
      desc: "Connected clinician and patient portal with AI triage and real-time insights.",
      image: "/images/product-1.jpg",
    },
    {
      title: "PrintwithAI Studio",
      tag: "E-commerce · AI",
      desc: "AI-powered design, pricing, and fulfillment engine for global print brands.",
      image: "/images/product-2.jpg",
    },
    {
      title: "GrowthLens",
      tag: "B2B · SaaS",
      desc: "End-to-end delivery analytics and forecasting for complex product portfolios.",
      image: "/images/product-3.jpg",
    },
    {
      title: "FinConnect Cloud",
      tag: "Fintech · CRM",
      desc: "Relationship & revenue platform powering multi-country sales teams.",
      image: "/images/product-4.jpg",
    },
  ];

  // Horizontal scroll state
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !trackRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const viewH = window.innerHeight || document.documentElement.clientHeight

      // Calculate intersection progress when section enters viewport
      const start = Math.min(viewH, Math.max(0, viewH - rect.top))
      const sectionHeight = rect.height + viewH
      const p = Math.min(1, Math.max(0, (start + (rect.top < 0 ? -rect.top : 0)) / sectionHeight))
      setProgress(p)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Map progress [0..1] to translateX from 30% to -30%
  const translate = (1 - progress * 2) * 30 // 30 -> -30

  return (
    <section ref={containerRef} className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-widest text-gray-400 mb-3">
            OUR PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Products we've built & shipped
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            A snapshot of the ideas we've turned into real products — from
            wearables to agriculture platforms and creator tools.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="px-4 py-1.5 text-xs rounded-full bg-yellow-400 text-black">
              All
            </span>
            <span className="px-4 py-1.5 text-xs rounded-full border border-white/10 text-gray-300">
              Client launches
            </span>
            <span className="px-4 py-1.5 text-xs rounded-full border border-white/10 text-gray-300">
              Buildbot products
            </span>
          </div>
        </div>

        {/* Products Horizontal Parallax Track */}
        <div
          ref={trackRef}
          className="will-change-transform"
          style={{ transform: `translateX(${translate}%)`, transition: 'transform 0.06s linear' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-white/5"
              >
                {/* Image */}
                <img
                  src="/sample.jpg"
                  alt={p.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-4">
                  <span className="inline-block mb-2 text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                    {p.tag}
                  </span>
                  <h3 className="text-sm font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white text-xs">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
