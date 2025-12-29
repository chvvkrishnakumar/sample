import { useEffect, useRef } from 'react'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  y = 16,
  x = 0,
  threshold = 0.1,
  once = true,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // start hidden
    el.style.opacity = '0'
    el.style.transform = `translate(${x}px, ${y}px)`

    if (!('IntersectionObserver' in window)) {
      // fallback: show immediately
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 600ms ease, transform 600ms ease'
        el.style.transitionDelay = `${delay}ms`
        el.style.opacity = '1'
        el.style.transform = 'translate(0, 0)'
      })
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 600ms ease, transform 600ms ease'
          el.style.transitionDelay = `${delay}ms`
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0)'
          if (once) io.unobserve(el)
        } else if (!once) {
          // reset when leaving viewport if not once
          el.style.opacity = '0'
          el.style.transform = `translate(${x}px, ${y}px)`
        }
      })
    }, { threshold })

    io.observe(el)
    return () => io.disconnect()
  }, [delay, x, y, threshold, once])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
