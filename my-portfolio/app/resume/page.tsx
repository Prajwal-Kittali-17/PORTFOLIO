import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500">Resume</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Experience & <span className="italic">skills</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            This page is ready to be wired to your real resume. Drop a PDF at
            <span className="text-white"> /public/resume.pdf</span> to enable download.
          </p>

          <div className="mt-12 grid gap-6">
            <div className="bg-card border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl text-white">Download</h2>
                  <p className="mt-2 text-gray-400">
                    Add your PDF and this link will work immediately.
                  </p>
                </div>
                <a
                  className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-300 w-fit"
                  href="/resume.pdf"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="bg-card border border-white/10 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500">Snapshot</p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif text-xl text-white">Core skills</h3>
                  <ul className="mt-4 grid gap-2 text-gray-400">
                    <li>React / TypeScript</li>
                    <li>UI systems & accessibility</li>
                    <li>Performance and profiling</li>
                    <li>API integration and architecture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white">Preferences</h3>
                  <ul className="mt-4 grid gap-2 text-gray-400">
                    <li>Clear ownership and shipping cadence</li>
                    <li>Strong design collaboration</li>
                    <li>Testing where it pays off</li>
                    <li>Docs that prevent repeated mistakes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
