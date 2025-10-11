import React from 'react'
import { motion } from 'framer-motion'
import dp from '../assets/dp.png'

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center min-h-[90vh] relative z-10">
      {/* Left Section - Text */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-transparent p-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-md">
          Out of Darkness to Light ✝️🏹
        </h1>

        <p className="mt-3 text-lg md:text-xl text-gray-300 font-light">
          Faith-Inspired Innovation for a Digital Generation
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
          At <span className="text-yellow-400 font-semibold">Solomough</span>, we blend
          <span className="text-white font-medium"> faith</span>,
          <span className="text-white font-medium"> creativity</span>, and
          <span className="text-white font-medium"> technology</span> to empower
          individuals, schools, and brands to shine with purpose.
          Guided by divine inspiration, we build impactful web experiences,
          create digital strategies, and mentor visionaries toward growth —
          proving that with <strong>Faith + Action</strong>, transformation has no limits.
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
            href="https://solomough.github.io/From-visions-to-call-/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-yellow-400/70 rounded-md text-sm text-yellow-300 hover:bg-yellow-400 hover:text-black transition-all"
          >
            Read Book
          </a>
        </div>
      </motion.div>

      {/* Right Section - Profile */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center bg-transparent"
      >
        <img
          src={dp}
          alt="Solomon Moughkaa Zahemen"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-[#d4af37]/60 object-cover shadow-[0_0_25px_rgba(212,175,55,0.3)]"
        />
        <div className="text-center mt-4">
          <div className="text-sm md:text-base font-semibold text-white">
            Solomough — Out of Darkness to Light
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            Web • Web3 • AI • Digital Strategist • Writer • Faith Innovator
          </div>
        </div>
      </motion.div>
    </section>
  )
      }
