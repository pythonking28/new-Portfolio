"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { ArrowUpRight, Github, Globe } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Tag = string;

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: Tag[];
  category: "Full Stack" | "Frontend" | "Backend" | "Open Source";
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  accentColor: string;
  pattern: "grid" | "dots" | "lines" | "waves" | "circuit";
  featured?: boolean;
};

// ── Mock Project Data ─────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Sajha Infotech",
    description: "Corporate IT training and software solutions platform",
    longDescription:
      "Designed and developed a modern company website and service platform showcasing IT training programs and software development services. Focused on performance, scalability, and responsive UI/UX.",
    tags: ["Next.js", "TypeScript", "Responsive Design", "SEO", "Full Stack"],
    category: "Frontend",
    liveUrl: "https://www.sajhainfotech.com/",
    githubUrl: "https://github.com/pythonking28/Sajha",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "#f97316",
    pattern: "grid",
    featured: true,
  },
  {
    id: 2,
    title: "Veg Restro",
    description:
      "Modern restaurant website with responsive UI and menu showcase",
    longDescription:
      "Developed a fully responsive restaurant website featuring menu presentation, smooth navigation, and optimized performance. Focused on clean UI/UX, mobile responsiveness, and fast deployment.",
    tags: ["React", "Frontend", "Responsive Design", "UI/UX", "Deployment"],
    category: "Frontend",
    liveUrl: "https://veg-restro.vercel.app/",
    githubUrl: "#",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    accentColor: "#22c55e",
    pattern: "grid",
    featured: false,
  },
  {
    id: 3,
    title: "KhataBill",
    description: "Simple billing and expense tracking web application",
    longDescription:
      "Built a lightweight billing and expense tracking web app with transaction management and basic financial summaries. Designed for usability and structured data handling.",
    tags: ["React", "State Management", "Forms", "CRUD", "Frontend"],
    category: "Full Stack",
    liveUrl: "https://khatabill.netlify.app/",
    githubUrl: "https://github.com/pythonking28/khatabill",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "#3b82f6",
    pattern: "dots",
    featured: true,
  },
  {
    id: 8,
    title: "YouTube Backend Clone",
    description: "REST API backend replicating core YouTube functionalities",
    longDescription:
      "Developed a backend REST API using Express.js that replicates core YouTube features including authentication, video upload handling, comments, and user interactions. Structured with modular architecture and middleware-based authentication.",
    tags: ["Node.js", "Express", "REST API", "JWT", "MongoDB"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "https://github.com/pythonking28/Veg-Restro",
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    accentColor: "#ef4444",
    pattern: "grid",
    featured: true,
  },
];

// ── SVG Patterns ──────────────────────────────────────────────────────────────

const patterns: Record<Project["pattern"], React.FC<{ color: string }>> = {
  grid: ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  ),
  dots: ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.1]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  ),
  lines: ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="lines"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="12"
            x2="24"
            y2="12"
            stroke={color}
            strokeWidth="0.8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines)" />
    </svg>
  ),
  waves: ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="waves"
          width="40"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 10 Q10 0 20 10 Q30 20 40 10"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves)" />
    </svg>
  ),
  circuit: ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 8h32v32H8z"
            fill="none"
            stroke={color}
            strokeWidth="0.6"
          />
          <circle cx="8" cy="8" r="2" fill={color} />
          <circle cx="40" cy="40" r="2" fill={color} />
          <path d="M8 24h16v16" fill="none" stroke={color} strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  ),
};

// ── Filter Tabs ────────────────────────────────────────────────────────────────

const filters = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Open Source",
] as const;
type Filter = (typeof filters)[number];

// ── Comic Speech Bubble — fixed to viewport so it's never clipped ─────────────

const SpeechBubble = ({
  project,
  visible,
  x,
  y,
}: {
  project: Project;
  visible: boolean;
  x: number;
  y: number;
}) => {
  const BUBBLE_W = 300;
  const OFFSET_Y = 250; // gap below the tail tip

  // Clamp so it doesn't overflow viewport edges
  const left = Math.min(
    Math.max(x - BUBBLE_W / 2, 12),
    window.innerWidth - BUBBLE_W - 12,
  );
  const top = y - OFFSET_Y; // tail tip sits at cursor y, bubble goes up

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
          className="fixed z-9999 pointer-events-none"
          style={{ left, top, width: BUBBLE_W, transform: "translateY(-100%)" }}
        >
          {/* Bubble body */}
          <div
            className="relative rounded-2xl px-5 py-4 shadow-2xl border"
            style={{
              background: `linear-gradient(135deg, #0f172a 55%, ${project.accentColor}15)`,
              borderColor: `${project.accentColor}55`,
              boxShadow: `0 8px 36px -6px ${project.accentColor}50, 0 0 0 1px ${project.accentColor}20`,
            }}
          >
            {/* Halftone dots decoration */}
            <div className="absolute top-3 right-3 flex flex-wrap gap-[3px] w-10 opacity-25 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className="rounded-full block"
                  style={{
                    width: 3 + (i % 2),
                    height: 3 + (i % 2),
                    backgroundColor: project.accentColor,
                  }}
                />
              ))}
            </div>

            {/* Project title in bubble */}
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{ color: project.accentColor }}
            >
              {project.title}
            </p>

            {/* Long description */}
            <p className="text-xs leading-relaxed text-slate-300 mb-3 pr-6">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-md border"
                  style={{
                    color: project.accentColor,
                    backgroundColor: `${project.accentColor}12`,
                    borderColor: `${project.accentColor}35`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tail pointing DOWN toward the card */}
          <svg
            className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 drop-shadow-sm"
            width="26"
            height="14"
            viewBox="0 0 26 14"
            fill="none"
          >
            <path d="M0 0 L13 14 L26 0Z" fill="#0f172a" />
            <path
              d="M0 0 L13 14 L26 0"
              fill="none"
              stroke={`${project.accentColor}55`}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Mask top stroke to merge cleanly with bubble border */}
            <rect x="0" y="0" width="26" height="2" fill="#0f172a" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Project Card ──────────────────────────────────────────────────────────────

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const PatternSvg = patterns[project.pattern];

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      {/* Fixed bubble rendered outside card — no clipping possible */}
      <SpeechBubble
        project={project}
        visible={hovered}
        x={mousePos.x}
        y={mousePos.y}
      />

      <motion.article
        layout
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative group rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:shadow-2xl flex flex-col cursor-default"
        style={{
          boxShadow: hovered
            ? `0 0 40px -8px ${project.accentColor}40`
            : undefined,
        }}
      >
        {/* Pattern bg */}
        <PatternSvg color={project.accentColor} />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
        />

        {/* ── Visual Header / Mock Screenshot ── */}
        <div className="relative h-48 overflow-hidden border-b border-slate-800 shrink-0">
          <div className="absolute inset-0 flex flex-col">
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-950/80 border-b border-slate-800 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-3 h-4 rounded-md bg-slate-800/80 flex items-center px-2">
                <span className="text-[9px] text-slate-500 truncate">
                  https://{project.title.toLowerCase().replace(" ", "")}.dev
                </span>
              </div>
            </div>
            {/* App body mock */}
            <div className="flex-1 relative p-3 overflow-hidden">
              <div className="flex gap-2 h-full">
                <div className="w-16 shrink-0 flex flex-col gap-1.5">
                  {[100, 70, 85, 60, 90].map((w, i) => (
                    <div
                      key={i}
                      className="h-2.5 rounded-sm"
                      style={{
                        width: `${w}%`,
                        backgroundColor: `${project.accentColor}25`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div
                    className="h-16 rounded-lg"
                    style={{
                      backgroundColor: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}25`,
                    }}
                  />
                  <div className="grid grid-cols-3 gap-1.5 flex-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-md"
                        style={{
                          backgroundColor: `${project.accentColor}${i % 2 === 0 ? "20" : "10"}`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl transition-opacity duration-300"
                style={{
                  backgroundColor: project.accentColor,
                  opacity: hovered ? 0.4 : 0.15,
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col flex-1 p-6 gap-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 px-2 py-0.5 rounded-full"
                style={{
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}18`,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">
                {project.description}
              </p>
            </div>

            <motion.div
              animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 w-9 h-9 rounded-xl border border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-orange-500/40 group-hover:text-orange-400 transition-colors mt-6"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Footer: links only */}
          <div className="flex items-center justify-end pt-3 border-t border-slate-800 mt-auto">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                aria-label="View on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 hover:border-orange-500/50 hover:text-orange-400 transition-all"
                style={{ backgroundColor: `${project.accentColor}10` }}
                aria-label="Visit live site"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

// ── Main Section ──────────────────────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative bg-slate-950 py-28 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [20, 0, 20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl"
        />
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-400 text-sm font-medium">
              Selected Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Things I've{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            A collection of projects spanning full-stack apps, open-source
            tools, and experimental interfaces.
          </p>
        </motion.div>

        {/* ── Filter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 bg-slate-900/50 border border-slate-800 hover:border-slate-600"
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/pythonking28?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-700 text-slate-300 font-medium hover:border-orange-500/50 hover:bg-orange-500/5 hover:text-white transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
