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
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'
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
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#contact')}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-accent text-white border border-blue-400/30 hover:glow-accent-strong transition-all"
          >
            Let's Connect
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-300 p-2"
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
        <div className="px-6 pb-4 glass-strong">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    active === link.href
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNav('#contact')}
                className="w-full px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-accent text-white border border-blue-400/30"
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
