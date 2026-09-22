import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-blue-400 tracking-widest mb-2">05 / EDUCATION</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </div>

        <div className="reveal glass-hover glow-on-hover lift-on-hover rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-blue-400 group-hover:from-blue-500/25 group-hover:to-cyan-500/15 transition-all duration-300">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-100">{education.degree}</h3>
              <p className="text-gradient-soft font-bold mt-1">{education.institution}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Award size={16} className="text-blue-400" />
                  CGPA: <span className="text-slate-200 font-semibold">{education.cgpa}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={16} className="text-blue-400" />
                  {education.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 text-center">
          <div className="inline-block">
            <h3 className="text-2xl font-bold mb-2">Languages</h3>
            <p className="text-slate-500 text-sm mb-6">Languages I speak</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-5 py-2.5 rounded-xl glass-hover glow-on-hover lift-on-hover text-sm font-medium text-slate-300 hover:text-white"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
