import { useState } from 'react'

function startOfDay(d) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function monthLabel(date) {
  return date.toLocaleString(undefined, { month: 'long', year: 'numeric' })
}

function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate()
}

function getFirstWeekdayOffset(year, monthIndex) {
  // Sunday = 0 ... Saturday = 6
  return new Date(year, monthIndex, 1).getDay()
}

export default function CTA() {
  const [idea, setIdea] = useState('')
  const [selectedDate, setSelectedDate] = useState(null) // Date | null
  const [selectedTime, setSelectedTime] = useState('')

  const today = startOfDay(new Date())
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const d = new Date()
    d.setDate(1)
    d.setHours(0, 0, 0, 0)
    return d
  })

  function dateKey(d) {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
  }

  // Add any specific unavailable dates in ISO format, e.g., '2025-01-01'
  const unavailableDates = new Set([
    // '2025-01-01',
  ])

  const isUnavailableDate = (d) => {
    const s = startOfDay(d)
    const isPast = s < today
    const isWeekend = s.getDay() === 0 || s.getDay() === 6
    return isPast || isWeekend || unavailableDates.has(dateKey(s))
  }

  const year = visibleMonth.getFullYear()
  const monthIndex = visibleMonth.getMonth()
  const totalDays = getDaysInMonth(year, monthIndex)
  const offset = getFirstWeekdayOffset(year, monthIndex)

  const firstDayThisMonth = new Date(year, monthIndex, 1)
  const firstDayCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  const canGoPrev = startOfDay(firstDayThisMonth) > startOfDay(firstDayCurrentMonth)

  const nextMonth = () => {
    const d = new Date(visibleMonth)
    d.setMonth(d.getMonth() + 1)
    setVisibleMonth(d)
  }

  const prevMonth = () => {
    if (!canGoPrev) return
    const d = new Date(visibleMonth)
    d.setMonth(d.getMonth() - 1)
    setVisibleMonth(d)
  }

  const handleSchedule = () => {
    const dateStr = selectedDate ? selectedDate.toDateString() : 'No date selected'
    const timeStr = selectedTime || 'No time selected'

    console.log('User idea:', idea)
    console.log('Selected date:', dateStr)
    console.log('Selected time:', timeStr)
  }

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-6 py-24">
      {/* Header */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs tracking-widest text-neutral-400">
          BUILD · OPERATE · TRANSFER
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Let’s <span className="text-amber-400">build your idea</span> together.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400">
          30 min free discovery call with our experts. Talk product strategy,
          software architecture, and IoT feasibility in one focused session.
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto mt-14 max-w-6xl rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-xl backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left content */}
          <div className="text-left">
            <p className="text-xs font-semibold tracking-wide text-neutral-400">
              FREE CONSULTATION
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              Book a 30-min call with our CTO team.
            </h3>

            <p className="mt-4 text-sm text-neutral-400">
              Share your product vision, unpack technical risks, and leave with
              a clear next step for your build journey.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-neutral-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Project discovery: scope, milestones, and success metrics.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                Architecture & tech stack recommendations.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                IoT & edge feasibility guidance from build veterans.
              </li>
            </ul>

            <p className="mt-6 text-xs text-neutral-400">
              Led by a senior{' '}
              <span className="font-medium text-emerald-400">CTO / Product Expert</span>.
              From first sketch to production-grade systems.
            </p>

            
          </div>

          {/* Right booking calendar */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 text-left text-[13px] sm:text-[14px] w-full max-w- mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div className="flex justify-center">
                <div className="w-full max-w-[280px]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-white">
                {monthLabel(visibleMonth)} · 30 min
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevMonth}
                  disabled={!canGoPrev}
                  className={`rounded-md border px-2 py-1 text-xs ${
                    canGoPrev
                      ? 'border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white'
                      : 'cursor-not-allowed border-neutral-900 text-neutral-700'
                  }`}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-300 hover:border-neutral-500 hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1.5 text-center text-[11px] text-neutral-400">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="mt-1.5 grid grid-cols-7 gap-1.5 text-xs">
              {/* leading blanks for offset */}
              {Array.from({ length: offset }).map((_, i) => (
                <div key={`blank-${i}`} />
              ))}

              {daysArray.map((day) => {
                const dateObj = startOfDay(new Date(year, monthIndex, day))
                const isPast = dateObj < today
                const isDisabled = isUnavailableDate(dateObj)
                const isSelected = selectedDate && startOfDay(selectedDate).getTime() === dateObj.getTime()

                return (
                  <button
                    type="button"
                    key={day}
                    onClick={() => !isDisabled && setSelectedDate(dateObj)}
                    disabled={isDisabled}
                    className={`rounded-md border py-1.5 text-center transition-colors ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : isDisabled
                          ? 'cursor-not-allowed border-neutral-900 text-neutral-700'
                          : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            <p className="mt-6 text-xs text-neutral-400">
              Available times (local time)
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {["09:00", "10:30", "13:00", "15:30", "17:00"].map((t) => {
                const isPicked = selectedTime === t
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-full border px-3 py-1 text-[11px] transition-colors ${
                      isPicked
                        ? 'border-emerald-400 text-emerald-400'
                        : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200'
                    }`}
                  >
                    {t}
                  </button>
                )
              })}
            </div>

            <p className="mt-3 text-[10px] text-neutral-500">
              {selectedDate ? `Selected: ${selectedDate.toDateString()}` : 'No date selected'}
            </p>
            <p className="text-[10px] text-neutral-500">Timezone auto-detected · Powered by Buildbot booking</p>
             </div>
             </div>
             <div>
               <p className="text-xs text-neutral-400 mb-2">Share your idea</p>
               <textarea
                 value={idea}
                 onChange={(e) => setIdea(e.target.value)}
                 placeholder="Tell us briefly what you want to build..."
                 className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-neutral-600 min-h-[120px]"
               />
               <button onClick={handleSchedule} className="mt-3 w-full inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300">
                 Schedule now
               </button>
             </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}
