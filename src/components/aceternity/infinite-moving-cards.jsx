import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '60s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[200px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6"
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.name || item.title || 'Item'}
                className="h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ) : (
              <div className="relative z-20">
                <div className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.quote || item.description || item.content}
                </div>
                {item.name && (
                  <div className="mt-4">
                    <span className="text-sm leading-[1.6] text-gray-200 font-semibold">
                      {item.name}
                    </span>
                    {item.title && (
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {' '}
                        - {item.title}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 60s)
            var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </div>
  )
}
