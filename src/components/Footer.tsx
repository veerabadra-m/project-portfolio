
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react';

import { personal, navLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-secondary)] px-5 py-16 text-[var(--text-primary)] transition-colors duration-300 sm:px-8">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--accent)]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-12 border-b border-[var(--border)] pb-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo('#home')}
              className="text-left"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight">
                {personal.name}
                <span className="text-[var(--accent-secondary)]">.</span>
              </h3>
            </button>

            <p className="mt-3 font-mono text-xs tracking-[0.18em] text-[var(--accent-secondary)]">
              {personal.title.toUpperCase()}
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--text-muted)]">
              Building meaningful digital experiences through
              creativity, code, and continuous learning.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-secondary)]" />
              <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[var(--accent-secondary)]">
              EXPLORE
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="group flex w-fit items-center gap-2 text-left text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-secondary)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-[var(--accent-secondary)]">
              LET'S CONNECT
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-3 break-all text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent-secondary)]"
            >
              <Mail
                size={18}
                className="shrink-0 text-[var(--accent-secondary)]"
              />
              {personal.email}
              <ArrowUpRight
                size={14}
                className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>

            <div className="mt-6 flex gap-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all hover:border-[var(--accent-secondary)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
              >
                <Github size={19} />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all hover:border-[var(--accent-secondary)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
              >
                <Linkedin size={19} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all hover:border-[var(--accent-secondary)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">

          <p className="text-center font-mono text-[10px] tracking-wider text-[var(--text-muted)] sm:text-left">
            © {new Date().getFullYear()} {personal.name}. ALL RIGHTS RESERVED.
          </p>

          <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            DESIGNED & BUILT WITH PURPOSE.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            aria-label="Back to top"
            className="group flex items-center gap-3 border border-[var(--border)] px-4 py-3 font-mono text-[10px] tracking-widest text-[var(--text-secondary)] transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
          >
            BACK TO TOP

            <ArrowUp
              size={15}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
