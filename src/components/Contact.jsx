import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mnngporv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className="glass-section mt-16 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white text-glow mb-2">Contact & Connect</h2>
      <p className="text-gray-400 mb-6">
        Let’s co-create light through innovation. Reach out via the form or connect on social platforms.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:max-w-md mx-auto">
        <input
          name="name"
          placeholder="Your name"
          className="px-4 py-2 bg-gray-800/60 rounded-md border border-gray-700 focus:border-gold focus:ring-0 outline-none text-gray-100"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="px-4 py-2 bg-gray-800/60 rounded-md border border-gray-700 focus:border-gold focus:ring-0 outline-none text-gray-100"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          className="px-4 py-2 bg-gray-800/60 rounded-md border border-gray-700 focus:border-gold focus:ring-0 outline-none text-gray-100"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gradient-to-r from-[#e6c768] to-[#d4af37] text-black py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Animated Feedback Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-green-400 text-center mt-4"
          >
            ✅ Message sent successfully! Thank you for reaching out.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-red-400 text-center mt-4"
          >
            ❌ Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://github.com/Solomough"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-md text-sm hover:text-gold transition"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/solomough3?igsh=cGJ1d3JtYzh5M3Ay"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-md text-sm hover:text-gold transition"
        >
          Instagram
        </a>
        <a
          href="https://x.com/Solomough?t=j9FY0lH6Bx7Ou6DyCSfMJA&s=09"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-md text-sm hover:text-gold transition"
        >
          X / Twitter
        </a>
        <a
          href="https://www.facebook.com/share/1DonCwDZuR/"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-md text-sm hover:text-gold transition"
        >
          Facebook
        </a>
        <a
          href="https://wa.me/2347076560169"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-md text-sm hover:text-gold transition"
        >
          WhatsApp
        </a>
      </div>
    </motion.section>
  );
      }
