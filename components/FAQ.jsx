'use client';

import { useState } from 'react';
import { fastFadeIn } from './animations';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare, ArrowRight, Mail } from 'lucide-react';

const FAQS = [
  {
    question: 'Aap kin main technologies aur tech stacks par kaam karte hain?',
    answer: 'Main Full-Stack Web Development mein specialized hoon. Frontend ke liye React JS, Next.js, aur Tailwind CSS, jabki Backend ke liye NestJS aur Laravel ka istemal karta hoon. Iske ilawa TypeScript, RESTful APIs, aur State Management par solid grip hai.'
  },
  {
    question: 'Aap se project banwane ya hire karne ka kya process hai?',
    answer: 'Process bohot simple aur structured hai: Sab se pehle hum aapki requirements aur project goals discuss karte hain. Uske baad architecture plan, UI design mockup, timeline, aur milestone-based deployment setup deliver karta hoon.'
  },
  {
    question: 'Kya aap custom web application aur API integration services dete hain?',
    answer: 'Ji bilkul! Custom Full-Stack Web Apps, Admin Dashboards, E-Commerce platforms, Color Tools/Utilities, aur Third-Party APIs integration (Payment Gateways, Database Systems, External Services) complete deliver ki jati hain.'
  },
  {
    question: 'Aap project handover ke baad support aur maintenance provide karte hain?',
    answer: 'Haan, har project ke sath post-launch support shamil hoti hai taake bug fixes, performance optimization, aur security updates smooth rahain aur aapka platform bina kisi issue ke run kare.'
  },
  {
    question: 'Aap se direct contact karne ka best tariqa kya hai?',
    answer: 'Aap mujhe direct WhatsApp (+92 348 9156101) par contact kar sakte hain ya Email (aoundev066@gmail.com) par message bhej sakte hain. Main D.I. Khan, KPK, Pakistan se remote aur client projects ke liye available hoon.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-mono font-semibold text-blue-500 dark:text-blue-400 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-4 leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            Got Questions? <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Here are the Answers
            </span>
          </motion.h2>
          
          <p className="font-mono text-xs sm:text-sm max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            Common queries regarding my technical stack, project process, and development services.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-blue-500/40 shadow-blue-500/10'
                    : 'hover:border-blue-500/20'
                } backdrop-blur-xl`}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: isOpen ? 'var(--accent-blue)' : 'var(--border-color)'
                }}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span 
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}
                    style={{ color: isOpen ? undefined : 'var(--text-primary)' }}
                  >
                    {faq.question}
                  </span>
                  
                  <div 
                    className={`p-2 rounded-xl shrink-0 transition-all duration-300 border shadow-sm ${
                      isOpen 
                        ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: isOpen ? undefined : 'var(--bg-primary)',
                      borderColor: isOpen ? undefined : 'var(--border-color)',
                      color: isOpen ? undefined : 'var(--text-secondary)'
                    }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="px-6 pb-6 text-xs sm:text-sm font-normal leading-relaxed border-t pt-4"
                        style={{ 
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border p-8 text-center backdrop-blur-2xl shadow-xl overflow-hidden transition-colors"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)'
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />
          
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Have a Specific Question?
          </h3>
          <p className="text-xs sm:text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Feel free to reach out directly via Email or WhatsApp for project discussions and technical inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Direct Email Action */}
            <a
              href="mailto:aoundev066@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Aoun,%20I%20have%20a%20question%20regarding%20your%20services."
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <span>Send Direct Email</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/923489156101?text=Hello%20Aoun%20Bhai,%20I%20have%20a%20query!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 text-emerald-600 dark:text-emerald-400 shadow-sm"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}