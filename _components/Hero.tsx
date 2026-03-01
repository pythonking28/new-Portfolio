"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

// Bokeh bubble data - varied sizes, positions, timings
const bokehBubbles = [
  // Large glowing orbs
  {
    id: 1,
    size: 140,
    x: 3,
    y: 10,
    duration: 9,
    delay: 0,
    color: "255,140,0",
    opacity: 0.7,
  },
  {
    id: 2,
    size: 100,
    x: 88,
    y: 8,
    duration: 11,
    delay: 1.5,
    color: "255,165,0",
    opacity: 0.65,
  },
  {
    id: 3,
    size: 120,
    x: 78,
    y: 78,
    duration: 13,
    delay: 0.5,
    color: "251,191,36",
    opacity: 0.6,
  },
  {
    id: 4,
    size: 90,
    x: 10,
    y: 72,
    duration: 10,
    delay: 2,
    color: "234,88,12",
    opacity: 0.7,
  },
  // Medium orbs
  {
    id: 5,
    size: 70,
    x: 22,
    y: 35,
    duration: 8,
    delay: 3,
    color: "255,140,0",
    opacity: 0.55,
  },
  {
    id: 6,
    size: 80,
    x: 60,
    y: 15,
    duration: 7,
    delay: 0.8,
    color: "251,191,36",
    opacity: 0.6,
  },
  {
    id: 7,
    size: 75,
    x: 45,
    y: 82,
    duration: 12,
    delay: 2.5,
    color: "255,120,0",
    opacity: 0.55,
  },
  {
    id: 8,
    size: 65,
    x: 93,
    y: 55,
    duration: 9,
    delay: 4,
    color: "255,165,0",
    opacity: 0.6,
  },
  {
    id: 9,
    size: 85,
    x: 35,
    y: 60,
    duration: 11,
    delay: 1,
    color: "234,88,12",
    opacity: 0.5,
  },
  {
    id: 10,
    size: 60,
    x: 70,
    y: 45,
    duration: 8,
    delay: 3.5,
    color: "255,140,0",
    opacity: 0.65,
  },
  // Small bright pops
  {
    id: 11,
    size: 40,
    x: 50,
    y: 5,
    duration: 6,
    delay: 1.2,
    color: "255,200,50",
    opacity: 0.8,
  },
  {
    id: 12,
    size: 35,
    x: 15,
    y: 50,
    duration: 7,
    delay: 2.8,
    color: "255,180,0",
    opacity: 0.75,
  },
  {
    id: 13,
    size: 45,
    x: 82,
    y: 35,
    duration: 8,
    delay: 0.3,
    color: "251,191,36",
    opacity: 0.8,
  },
  {
    id: 14,
    size: 30,
    x: 55,
    y: 55,
    duration: 6,
    delay: 4.5,
    color: "255,140,0",
    opacity: 0.7,
  },
  {
    id: 15,
    size: 50,
    x: 28,
    y: 88,
    duration: 9,
    delay: 1.7,
    color: "255,165,0",
    opacity: 0.65,
  },
  {
    id: 16,
    size: 38,
    x: 68,
    y: 90,
    duration: 7,
    delay: 3.8,
    color: "234,88,12",
    opacity: 0.75,
  },
  {
    id: 17,
    size: 42,
    x: 97,
    y: 75,
    duration: 8,
    delay: 0.6,
    color: "255,190,0",
    opacity: 0.7,
  },
  {
    id: 18,
    size: 33,
    x: 6,
    y: 90,
    duration: 6,
    delay: 2.2,
    color: "255,140,0",
    opacity: 0.8,
  },
  {
    id: 19,
    size: 55,
    x: 40,
    y: 25,
    duration: 10,
    delay: 5,
    color: "251,191,36",
    opacity: 0.6,
  },
  {
    id: 20,
    size: 48,
    x: 75,
    y: 62,
    duration: 8,
    delay: 1.4,
    color: "255,120,0",
    opacity: 0.65,
  },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden"
      id="home"
    >
      {/* ── Glowing Bokeh Bubble Layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bokehBubbles.map((b) => {
          const blurAmount = b.size * 0.28;
          const glowSpread = b.size * 1.4;
          return (
            <motion.div
              key={b.id}
              className="absolute rounded-full"
              style={{
                width: b.size,
                height: b.size,
                left: `${b.x}%`,
                top: `${b.y}%`,
                // Core bright center fading out
                background: `radial-gradient(circle at 40% 38%,
                  rgba(${b.color},1) 0%,
                  rgba(${b.color},0.85) 20%,
                  rgba(${b.color},0.5) 45%,
                  rgba(${b.color},0.15) 70%,
                  transparent 100%)`,
                filter: `blur(${blurAmount}px)`,
                // Stacked box-shadows for multi-ring glow
                boxShadow: `
                  0 0 ${b.size * 0.5}px  ${b.size * 0.2}px rgba(${b.color},${b.opacity * 0.9}),
                  0 0 ${b.size * 1.0}px  ${b.size * 0.3}px rgba(${b.color},${b.opacity * 0.6}),
                  0 0 ${glowSpread}px    ${b.size * 0.5}px rgba(${b.color},${b.opacity * 0.3})
                `,
              }}
              animate={{
                y: [0, -22, 10, -15, 0],
                x: [0, 10, -8, 12, 0],
                opacity: [
                  b.opacity,
                  Math.min(b.opacity * 1.6, 1),
                  b.opacity * 0.6,
                  Math.min(b.opacity * 1.4, 1),
                  b.opacity,
                ],
                scale: [1, 1.12, 0.93, 1.07, 1],
              }}
              transition={{
                duration: b.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.delay,
              }}
            />
          );
        })}
      </div>

      {/* Large ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-medium">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed"
            >
              Full-stack engineer specializing in building exceptional web
              applications. I turn complex problems into elegant, intuitive
              solutions with pixel-perfect precision.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-slate-700 text-slate-300 px-8 py-4 rounded-xl font-medium hover:border-orange-500/50 hover:bg-orange-500/5 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <span className="text-slate-500 text-sm">Connect:</span>
            {[
              { icon: Github, href: "https://github.com/pythonking28" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/niraj-thakur-5bbaaa160/",
              },
              {
                icon: Facebook,
                href: "https://www.facebook.com/niraj.thakur.52498/",
              },
              { icon: Mail, href: "fking7735@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:border-orange-500/50 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl -z-10"
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-[550px] h-[550px] rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-end justify-center z-10 rounded-full"
            >
              <div
                style={{
                  maskImage:
                    "radial-gradient(ellipse 85% 88% at 50% 50%, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 88% at 50% 50%, black 40%, transparent 100%)",
                }}
              >
                <Image
                  src="/hero-image-3.png"
                  alt="Hero"
                  width={450}
                  height={450}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-orange-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
