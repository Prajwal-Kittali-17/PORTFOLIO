import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500">Contact</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Let’s build something
            <span className="italic"> great</span>.
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Share what you’re working on. If it’s a fit, I’ll reply with next steps.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card border border-white/10 rounded-3xl p-8">
              <ContactForm toEmail="prajwalkittali2728@gmail.com" />
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
                <p className="mt-2 text-sm text-gray-300">prajwalkittali2728@gmail.com</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
