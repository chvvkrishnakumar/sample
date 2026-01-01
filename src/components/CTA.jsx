import { useState } from 'react'
import Modal from './ui/Modal'
import emailjs from '@emailjs/browser'

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

// Configuration - Replace with your actual Google Meet links
// To get real links: Create recurring events in Google Calendar with Google Meet enabled
const MEET_CONFIG = {
  links: {
    '09:00': 'https://meet.google.com/xxx-xxxx-xxx',  // Replace with your actual Meet link for 9 AM slot
    '10:30': 'https://meet.google.com/xxx-xxxx-xxx',  // Replace with your actual Meet link for 10:30 AM slot
    '13:00': 'https://meet.google.com/xxx-xxxx-xxx',  // Replace with your actual Meet link for 1 PM slot
    '15:30': 'https://meet.google.com/xxx-xxxx-xxx',  // Replace with your actual Meet link for 3:30 PM slot
    '17:00': 'https://meet.google.com/xxx-xxxx-xxx',  // Replace with your actual Meet link for 5 PM slot
  },
  defaultLink: 'https://meet.google.com/xxx-xxxx-xxx'  // Fallback link
}

// EmailJS Configuration - Simplified version
// Only sends notification to admin email when someone books
const EMAILJS_CONFIG = {
  publicKey: 'czO_bLatgLBzeOM1j',           // Your EmailJS public key
  serviceId: 'service_kef1wk6',             // Your email service ID
  adminTemplateId: 'template_fhfcl5q',      // Template for booking notification to admin
  guestTemplateId: 'template_xwjnzon',// Template for confirmation email to guest (create in EmailJS)
  adminEmail: 'chvvkrishnakumar@gmail.com'  // Admin email to receive booking notifications
}

// localStorage configuration
const STORAGE_KEY = 'buildbot_bookings'

const generateBookingId = () => {
  return `BKG-${Date.now()}-${Math.random().toString(36).substring(2, 11).toUpperCase()}`
}

const saveBookingToStorage = (booking) => {
  try {
    const existingBookings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    existingBookings.push(booking)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingBookings))
    return true
  } catch (error) {
    console.error('Error saving booking:', error)
    return false
  }
}

export default function CTA() {
  const [idea, setIdea] = useState('')
  const [selectedDate, setSelectedDate] = useState(null) // Date | null
  const [selectedTime, setSelectedTime] = useState('')
  const [guestName, setGuestName] = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingConfirmation, setBookingConfirmation] = useState(null)

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

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!guestName.trim()) {
      newErrors.name = 'Name is required'
    } else if (guestName.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!guestEmail.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(guestEmail)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Date validation
    if (!selectedDate) {
      newErrors.date = 'Please select a date'
    }

    // Time validation
    if (!selectedTime) {
      newErrors.time = 'Please select a time'
    }

    // Description validation
    if (!idea.trim()) {
      newErrors.idea = 'Please share your idea'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateMeetLink = () => {
    return MEET_CONFIG.links[selectedTime] || MEET_CONFIG.defaultLink
  }

  const resetForm = () => {
    setGuestName('')
    setGuestEmail('')
    setIdea('')
    setSelectedDate(null)
    setSelectedTime('')
    setErrors({})
  }

  const sendEmailNotifications = async (booking) => {
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_CONFIG.publicKey)

    // Admin notification params
    const adminParams = {
      guest_name: booking.name,
      guest_email: booking.email,
      booking_date: booking.dateFormatted,
      booking_time: booking.time,
      meeting_link: booking.meetLink,
      booking_id: booking.id,
      guest_idea: booking.description,
      to_name: 'Buildbot Team',
      to_email: EMAILJS_CONFIG.adminEmail,
      to: EMAILJS_CONFIG.adminEmail,
      reply_to: booking.email,
    }

    // Guest confirmation params
    const guestParams = {
      guest_name: booking.name,
      booking_date: booking.dateFormatted,
      booking_time: booking.time,
      meeting_link: booking.meetLink,
      booking_id: booking.id,
      to_email: booking.email,
      to: booking.email,
      to_name: booking.name,
      reply_to: EMAILJS_CONFIG.adminEmail,
    }

    try {
      // 1) Notify admin
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.adminTemplateId,
        adminParams
      )
      console.log('✅ Booking notification sent to admin')

      // 2) Email the guest (requires a guest template whose "To" uses {{to_email}})
      if (EMAILJS_CONFIG.guestTemplateId) {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.guestTemplateId,
          guestParams
        )
        console.log('✅ Booking confirmation sent to guest')
      } else {
        console.warn('Guest template not configured (EMAILJS_CONFIG.guestTemplateId). Guest email skipped.')
      }

      return true
    } catch (error) {
      console.error('❌ Email sending failed:', error)
      console.error('Error details:', error.text || error.message)
      // Don't fail the booking if email fails
      return false
    }
  }

  const addToGoogleCalendar = (booking) => {
    // Parse date and time
    const startDate = new Date(booking.date)
    const [hours, minutes] = booking.time.split(':')
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0)

    // Calculate end time (30 minutes later)
    const endDate = new Date(startDate.getTime() + 30 * 60000)

    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const formatGoogleDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    // Build Google Calendar URL
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render')
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE')
    googleCalendarUrl.searchParams.append('text', 'Discovery Call with Buildbot CTO Team')
    googleCalendarUrl.searchParams.append('dates', `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`)
    googleCalendarUrl.searchParams.append('details', `Your idea: ${booking.description}\n\nJoin Google Meet: ${booking.meetLink}\n\nBooking ID: ${booking.id}`)
    googleCalendarUrl.searchParams.append('location', booking.meetLink)
    googleCalendarUrl.searchParams.append('add', booking.email)

    // Open Google Calendar in new tab
    window.open(googleCalendarUrl.toString(), '_blank')
  }

  const downloadICSFile = (booking) => {
    // Parse date and time
    const startDate = new Date(booking.date)
    const [hours, minutes] = booking.time.split(':')
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0)

    // Calculate end time (30 minutes later)
    const endDate = new Date(startDate.getTime() + 30 * 60000)

    // Format dates for ICS (YYYYMMDDTHHMMSSZ)
    const formatICSDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    // Generate ICS content
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Buildbot//Booking System//EN',
      'BEGIN:VEVENT',
      `UID:${booking.id}@buildbot.com`,
      `DTSTAMP:${formatICSDate(new Date())}`,
      `DTSTART:${formatICSDate(startDate)}`,
      `DTEND:${formatICSDate(endDate)}`,
      `SUMMARY:Discovery Call with Buildbot CTO Team`,
      `DESCRIPTION:Your idea: ${booking.description}\\n\\nJoin: ${booking.meetLink}`,
      `LOCATION:${booking.meetLink}`,
      `ORGANIZER:mailto:hello@buildbot.com`,
      `ATTENDEE:mailto:${booking.email}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    // Create and download file
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `buildbot-consultation-${booking.id}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }

  const handleSchedule = async () => {
    // 1. Validate form
    if (!validateForm()) return

    // 2. Create booking object
    const booking = {
      id: generateBookingId(),
      name: guestName.trim(),
      email: guestEmail.trim(),
      description: idea.trim(),
      date: selectedDate.toISOString(),
      dateFormatted: selectedDate.toDateString(),
      time: selectedTime,
      meetLink: generateMeetLink(),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    }

    // 3. Save to localStorage
    const saved = saveBookingToStorage(booking)

    if (saved) {
      // 4. Send email notifications (guest + admin)
      await sendEmailNotifications(booking)

      // 5. Show success confirmation
      setBookingConfirmation(booking)
      setShowConfirmation(true)

      // 6. Reset form
      resetForm()
    } else {
      setErrors({ general: 'Failed to save booking. Please try again.' })
    }
  }

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1)

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-6 py-24">
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
             <div className="space-y-3">
               {/* Name Field */}
               <div>
                 <label htmlFor="guestName" className="block text-xs text-neutral-400 mb-1.5">
                   Your Name <span className="text-amber-400">*</span>
                 </label>
                 <input
                   id="guestName"
                   type="text"
                   value={guestName}
                   onChange={(e) => setGuestName(e.target.value)}
                   placeholder="John Doe"
                   className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-neutral-600"
                 />
                 {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
               </div>

               {/* Email Field */}
               <div>
                 <label htmlFor="guestEmail" className="block text-xs text-neutral-400 mb-1.5">
                   Email Address <span className="text-amber-400">*</span>
                 </label>
                 <input
                   id="guestEmail"
                   type="email"
                   value={guestEmail}
                   onChange={(e) => setGuestEmail(e.target.value)}
                   placeholder="john@example.com"
                   className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-neutral-600"
                 />
                 {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
               </div>

               {/* Existing Textarea */}
               <div>
                 <label htmlFor="idea" className="block text-xs text-neutral-400 mb-1.5">
                   Share your idea <span className="text-amber-400">*</span>
                 </label>
                 <textarea
                   id="idea"
                   value={idea}
                   onChange={(e) => setIdea(e.target.value)}
                   placeholder="Tell us briefly what you want to build..."
                   className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-neutral-600 min-h-[120px]"
                 />
                 {errors.idea && <p className="text-[10px] text-red-400 mt-1">{errors.idea}</p>}
               </div>

               {/* General Error */}
               {errors.general && <p className="text-xs text-red-400">{errors.general}</p>}

               <button onClick={handleSchedule} className="mt-3 w-full inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300">
                 Schedule now
               </button>
             </div>
           </div>
          </div>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      <Modal
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Booking Confirmed!"
      >
        {bookingConfirmation && (
          <div className="space-y-4">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="rounded-full bg-emerald-400/10 p-3">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Success checkmark</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Confirmation Message */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900">
                You&apos;re all set, {bookingConfirmation.name}!
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Your 30-minute consultation is scheduled for:
              </p>
            </div>

            {/* Booking Details */}
            <div className="rounded-lg bg-gray-50 p-4 space-y-3 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Calendar icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">{bookingConfirmation.dateFormatted}</p>
                  <p className="text-sm text-gray-600">{bookingConfirmation.time} (local time)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Video camera icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Google Meet</p>
                  <a
                    href={bookingConfirmation.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 underline break-all"
                  >
                    {bookingConfirmation.meetLink}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Document icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">Booking ID</p>
                  <p className="text-sm text-gray-600 font-mono">{bookingConfirmation.id}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => addToGoogleCalendar(bookingConfirmation)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Google Calendar icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Google Calendar
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => downloadICSFile(bookingConfirmation)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>Download icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download .ics
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-black hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  Done
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 text-center pt-2">
              Your booking has been saved. Add this event to your calendar to get reminders.
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}

