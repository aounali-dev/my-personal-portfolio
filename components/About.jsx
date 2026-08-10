'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { User, Code2, Cpu, ShieldCheck, Award, Rocket, Terminal } from 'lucide-react';
import { fastFadeIn } from './animations';

const STATS = [
  { label: 'Experience', display: '1.6+ Years', icon: Award },
  { label: 'Core Expertise', display: 'Full-Stack', icon: Code2 },
  { label: 'Code Quality', display: 'Optimized', icon: ShieldCheck },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;
    const duration = 1100;
    const startTime = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, to, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay } },
});

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Ambient glow — tuned per-theme via --accent-blue-soft in globals.css */}
      <motion.div
        animate={prefersReducedMotion ? {} : { scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-10 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--accent-blue-soft)] blur-[140px]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn()}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent-blue)]">
            <motion.span
              animate={prefersReducedMotion ? {} : { rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex"
            >
              <User className="h-3.5 w-3.5" />
            </motion.span>
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Engineering High Performance &amp; <br />
            <span className="animate-[gradient-shift_6s_ease_infinite] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Modern Web Solutions
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left: biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base lg:col-span-7"
          >
            <p>
              I am <span className="font-bold text-[var(--text-primary)]">Aoun Ali</span>, a Full-Stack Web Developer
              dedicated to engineering fast, scalable, and visually refined web applications. I turn complex logic into
              clean, user-centric interfaces.
            </p>
            <p>
              My stack revolves around modern frontend frameworks like{' '}
              <span className="font-medium text-[var(--text-primary)]">React &amp; Next.js</span> paired with robust
              backend services in <span className="font-medium text-[var(--text-primary)]">Laravel &amp; NestJS</span>.
              I prioritize modular code, API optimization, and smooth UI/UX micro-interactions.
            </p>
            <p>
              Whether launching interactive web apps or building scalable backend systems, my goal is to deliver clean
              architecture with exceptional client satisfaction.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              {[
                { icon: Cpu, title: 'Frontend Mastery', desc: 'Pixel-perfect, responsive layouts with Tailwind & Framer Motion.', color: 'text-blue-500' },
                { icon: Terminal, title: 'Backend Architecture', desc: 'Secure REST APIs, database schemas & performant server logic.', color: 'text-indigo-500' },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeIn(0.1 * i)}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_-18px_var(--accent-blue)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-blue)] to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex items-start gap-3">
                      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${f.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`} />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">{f.title}</h4>
                        <p className="mt-1 text-[11px] text-[var(--text-secondary)]">{f.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: orbit badge + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            {/* Orbit monogram */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
              <motion.span
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[var(--accent-blue)]/40"
              />
              <motion.span
                animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full bg-[var(--accent-blue-soft)] blur-md"
              />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-indigo-600 text-lg font-black text-white shadow-[0_0_25px_-5px_var(--accent-blue)]">
                AA
              </div>
              <motion.span
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
                style={{ transformOrigin: '50% 50%' }}
              >
                <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
              </motion.span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeIn(0.08 * idx)}
                    whileHover={{ y: -4 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 transition-all duration-300 hover:border-[var(--accent-blue)] hover:shadow-[0_16px_36px_-20px_var(--accent-blue)]"
                  >
                    <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[var(--accent-blue-soft)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="w-fit rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-3 text-[var(--accent-blue)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="relative mt-8">
                      <div className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                        {stat.value != null ? <Counter to={stat.value} suffix={stat.suffix} /> : stat.display}
                      </div>
                      <div className="mt-1 text-xs font-medium text-[var(--text-secondary)]">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}