import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function HorizontalParallax() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [endX, setEndX] = useState('0px')
  const [startScroll, setStartScroll] = useState(0)
  const [endScroll, setEndScroll] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    function compute() {
      const track = trackRef.current
      const section = sectionRef.current
      if (track) {
        const trackWidth = track.scrollWidth
        const viewportW = window.innerWidth
        const delta = Math.max(0, trackWidth - viewportW)
        setEndX(`${-delta}px`)
      }
      if (section) {
        const rect = section.getBoundingClientRect()
        const pageY = window.pageYOffset || document.documentElement.scrollTop || 0
        const sectionTop = pageY + rect.top
        const height = section.offsetHeight
        const viewportH = window.innerHeight
        const start = Math.max(0, sectionTop)
        const end = start + Math.max(0, height - viewportH)
        setStartScroll(start)
        setEndScroll(end)
      }
    }
    compute()
    const onResize = () => compute()
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    const section = sectionRef.current
    let io
    if (section && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        if (entries[0]) setInView(entries[0].isIntersecting)
      }, { threshold: 0.01 })
      io.observe(section)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      if (io) io.disconnect()
    }
  }, [])

  const items = useMemo(() => Array.from({ length: 6 }).map((_, i) => i), [])

  return (
    <section id="horizontal" ref={sectionRef} className="relative h-[220vh] bg-black ">
      <div className="sticky top-0 h-screen overflow-hidden bg-black border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto pt-24 sm:pt-28">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
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
          <div className="flex justify-center gap-2 mt-2 mb-4">
            <span className="px-4 py-1 text-xs rounded-full bg-yellow-400 text-black">
              All
            </span>
            <span className="px-4 py-1 text-xs rounded-full border border-white/10 text-gray-300">
              Client launches
            </span>
            <span className="px-4 py-1 text-xs rounded-full border border-white/10 text-gray-300">
              Buildbot products
            </span>
          </div>
        </div>
        <Parallax translateX={["0px", (inView ? endX : "0px")]} startScroll={startScroll} endScroll={endScroll} className="h-full">
          <div ref={trackRef} className="h-auto flex items-center gap-6 px-8" style={{ width: '160vw' }}>
            {items.map((i) => (
              <Panel key={i} index={i} />
            ))}
          </div>
        </Parallax>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-slate-500 text-sm">
        Scroll to drive horizontal movement
      </div>
    </section>
  )
}

function Panel({ index }) {
  return (
    <div className="shrink-0 w-[50vw] max-w-[560px] h-[50vh] rounded-2xl border border-white/20 bg-black p-6 relative">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Showcase {index + 1}</h3>
          <p className="text-gray-300">Smooth horizontal parallax track powered by your vertical scroll.</p>
        </div>
        <div className="text-gray-400 text-sm">Panels use neutral styling to match your theme.</div>
      </div>
    </div>
  )
}
