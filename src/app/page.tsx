import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ImpactStats from '@/components/sections/ImpactStats';
import Specialization from '@/components/sections/Specialization';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import CtaBanner from '@/components/sections/CtaBanner';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-[#583FBC]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ImpactStats />
        <Specialization />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
