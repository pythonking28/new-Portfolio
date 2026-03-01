"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Coffee,
  Globe,
  Layers,
  Lightbulb,
  MapPin,
  Rocket,
  Smile,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2025",
    role: "Frontend Engineer",
    company: "Autonomous Technology",
    description:
      "Working as a Frontend Engineer contributing to a SaaS-based Jewelry Management System. Responsible for feature integration, complex business calculations, UI implementation, and ongoing system maintenance to ensure performance and reliability.",
    accent: "#f97316",
  },

  {
    year: "2024",
    role: "Electronics, Communication and Information Technology graduate",
    company: "Tribhuvan University",
    description:
      "Graduated with a Bachelor's degree in Electronics, Communication and Information Technology.",
    accent: "#d97706",
  },
];

const funFacts = [
  { icon: Coffee, label: "Cups of coffee/day", value: "1-2" },
  { icon: Code2, label: "Websites Built (Production)", value: "6+" },
  { icon: Rocket, label: "SaaS Features Delivered", value: "8+" },
  { icon: Wrench, label: "Bugs Fixed & Systems Maintained", value: "100+" },
];

const values = [
  {
    icon: Wrench,
    title: "Build what works",
    body: "I focus on delivering production-ready features that solve real business problems, not just clean demos.",
  },
  {
    icon: Layers,
    title: "Understand the logic",
    body: "From UI to calculations and integrations, I care about how systems behave — not just how they look.",
  },
  {
    icon: TrendingUp,
    title: "Improve every release",
    body: "Each feature, bug fix, and deployment is a chance to level up technically and ship better software than yesterday.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Section badge (same as hero/skills/projects) ──────────────────────────────

const SectionBadge = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
    <span className="text-orange-400 text-sm font-medium">{label}</span>
  </div>
);

// ── About ─────────────────────────────────────────────────────────────────────

const About = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <section id="about" className="relative bg-slate-950 py-28 overflow-hidden">
      {/* ── Ambient blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-40 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [-30, 0, -30] }}
          transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-28">
        {/* ═══════════════════════════════════════════════════════════════════
            BLOCK 1 — Intro split layout
        ════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <FadeUp>
            <SectionBadge label="About Me" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              I build things that{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                matter
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hey — I'm a full-stack engineer with 1+ years of experience
                turning ambitious ideas into fast, beautiful, and scalable
                software. I work across the entire stack but feel most at home
                at the intersection of great engineering and great design.
              </p>
              <p>
                I've worked with early-stage startups. What drives me isn't the
                tech stack — it's shipping things people actually love using.
              </p>
              <p>
                When I'm not coding, you'll find me deep in a light novels,
                experimenting with side projects, or exploring chess moves.
              </p>
            </div>

            {/* Location pill */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-orange-400" />
              Based in Kathmandu, Balkumari · Open to remote
            </div>
          </FadeUp>

          {/* Right — abstract identity card */}
          <FadeUp delay={0.15}>
            <div className="relative">
              {/* Glow orb behind */}
              <div className="absolute inset-0 scale-90 blur-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-3xl" />

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 overflow-hidden">
                {/* Top colour band */}
                <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600" />

                <div className="p-8 space-y-6">
                  {/* Avatar placeholder */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-32 md:w-40"
                      />
                    </motion.div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        Niraj Kumar Thakur
                      </p>
                      <p className="text-slate-400 text-sm">
                        Full-Stack Engineer
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-800" />

                  {/* Key-value pairs */}
                  {[
                    { label: "Experience", value: "1+ years" },
                    {
                      label: "Specialty",
                      value: "React · Node · TypeScript · Next",
                    },
                    { label: "Currently", value: "Open to new opportunities" },
                    { label: "Timezone", value: "NPT (UTC +5:45)" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center"
                    >
                      <span className="text-slate-500 text-sm">{label}</span>
                      <span className="text-slate-200 text-sm font-medium">
                        {value}
                      </span>
                    </div>
                  ))}

                  {/* Divider */}
                  <div className="h-px bg-slate-800" />

                  {/* Status indicator */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-green-400 text-sm font-medium">
                      Available for new projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BLOCK 2 — Fun fact counters
        ════════════════════════════════════════════════════════════════════ */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {funFacts.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Corner glow on hover */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Icon className="w-5 h-5 text-orange-400 mb-3" />
                <p className="text-3xl font-black text-white mb-1">{value}</p>
                <p className="text-xs text-slate-500 leading-snug">{label}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* ═══════════════════════════════════════════════════════════════════
            BLOCK 3 — Values
        ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-8">
          <FadeUp className="text-center">
            <SectionBadge label="What I believe in" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Engineering{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                principles
              </span>{" "}
              I live by
            </h3>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-orange-500/30 hover:bg-slate-900/80 transition-all duration-300"
                >
                  {/* Icon circle */}
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BLOCK 4 — Career timeline
        ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-10">
          <FadeUp className="text-center">
            <SectionBadge label="Career" />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              My{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                journey
              </span>{" "}
              so far
            </h3>
          </FadeUp>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-amber-500/20 to-transparent -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map(
                ({ year, role, company, description, accent }, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <FadeUp key={year + role} delay={i * 0.1}>
                      <div
                        className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        {/* Content — desktop alternating, mobile always right */}
                        <div
                          className={`flex-1 pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 hover:border-slate-700 transition-colors max-w-sm"
                            style={{ boxShadow: `0 4px 24px -8px ${accent}30` }}
                          >
                            {/* Year badge */}
                            <span
                              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3"
                              style={{
                                color: accent,
                                backgroundColor: `${accent}18`,
                                border: `1px solid ${accent}35`,
                              }}
                            >
                              {year}
                            </span>
                            <p className="text-white font-bold text-base">
                              {role}
                            </p>
                            <p
                              className="text-sm font-medium mb-2"
                              style={{ color: accent }}
                            >
                              @ {company}
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {description}
                            </p>
                          </motion.div>
                        </div>

                        {/* Centre dot */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              delay: i * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="w-4 h-4 rounded-full border-2 border-slate-950 shadow-lg"
                            style={{
                              backgroundColor: accent,
                              boxShadow: `0 0 12px ${accent}80`,
                            }}
                          />
                        </div>

                        {/* Spacer for opposite side on desktop */}
                        <div className="hidden md:block flex-1" />
                      </div>
                    </FadeUp>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BLOCK 5 — CTA strip
        ════════════════════════════════════════════════════════════════════ */}
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden border border-slate-800">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-slate-900 to-amber-500/10" />
            {/* Dot grid */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="about-dots"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.2" fill="#f97316" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-dots)" />
            </svg>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12">
              <div>
                <p className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Let's build something great together
                </p>
                <p className="text-slate-400 text-sm max-w-md">
                  Whether it's a product idea, a collaboration, or just a chat —
                  my inbox is always open.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0" id="contact">
                <motion.a
                  //   href="mailto:hello@johndoe.dev"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all text-sm cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Contact Me →
                </motion.a>
                <motion.a
                  download
                  href="/resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 rounded-xl font-semibold text-slate-300 border-2 border-slate-700 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all text-sm"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default About;
