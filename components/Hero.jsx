'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Terminal, Code2, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { fastFadeIn } from './animations';

const TECH_STACK = ['Next.js', 'React', 'Laravel', 'NestJS', 'Tailwind CSS', 'Node.js', 'MySQL', 'PHP'];

const LINE_1 = ['Building', 'Scalable', '&'];
const LINE_2 = ['Modern', 'Web', 'Apps'];

const PARTICLES = [
  { top: '12%', left: '8%', size: 3, delay: 0 },
  { top: '22%', left: '85%', size: 2, delay: 0.6 },
  { top: '68%', left: '92%', size: 3, delay: 1.1 },
  { top: '78%', left: '6%', size: 2, delay: 1.6 },
  { top: '40%', left: '48%', size: 2, delay: 0.3 },
  { top: '85%', left: '55%', size: 3, delay: 2.1 },
  { top: '8%', left: '55%', size: 2, delay: 1.4 },
];

const wordContainer = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const wordItem = {
  hidden: { opacity: 0, y: 28, rotateX: 50 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const spotX = useMotionValue('50%');
  const spotY = useMotionValue('30%');
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(650px circle at ${x} ${y}, var(--accent-blue-soft), transparent 65%)`
  );

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 18 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-10, 10]);

  const handleSectionMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    spotX.set(`${((e.clientX - rect.left) / rect.width) * 100}%`);
    spotY.set(`${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const handleCardMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-32"
    >
      {/* Cursor-follow spotlight */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      {/* Ambient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/3 top-1/4 h-[380px] w-[380px] rounded-full bg-[var(--accent-blue-soft)] blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-[110px]"
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          className="pointer-events-none absolute rounded-full bg-[var(--accent-blue)]"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
        />
      ))}

      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Freelance &amp; Full-Time Projects
          </motion.div>

          {/* 3D word-reveal heading */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={wordContainer}
            style={{ perspective: 800 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-6xl"
          >
            <span className="mr-3 inline-block">
              {LINE_1.map((w, i) => (
                <motion.span key={i} variants={wordItem} className="mr-3 inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shift_6s_ease_infinite]">
              {LINE_2.map((w, i) => (
                <motion.span key={i} variants={wordItem} className="mr-3 inline-block">
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            Hi, I&apos;m <span className="font-semibold text-[var(--text-primary)]">Aoun Ali</span>. A Full-Stack Web
            Developer engineering fast, responsive, and high-impact web architectures.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="group/cta relative flex items-center gap-2 overflow-hidden rounded-xl bg-[var(--accent-blue)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-shadow hover:shadow-[0_0_35px_rgba(37,99,235,0.55)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
              <span className="relative z-10">Explore Work</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-all hover:border-[var(--accent-blue)]"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="w-full border-t border-[var(--border-color)] pt-6"
          >
            <span className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-blue)]" /> Core Tech Stack
            </span>
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-2 [animation:marquee_18s_linear_infinite]">
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="shrink-0 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Right column: 3D tilt code window with rotating gradient border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
          style={{ perspective: 1000 }}
        >
          <div className="relative rounded-2xl p-[1.5px]">
            <div className="absolute inset-0 rounded-2xl opacity-80 [animation:spin-border_5s_linear_infinite] [background:conic-gradient(from_0deg,var(--accent-blue),transparent_30%,transparent_70%,var(--accent-blue))]" />

            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="mb-4 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                  <Terminal className="h-3.5 w-3.5 text-[var(--accent-blue)]" /> developer.config.ts
                </span>
              </div>

              <motion.pre
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
                className="overflow-x-auto py-2 font-mono text-xs leading-relaxed text-[var(--text-primary)]"
              >
                <code>
                  <motion.div variants={fadeUp}>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    &nbsp;&nbsp;<span className="text-[var(--text-secondary)]">name:</span>{' '}
                    <span className="text-emerald-400">&apos;Aoun Ali&apos;</span>,
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    &nbsp;&nbsp;<span className="text-[var(--text-secondary)]">role:</span>{' '}
                    <span className="text-emerald-400">&apos;Full-Stack Web Developer&apos;</span>,
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    &nbsp;&nbsp;<span className="text-[var(--text-secondary)]">status:</span>{' '}
                    <span className="text-cyan-400">&apos;Available&apos;</span>
                  </motion.div>
                  <motion.div variants={fadeUp} className="flex items-center">
                    &#125;;
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-1 inline-block h-3 w-1.5 bg-[var(--accent-blue)]"
                    />
                  </motion.div>
                </code>
              </motion.pre>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border-color)] pt-4">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-3"
                >
                  <Code2 className="h-5 w-5 shrink-0 text-[var(--accent-blue)]" />
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">Clean Code</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Modular Architecture</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-3"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">Optimized</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">High Performance</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-2 shadow-xl sm:flex"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent-blue)]" />
            <span className="text-[10px] font-semibold text-[var(--text-primary)]">5+ Projects Shipped</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}