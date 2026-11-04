
import {
  GraduationCap,
  Calendar,
  Award,
  Globe,
  ArrowUpRight,
} from 'lucide-react';

import { education, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[var(--bg-secondary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="reveal mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            05 / EDUCATION
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Academic{' '}
                <span className="text-[var(--accent-secondary)]">
                  Journey.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                My educational background and the foundation behind my technical journey.
              </p>
            </div>

            <div className="hidden items-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] md:flex">
              <span className="h-px w-12 bg-[var(--accent-secondary)]" />
              QUALIFICATION
            </div>
          </div>
        </div>

        {/* Education card */}
        <div className="reveal relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm transition-all duration-300 hover:border-[var(--accent-secondary)] sm:p-10">

          {/* Decorative corner */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)]/[0.07] blur-3xl" />

          <div className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8">

            {/* Degree icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[var(--accent-secondary)]/30 bg-[var(--accent)]/10 text-[var(--accent-secondary)]">
              <GraduationCap size={32} />
            </div>

            <div className="min-w-0 flex-1">

              <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--accent-secondary)]">
                ACADEMIC QUALIFICATION
              </p>

              <h3 className="text-xl font-black leading-snug text-[var(--text-primary)] sm:text-2xl lg:text-3xl">
                {education.degree}
              </h3>

              <p className="mt-3 text-base font-bold text-[var(--accent-secondary)] sm:text-lg">
                {education.institution}
              </p>

              {/* Education details */}
              <div className="mt-8 flex flex-wrap gap-4">

                <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-3">
                  <Award size={18} className="text-[var(--accent-secondary)]" />

                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                      CGPA
                    </p>

                    <p className="mt-1 text-sm font-bold text-[var(--text-primary)]">
                      {education.cgpa}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg-tertiary)] px-4 py-3">
                  <Calendar size={18} className="text-[var(--accent-secondary)]" />

                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                      PERIOD
                    </p>

                    <p className="mt-1 text-sm font-bold text-[var(--text-primary)]">
                      {education.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ArrowUpRight
              size={22}
              className="hidden shrink-0 text-[var(--text-muted)] sm:block"
            />
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[var(--accent)]" />
        </div>

        {/* Languages section */}
        <div className="reveal mt-20">

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[var(--accent-secondary)]">
                COMMUNICATION
              </p>

              <h3 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Languages<span className="text-[var(--accent-secondary)]">.</span>
              </h3>

              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Languages I speak.
              </p>
            </div>

            <Globe
              size={30}
              className="hidden text-[var(--accent-secondary)] sm:block"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <div
                key={lang}
                className="group flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)]"
              >
                <span className="font-mono text-[10px] text-[var(--accent-secondary)]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="text-sm font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-secondary)]">
                  {lang}
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-secondary)]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-14 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          KNOWLEDGE IS A CONTINUOUS JOURNEY
        </div>
      </div>
    </section>
  );
}
