'use client';

import { motion } from 'framer-motion';
import { fastFadeIn } from './animations';
import { 
  Terminal, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer 
      className="relative border-t overflow-hidden pt-24 pb-12 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
      }}
    >
      
      {/* Top Cyber Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Radial Lights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-t from-blue-600/10 via-indigo-600/5 to-transparent blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Main Grid Content */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b"
          style={{ borderColor: 'var(--border-color)' }}
        >
          
          {/* Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Aoun Ali
                </h3>
                <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  Full-Stack Software Architecture & Engineering
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Specialized in high-performance web systems using React, Next.js, NestJS, and Laravel. Architecting resilient APIs and high-end UI ecosystems.
            </p>

            {/* Live Availability Badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-emerald-500 text-xs font-mono shadow-sm border"
              style={{ 
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold">Open for New Engineering Projects</span>
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" /> Navigation
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs sm:text-sm font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                      &gt;
                    </span>
                    <span className="hover:text-blue-500 transition-colors">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> Direct Contact
            </h4>

            <div className="space-y-3 font-mono text-xs">
              <a
                href="https://wa.me/923489156101?text=Hello%20Aoun%20Bhai!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 group shadow-sm"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>WhatsApp / Call</p>
                  <p className="font-semibold group-hover:text-emerald-500 transition-colors">+92 348 9156101</p>
                </div>
              </a>

              <a
                href="mailto:aoundev066@gmail.com?subject=Inquiry"
                className="flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 group shadow-sm"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Direct Email</p>
                  <p className="font-semibold group-hover:text-blue-500 transition-colors">aoundev066@gmail.com</p>
                </div>
              </a>

              <div 
                className="flex items-center gap-3 p-3.5 rounded-2xl border shadow-sm"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Location</p>
                  <p className="font-semibold">D.I. Khan, KPK, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar & Scroll Back Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>© {new Date().getFullYear()} Aoun Ali. Engineered with Next.js & Tailwind.</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all shadow-xs group"
            style={{ 
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-500 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}