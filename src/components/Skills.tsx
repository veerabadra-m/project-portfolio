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
  C: "text-sky-400",
  "C++": "text-blue-400",
  Python: "text-yellow-400",
  Java: "text-orange-400",
  JavaScript: "text-yellow-300",
  PHP: "text-indigo-300",
  SQL: "text-cyan-400",
  React: "text-sky-400",
  "Next.js": "text-slate-200",
  "Node.js": "text-green-400",
  Express: "text-slate-300",
  Django: "text-emerald-400",
  MySQL: "text-blue-300",
  MongoDB: "text-green-300",
  HTML: "text-orange-400",
  CSS: "text-sky-300",
  Git: "text-orange-300",
  GitHub: "text-slate-200",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0f0f17]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-blue-400 tracking-widest mb-2">02 / SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <div
                key={cat.title}
                className="reveal glass-hover glow-on-hover lift-on-hover rounded-2xl p-6 group relative overflow-hidden"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-blue-400 group-hover:from-blue-500/25 group-hover:to-cyan-500/15 group-hover:text-cyan-400 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-200">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/5 hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/5 hover:shadow-md hover:shadow-blue-500/10 transition-all cursor-default transform hover:-translate-y-0.5"
                    >
                      <span className={techColors[skill] ?? "text-slate-300"}>{skill}</span>
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
