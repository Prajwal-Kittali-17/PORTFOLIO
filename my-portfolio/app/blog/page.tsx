import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts } from '@/data/posts'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500">Writing</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Notes on <span className="italic">craft</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Short posts about UI, systems, and building habits.
          </p>

          <div className="mt-14 grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h2 className="font-serif text-3xl text-white group-hover:opacity-90 transition-opacity">
                    {post.title}
                  </h2>
                  <div className="text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
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
