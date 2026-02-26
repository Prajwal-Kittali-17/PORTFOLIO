import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-500">404</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-white">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          The page you’re looking for doesn’t exist (or it moved).
        </p>
        <Link
          to="/"
          className="mt-10 inline-block bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
