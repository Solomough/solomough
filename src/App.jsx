import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticlesBg from './components/ParticlesBg'
import Graph from './components/Graph'
import About from './components/About'
import MeetMe from './components/MeetMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBg />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <Hero />
        <section className="mt-12 text-center">
          <h3 className="text-gold uppercase tracking-widest text-sm">Core Focus</h3>
          <p className="mt-3 text-gray-300">Faith-Driven Software • AI & Web Solutions • Digital Evangelism • Leadership</p>
        </section>

        <section className="mt-12">
          <Graph />
        </section>

        <About />
        <MeetMe/>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
