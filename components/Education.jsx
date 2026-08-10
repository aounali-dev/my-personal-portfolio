'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EDUCATION_DATA = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University / Institute Name',
    period: '2020 — 2024',
    location: 'Pakistan',
    description: 'Focused on Software Engineering, Web Technologies, Database Systems, and Object-Oriented Programming.',
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#030712] text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-400 mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Education & Learning</h2>
        </div>

        <div className="space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl flex flex-col sm:flex-row justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                <p className="text-blue-400 font-medium text-sm mb-3">{item.institution}</p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-2 text-xs font-mono text-slate-400 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700">
                  <Calendar className="w-3.5 h-3.5" /> {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}