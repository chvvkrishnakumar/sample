import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function BackgroundBeams({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let beams = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBeam = () => {
      return {
        x: Math.random() * canvas.width,
        y: -50,
        length: Math.random() * 100 + 100,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      }
    }

    const initBeams = () => {
      beams = []
      for (let i = 0; i < 8; i++) {
        beams.push(createBeam())
      }
    }

    const drawBeam = (beam) => {
      const gradient = ctx.createLinearGradient(
        beam.x,
        beam.y,
        beam.x,
        beam.y + beam.length
      )
      gradient.addColorStop(0, `rgba(250, 204, 21, 0)`)
      gradient.addColorStop(0.5, `rgba(250, 204, 21, ${beam.opacity})`)
      gradient.addColorStop(1, `rgba(250, 204, 21, 0)`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(beam.x, beam.y)
      ctx.lineTo(beam.x, beam.y + beam.length)
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam, index) => {
        drawBeam(beam)
        beam.y += beam.speed

        if (beam.y > canvas.height + 50) {
          beams[index] = createBeam()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initBeams()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  )
}
