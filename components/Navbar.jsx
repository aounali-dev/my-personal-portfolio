'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';


const NAV_LINKS = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Journey', 'FAQ', 'Contact'];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === 'dark' : true;

  return (
    <>
      {/* Breathing ambient glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.15, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none fixed left-1/2 top-0 z-40 h-20 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-blue-soft)] blur-3xl"
      />

      {/* Floating header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4"
      >
        <nav className="relative flex h-16 w-full max-w-5xl items-center justify-between overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg-soft)] px-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
          {/* inner top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/40 to-transparent" />

          {/* Logo */}
          <a href="#home" className="group z-10 flex items-center gap-2.5">
            <motion.span
              whileHover={{ rotate: 8, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 14 }}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-indigo-600 text-sm font-black text-white shadow-[0_0_18px_-3px_var(--accent-blue)]"
            >
              A
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/15" />
            </motion.span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-blue)]">
                AOUN ALI
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                Web Developer
              </span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="z-10 hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link;
              return (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActiveTab(link)}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`relative px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 rounded-xl border border-[var(--accent-blue)]/40 bg-[var(--accent-blue-soft)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeGlowDot"
                      className="absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="z-10 hidden items-center gap-4 md:flex">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="relative flex h-7 w-14 items-center justify-between rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] p-1"
              >
                <Sun
                  className={`h-3.5 w-3.5 transition-opacity ${
                    !isDark ? 'text-amber-400 opacity-100' : 'text-slate-600 opacity-40'
                  }`}
                />
                <Moon
                  className={`h-3.5 w-3.5 transition-opacity ${
                    isDark ? 'text-[var(--accent-blue)] opacity-100' : 'text-slate-600 opacity-40'
                  }`}
                />
                <motion.div
                  className="absolute bottom-1 top-1 h-5 w-5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)]"
                  animate={{ x: isDark ? 26 : 0, rotate: isDark ? 0 : 180 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
              </button>
            )}

            {/* CTA with shimmer sweep */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="group/cta relative flex items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-blue-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:from-blue-500 hover:to-blue-600"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
              <span className="relative z-10">LET&apos;S TALK</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="z-10 flex items-center gap-3 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-2 text-[var(--text-secondary)]"
              >
                {isDark ? (
                  <Moon className="h-4 w-4 text-[var(--accent-blue)]" />
                ) : (
                  <Sun className="h-4 w-4 text-amber-400" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-blue)]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col justify-between border-l border-[var(--border-color)] bg-[var(--card-bg)] p-6 pt-24 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, type: 'spring', stiffness: 300, damping: 24 }}
                    whileTap={{ scale: 0.96 }}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => {
                      setActiveTab(link);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      activeTab === link
                        ? 'border border-[var(--accent-blue)]/30 bg-[var(--accent-blue-soft)] text-[var(--accent-blue)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)]/40 hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-blue)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500"
              >
                LET&apos;S TALK <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}