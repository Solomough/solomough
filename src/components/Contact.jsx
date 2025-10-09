import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-3xl font-bold">Contact & Connect</h2>
      <p className="text-gray-400 mt-2">Let’s co-create light through innovation. Reach out via the form or connect on social platforms.</p>

      <form action="https://formspree.io/f/mnngporv" method="POST" className="mt-6 grid gap-4 sm:max-w-md">
        <input name="name" placeholder="Your name" className="px-4 py-2 bg-gray-800 rounded-md" required />
        <input type="email" name="email" placeholder="Your email" className="px-4 py-2 bg-gray-800 rounded-md" required />
        <textarea name="message" placeholder="Your message" rows="4" className="px-4 py-2 bg-gray-800 rounded-md" required />
        <button type="submit" className="bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black py-2 rounded-md font-semibold">Send Message</button>
      </form>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://github.com/Solomough" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-600 rounded-md text-sm">GitHub</a>
        <a href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-600 rounded-md text-sm">Instagram</a>
        <a href="https://x.com/Solomough?t=j9FY0lH6Bx7Ou6DyCSfMJA&s=09" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-600 rounded-md text-sm">X / Twitter</a>
        <a href="https://www.facebook.com/share/1DonCwDZuR/" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-600 rounded-md text-sm">Facebook</a>
        <a href="https://wa.me/2347076560169" target="_blank" rel="noreferrer" className="px-5 py-2 border border-gray-600 rounded-md text-sm">WhatsApp</a>
      </div>
    </section>
  )
}
