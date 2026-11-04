
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Download,
} from 'lucide-react';

import { personal } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-primary)] px-5 py-32 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <div className="reveal max-w-5xl">

          {/* Greeting */}
          <p className="mb-7 font-mono text-xs tracking-[0.3em] text-[var(--accent-secondary)] sm:text-sm">
            {personal.greeting}
          </p>

          {/* Name */}
          <h1 className="mb-7 text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] text-[var(--text-primary)]">
            {personal.name}
            <span className="text-[var(--accent-secondary)]">.</span>
          </h1>

          {/* Professional title */}
          <div className="mb-9 flex items-center gap-4">
            <span className="h-[3px] w-12 bg-[var(--accent-secondary)] sm:w-16" />

            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--accent-secondary)] sm:text-2xl">
              {personal.title}
            </h2>
          </div>

          {/* Introduction */}
          <p className="mb-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9">
            {personal.heroDescription}
          </p>

          <p className="mb-12 max-w-2xl text-sm leading-8 text-[var(--text-muted)] sm:text-base">
            {personal.heroSecondary}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-3 border border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-sm font-bold text-[var(--accent-contrast)] transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
            >
              View Projects

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 border border-[var(--border)] px-6 py-4 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
            >
              <Mail size={17} />
              Contact Me
            </button>

            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-[var(--border)] px-6 py-4 text-sm font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
            >
              <Download size={17} />
              Resume
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px w-12 bg-[var(--accent-secondary)]" />

          <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--text-muted)]">
            PORTFOLIO / 2026
          </span>
        </div>

      </div>
    </section>
  );
}
