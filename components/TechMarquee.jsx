'use client';

const TECH_ITEMS = [
  'React.js', 'Next.js', 'NestJS', 'Laravel', 'TypeScript', 
  'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git & GitHub'
];

export default function TechMarquee() {
  return (
    <div className="py-10 bg-[#030712] border-y border-slate-800/60 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:border-blue-500/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}