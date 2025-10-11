import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[65vh] flex items-center">
      {/* Transparent plate so background motion shows through */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-transparent">
        <motion.div
          initial={{ x: -24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-md">
            Out of Darkness to Light ✝️🏹
          </h1>

          <p className="mt-3 text-lg md:text-xl text-gray-300 font-light">
            Faith-Inspired Innovation for a Digital Generation
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            At <span className="text-yellow-400 font-semibold">Solomough</span>, we blend
            <span className="text-white font-medium"> faith</span>,{' '}
            <span className="text-white font-medium">creativity</span>, and{' '}
            <span className="text-white font-medium">technology</span> to empower
            individuals, schools, and brands to shine with purpose. Guided by divine
            inspiration, we build impactful web experiences, craft digital strategy,
            and mentor visionaries — proving that with <strong>Faith + Action</strong>,
            transformation has no limits.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2 border border-yellow-400/70 rounded-md text-sm text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all"
            >
              Explore Projects
            </a>

            <a
              href="mailto:zahemenmoughkaa@gmail.com"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black text-sm font-semibold hover:shadow-lg transition-all"
            >
              Book a Session with Us
            </a>

            <a
              href="#MeetMe"
              className="px-5 py-2 border border-yellow-400/70 rounded-md text-sm text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all"
            >
              Meet Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
