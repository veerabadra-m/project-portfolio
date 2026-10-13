import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-teal-600 tracking-widest mb-2">05 / EDUCATION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Education</h2>
        </div>

        <div className="reveal card-hover rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500/12 to-navy-500/8 text-teal-600 transition-all duration-300">
              <GraduationCap size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy-800">{education.degree}</h3>
              <p className="text-gradient-soft font-bold mt-1">{education.institution}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-charcoal-500">
                  <Award size={16} className="text-teal-600" />
                  CGPA: <span className="text-navy-800 font-semibold">{education.cgpa}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-500">
                  <Calendar size={16} className="text-teal-600" />
                  {education.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 text-center">
          <div className="inline-block">
            <h3 className="text-2xl font-bold text-navy-800 mb-2">Languages</h3>
            <p className="text-charcoal-400 text-sm mb-6">Languages I speak</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-5 py-2.5 rounded-xl card-hover text-sm font-medium text-charcoal-600 hover:text-navy-800"
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
