import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getProjectBySlug, projects } from '@/data/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to projects
          </Link>

          <h1 className="mt-8 font-serif text-5xl md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl">
            {project.subtitle}
          </p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card border border-white/10 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500">Overview</p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <p className="mt-8 text-xs uppercase tracking-widest text-gray-500">Highlights</p>
              <ul className="mt-4 grid gap-3 text-gray-400">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="bg-card border border-white/10 rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-gray-500">Details</p>
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-xs text-gray-500">Role</p>
                  <p className="text-sm text-gray-300">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Year</p>
                  <p className="text-sm text-gray-300">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.links?.length ? (
                  <div>
                    <p className="text-xs text-gray-500">Links</p>
                    <div className="mt-3 grid gap-2">
                      {project.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
