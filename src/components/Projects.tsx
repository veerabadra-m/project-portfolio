
import { useState } from 'react';

import {
  Github,
  ExternalLink,
  Search,
  Check,
  ArrowUpRight,
} from 'lucide-react';

import { projects, projectFilters } from '@/data/portfolio';

function JobPortalMockup() {
  return (
    <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)]" />

        <span className="ml-2 font-mono text-[10px] text-[var(--text-muted)]">
          JobPortal — React
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-3">
        <Search size={13} className="text-[var(--text-muted)]" />
        <div className="h-2 flex-1 rounded-full bg-[var(--border)]" />
        <div className="h-5 w-14 bg-[var(--accent)]" />
      </div>

      <div className="space-y-3">
        {[
          'Frontend Developer',
          'MERN Stack Engineer',
          'Full-Stack Developer',
        ].map((title) => (
          <div
            key={title}
            className="flex items-center justify-between gap-2 border border-[var(--border)] bg-[var(--bg-secondary)] p-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-8 w-8 shrink-0 bg-[var(--accent)]/15" />

              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold text-[var(--text-primary)] sm:text-xs">
                  {title}
                </p>
                <p className="mt-1 text-[9px] text-[var(--text-muted)]">
                  Bangalore · Full-time
                </p>
              </div>
            </div>

            <span className="shrink-0 bg-[var(--accent)] px-2 py-1 text-[9px] font-bold text-[var(--accent-contrast)]">
              Apply
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GBFCMockup() {
  return (
    <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)]" />

        <span className="ml-2 font-mono text-[10px] text-[var(--text-muted)]">
          GBFC — Fitness Centre
        </span>
      </div>

      <div className="mb-4 bg-[#17180f] px-4 py-8 text-center sm:py-10">
        <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-[#d7ff00]">
          GROUND BORN FIGHT CLUB
        </p>

        <h3 className="text-xl font-black leading-tight text-[#f5f5ea] sm:text-3xl">
          STRENGTH.
          <br />
          DISCIPLINE.
          <br />
          FIGHT.
        </h3>

        <p className="mt-3 text-[10px] text-[#f5f5ea]/60">
          Train Hard. Fight Strong.
        </p>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2">
        {['BOXING', 'KICKBOXING', 'MMA'].map((program) => (
          <div
            key={program}
            className="border border-[var(--border)] bg-[var(--bg-tertiary)] p-3 text-center"
          >
            <div className="mx-auto mb-2 h-1 w-8 bg-[var(--accent-secondary)]" />

            <p className="text-[8px] font-bold text-[var(--text-secondary)] sm:text-[9px]">
              {program}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-3">
        <span className="text-[10px] text-[var(--text-muted)]">
          Training & Enquiries
        </span>

        <span className="text-[9px] font-bold text-[var(--accent-secondary)]">
          JOIN US →
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="reveal mb-14">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            04 / PROJECTS
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Selected{' '}
                <span className="text-[var(--accent-secondary)]">
                  Work.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                A collection of applications and projects built using modern web technologies.
              </p>
            </div>

            <div className="hidden items-center gap-3 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] md:flex">
              <span className="h-px w-12 bg-[var(--accent-secondary)]" />
              MY WORK
            </div>
          </div>
        </div>

        {/* Project filters */}
        <div className="reveal mb-12 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`border px-5 py-3 text-xs font-bold transition-all duration-300 sm:text-sm ${
                filter === f
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className="reveal group overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:shadow-2xl hover:shadow-[var(--accent)]/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Preview */}
              <div className="relative border-b border-[var(--border)] bg-[var(--bg-tertiary)] p-4 sm:p-6">
                <div className="absolute right-6 top-6 z-10 border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                  PROJECT / {String(index + 1).padStart(2, '0')}
                </div>

                {project.mockup === 'jobPortal' ? (
                  <JobPortalMockup />
                ) : project.mockup === 'gbfc' ? (
                  <GBFCMockup />
                ) : (
                  <div className="flex min-h-64 items-center justify-center bg-[var(--surface)]">
                    <p className="font-mono text-xs text-[var(--text-muted)]">
                      PROJECT PREVIEW
                    </p>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="p-6 sm:p-8">

                <div className="mb-4">
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--accent-secondary)]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-black leading-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-secondary)] sm:text-3xl">
                    {project.name}
                  </h3>
                </div>

                <p className="mb-6 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-7">
                  <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                    KEY FEATURES
                  </p>

                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[var(--accent-secondary)]"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6 border-t border-[var(--border)] pt-6">
                  <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                    BUILT WITH
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                {(project.badge || project.badges?.length > 0) && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.badge && (
                      <span className="border border-[var(--accent-secondary)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-[10px] font-bold text-[var(--accent-secondary)]">
                        {project.badge}
                      </span>
                    )}

                    {project.badges?.map((badge: string) => (
                      <span
                        key={badge}
                        className="border border-[var(--border)] px-3 py-1.5 text-[10px] font-semibold text-[var(--text-muted)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project links */}
                <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--border)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                  >
                    <Github size={17} />
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--accent-contrast)] transition-all hover:-translate-y-0.5 hover:opacity-80"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          IDEAS TURNED INTO REAL PROJECTS
        </div>
      </div>
    </section>
  );
}
