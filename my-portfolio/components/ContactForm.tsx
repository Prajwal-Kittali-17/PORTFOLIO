'use client'

import { useMemo, useState } from 'react'

type Props = {
  toEmail?: string
}

export default function ContactForm({ toEmail = 'prajwalkittali2728@gmail.com' }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name || '(not provided)'}`,
        `Email: ${email || '(not provided)'}`,
        '',
        message || '(no message)',
      ].join('\n'),
    )
    return `mailto:${encodeURIComponent(toEmail)}?subject=${subject}&body=${body}`
  }, [toEmail, name, email, message])

  return (
    <form
      className="mt-10 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = mailtoHref
      }}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-2xl bg-white/5 border border-white/10 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-2xl bg-white/5 border border-white/10 px-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
            type="email"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-widest text-gray-500">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[160px] rounded-2xl bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <button
          type="submit"
          className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-300 w-fit"
        >
          Send message
        </button>

        <a
          href={mailtoHref}
          className="text-sm text-gray-400 hover:text-white transition-colors w-fit"
        >
          Or open your email app
        </a>
      </div>
    </form>
  )
}
