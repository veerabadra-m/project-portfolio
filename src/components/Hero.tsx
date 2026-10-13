import { ArrowRight, Mail, Download } from 'lucide-react';
import { personal } from '@/data/portfolio';

function CodeWindow() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full animate-pulse-glow" />
      <div className="relative card rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-navy-200/30 bg-cream-200/50">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-charcoal-400 font-mono">developer.ts</span>
        </div>
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div><span className="text-purple-600">const</span> <span className="text-navy-700">developer</span> <span className="text-charcoal-400">=</span> <span className="text-charcoal-600">{'{'}</span></div>
          <div className="pl-4"><span className="text-teal-600">name</span><span className="text-charcoal-400">:</span> <span className="text-emerald-600">'Veerabadra M'</span><span className="text-charcoal-400">,</span></div>
          <div className="pl-4"><span className="text-teal-600">role</span><span className="text-charcoal-400">:</span> <span className="text-emerald-600">'Full-Stack Developer'</span><span className="text-charcoal-400">,</span></div>
          <div className="pl-4"><span className="text-teal-600">stack</span><span className="text-charcoal-400">:</span> <span className="text-charcoal-600">[</span><span className="text-emerald-600">'React'</span><span className="text-charcoal-400">,</span> <span className="text-emerald-600">'Node'</span><span className="text-charcoal-400">,</span> <span className="text-emerald-600">'MongoDB'</span><span className="text-charcoal-600">]</span><span className="text-charcoal-400">,</span></div>
          <div className="pl-4"><span className="text-teal-600">location</span><span className="text-charcoal-400">:</span> <span className="text-emerald-600">'Bangalore, IN'</span><span className="text-charcoal-400">,</span></div>
          <div className="pl-4"><span className="text-teal-600">available</span><span className="text-charcoal-400">:</span> <span className="text-orange-500">true</span><span className="text-charcoal-400">,</span></div>
          <div className="text-charcoal-600">{'}'}</div>
          <div className="mt-2 text-charcoal-300">{'// open to opportunities'}</div>
          <div className="flex items-center mt-1">
            <span className="text-navy-600">~</span><span className="text-charcoal-400">$</span>
            <span className="ml-1 w-2 h-4 bg-teal-500 animate-blink inline-block" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 card rounded-lg px-3 py-2 text-xs font-mono text-charcoal-500 animate-float shadow-lg">
        <span className="text-teal-500">●</span> MERN Stack
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-grid bg-radial-glow bg-radial-glow-bottom pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-500/6 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal">
          <p className="text-sm font-mono tracking-widest text-teal-600 mb-4">
            {personal.greeting}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-3 text-gradient-name">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
            {personal.title}
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed mb-3 max-w-xl">
            {personal.heroDescription}
          </p>
          <p className="text-charcoal-400 text-base leading-relaxed mb-8 max-w-xl">
            {personal.heroSecondary}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('#projects')}
              className="group px-6 py-3 rounded-lg bg-gradient-accent bg-gradient-accent-hover text-cream-100 font-medium text-sm transition-all glow-accent hover:glow-accent-strong flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-lg card-hover text-navy-700 font-medium text-sm flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="px-6 py-3 rounded-lg border border-navy-200 card-hover text-charcoal-600 font-medium text-sm flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="reveal hidden lg:block">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
