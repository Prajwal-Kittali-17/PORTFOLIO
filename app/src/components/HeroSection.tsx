import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import LiveClock from './LiveClock'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, transparent 50%, #050505 100%)',
          }}
        />
        <div
          className="w-full h-full opacity-60 mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Floating Element - Left */}
      <motion.div
        className="absolute -left-[10%] top-[-15%] w-[40vw] z-[5] mix-blend-hard-light opacity-80 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          src="/images/hand-left.png"
          alt=""
          className="w-full h-auto"
          style={{ filter: 'hue-rotate(320deg) saturate(0.5) brightness(0.8)' }}
        />
      </motion.div>

      {/* Floating Element - Right */}
      <motion.div
        className="absolute -right-[10%] bottom-[-5%] w-[35vw] z-[5] pointer-events-none"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          src="/images/hand-right.png"
          alt=""
          className="w-full h-auto"
          style={{ filter: 'hue-rotate(200deg) saturate(0.6) brightness(0.7)' }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl text-[#ffe0e0] mb-4"
          style={{
            mixBlendMode: 'overlay',
            textShadow: '0 0 12px rgba(255,255,255,0.71)',
          }}
        >
          Prajwal Kittali
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-5xl text-[#ffe0e0] italic mb-8"
          style={{
            mixBlendMode: 'overlay',
            textShadow: '0 0 12px rgba(255,255,255,0.71)',
          }}
        >
          Unstoppable
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#ffe0e0]/90 font-light text-lg md:text-xl max-w-lg mx-auto mb-12"
          style={{
            textShadow: '0 0 12px rgba(255,255,255,0.71)',
          }}
        >
          I am a Computer Science Engineering student at PES University, Bangalore (560010). I’m focused on building strong fundamentals in software development while actively working with modern technologies.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block group"
        >
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <button 
            onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all duration-300"
          >
            View My Work
          </button>
        </motion.div>

        {/* Live Clock & City */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest"
        >
          <LiveClock />
          <span>—</span>
          <span>Bangalore – India</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
