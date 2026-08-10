'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Layers,
  Database,
  GitBranch,
  Sparkles,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';

const TECH_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend Stack',
    icon: Code2,
    badge: 'UI / UX Engine',
    accent: 'from-cyan-500 via-blue-500 to-indigo-500',
    glow: 'rgba(6, 182, 212, 0.25)',
    description: 'Engineering responsive, high-performance web user interfaces with state-of-the-art frameworks.',
    items: [
      { name: 'React', type: 'Core Library', experience: 'Production Ready', status: 'Active' },
      { name: 'Next.js', type: 'App Router / SSR', experience: 'Production Ready', status: 'Active' },
      { name: 'Tailwind CSS', type: 'Design System', experience: 'Production Ready', status: 'Active' },
      { name: 'Bootstrap', type: 'UI Framework', experience: 'Proficient', status: 'Active' },
      { name: 'JavaScript', type: 'ES6+ Architecture', experience: 'Core Language', status: 'Active' },
      { name: 'HTML5 & CSS3', type: 'Semantic Layouts', experience: 'Mastery', status: 'Active' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Engine',
    icon: Cpu,
    badge: 'APIs & Server Logic',
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'rgba(99, 102, 241, 0.25)',
    description: 'Architecting secure, scalable microservices, REST APIs, and robust server-side business logic.',
    items: [
      { name: 'Laravel', type: 'PHP Framework', experience: 'Enterprise Grade', status: 'Active' },
      { name: 'NestJS', type: 'Node.js Framework', experience: 'Scalable Microservices', status: 'Active' },
      { name: 'PHP', type: 'Server Language', experience: 'Core Backend', status: 'Active' },
    ],
  },
  {
    id: 'database',
    label: 'Database Layer',
    icon: Database,
    badge: 'Data Integrity',
    accent: 'from-emerald-400 via-teal-500 to-cyan-500',
    glow: 'rgba(16, 185, 129, 0.25)',
    description: 'Structuring relational schemas, query optimization, and transaction management.',
    items: [
      { name: 'MySQL', type: 'Relational DB', experience: 'Schema & Queries', status: 'Active' },
      { name: 'DB Architecture', type: 'Data Modeling', experience: 'Optimized Storage', status: 'Active' },
    ],
  },
  {
    id: 'cloud',
    label: 'DevOps & Cloud',
    icon: GitBranch,
    badge: 'Deployment & CI/CD',
    accent: 'from-amber-400 via-orange-500 to-red-500',
    glow: 'rgba(245, 158, 11, 0.25)',
    description: 'Version control orchestration and edge-accelerated automated cloud deployments.',
    items: [
      { name: 'Git & GitHub', type: 'Version Control', experience: 'Branch Workflows', status: 'Active' },
      { name: 'Vercel', type: 'Edge Cloud', experience: 'Serverless Hosting', status: 'Active' },
      { name: 'Netlify', type: 'CI/CD Cloud', experience: 'Automated Builds', status: 'Active' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(TECH_CATEGORIES[0].id);
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const currentCategory = TECH_CATEGORIES.find((cat) => cat.id === activeTab);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] py-32 selection:bg-[var(--accent-blue)]/20 selection:text-[var(--accent-blue)]"
    >
      {/* Interactive cursor glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, ${currentCategory.glow}, transparent 70%)`
          ),
        }}
      />

      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent-blue)]/30 bg-[var(--accent-blue-soft)] px-4 py-1.5 font-mono text-xs font-semibold text-[var(--accent-blue)] shadow-[0_0_20px_var(--accent-blue-soft)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>EXPERT TECH MATRIX</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-6xl"
          >
            Architected With <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Precision &amp; Speed
            </span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {TECH_CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = category.id === activeTab;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex items-center gap-2.5 rounded-xl px-5 py-3 font-mono text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_25px_rgba(37,99,235,0.3)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)]/50 hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.accent} opacity-90`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Matrix container */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur-2xl">
          {/* Terminal header bar */}
          <div className="mb-8 flex items-center justify-between border-b border-[var(--border-color)] pb-6 font-mono text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
              <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-secondary)]">
                <Terminal className="h-3.5 w-3.5 text-[var(--accent-blue)]" /> ~/skills/{activeTab}.config
              </span>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-500 sm:flex">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified Environment
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
            >
              {/* Left: category meta */}
              <div className="flex h-full flex-col justify-between space-y-6 lg:col-span-5">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs font-medium text-[var(--accent-blue)]">
                    <Zap className="h-3.5 w-3.5" /> {currentCategory.badge}
                  </div>
                  <h3 className="mb-3 text-2xl font-black text-[var(--text-primary)]">{currentCategory.label}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {currentCategory.description}
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 font-mono text-xs">
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <Layers className="h-4 w-4 text-[var(--accent-blue)]" /> Active Modules
                  </span>
                  <span className="rounded-lg border border-[var(--accent-blue)]/20 bg-[var(--accent-blue-soft)] px-3 py-1 text-sm font-bold text-[var(--accent-blue)]">
                    {currentCategory.items.length} Tech Units
                  </span>
                </div>
              </div>

              {/* Right: skill cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                {currentCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-blue)]/50 hover:shadow-[0_0_20px_var(--accent-blue-soft)]"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h4 className="flex items-center gap-1.5 text-base font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-blue)]">
                          {skill.name}
                        </h4>
                        <p className="font-mono text-[11px] text-[var(--text-secondary)]">{skill.type}</p>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-[var(--border-color)] pt-3 font-mono text-[10px]">
                      <span className="text-[var(--text-secondary)]">Status: {skill.status}</span>
                      <span className="flex items-center gap-1 font-semibold text-[var(--accent-blue)] transition-transform group-hover:translate-x-0.5">
                        {skill.experience} <ArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}