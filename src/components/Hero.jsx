import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/dp.png"; // ✅ Correct import path for Vite

export default function Hero() {
  return (
    <section className="relative grid gap-10 md:grid-cols-2 items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#0f0f0f] py-16 px-6 md:px-12 rounded-2xl shadow-xl">
      {/* Subtle glowing particles effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)] pointer-events-none" />

      {/* Left Section — Text */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Out of Darkness to Light ✝️
        </h1>
        <p className="mt-6 text-gray-300 text-base md:text-lg">
          I’m <strong>Solomon Moughkaa Zahemen</strong> — Visionary, Software Engineer, Writer, 
          and Kingdom Strategist. I merge{" "}
          <span className="text-[#e6c768] font-semibold">faith and technology</span> to build 
          transformative tools and empower lives.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2 border rounded-md text-sm hover:text-[#e6c768] transition-colors"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Work With Me
          </a>
          <a
            href="https://solomough.github.io/From-visions-to-call-/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border rounded-md text-sm hover:text-[#e6c768] transition-colors"
          >
            Read Book
          </a>
        </div>
      </motion.div>

      {/* Right Section — Profile Image */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="relative">
          <img
            src={dp}
            alt="Solomough portrait"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[#e6c768] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
          {/* Soft glowing ring */}
          <div className="absolute inset-0 rounded-full border border-[#e6c768]/30 blur-md"></div>
        </div>

        <div className="text-center mt-4">
          <div className="text-sm font-semibold text-white">
            Solomough — Out of Darkness to Light
          </div>
          <div className="text-xs text-gray-400">
            Software Engineer • AI • Web • Web3 • Writer • Kingdom Strategist
          </div>
        </div>
      </motion.div>
    </section>
  );
        }
