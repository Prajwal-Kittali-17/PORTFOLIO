import RevealOnScroll from './RevealOnScroll'

const stackItems = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'MySQL',
  'Docker',
  'Tailwind CSS',
]

export default function MissionSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Philosophy Quote */}
        <RevealOnScroll>
          <h2 className="font-serif text-3xl md:text-6xl text-white/90 text-center leading-tight mb-8">
            "Karishye Vachana Tava — Unstoppable."
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-xl text-gray-500 font-light text-center max-w-2xl mx-auto">
            I am a Computer Science Engineering student at PES University, Bangalore (560010). I’m focused on building strong fundamentals in software development while actively working with modern technologies.
          </p>
        </RevealOnScroll>

        {/* Tech Stack Grid */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-32">
            <p className="text-xs uppercase tracking-widest text-gray-600 text-center mb-12">
              Tools & Technologies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stackItems.map((item, index) => (
                <div
                  key={item}
                  className="text-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-medium tracking-widest uppercase text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
