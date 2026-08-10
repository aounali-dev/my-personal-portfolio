'use client';

import { motion } from 'framer-motion';
import { fastFadeIn } from './animations';
import { 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Award,
  Code2
} from 'lucide-react';

const JOURNEY_DATA = [
  {
    id: 'fullstack-dev',
    period: '2024 - PRESENT',
    role: 'Full-Stack Web Developer',
    organization: 'Freelance & Client Projects',
    type: 'experience',
    description: 'Engineering responsive, high-performance web applications using modern stacks including React, Next.js, NestJS, and Laravel. Focused on building scalable backend APIs and high-end frontend user interfaces.',
    highlights: ['Next.js App Router', 'NestJS & REST APIs', 'Tailwind CSS UI Systems', 'Vercel Deployment Pipeline'],
    icon: Briefcase,
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'color-converter-launch',
    period: '2024',
    role: 'Color Converter App Launch',
    organization: 'Featured Project',
    type: 'project',
    description: 'Designed and deployed a full-featured online color transformation and palette tool with real-time state processing using NestJS and Next.js.',
    highlights: ['Live Vercel Deployment', 'HEX/RGB/HSL Support', 'Custom Palette System'],
    icon: Code2,
    accent: 'from-indigo-500 to-purple-400',
  },
  {
    id: 'frontend-expertise',
    period: '2023 - 2024',
    role: 'Frontend UI/UX Specialist',
    organization: 'Web Architecture',
    type: 'experience',
    description: 'Focused on component architecture, state management, and modern CSS frameworks to build intuitive client dashboards and restaurant web platforms.',
    highlights: ['React Context API', 'Responsive Layouts', 'Framer Motion Dynamics'],
    icon: Award,
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'web-dev-degree',
    period: '2022 - 2024',
    role: 'Web Development & CS Studies',
    organization: 'Academic Foundation',
    type: 'experience',
    description: 'Built a strong core foundation in computer science fundamentals, data structures, JavaScript ecosystems, and modern software engineering principles.',
    highlights: ['Core JavaScript (ES6+)', 'Database Management', 'Object-Oriented Design'],
    icon: GraduationCap,
    accent: 'from-amber-500 to-orange-400',
  }
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative min-h-screen py-32 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-500 dark:text-blue-400 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            My Professional <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Journey & Milestones
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ 
              background: 'linear-gradient(to bottom, rgba(37, 99, 235, 0.5), rgba(147, 51, 234, 0.3), var(--border-color))' 
            }}
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {JOURNEY_DATA.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Badge */}
                  <div 
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border shadow-md"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div 
                      className="group relative rounded-3xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      
                      {/* Top Accent Line */}
                      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Period Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Org */}
                      <h3 
                        className="text-xl font-bold mb-1 transition-colors group-hover:text-blue-500"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div 
                        className="flex flex-wrap gap-2 pt-4 border-t"
                        style={{ borderColor: 'var(--border-color)' }}
                      >
                        {item.highlights.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono border"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              borderColor: 'var(--border-color)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <ChevronRight className="w-3 h-3 text-blue-500" />
                            {point}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}