
import {
  Briefcase,
  GitCommit,
  Server,
  Layers,
  Database,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react';

import { experience } from '@/data/portfolio';

const pointIcons = [Layers, Server, Server, Database, GitBranch, GitCommit];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--bg-secondary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="reveal mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            03 / EXPERIENCE
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Work{' '}
                <span className="text-[var(--accent-secondary)]">
                  Experience.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                My professional journey and hands-on development experience.
              </p>
            </div>

            <div className="hidden items-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] md:flex">
              <span className="h-px w-12 bg-[var(--accent-secondary)]" />
              MY JOURNEY
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute bottom-4 left-[17px] top-4 w-px bg-gradient-to-b from-[var(--accent-secondary)] via-[var(--border)] to-transparent sm:left-[23px]" />

          {experience.map((exp, i) => (
            <div
              key={`${exp.company}-${i}`}
              className="reveal relative pb-12 last:pb-0"
              style={{ transitionDelay: `${i * 100}ms` }}
            >

              {/* Timeline marker */}
              <div className="absolute left-0 top-7 z-10 flex h-9 w-9 items-center justify-center border border-[var(--accent-secondary)]/50 bg-[var(--bg-secondary)] text-[var(--accent-secondary)] sm:left-[6px]">
                <Briefcase size={16} />
              </div>

              {/* Experience card */}
              <div className="ml-14 border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:shadow-xl hover:shadow-[var(--accent)]/5 sm:ml-20 sm:p-8">

                {/* Card heading */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[var(--accent-secondary)]">
                      PROFESSIONAL EXPERIENCE / {String(i + 1).padStart(2, '0')}
                    </p>

                    <h3 className="text-xl font-extrabold leading-snug text-[var(--text-primary)] sm:text-2xl">
                      {exp.role}
                    </h3>

                    <p className="mt-2 text-base font-bold text-[var(--accent-secondary)]">
                      {exp.company}
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] sm:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="border-t border-[var(--border)] pt-6">
                  <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                    KEY CONTRIBUTIONS
                  </p>

                  <ul className="space-y-4">
                    {exp.points.map((point, pi) => {
                      const Icon = pointIcons[pi] ?? GitCommit;

                      return (
                        <li
                          key={pi}
                          className="flex items-start gap-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base"
                        >
                          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-[var(--bg-tertiary)] text-[var(--accent-secondary)]">
                            <Icon size={14} />
                          </div>

                          <span>{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-7 border-t border-[var(--border)] pt-6">
                  <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                    TECHNOLOGIES USED
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          LEARNING THROUGH REAL-WORLD EXPERIENCE
        </div>
      </div>
    </section>
  );
}
