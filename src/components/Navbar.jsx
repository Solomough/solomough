import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="bg-black/30 backdrop-blur sticky top-0 z-40 border-b border-gray-800/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Animated Text Logo */}
        <a href="#" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gold tracking-widest drop-shadow-[0_0_10px_#d4af37]"
            style={{
              textShadow: '0 0 8px rgba(212,175,55,0.8), 0 0 15px rgba(212,175,55,0.6)',
            }}
          >
            SM
          </motion.div>

          <div>
            <div className="text-white font-semibold">Solomon Moughkaa Zahemen</div>
            <div className="text-xs text-gray-400">Out of Darkness to Light ✝️</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#projects" className="hover:text-gold transition">Projects</a>
          <a href="#books" className="hover:text-gold transition">Book</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-gold"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden bg-black/60 px-4 py-3 border-t border-gray-800"
        >
          <a href="#about" className="block py-1 hover:text-gold">About</a>
          <a href="#projects" className="block py-1 hover:text-gold">Projects</a>
          <a href="#books" className="block py-1 hover:text-gold">Book</a>
          <a href="#contact" className="block py-1 hover:text-gold">Contact</a>
        </motion.nav>
      )}
    </header>
  )
    }
