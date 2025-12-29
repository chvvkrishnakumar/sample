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
    <section id="horizontal" ref={sectionRef} className="relative h-[280vh] bg-slate-950">
      <div className="sticky top-0 h-screen overflow-hidden border-t border-slate-800">
        <Parallax translateX={["0px", (inView ? endX : "0px")]} startScroll={startScroll} endScroll={endScroll} className="h-full">
          <div ref={trackRef} className="h-full flex items-center gap-8 px-12" style={{ width: '200vw' }}>
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
  const hues = [260, 150, 330, 200, 120, 20]
  const hue = hues[index % hues.length]
  return (
    <div className="shrink-0 w-[60vw] max-w-[720px] h-[60vh] rounded-3xl border border-slate-800 bg-slate-900/60 p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25"
           style={{
             background: `radial-gradient(600px 200px at 30% 20%, hsl(${hue} 85% 60% / 0.30), transparent 60%),
                          radial-gradient(400px 200px at 80% 60%, hsl(${(hue+80)%360} 85% 65% / 0.20), transparent 60%)`
           }} />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Showcase {index + 1}</h3>
          <p className="text-slate-300">Smooth horizontal parallax track powered by your vertical scroll.</p>
        </div>
        <div className="text-slate-400 text-sm">Panels use neutral styling to match your theme.</div>
      </div>
    </div>
  )
}
