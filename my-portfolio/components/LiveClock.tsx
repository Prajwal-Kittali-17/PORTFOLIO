'use client'

import { useState, useEffect } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const formatTime = () => {
      const now = new Date()
      return now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    }

    setTime(formatTime())

    const interval = setInterval(() => {
      setTime(formatTime())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!time) return null

  return <span>{time}</span>
}
