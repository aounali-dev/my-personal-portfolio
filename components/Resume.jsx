'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fastFadeIn } from './animations';
import {
  Download,
  FileText,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Terminal,
  Cpu,
  Zap,
  GraduationCap,
  BookOpen
} from 'lucide-react';

const TECH_CATEGORIES = [
  { title: 'Frontend Stack', items: 'React JS, Next.js, TypeScript, Tailwind CSS' },
  { title: 'Backend Engineering', items: 'NestJS, Laravel, Node.js, RESTful APIs' },
  { title: 'UI/UX & Architecture', items: 'State Management, Glassmorphism, Micro-Interactions' },
  { title: 'DevOps & Workflows', items: 'Git, GitHub, Vercel & Netlify Pipelines' }
];

const PROJECTS = [
  {
    title: 'Color Converter Web Application',
    tag: 'Full-Stack Application',
    tagClass: 'bg-blue-500/10 border-blue-500/20 text-blue-500 dark:text-blue-400',
    desc: 'Architected and deployed a color management suite built with NestJS and Next.js, supporting HEX, RGB, and HSL conversions with live palette generation.'
  },
  {
    title: 'E-Commerce & Digital Services Applications',
    tag: 'Lasani Pizza, Ali Restaurant & Academies',
    tagClass: 'bg-purple-500/10 border-purple-500/20 text-purple-500 dark:text-purple-400',
    desc: 'Developed high-performance client web portals featuring interactive menus, cart mechanisms, course catalogs, and modern responsive layouts.'
  }
];

function InfoCard({ children }) {
  return (
    <div
      className="group rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-22px_var(--accent-blue)]"
      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
    >
      {children}
    </div>
  );
}

export default function Resume() {
  const prefersReducedMotion = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay }
  });

  return (
    <section
      id="resume"
      className="relative min-h-screen overflow-hidden py-32 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background Cyber Grid Background Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            {...rise()}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md dark:text-blue-400"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>EXECUTIVE CURRICULUM VITAE</span>
          </motion.div>

          <motion.h2
            {...rise(0.1)}
            className="mb-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering Standards & <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
              Technical Qualifications
            </span>
          </motion.h2>

          {/* Premium Download PDF Button */}
          <motion.a
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="/Aoun_Ali_Resume.pdf"
            download="Aoun_Ali_Resume.pdf"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Download className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span className="relative z-10">Download Verified Resume (PDF)</span>
          </motion.a>
        </div>

        {/* Main Resume Document Card */}
        <motion.div
          {...rise()}
          className="relative space-y-12 overflow-hidden rounded-3xl border p-8 shadow-2xl backdrop-blur-2xl transition-colors sm:p-12"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)'
          }}
        >
          {/* Top Neon Border Line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

          {/* Header Block */}
          <div
            className="flex flex-col justify-between gap-6 border-b pb-8 lg:flex-row lg:items-center"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div>
              <div className="mb-2.5 flex items-center gap-3">
                <h3 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
                  Aoun Ali
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-mono font-bold text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)] dark:text-blue-400">
                  <Terminal className="h-3 w-3" /> FULL-STACK ENGINEER
                </span>
              </div>
              <p className="font-mono text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                Next.js • React • NestJS • Laravel • Web Architecture
              </p>
            </div>

            {/* Contact Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs font-mono lg:flex-col">
              <div
                className="flex items-center gap-2.5 rounded-xl border px-3.5 py-2 shadow-sm transition-colors"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                <span>D.I. Khan, KPK, Pakistan</span>
              </div>
              <a
                href="tel:+923489156101"
                className="flex items-center gap-2.5 rounded-xl border px-3.5 py-2 shadow-sm transition-colors hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                <span>+92 348 9156101</span>
              </a>
              <a
                href="mailto:aoundev066@gmail.com"
                className="flex items-center gap-2.5 rounded-xl border px-3.5 py-2 shadow-sm transition-colors hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                <span>aoundev066@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h4 className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-500">
              <FileText className="h-4 w-4 text-blue-500" /> EXECUTIVE SUMMARY
            </h4>
            <p className="text-sm font-normal leading-relaxed sm:text-base" style={{ color: 'var(--text-secondary)' }}>
              High-performing Full-Stack Engineer with specialized proficiency in building scalable web architectures, modern API design, and reactive user interfaces. Skilled in deploying full-stack ecosystems using NestJS and Laravel backends paired with high-end React and Next.js frontends. Dedicated to clean code practices, optimal state management, and enterprise UI/UX standards.
            </p>
          </div>

          {/* Tech Matrix Grid */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-500">
              <Cpu className="h-4 w-4 text-blue-500" /> TECHNICAL CAPABILITIES
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TECH_CATEGORIES.map((category) => (
                <InfoCard key={category.title}>
                  <h5 className="mb-2 flex items-center gap-2 font-mono text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                    {category.title}
                  </h5>
                  <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {category.items}
                  </p>
                </InfoCard>
              ))}
            </div>
          </div>

          {/* Featured Works */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-500">
              <Briefcase className="h-4 w-4 text-blue-500" /> MAJOR PROJECT DELIVERABLES
            </h4>

            <div className="space-y-4">
              {PROJECTS.map((project) => (
                <InfoCard key={project.title}>
                  <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h5 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h5>
                    <span className={`w-fit rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${project.tagClass}`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {project.desc}
                  </p>
                </InfoCard>
              ))}
            </div>
          </div>

          {/* Education & Continuous Learning */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-500">
              <GraduationCap className="h-4 w-4 text-blue-500" /> EDUCATION & CONTINUOUS LEARNING
            </h4>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <InfoCard>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h5 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                    Matriculation — 10th Grade
                  </h5>
                  <span className="w-fit rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-amber-500 dark:text-amber-400">
                    In Progress
                  </span>
                </div>
                <p className="mb-2 font-mono text-xs font-medium text-blue-500 dark:text-blue-400">
                  Mufti Mehmood School • D.I. Khan, Pakistan
                </p>
                <p className="text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Currently studying science and mathematics while concurrently cultivating professional-grade software development expertise.
                </p>
              </InfoCard>

              <InfoCard>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h5 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                    Self-Taught Developer & Journey
                  </h5>
                  <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-500 dark:text-emerald-400">
                    Continuous Growth
                  </span>
                </div>
                <p className="mb-2 font-mono text-xs font-medium text-blue-500 dark:text-blue-400">
                  Self-Directed Engineering Pathway
                </p>
                <p className="text-xs leading-relaxed sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Began studying web engineering principles early, building production-level applications, and keeping pace with modern full-stack frameworks.
                </p>
              </InfoCard>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}