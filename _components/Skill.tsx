"use client";
import { Easing, motion } from "framer-motion";
import antdIcon from "../public/antd.png";
import tanstackIcon from "../public/tanstack.png";
import Image, { StaticImageData } from "next/image";

type Skill = {
  name: string;
  icon: string | React.ReactNode;
  level: number;
  category: string;
};

const AntDesignIcon = () => (
  <Image src={antdIcon} alt="Ant Design" width={32} height={32} />
);
const TanStackQueryIcon = () => (
  <Image src={tanstackIcon} alt="TanStack Query" width={32} height={32} />
);
const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 95, category: "Frontend" },
  { name: "Next.js", icon: "▲", level: 90, category: "Frontend" },
  { name: "TypeScript", icon: "TS", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", icon: "🌊", level: 92, category: "Frontend" },
  {
    name: "Ant Design",
    icon: <AntDesignIcon />,
    level: 85,
    category: "Frontend",
  },
  {
    name: "TanStack Query",
    icon: <TanStackQueryIcon />,
    level: 84,
    category: "Frontend",
  },
  { name: "Framer Motion", icon: "✦", level: 80, category: "Frontend" },
  // Backend
  { name: "Node.js", icon: "⬡", level: 85, category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", level: 78, category: "Backend" },
  { name: "Prisma", icon: "◈", level: 80, category: "Backend" },
  { name: "REST ", icon: "⌬", level: 82, category: "Backend" },
  // Tools
  { name: "Docker", icon: "🐳", level: 20, category: "Tools" },
  { name: "Git", icon: "⎇", level: 88, category: "Tools" },
  { name: "CI/CD", icon: "⎇", level: 20, category: "Tools" },
  //   { name: "Figma", icon: "✦", level: 75, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Tools"];

const categoryColors: Record<string, string> = {
  Frontend: "from-orange-500 to-amber-400",
  Backend: "from-amber-500 to-yellow-400",
  Tools: "from-orange-400 to-red-400",
};

const categoryBorder: Record<string, string> = {
  Frontend: "border-orange-500/30 hover:border-orange-500/70",
  Backend: "border-amber-500/30 hover:border-amber-500/70",
  Tools: "border-orange-400/30 hover:border-orange-400/70",
};

const categoryGlow: Record<string, string> = {
  Frontend: "shadow-orange-500/20",
  Backend: "shadow-amber-500/20",
  Tools: "shadow-orange-400/20",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as Easing },
  },
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-slate-900/60 backdrop-blur-sm border ${categoryBorder[skill.category]} rounded-2xl p-5 shadow-lg ${categoryGlow[skill.category]} hover:shadow-xl transition-all duration-300`}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />

      <div className="relative z-10">
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-300 group-hover:border-orange-500/40 transition-colors">
            {skill.icon}
          </div>
          <span className="font-semibold text-slate-200 text-sm tracking-wide">
            {skill.name}
          </span>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">Proficiency</span>
            <span
              className={`text-xs font-bold bg-gradient-to-r ${categoryColors[skill.category]} bg-clip-text text-transparent`}
            >
              {skill.level}%
            </span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      className="relative bg-slate-950 py-28 overflow-hidden"
      id="tech-stack"
    >
      {/* Background blobs matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [30, 0, 30] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl"
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,146,60,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              My Tech Stack
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Tools I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            A curated set of technologies I use to build fast, scalable, and
            beautiful digital experiences.
          </p>
        </motion.div>

        {/* Skills grouped by category */}
        <div className="space-y-14">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}
                >
                  {category}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              {/* Cards grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1+", label: "Years of Experience" },
            { value: "5+", label: "Projects Delivered" },
            { value: "10+", label: "Technologies" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
