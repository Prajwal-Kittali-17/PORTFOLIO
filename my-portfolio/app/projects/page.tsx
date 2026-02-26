import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500">Projects</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Selected <span className="italic">work</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            A mix of product UI, system design, and experiments.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-card border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-3xl text-white">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-gray-400">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                <p className="mt-6 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                  <span>View project</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
