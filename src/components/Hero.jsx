import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center">
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white">Out of Darkness to Light ✝️</h1>
        <p className="mt-6 text-gray-300">I’m <strong>Solomon Moughkaa Zahemen</strong> — Visionary, Software Engineer, Writer, and Kingdom Strategist. I merge <span className="text-gold font-semibold">faith and technology</span> to build transformative tools and empower lives.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-2 border rounded-md text-sm hover:text-gold">Explore Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-md bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black text-sm font-semibold">Work With Me</a>
          <a href="https://solomough.github.io/From-visions-to-call-/" target="_blank" rel="noreferrer" className="px-5 py-2 border rounded-md text-sm hover:text-gold">Read Book</a>
        </div>
      </motion.div>

      <motion.div initial={{ x: 30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }} className="flex flex-col items-center">
        <img src="/src/assets/dp.png" alt="portrait" className="w-48 h-48 rounded-full border-4" />
        <div className="text-center mt-4">
          <div className="text-sm font-semibold text-white">Solomough — Out of Darkness to Light</div>
          <div className="text-xs text-gray-400">Software Engineer • AI • Web • Web3 • Writer • Kingdom Strategist</div>
        </div>
      </motion.div>
    </section>
  )
}
