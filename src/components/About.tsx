
import {
  GraduationCap,
  Code2,
  Globe,
  Puzzle,
  ArrowUpRight,
} from 'lucide-react';

import { personal } from '@/data/portfolio';

const tagIcons = [GraduationCap, Code2, Globe, Puzzle];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-secondary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[var(--accent)]/[0.07] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="reveal mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            01 / ABOUT
          </p>

          <h2 className="">
            About{' '}
            <span className="text-[var(--accent-secondary)]">
              Me.
            </span>
          </h2>
        </div>

        {/* About content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-5 lg:gap-12">

          {/* About description */}
          <div className="reveal lg:col-span-3">
            <div className="relative h-full border border-[var(--border)] bg-[var(--surface)] p-7 shadow-sm transition-colors duration-300 sm:p-10">

              <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg sm:leading-9">
                {personal.about}
              </p>

              <div className="mt-9 flex items-start gap-3 border-t border-[var(--border)] pt-7 text-sm font-semibold leading-6 text-[var(--accent-secondary)]">
                <Code2 size={19} className="mt-1 shrink-0" />

                <span>
                  Passionate about building useful web applications.
                </span>
              </div>
            </div>
          </div>

          {/* Profile highlights */}
          <div className="reveal lg:col-span-2">
            <div className="grid h-full grid-cols-2 gap-4">

              {personal.aboutTags.map((tag, index) => {
                const Icon = tagIcons[index] ?? Code2;

                return (
                  <div
                    key={tag}
                    className="group flex min-h-40 flex-col justify-between border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-secondary)] hover:shadow-lg hover:shadow-[var(--accent)]/5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-[var(--border)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--accent-secondary)] group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent-secondary)]">
                      <Icon size={23} />
                    </div>

                    <div className="mt-7 flex items-end justify-between gap-2">
                      <p className="text-sm font-bold leading-5 text-[var(--text-primary)] sm:text-base">
                        {tag}
                      </p>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent-secondary)]"
                      />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          BUILT WITH CURIOSITY & CONTINUOUS LEARNING
        </div>
      </div>
    </section>
  );
}
