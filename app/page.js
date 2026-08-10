'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero'; // Hero component ko direct import karein taake LCP (Largest Contentful Paint) fast ho

// Baaki saare sections ko dynamic import karein taake poori website super smooth aur fast load ho
const About = dynamic(() => import('@/components/About'), { ssr: true });
const TechMarquee = dynamic(() => import('@/components/TechMarquee'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const Journey = dynamic(() => import('@/components/Journey'), { ssr: true });
const Resume = dynamic(() => import('@/components/Resume'), { ssr: true });
const Education = dynamic(() => import('@/components/Education'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      {/* <TechMarquee /> */}
      <Skills />
      <Services />
      <Projects />
      <Journey />
      <Resume />
      {/* <Education /> */}
      <FAQ />
      {/* <FinalCTA /> */}
      <Contact />
      <Footer />
    </main>
  );
}