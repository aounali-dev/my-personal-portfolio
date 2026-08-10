'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-28 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 sm:p-16 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-2xl shadow-2xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have a project in mind? <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400 bg-clip-text text-transparent">
              Let's build something great.
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-lg mb-8 font-mono">
            Available for freelance projects, full-stack web applications, and full-time software engineering roles.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            <Mail className="w-4 h-4" />
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}