import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from './RevealOnScroll'

export default function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const card1Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      id="works"
      ref={containerRef}
      className="py-40 px-6 relative overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 dot-grid opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <RevealOnScroll>
          <h2 className="font-serif text-5xl md:text-7xl text-center mb-20 text-white">
            Selected <span className="italic">Work</span>
          </h2>
        </RevealOnScroll>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Orange */}
          <motion.div
            style={{ y: card1Y }}
            className="group"
          >
            <div className="bg-accent rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)] transition-shadow duration-500">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <Link
                  to="/projects/campus-connect"
                  aria-label="View Campus Connect project"
                  className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
                <span className="rounded-full border border-black/20 px-3 py-1 text-xs text-black/60">
                  01
                </span>
              </div>

              {/* Bottom Content */}
              <div>
                <h3 className="font-serif text-4xl md:text-5xl text-black mb-4">
                  Campus Connect
                </h3>
                <p className="text-black/70 text-lg">
                  A web platform to help students collaborate, share notes, and manage academic resources efficiently.
                </p>
                <div className="mt-6 pt-6 border-t border-black/20">
                  <div className="flex items-center gap-4 text-sm text-black/60">
                    <span>React</span>
                    <span>•</span>
                    <span>Node.js</span>
                    <span>•</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Dark */}
          <motion.div
            style={{ y: card2Y }}
            className="group md:mt-24"
          >
            <div className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between hover:border-accent/50 transition-colors duration-500">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <Link
                  to="/projects/taskforge"
                  aria-label="View TaskForge project"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60">
                  02
                </span>
              </div>

              {/* Bottom Content */}
              <div>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  TaskForge
                </h3>
                <p className="text-gray-400 text-lg">
                  A productivity-focused task manager with a modular backend and optimized database queries.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Node.js</span>
                    <span>•</span>
                    <span>MySQL</span>
                    <span>•</span>
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Projects */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'DevHub Dashboard',
                description: 'A modern dashboard for developer insights',
                tags: ['React', 'JavaScript', 'UI/UX'],
              },
              {
                title: 'Containerized API Service',
                description: 'Microservice-style REST API with Docker',
                tags: ['Node.js', 'Docker', 'REST API'],
              },
            ].map((project, index) => (
              <Link
                key={project.title}
                to={index === 0 ? '/projects/devhub-dashboard' : '/projects/containerized-api-service'}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-white/40">0{index + 3}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-xl text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
