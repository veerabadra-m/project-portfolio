import { ArrowRight, Mail, Download } from 'lucide-react';
import { personal } from '@/data/portfolio';

function CodeWindow() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse-glow" />
      <div className="relative glass-strong rounded-xl overflow-hidden shadow-2xl glow-on-hover transition-all duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-slate-500 font-mono">developer.ts</span>
        </div>
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-slate-500">=</span> <span className="text-slate-300">{'{'}</span></div>
          <div className="pl-4"><span className="text-sky-300">name</span><span className="text-slate-500">:</span> <span className="text-emerald-400">'Veerabadra M'</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-sky-300">role</span><span className="text-slate-500">:</span> <span className="text-emerald-400">'Full-Stack Developer'</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-sky-300">stack</span><span className="text-slate-500">:</span> <span className="text-slate-300">[</span><span className="text-emerald-400">'React'</span><span className="text-slate-500">,</span> <span className="text-emerald-400">'Node'</span><span className="text-slate-500">,</span> <span className="text-emerald-400">'MongoDB'</span><span className="text-slate-300">]</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-sky-300">location</span><span className="text-slate-500">:</span> <span className="text-emerald-400">'Bangalore, IN'</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-sky-300">available</span><span className="text-slate-500">:</span> <span className="text-orange-400">true</span><span className="text-slate-500">,</span></div>
          <div className="text-slate-300">{'}'}</div>
          <div className="mt-2 text-slate-600">{'// open to opportunities'}</div>
          <div className="flex items-center mt-1">
            <span className="text-blue-400">~</span><span className="text-slate-500">$</span>
            <span className="ml-1 w-2 h-4 bg-blue-400 animate-blink inline-block" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 glass-strong rounded-lg px-3 py-2 text-xs font-mono text-slate-400 animate-float shadow-lg">
        <span className="text-green-400">●</span> MERN Stack
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
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal">
          <p className="text-sm font-mono tracking-widest text-blue-400 mb-4">
            {personal.greeting}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-3 text-gradient-name">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
            {personal.title}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-3 max-w-xl">
            {personal.heroDescription}
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-xl">
            {personal.heroSecondary}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('#projects')}
              className="group px-6 py-3 rounded-lg bg-gradient-accent bg-gradient-accent-hover text-white font-medium text-sm transition-all glow-accent hover:glow-accent-strong flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-lg glass-hover glow-on-hover text-white font-medium text-sm flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="px-6 py-3 rounded-lg border border-white/10 glass-hover glow-on-hover text-slate-300 font-medium text-sm flex items-center gap-2"
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
