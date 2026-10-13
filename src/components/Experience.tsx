import { Briefcase, GitCommit, Server, Layers, Database, GitBranch } from 'lucide-react';
import { experience } from '@/data/portfolio';

const pointIcons = [Layers, Server, Server, Database, GitBranch, GitCommit];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-cream-100">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-teal-600 tracking-widest mb-2">03 / EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-navy-500/20 to-transparent md:-translate-x-px" />

          {experience.map((exp, i) => (
            <div key={i} className="relative reveal pb-12 last:pb-0">
              <div className="absolute left-4 md:left-1/2 top-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-teal-500 to-navy-600 ring-4 ring-teal-500/15 md:-translate-x-1.75 shadow-lg shadow-teal-500/20 animate-pulse-glow" />

              <div className="md:grid md:grid-cols-2 md:gap-12">
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="card-hover rounded-2xl p-6 text-left relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/6 rounded-full blur-3xl" />
                    <div className="flex items-center gap-2 mb-2 relative z-10">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-teal-500/12 to-navy-500/8">
                        <Briefcase size={16} className="text-teal-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-navy-800">{exp.role}</h3>
                    </div>
                    <p className="text-gradient-soft font-bold text-sm mb-1 relative z-10">{exp.company}</p>
                    <p className="text-charcoal-400 text-xs mb-4">{exp.subtitle}</p>

                    <ul className="space-y-2.5 mb-5">
                      {exp.points.map((point, pi) => {
                        const Icon = pointIcons[pi] ?? GitCommit;
                        return (
                          <li key={pi} className="flex gap-2.5 text-sm text-charcoal-500 leading-relaxed">
                            <Icon size={14} className="mt-1 shrink-0 text-charcoal-300" />
                            <span>{point}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium tag-pill hover:border-teal-400/40 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
