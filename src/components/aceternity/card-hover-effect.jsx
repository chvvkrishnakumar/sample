import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function HoverEffect({ items, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-accent/10 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className={item.className}>
            {item.icon && (
              <div className={cn('mb-4 p-3 rounded-lg inline-block', item.color)}>
                {item.icon}
              </div>
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description || item.desc}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  )
}

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-6 overflow-hidden bg-surface border border-border group-hover:border-accent/40 relative z-20 transition-all duration-300',
        'group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.25)]',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-foreground font-semibold text-xl tracking-tight mb-2', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn('text-muted-foreground text-sm leading-relaxed', className)}>
      {children}
    </p>
  )
}
