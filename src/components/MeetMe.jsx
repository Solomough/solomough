import React from 'react'
import { motion } from 'framer-motion'
import dp2 from '../assets/dp2.png' // add your standing portrait as src/assets/dp2.png

export default function MeetMe() {
  return (
    <section id="MeetMe" className="relative z-10 py-20 px-6 md:px-16">
      {/* Transparent wrapper so background motion shows through */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-transparent">
        {/* Left: Story */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-white"
        >
          <a href="#about" className="text-sm text-gray-300 hover:underline inline-block mb-4">
            ← Back to About
          </a>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">Meet Solomon Moughkaa</h1>
          <p className="text-yellow-400 italic mb-6">Let’s create something impactful together.</p>

          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              <strong>From a young visionary teacher</strong>, I discovered that teaching
              was more than a job — it was a strategy for impact. That excellent strategy led me from talk sessions 
              to cameras and into code: photography taught me to see, teaching taught me
              to communicate, and technology taught me to build. Each step has been guided
              by a faith that transforms vision into action.
            </p>

            <p>
              Today, as the founder of <span className="font-semibold text-white">Solomough</span>,
              I combine creativity, strategy and technology to serve ministries, schools,
              and emerging brands. I bring practical SEO and digital strategy experience,
              storytelling through photography and writing, and a growing focus on Web, Web3
              and AI — all framed by a purpose to uplift and empower.
            </p>

            <p>
              This page is a place to know the story behind the work — the moments that
              shaped a faith-driven pursuit of excellence and the belief that when vision
              meets action, transformation follows.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://solomough.github.io/From-visions-to-call-/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-transparent border border-yellow-400/70 text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
            >
              Read My Book
            </a>

            <a
              href="mailto:zahemenmoughkaa@gmail.com"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black font-semibold hover:shadow-lg transition"
            >
              Book a Session with Us
            </a>
          </div>
        </motion.div>

        {/* Right: Standing portrait with glowing frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-visible">
            {/* Glow */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0.15, scale: 0.95 }}
              animate={{ opacity: [0.12, 0.28, 0.12], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute -inset-2 rounded-2xl blur-3xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(230,199,104,0.18), rgba(212,175,55,0.12), rgba(255,255,255,0))',
                zIndex: -2
              }}
            />

            {/* Subtle border frame */}
            <div className="relative rounded-2xl p-1 bg-transparent" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.45)' }}>
              <div className="rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm">
                <img
                  src={dp2}
                  alt="Solomon Moughkaa portrait"
                  className="w-[320px] md:w-[380px] h-auto object-cover block"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
            }
