
import {
  Code2,
  Layers,
  Database,
  Globe,
  GitBranch,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

import { skillCategories } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Globe,
  GitBranch,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="reveal mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            02 / SKILLS
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Technical{' '}
                <span className="text-[var(--accent-secondary)]">
                  Skills.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                Technologies and tools I use to build modern web applications.
              </p>
            </div>

            <div className="hidden items-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] md:flex">
              <span className="h-px w-12 bg-[var(--accent-secondary)]" />
              MY TOOLKIT
            </div>
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2;

            return (
              <div
                key={cat.title}
                className="reveal group relative overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:shadow-xl hover:shadow-[var(--accent)]/5 sm:p-7"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Card decoration */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[var(--accent)]/[0.05] blur-2xl transition-all duration-300 group-hover:bg-[var(--accent)]/[0.12]" />

                <div className="relative z-10">

                  {/* Category heading */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-[var(--accent-secondary)]/30 bg-[var(--accent)]/10 text-[var(--accent-secondary)] transition-all duration-300 group-hover:bg-[var(--accent)]/20">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-base font-extrabold uppercase tracking-wide text-[var(--text-primary)]">
                          {cat.title}
                        </h3>

                        <p className="mt-1 font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
                          SKILL CATEGORY
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent-secondary)]"
                    />
                  </div>

                  {/* Individual skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent-secondary)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom label */}
                  <div className="mt-7 border-t border-[var(--border)] pt-4">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)]">
                      {String(cat.skills.length).padStart(2, '0')} TECHNOLOGIES
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          ALWAYS LEARNING · ALWAYS BUILDING
        </div>
      </div>
    </section>
  );
}
