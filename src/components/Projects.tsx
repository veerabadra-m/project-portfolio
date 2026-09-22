import { useState } from 'react';
import { Github, ExternalLink, Search, ShoppingCart, Check } from 'lucide-react';
import { projects, projectFilters } from '@/data/portfolio';

function JobPortalMockup() {
  return (
    <div className="rounded-xl overflow-hidden glass-strong p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[10px] text-slate-500 font-mono">JobPortal — React</span>
      </div>
      <div className="flex items-center gap-2 mb-3 rounded-lg bg-white/5 px-3 py-2">
        <Search size={12} className="text-slate-500" />
        <div className="h-2 flex-1 rounded bg-white/5" />
        <div className="h-4 w-12 rounded bg-blue-500/40" />
      </div>
      <div className="space-y-2">
        {["Frontend Developer", "MERN Stack Engineer", "Full-Stack Developer"].map((title, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-blue-500/30" />
              <div>
                <div className="text-[10px] text-slate-300 font-medium">{title}</div>
                <div className="text-[8px] text-slate-500">Bangalore · Full-time</div>
              </div>
            </div>
            <div className="h-4 w-10 rounded bg-blue-500/30 text-[7px] text-blue-200 flex items-center justify-center font-medium">Apply</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="rounded-xl overflow-hidden glass-strong p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[10px] text-slate-500 font-mono">ShopEasy — PHP</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="h-12 rounded-md bg-gradient-to-br from-blue-500/20 to-slate-700/30 mb-1.5" />
            <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-6 rounded bg-blue-500/40" />
              <ShoppingCart size={10} className="text-blue-400" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
        <div className="text-[9px] text-slate-400">Cart · 3 items</div>
        <div className="flex items-center gap-1.5">
          <div className="text-[9px] text-slate-300">$249.97</div>
          <div className="h-4 w-12 rounded bg-blue-500/40 text-[7px] text-blue-200 flex items-center justify-center font-medium">Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-blue-400 tracking-widest mb-2">04 / PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="reveal flex justify-center gap-2 mb-12">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-accent text-white glow-accent"
                  : "glass-hover text-slate-400 hover:text-white glow-on-hover"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="reveal group glass-hover glow-on-hover lift-on-hover rounded-2xl overflow-hidden relative"
            >
              <div className="p-5 border-b border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.mockup === "jobPortal" ? <JobPortalMockup /> : <EcommerceMockup />}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-gradient-soft font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-gradient transition-all">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-400">
                      <Check size={14} className="text-green-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/5 hover:border-blue-400/25 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/5 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/15 to-cyan-500/10 text-blue-300 border border-blue-500/20">
                      {project.badge}
                    </span>
                  )}
                  {project.badges?.map((b: string) => (
                    <span key={b} className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/15 to-cyan-500/10 text-blue-300 border border-blue-500/20">
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass-hover glow-on-hover text-sm font-medium transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/15 to-cyan-500/10 text-blue-400 border border-blue-500/25 hover:from-blue-500/25 hover:to-cyan-500/15 hover:glow-accent text-sm font-medium transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
