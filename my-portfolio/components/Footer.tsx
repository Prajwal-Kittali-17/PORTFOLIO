'use client'

import Link from 'next/link'

const socialLinks = [
  {
    href: 'https://instagram.com/prajwal.kittali.17',
    label: 'Instagram',
    icon: 'ph:instagram-logo',
  },
  {
    href: 'https://www.linkedin.com/in/prajwal-kittali-8178a7349',
    label: 'LinkedIn',
    icon: 'ph:linkedin-logo',
  },
  {
    href: 'https://github.com/Prajwal-Kittali-17',
    label: 'GitHub',
    icon: 'ph:github-logo',
  },
]

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* Giant Watermark */}
          <div className="no-select">
            <span
              className="text-[15vw] lg:text-[10vw] text-white/10 font-bold tracking-tighter leading-none block"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Vrajana ⚡
            </span>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start lg:items-end gap-8">
            {/* Social Links */}
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <iconify-icon
                    icon={link.icon}
                    className="text-xl group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Prajwal Kittali. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <Link
              href="/about"
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Writing
            </Link>
            <Link
              href="/contact"
              className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Contact
            </Link>
          </div>
          <p className="text-xs text-gray-600">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  )
}
