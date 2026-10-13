import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-navy-200/20 py-12 px-6 bg-cream-100 bg-gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-1 text-gradient-name">{personal.name}</h3>
            <p className="text-charcoal-400 text-sm">{personal.title}</p>
          </div>

          <div>
            <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-3">Navigation</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-charcoal-500 hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-3">Connect</p>
            <div className="flex items-center gap-3">
              <a href={`mailto:${personal.email}`} className="p-2.5 rounded-lg bg-cream-200/60 hover:bg-gradient-to-br hover:from-teal-500/12 hover:to-navy-500/8 hover:text-teal-600 hover:glow-accent text-charcoal-400 transition-all">
                <Mail size={18} />
              </a>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-cream-200/60 hover:bg-gradient-to-br hover:from-teal-500/12 hover:to-navy-500/8 hover:text-teal-600 hover:glow-accent text-charcoal-400 transition-all">
                <Github size={18} />
              </a>
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-cream-200/60 hover:bg-gradient-to-br hover:from-teal-500/12 hover:to-navy-500/8 hover:text-teal-600 hover:glow-accent text-charcoal-400 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-sm text-charcoal-400 mt-3">{personal.email}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-navy-200/15">
          <p className="text-xs text-charcoal-400">
            © 2026 Veerabadra M. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-charcoal-400 hover:text-teal-600 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
