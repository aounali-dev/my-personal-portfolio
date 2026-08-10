'use client';

import { motion } from 'framer-motion';
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

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative min-h-screen py-32 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background Cyber Grid Background Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-500 dark:text-blue-400 backdrop-blur-md mb-5 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>EXECUTIVE CURRICULUM VITAE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering Standards & <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Technical Qualifications
            </span>
          </motion.h2>

          {/* Premium Download PDF Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/Aoun_Ali_Resume.pdf"
            download="Aoun_Ali_Resume.pdf"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] active:scale-95"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Verified Resume (PDF)</span>
          </motion.a>
        </div>

        {/* Main Resume Document Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border p-8 sm:p-12 backdrop-blur-2xl shadow-2xl space-y-12 overflow-hidden transition-colors"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)'
          }}
        >
          {/* Top Neon Border Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

          {/* Header Block */}
          <div 
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Aoun Ali
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-500 dark:text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <Terminal className="w-3 h-3" /> FULL-STACK ENGINEER
                </span>
              </div>
              <p className="font-mono text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                Next.js • React • NestJS • Laravel • Web Architecture
              </p>
            </div>

            {/* Contact Badges */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 text-xs font-mono">
              <div 
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>D.I. Khan, KPK, Pakistan</span>
              </div>
              <div 
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>+92 348 9156101</span>
              </div>
              <div 
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              >
                <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>aoundev066@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-500" /> EXECUTIVE SUMMARY
            </h3>
            <p className="text-sm sm:text-base leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
              High-performing Full-Stack Engineer with specialized proficiency in building scalable web architectures, modern API design, and reactive user interfaces. Skilled in deploying full-stack ecosystems using NestJS and Laravel backends paired with high-end React and Next.js frontends. Dedicated to clean code practices, optimal state management, and enterprise UI/UX standards.
            </p>
          </div>

          {/* Tech Matrix Grid */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-500" /> TECHNICAL CAPABILITIES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Frontend Stack', items: 'React JS, Next.js, TypeScript, Tailwind CSS' },
                { title: 'Backend Engineering', items: 'NestJS, Laravel, Node.js, RESTful APIs' },
                { title: 'UI/UX & Architecture', items: 'State Management, Glassmorphism, Micro-Interactions' },
                { title: 'DevOps & Workflows', items: 'Git, GitHub, Vercel & Netlify Pipelines' }
              ].map((category) => (
                <div 
                  key={category.title} 
                  className="p-4 rounded-2xl border transition-all duration-300 shadow-sm"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                >
                  <h4 className="text-xs font-mono font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    {category.title}
                  </h4>
                  <p className="text-xs font-mono leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {category.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Works */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-500" /> MAJOR PROJECT DELIVERABLES
            </h3>

            <div className="space-y-4">
              <div 
                className="p-5 rounded-2xl border transition-all duration-300 shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                    Color Converter Web Application
                  </h4>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 font-semibold w-fit">
                    Full-Stack Application
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Architected and deployed a color management suite built with NestJS and Next.js, supporting HEX, RGB, and HSL conversions with live palette generation.
                </p>
              </div>

              <div 
                className="p-5 rounded-2xl border transition-all duration-300 shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                    E-Commerce & Digital Services Applications
                  </h4>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400 font-semibold w-fit">
                    Lasani Pizza, Ali Restaurant & Academies
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Developed high-performance client web portals featuring interactive menus, cart mechanisms, course catalogs, and modern responsive layouts.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Continuous Learning */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-500" /> EDUCATION & CONTINUOUS LEARNING
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="p-5 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                      Matriculation — 10th Grade
                    </h4>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 font-semibold w-fit">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-blue-500 dark:text-blue-400 mb-2">
                    Mufti Mehmood School • D.I. Khan, Pakistan
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Currently studying science and mathematics while concurrently cultivating professional-grade software development expertise.
                  </p>
                </div>
              </div>

              <div 
                className="p-5 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                      Self-Taught Developer & Journey
                    </h4>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 font-semibold w-fit">
                      Continuous Growth
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-blue-500 dark:text-blue-400 mb-2">
                    Self-Directed Engineering Pathway
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Began studying web engineering principles early, building production-level applications, and keeping pace with modern full-stack frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}