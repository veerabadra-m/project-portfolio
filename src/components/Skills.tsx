import { Code2, Layers, Database, Globe, GitBranch, type LucideIcon } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const icons: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Database,
  Globe,
  GitBranch,
};

const techColors: Record<string, string> = {
  C: "text-sky-600",
  "C++": "text-blue-600",
  Python: "text-yellow-600",
  Java: "text-orange-600",
  JavaScript: "text-amber-600",
  PHP: "text-indigo-600",
  SQL: "text-cyan-600",
  React: "text-sky-600",
  "Next.js": "text-charcoal-700",
  "Node.js": "text-green-600",
  Express: "text-charcoal-600",
  Django: "text-emerald-600",
  MySQL: "text-blue-600",
  MongoDB: "text-green-600",
  HTML: "text-orange-600",
  CSS: "text-sky-600",
  Git: "text-orange-600",
  GitHub: "text-charcoal-700",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-cream-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-teal-600 tracking-widest mb-2">02 / SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <div
                key={cat.title}
                className="reveal card-hover rounded-2xl p-6 group relative overflow-hidden"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-teal-500/12 to-navy-500/8 text-teal-600 group-hover:from-teal-500/20 group-hover:to-navy-500/12 group-hover:text-navy-700 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-navy-800">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-cream-100 border border-navy-200/30 hover:border-teal-400/40 hover:bg-teal-500/5 hover:shadow-md hover:shadow-teal-500/5 transition-all cursor-default transform hover:-translate-y-0.5"
                    >
                      <span className={techColors[skill] ?? "text-charcoal-600"}>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
