'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Terminal, Code2, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

const TECH_STACK = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 
  'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS', 'Framer Motion'
];

const useMouseTilt = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    x.set(mouseX / (rect.width / 2));
    y.set(mouseY / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

const blobVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      delay: i * 0.2,
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    },
  }),
};

export default function Hero() {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseTilt();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-primary)] py-24 md:py-32"
    >
      <motion.div
        custom={0}
        variants={blobVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute -left-64 -top-64 h-96 w-96 rounded-full bg-[var(--accent-blue-soft)] blur-[120px]"
      />
      <motion.div
        custom={1}
        variants={blobVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute -bottom-64 -right-64 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-7 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] shadow-inner backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Freelance &amp; Full-Time Roles
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-[var(--text-primary)] md:text-7xl">
            Crafting Premium <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl animate-fade-in-up animation-delay-200">
            Hi, I&apos;m <span className="font-semibold text-[var(--text-primary)] border-b-2 border-[var(--accent-blue)]/30">Aoun Ali</span>. A Full-Stack Developer specializing in high-performance, scalable web architectures and exceptional UI/UX.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up animation-delay-400">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[var(--accent-blue)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[var(--glow-color)] transition-all hover:bg-blue-700 hover:scale-[1.02]"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-all hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] hover:scale-[1.02]"
            >
              Get In Touch
            </a>
          </div>

          <div className="w-full pt-10 border-t border-[var(--border-color)] animate-fade-in-up animation-delay-600">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              <Sparkles className="h-4 w-4 text-[var(--accent-blue)]" /> Expert In
            </div>
            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="shrink-0 cursor-default rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-sm transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: CODE WINDOW WITH CONTROLLED SPINNING BORDER --- */}
        <div className="lg:col-span-5 flex items-center justify-center p-4 lg:p-0">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md cursor-grab active:cursor-grabbing"
          >
            <div className="absolute -inset-1 rounded-3xl bg-[var(--accent-blue)] opacity-10 blur-xl transition duration-1000" />

            {/* Yahan p-[1px] aur rounded-3xl ki wajah se gol-gol ghoomne wala border ab bilkul control mein aur chhota hai */}
            <div className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-2xl shadow-black/20">
              <div className="absolute inset-[-100%] animate-border-spin [background:conic-gradient(from_0deg,transparent_0deg,#2563eb_120deg,transparent_240deg,transparent_360deg)] opacity-80" />

              <div className="relative rounded-[calc(1.5rem-1px)] border border-[var(--border-color)] bg-[var(--card-bg)] p-7 backdrop-blur-xl translate-z-0">
                <div className="mb-5 flex items-center justify-between border-b border-[var(--border-color)] pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-block h-3.5 w-3.5 rounded-full bg-red-500/90 shadow-inner" />
                    <span className="inline-block h-3.5 w-3.5 rounded-full bg-yellow-400/90 shadow-inner" />
                    <span className="inline-block h-3.5 w-3.5 rounded-full bg-green-500/90 shadow-inner" />
                  </div>
                  <span className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                    <Terminal className="h-4 w-4 text-[var(--accent-blue)]" /> aoun_dev.ts
                  </span>
                </div>

                <pre className="overflow-x-auto py-2 font-mono text-xs leading-relaxed text-[var(--text-primary)] select-none">
                  <code>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">import</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">&#123;</span> Developer{' '}
                      <span className="text-gray-600 dark:text-gray-300">&#125;</span>{' '}
                      <span className="text-purple-600 dark:text-purple-400">from</span>{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">&apos;@awesome/world&apos;</span>
                      <span className="text-gray-600 dark:text-gray-300">;</span>
                    </div>
                    <br />
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                      <span className="text-blue-600 dark:text-blue-400">me</span>
                      <span className="text-gray-600 dark:text-gray-300">:</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">Developer</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">=</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">&#123;</span>
                    </div>
                    <div className="pl-5">
                      <span className="text-gray-500">name:</span>{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">&apos;Aoun Ali&apos;</span>
                      <span className="text-gray-600 dark:text-gray-300">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="text-gray-500">role:</span>{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">&apos;Full-Stack Architect&apos;</span>
                      <span className="text-gray-600 dark:text-gray-300">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="text-gray-500">passion:</span>{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">&apos;Performance & UX&apos;</span>
                      <span className="text-gray-600 dark:text-gray-300">,</span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-300">&#125;;</span>
                    </div>
                    <br />
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">me</span>
                      <span className="text-gray-600 dark:text-gray-300">.</span>
                      <span className="text-yellow-600 dark:text-yellow-400">ship</span>
                      <span className="text-gray-600 dark:text-gray-300">(</span>
                      <span className="text-gray-600 dark:text-gray-300">)</span>
                      <span className="text-gray-600 dark:text-gray-300">;</span>
                      <span className="inline-block ml-1 h-4 w-2 bg-[var(--accent-blue)] animate-pulse" />
                    </div>
                  </code>
                </pre>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--border-color)] pt-4">
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-3 shadow-inner">
                    <Code2 className="h-5 w-5 shrink-0 text-[var(--accent-blue)]" />
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">Clean Code</div>
                      <div className="text-[10px] text-[var(--text-secondary)]">Scalable Architecture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-3 shadow-inner">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">Top Notch</div>
                      <div className="text-[10px] text-[var(--text-secondary)]">Quality & Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}