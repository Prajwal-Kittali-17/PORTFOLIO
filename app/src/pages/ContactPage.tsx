import { useMemo, useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const toEmail = 'prajwalkittali2728@gmail.com'

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
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500">Contact</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-white">
          Let’s build something
          <span className="italic"> great</span>.
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          Share what you’re working on. If it’s a fit, I’ll reply with next steps.
        </p>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-white/10 rounded-3xl p-8">
            <form
              className="grid gap-4"
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
          </div>

          <aside className="bg-card border border-white/10 rounded-3xl p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500">Elsewhere</p>
            <div className="mt-6 grid gap-3">
              <a
                className="text-sm text-gray-300 hover:text-white transition-colors"
                href="https://github.com/Prajwal-Kittali-17"
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
              <a
                className="text-sm text-gray-300 hover:text-white transition-colors"
                href="https://www.linkedin.com/in/prajwal-kittali-8178a7349"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
              <a
                className="text-sm text-gray-300 hover:text-white transition-colors"
                href="https://instagram.com/prajwal.kittali.17"
                target="_blank"
                rel="noreferrer"
              >
                Instagram →
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500">Email</p>
              <p className="mt-2 text-sm text-gray-300">{toEmail}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
