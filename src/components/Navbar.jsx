import React from 'react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="bg-black/30 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/src/assets/dp.png" alt="logo" className="w-10 h-10 rounded-full border-2" />
          <div>
            <div className="text-white font-semibold">Solomon Moughkaa Zahemen</div>
            <div className="text-xs text-gray-400">Out of Darkness to Light ✝️</div>
          </div>
        </a>

        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#projects" className="hover:text-gold">Projects</a>
          <a href="#books" className="hover:text-gold">Book</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <button className="sm:hidden text-2xl" onClick={() => setOpen(v => !v)} aria-expanded={open}>☰</button>
      </div>

      {open && (
        <nav className="sm:hidden bg-black/60 px-4 py-3">
          <a href="#about" className="block py-1">About</a>
          <a href="#projects" className="block py-1">Projects</a>
          <a href="#books" className="block py-1">Book</a>
          <a href="#contact" className="block py-1">Contact</a>
        </nav>
      )}
    </header>
  )
}
