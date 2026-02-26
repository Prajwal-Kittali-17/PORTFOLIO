import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug, posts } from '@/data/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Back to writing
          </Link>

          <h1 className="mt-8 font-serif text-5xl md:text-6xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-10 grid gap-6 text-lg text-gray-300 leading-relaxed">
            {post.content
              .split(/\n\n+/)
              .filter(Boolean)
              .map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
