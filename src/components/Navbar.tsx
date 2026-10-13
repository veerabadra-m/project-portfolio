import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [...navLinks].reverse().map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 backdrop-blur-lg py-3 shadow-lg shadow-navy-900/5 border-b border-navy-200/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="text-lg font-bold tracking-tight transition-all hover:opacity-80"
        >
          <span className="text-gradient-name">{personal.name}</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all relative ${
                  active === link.href
                    ? 'text-teal-600 bg-teal-500/8'
                    : 'text-charcoal-500 hover:text-navy-800 hover:bg-navy-500/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('switch-view', { detail: 'resume' }))}
            className="px-5 py-2.5 text-sm font-medium rounded-lg border border-navy-200 text-navy-700 hover:bg-navy-500/5 transition-all"
          >
            Resume View
          </button>
          <button
            onClick={() => handleNav('#contact')}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-accent text-cream-100 border border-navy-700/30 hover:glow-accent-strong transition-all"
          >
            Let's Connect
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-charcoal-600 p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 bg-cream-50/95 backdrop-blur-lg border-b border-navy-200/20">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    active === link.href
                      ? 'text-teal-600 bg-teal-500/8'
                      : 'text-charcoal-500 hover:text-navy-800 hover:bg-navy-500/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('switch-view', { detail: 'resume' }))}
                className="w-full px-4 py-2.5 text-sm font-medium rounded-lg border border-navy-200 text-navy-700"
              >
                Resume View
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="w-full px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-accent text-cream-100 border border-navy-700/30"
              >
                Let's Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
