import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 px-6 bg-gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-1 text-gradient-name">{personal.name}</h3>
            <p className="text-slate-500 text-sm">{personal.title}</p>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Navigation</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Connect</p>
            <div className="flex items-center gap-3">
              <a href={`mailto:${personal.email}`} className="p-2.5 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-cyan-500/10 hover:text-blue-400 hover:glow-accent text-slate-400 transition-all">
                <Mail size={18} />
              </a>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-cyan-500/10 hover:text-blue-400 hover:glow-accent text-slate-400 transition-all">
                <Github size={18} />
              </a>
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-blue-500/15 hover:to-cyan-500/10 hover:text-blue-400 hover:glow-accent text-slate-400 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-3">{personal.email}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-slate-600">
            © 2026 Veerabadra M. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
