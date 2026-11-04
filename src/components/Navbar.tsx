
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from 'lucide-react';

import { personal, navLinks } from '@/data/portfolio';

type Theme = 'light' | 'dark';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const [theme, setTheme] = useState<Theme>(() => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [...navLinks].reverse().map((link) =>
        link.href.slice(1)
      );

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 130) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const openResume = () => {
    setOpen(false);
    window.dispatchEvent(
      new CustomEvent('switch-view', { detail: 'resume' })
    );
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b border-[#d7ff00]/15 bg-[#17180f] text-white transition-all duration-300 ${
          scrolled
            ? 'py-3 shadow-xl shadow-black/20'
            : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="group flex items-center gap-2 text-left"
          >
            <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#d7ff00] sm:text-xl">
              {personal.name}
            </span>
            <span className="text-2xl font-bold text-[#d7ff00]">
              .
            </span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-wide transition-colors 2xl:px-4 2xl:text-sm ${
                    active === link.href
                      ? 'text-[#d7ff00]'
                      : 'text-white/65 hover:text-[#d7ff00]'
                  }`}
                >
                  {link.label}

                  {active === link.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#d7ff00]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 xl:flex">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
            >
              {theme === 'light' ? (
                <Moon size={17} />
              ) : (
                <Sun size={17} />
              )}
            </button>

            <button
              onClick={openResume}
              className="rounded-full border border-white/25 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
            >
              Resume View
            </button>

            <button
              onClick={() => handleNav('#contact')}
              className="group flex items-center gap-2 rounded-full bg-[#d7ff00] px-5 py-2.5 text-xs font-bold text-[#17180f] transition-all hover:bg-white"
            >
              Let's Connect
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-[#d7ff00] hover:text-[#d7ff00]"
            >
              {theme === 'light' ? (
                <Moon size={17} />
              ) : (
                <Sun size={17} />
              )}
            </button>

            {/* Circular Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7ff00] text-[#17180f] transition-all duration-300 hover:rotate-90 hover:bg-white"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#17180f] text-white transition-all duration-300 xl:hidden ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col justify-center overflow-y-auto px-8 pb-12 pt-24 sm:px-14">

          <p className="mb-8 font-mono text-xs tracking-[0.25em] text-[#d7ff00]">
            NAVIGATION / EXPLORE
          </p>

          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-3xl font-bold tracking-tight transition-colors sm:text-4xl ${
                    active === link.href
                      ? 'text-[#d7ff00]'
                      : 'text-white hover:text-[#d7ff00]'
                  }`}
                >
                  <span>
                    <span className="mr-4 font-mono text-xs text-white/35">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>

                  <ArrowUpRight size={22} />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={openResume}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#d7ff00] hover:text-[#d7ff00]"
            >
              Resume View
            </button>

            <button
              onClick={() => handleNav('#contact')}
              className="rounded-full bg-[#d7ff00] px-6 py-3 text-sm font-bold text-[#17180f] transition-colors hover:bg-white"
            >
              Let's Connect
            </button>
          </div>

          <p className="mt-12 font-mono text-xs text-white/35">
            {personal.name} / PORTFOLIO
          </p>
        </div>
      </div>
    </>
  );
}
