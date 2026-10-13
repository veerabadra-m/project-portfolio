import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ResumePage from '@/components/ResumePage';
import { useReveal } from '@/hooks/useReveal';

type View = 'portfolio' | 'resume';

function App() {
  const [view, setView] = useState<View>('portfolio');
  const ref = useReveal<HTMLDivElement>();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as View;
      setView(detail);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('switch-view', handler);
    return () => window.removeEventListener('switch-view', handler);
  }, []);

  if (view === 'resume') {
    return <ResumePage />;
  }

  return (
    <div ref={ref} className="min-h-screen bg-cream-100 text-charcoal-700 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
