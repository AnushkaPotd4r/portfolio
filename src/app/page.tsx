import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Learning } from '@/components/learning/Learning';
import { Resume } from '@/components/resume/Resume';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
