'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fastFadeIn } from './animations';
import { 
  Code2, 
  Server, 
  Layout, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Terminal, 
  Zap, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Applications',
    badge: 'End-to-End Solutions',
    icon: Layout,
    accent: 'from-blue-500 via-indigo-500 to-cyan-400',
    glow: 'rgba(59, 130, 246, 0.25)',
    description: 'Complete, production-ready web platforms built with modern React / Next.js on the frontend and scalable Laravel / NestJS on the backend.',
    features: [
      'Custom SaaS & Web Platform Development',
      'High-Performance Next.js App Router Architecture',
      'Robust Authentication, RBAC & Security',
      'Seamless RESTful & GraphQL API Integration'
    ],
    techStack: ['Next.js', 'React', 'Laravel', 'NestJS', 'MySQL', 'Tailwind'],
    codeSnippet: `// Next.js & NestJS Architecture
async function BootstrapPlatform() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'https://app.client.com' });
  await app.listen(4000);
  console.log('⚡ High-Performance Server Live');
}`
  },
  {
    title: 'Backend & API Architecture',
    id: 'backend',
    badge: 'Microservices & DBs',
    icon: Server,
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'rgba(99, 102, 241, 0.25)',
    description: 'Enterprise-grade server architecture, database design, and microservices crafted for ultra-fast response times and zero downtime.',
    features: [
      'Scalable REST & GraphQL API Design',
      'Optimized MySQL Database Schemas & Queries',
      'PHP / Laravel MVC Engine Engineering',
      'Secure Token & OAuth Authentication Flows'
    ],
    techStack: ['Laravel', 'NestJS', 'Node.js', 'PHP', 'MySQL'],
    codeSnippet: `// Laravel Enterprise API Controller
class ServiceEngineController extends Controller {
  public function executeWorkload(Request $request) {
    $data = $this->service->processAsync($request->all());
    return response()->json(['status' => 'success', 'payload' => $data], 200);
  }
}`
  },
  {
    title: 'Frontend & UI Engineering',
    id: 'frontend',
    badge: 'Modern UI/UX',
    icon: Code2,
    accent: 'from-cyan-400 via-teal-500 to-emerald-400',
    glow: 'rgba(6, 182, 212, 0.25)',
    description: 'Ultra-fast, pixel-perfect frontend experiences featuring responsive layouts, smooth physics animations, and minimalist aesthetic design systems.',
    features: [
      'Tailwind CSS & Custom Design System Setup',
      'Framer Motion & Interactive Canvas Physics',
      'SEO-Optimized Next.js Server Components',
      'Fully Mobile-Responsive & Accessible UI'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
    codeSnippet: `// Modern Framer Motion Component
export const GlassCard = ({ children }) => (
  <motion.div 
    whileHover={{ y: -6, scale: 1.02 }}
    className="backdrop-blur-xl border border-white/10 shadow-2xl"
  >
    {children}
  </motion.div>
);`
  },
  {
    title: 'Deployment & Cloud DevOps',
    id: 'devops',
    badge: 'Cloud & Hosting',
    icon: Cloud,
    accent: 'from-amber-400 via-orange-500 to-red-500',
    glow: 'rgba(245, 158, 11, 0.25)',
    description: 'Automated CI/CD deployment pipelines, domain configurations, and serverless hosting on Vercel and Netlify for maximum uptime.',
    features: [
      'Automated Git / GitHub CI/CD Workflows',
      'Vercel & Netlify Production Deployments',
      'SSL, DNS & Environment Variable Configuration',
      'Performance Optimization & Core Web Vitals'
    ],
    techStack: ['Git', 'GitHub', 'Vercel', 'Netlify', 'SSL / DNS'],
    codeSnippet: `# Production Deployment Trigger
$ git push origin main
✓ Building Next.js production bundle...
✓ Optimizing static assets...
🚀 Successfully deployed to Vercel Edge Network.`
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const sectionRef = useRef(null);

  // Smooth Mouse Spotlight Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const currentService = SERVICES.find((s) => s.id === activeTab);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="services"
      className="relative min-h-screen py-32 overflow-hidden transition-colors duration-300 selection:bg-blue-500/25 selection:text-blue-500 dark:selection:text-blue-400"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Background Interactive Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(750px circle at ${x}px ${y}px, ${currentService.glow}, transparent 70%)`
          ),
        }}
      />

      {/* Cyber Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="z-10 mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md mb-4"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>EXPERT SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-6xl leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            High-Performance <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </motion.h2>
        </div>

        {/* Top Interactive Service Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isActive = service.id === activeTab;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative group rounded-2xl p-5 text-left transition-all duration-300 border shadow-sm overflow-hidden ${
                  isActive
                    ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'hover:border-blue-500/30 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: isActive ? undefined : 'var(--border-color)'
                }}
              >
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-10 pointer-events-none`} />
                )}
                
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className={`rounded-xl border p-3 transition-colors ${isActive ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30' : 'bg-black/5 dark:bg-black/30 border-black/10 dark:border-white/10 text-slate-500'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    // 0{idx + 1}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm font-bold transition-colors mb-1" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <span className="text-[11px] font-mono" style={{ color: 'var(--text-secondary)' }}>
                    {service.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Showcase Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl border p-8 lg:p-10 shadow-2xl backdrop-blur-2xl overflow-hidden transition-colors"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}
          >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${currentService.accent}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Side: Description & Feature Bullets */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-2">
                    <Sparkles className="h-3.5 w-3.5" /> {currentService.badge}
                  </div>
                  <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                    {currentService.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {currentService.description}
                  </p>
                </div>

                {/* Service Highlights List */}
                <div className="space-y-3 pt-2">
                  {currentService.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Included Badges */}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-[11px] font-mono block mb-3 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border px-3 py-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 shadow-sm"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Code Terminal Mockup Window */}
              <div className="lg:col-span-5 relative rounded-2xl border border-slate-800 bg-[#020617] p-5 shadow-2xl overflow-hidden font-mono text-xs text-slate-100">
                {/* Header Dots */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Terminal className="h-3 w-3 text-blue-400" /> {currentService.id}.architecture.ts
                  </span>
                </div>

                {/* Code Window */}
                <pre className="text-slate-300 overflow-x-auto leading-relaxed text-[11px] bg-transparent p-0">
                  <code>{currentService.codeSnippet}</code>
                </pre>

                {/* Bottom Verification Badge */}
                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" /> Production Tested
                  </span>
                  <span className="text-slate-500">100% Scalable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}