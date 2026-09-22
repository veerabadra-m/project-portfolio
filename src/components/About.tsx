import { GraduationCap, Code2, Globe, Puzzle } from 'lucide-react';
import { personal } from '@/data/portfolio';

const tagIcons = [GraduationCap, Code2, Globe, Puzzle];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-blue-400 tracking-widest mb-2">01 / ABOUT</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 reveal">
            <p className="text-slate-300 text-lg leading-relaxed">
              {personal.about}
            </p>
          </div>

          <div className="lg:col-span-2 reveal grid grid-cols-2 gap-3">
            {personal.aboutTags.map((tag, i) => {
              const Icon = tagIcons[i] ?? Code2;
              return (
                <div
                  key={tag}
                  className="glass-hover glow-on-hover lift-on-hover rounded-xl p-4 group relative overflow-hidden"
                >
                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon
                    size={22}
                    className="text-blue-400 mb-3 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 relative z-10"
                  />
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors relative z-10">{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
