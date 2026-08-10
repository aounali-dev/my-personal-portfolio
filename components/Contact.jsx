'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight,
  Terminal,
  CheckCircle2
} from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background Cyber Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-4 leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            Get In Touch & <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Start a Conversation
            </span>
          </motion.h2>

          <p className="font-mono text-xs sm:text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Available for custom full-stack web applications, contract projects, and high-end software architecture solutions.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Badges & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Main Info Card */}
            <div 
              className="rounded-3xl border p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden space-y-8 transition-colors"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 mb-3">
                  <Terminal className="w-3 h-3" /> DIRECT REACH
                </span>
                <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Reach out directly for rapid feedback and project estimates.
                </p>
              </div>

              {/* Badges List */}
              <div className="space-y-4">
                {/* Location */}
                <div 
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-colors shadow-sm"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Location</p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>D.I. Khan, KPK, Pakistan</p>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <a
                  href="https://wa.me/923489156101?text=Hello%20Aoun%20Bhai,%20I%20want%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group shadow-sm"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Phone / WhatsApp</p>
                      <p className="text-sm font-semibold transition-colors group-hover:text-emerald-500" style={{ color: 'var(--text-primary)' }}>
                        +92 348 9156101
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-all" style={{ color: 'var(--text-secondary)' }} />
                </a>

                {/* Direct Mailto Link */}
                <a
                  href="mailto:aoundev066@gmail.com?subject=Project%20Inquiry%20-%20Aoun%20Ali%20Portfolio&body=Hello%20Aoun,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group shadow-sm"
                  style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Official Email</p>
                      <p className="text-sm font-semibold transition-colors group-hover:text-blue-500" style={{ color: 'var(--text-primary)' }}>
                        aoundev066@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 transition-all" style={{ color: 'var(--text-secondary)' }} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Quick Action Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl border p-8 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between transition-colors"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-400" />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Instant Project Chat
                </h3>
              </div>
              <p className="text-xs sm:text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                Click below to start an immediate conversation on WhatsApp or open your email app directly.
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'React & Next.js Web Apps',
                  'NestJS & Laravel Backends',
                  'Custom API Architectures',
                  'UI/UX Glassmorphism Systems'
                ].map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-2 p-3 rounded-xl border text-xs font-mono shadow-sm"
                    style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Impact Actions */}
            <div className="space-y-3 pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <a
                href="https://wa.me/923489156101?text=Hello%20Aoun%20Bhai,%20I%20have%20a%20project%20inquiry!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-emerald-600/25 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </a>

              {/* Direct Mail Action Button */}
              <a
                href="mailto:aoundev066@gmail.com?subject=New%20Project%20Query&body=Hi%20Aoun,%20I%20want%20to%20discuss%20a%20web%20development%20project."
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <Send className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Send Email Directly</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}