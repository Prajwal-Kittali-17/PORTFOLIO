export default function AboutPage() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500">About</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-tight text-white">
          Building interfaces with taste,
          <span className="italic"> structure</span>, and intent.
        </h1>

        <div className="mt-10 grid gap-6 text-lg text-gray-400 max-w-3xl">
          <p>
            I am a Computer Science Engineering student at PES University, Bangalore (560010). I’m focused on building strong fundamentals in software development while actively working with modern technologies.
          </p>
          <p>
            I believe in discipline, consistency, and continuous growth — always pushing forward.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-card border border-white/10 rounded-3xl p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500">Focus</p>
            <h2 className="mt-4 font-serif text-2xl text-white">Building scalable applications</h2>
            <p className="mt-3 text-gray-400">
              Strengthening core programming fundamentals with practical projects.
            </p>
          </div>
          <div className="bg-card border border-white/10 rounded-3xl p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500">Strength</p>
            <h2 className="mt-4 font-serif text-2xl text-white">Problem-solving mindset</h2>
            <p className="mt-3 text-gray-400">
              Hands-on experience across backend and frontend development.
            </p>
          </div>
          <div className="bg-card border border-white/10 rounded-3xl p-8">
            <p className="text-xs uppercase tracking-widest text-gray-500">Style</p>
            <h2 className="mt-4 font-serif text-2xl text-white">Disciplined & grounded</h2>
            <p className="mt-3 text-gray-400">
              Jai Shree Ram • Har Har Mahadev • Hare Krishna.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
