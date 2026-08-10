'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

const PROJECTS_DATA = [
  {
    id: 'color-converter',
    title: 'Color Converter Tool',
    badge: 'Featured Utility',
    description:
      'Dynamic color code converter and visualization tool supporting HEX, RGB, HSL, and custom palette previews with real-time conversion.',
    image: '/projects/color-converter.png',
    techStack: ['NestJS', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://color-converter-ebon.vercel.app/',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-7',
    accent: '#3B82F6',
  },
  {
    id: 'lasani-pizza',
    title: 'Lasani Pizza',
    badge: 'E-Commerce',
    description:
      'Interactive restaurant platform featuring interactive menus, category filters, responsive order UI, and smooth layout transitions.',
    image: '/projects/lassani.png',
    techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://lasanipizzatime.netlify.app/',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-5',
    accent: '#F59E0B',
  },
  {
    id: 'ali-restaurant',
    title: 'Ali Restaurant',
    badge: 'Web App',
    description:
      'Modern food ordering application with component-driven menu architecture, reactive state management, and custom theme layouts.',
    image: '/projects/aliresturent.png',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Context API'],
    liveUrl: 'https://thealirestaurant.netlify.app/',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-5',
    accent: '#10B981',
  },
  {
    id: 'arhaman-quran-academy',
    title: 'Arhaman Quran Academy',
    badge: 'Educational',
    description:
      'Comprehensive educational platform designed for online course registration, student resources, and clean presentation sections.',
    image: '/projects/arhaman.png',
    techStack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://ar-rehman-academy.netlify.app/',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-7',
    accent: '#A855F7',
  },
  {
    id: 'aoun-portfolio',
    title: 'Personal Portfolio Website',
    badge: 'Production',
    description:
      'High-end developer portfolio engineered with modern Next.js server architecture, glassmorphism, smooth animations, and dark aesthetics.',
    image: '/projects/portfolio.png',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-6',
    accent: '#06B6D4',
  },
  {
    id: 'news-app',
    title: 'Real-Time News Application',
    badge: 'API Integrated',
    description:
      'Dynamic news aggregator fetching real-time feeds, featuring category filtering, live search capability, and responsive card layouts.',
    image: '/projects/news-app.png',
    techStack: ['React', 'Tailwind CSS', 'REST API', 'JavaScript'],
    liveUrl: 'https://news-app-foraouni.netlify.app/',
    githubUrl: 'https://github.com/aounali-dev/color-converter',
    span: 'md:col-span-12 lg:col-span-6',
    accent: '#F43F5E',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b from-[var(--accent-blue-soft)] via-transparent to-transparent blur-[140px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-blue)]/30 bg-[var(--accent-blue-soft)] px-4 py-1.5 font-mono text-xs font-semibold text-[var(--accent-blue)] backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFOLIO &amp; ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-6xl">
            Engineered with Precision &amp; <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Scalable Performance
            </span>
          </h2>

          <p className="mt-4 max-w-xl font-mono text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
            A curated showcase of modern web applications, custom UI systems, and full-stack solutions built for high scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className={`${project.span} group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 backdrop-blur-2xl transition-all duration-300 sm:p-8`}
            >
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-bold"
                    style={{ color: project.accent, borderColor: `${project.accent}33`, backgroundColor: `${project.accent}14` }}
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    {project.badge}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-[var(--text-secondary)]">
                    //{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

             <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop';
  }}
/>
                <h3 className="mb-2.5 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mb-6 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="mb-6 flex flex-wrap gap-2 border-t border-[var(--border-color)] pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-blue)] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[var(--accent-blue)]/20 transition-all hover:opacity-90"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)]"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}