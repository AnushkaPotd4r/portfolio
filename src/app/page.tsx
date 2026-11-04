import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/experience/Experience';
import { Achievements } from '@/components/achievements/Achievements';
import { Education } from '@/components/education/Education';
import { Resume } from '@/components/resume/Resume';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/layout/Footer';
import { AskAnushkaAI } from '@/components/chat/AskAnushkaAI';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#14213D] selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <AskAnushkaAI />
    </div>
  );
}
