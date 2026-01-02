import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 16,
  x = 0,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  )
}
