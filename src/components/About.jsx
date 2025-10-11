import React from "react";
import { motion } from "framer-motion";
import dp2 from "../assets/dp2.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden text-white py-20 px-6 md:px-16"
    >
      {/* Background: Out of Darkness to Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-95" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-gray-700/40 via-transparent to-gray-700/40 blur-3xl"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg hover:scale-105 transition-transform"
        >
          <img
            src={dp2}
            alt="Solomough - Faith Inspired Innovation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            About Us
          </h2>
          <p className="text-gray-400 italic mb-6">
            Faith-Inspired Innovation for a Digital Generation
          </p>

          {/* Who We Are */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
              Who We Are
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We are <span className="font-semibold text-white">Solomough</span> —
              a purpose-driven digital brand committed to inspiring transformation
              through innovation, creativity, and faith. Rooted in the belief that
              <span className="italic"> faith + action = impact</span>, we blend
              technology, strategy, and divine inspiration to help individuals,
              schools, ministries, and brands rise
              <span className="text-white font-semibold">
                {" "}
                out of darkness to light.
              </span>
            </p>
          </div>

          {/* Services We Offer */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
              Services We Offer
            </h3>
            <ul className="text-gray-400 leading-relaxed list-disc list-inside space-y-1">
              <li>Web Development (Frontend, Web3, and AI-based Platforms)</li>
              <li>SEO and Digital Strategy for Brand Visibility</li>
              <li>Faith-Based and Digital Mentorship Programs</li>
              <li>Creative Direction — Photography, Storytelling, and Branding</li>
              <li>Writing, Publishing, and Thought Leadership</li>
            </ul>
          </div>

          {/* What Makes Us Unique */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
              What Makes Us Unique
            </h3>
            <p className="text-gray-400 leading-relaxed">
              What sets us apart is our fusion of **faith and technology** — a belief
              that digital innovation can carry light, purpose, and transformation.
              We don’t just build projects; we build movements that empower others to
              think, create, and grow beyond limits. Every solution we design is
              guided by purpose, excellence, and impact.
            </p>
          </div>

          {/* Motivational Message */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">
              Our Drive
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We believe that when vision is empowered by faith and action, time
              becomes limitless. Through Solomough, we are building a community of
              thinkers, creators, and innovators who use technology to inspire change,
              drive excellence, and illuminate the path for others. Together, we
              transform purpose into tangible impact — one project, one story, one
              life at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:zahemenmoughkaa@gmail.com"
              className="bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg"
            >
              Book a Session with Us
            </a>
            <a
              href="https://wa.me/2347076560169"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-gray-600 px-6 py-3 rounded-full text-gray-300 hover:bg-gray-800 transition-colors shadow-md"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
