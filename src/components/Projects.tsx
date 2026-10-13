import { useState } from 'react';
import { Github, ExternalLink, Search, ShoppingCart, Check } from 'lucide-react';
import { projects, projectFilters } from '@/data/portfolio';

function JobPortalMockup() {
  return (
    <div className="rounded-xl overflow-hidden card p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[10px] text-charcoal-400 font-mono">JobPortal — React</span>
      </div>
      <div className="flex items-center gap-2 mb-3 rounded-lg bg-cream-200/60 px-3 py-2">
        <Search size={12} className="text-charcoal-400" />
        <div className="h-2 flex-1 rounded bg-navy-200/30" />
        <div className="h-4 w-12 rounded bg-teal-500/40" />
      </div>
      <div className="space-y-2">
        {["Frontend Developer", "MERN Stack Engineer", "Full-Stack Developer"].map((title, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-cream-200/60 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-navy-500/20" />
              <div>
                <div className="text-[10px] text-charcoal-600 font-medium">{title}</div>
                <div className="text-[8px] text-charcoal-400">Bangalore · Full-time</div>
              </div>
            </div>
            <div className="h-4 w-10 rounded bg-teal-500/40 text-[7px] text-cream-100 flex items-center justify-center font-medium">Apply</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="rounded-xl overflow-hidden card p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-[10px] text-charcoal-400 font-mono">ShopEasy — PHP</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-cream-200/60 p-2">
            <div className="h-12 rounded-md bg-gradient-to-br from-teal-500/15 to-navy-500/10 mb-1.5" />
            <div className="h-1.5 w-3/4 rounded bg-navy-200/30 mb-1" />
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-6 rounded bg-teal-500/40" />
              <ShoppingCart size={10} className="text-teal-600" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-cream-200/60 px-3 py-2">
        <div className="text-[9px] text-charcoal-500">Cart · 3 items</div>
        <div className="flex items-center gap-1.5">
          <div className="text-[9px] text-charcoal-600">$249.97</div>
          <div className="h-4 w-12 rounded bg-teal-500/40 text-[7px] text-cream-100 flex items-center justify-center font-medium">Checkout</div>
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
    <section id="projects" className="relative py-24 px-6 bg-cream-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-teal-600 tracking-widest mb-2">04 / PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Featured Projects</h2>
        </div>

        <div className="reveal flex justify-center gap-2 mb-12">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-accent text-cream-100 glow-accent"
                  : "card-hover text-charcoal-500 hover:text-navy-800"
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
              className="reveal group card-hover rounded-2xl overflow-hidden relative"
            >
              <div className="p-5 border-b border-navy-200/20 bg-gradient-to-br from-cream-100/50 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-navy-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.mockup === "jobPortal" ? <JobPortalMockup /> : <EcommerceMockup />}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-gradient-soft font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold text-navy-800 mt-1 group-hover:text-gradient transition-all">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-charcoal-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-charcoal-500">
                      <Check size={14} className="text-teal-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium tag-navy hover:border-teal-400/30 hover:bg-teal-500/5 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium tag-pill">
                      {project.badge}
                    </span>
                  )}
                  {project.badges?.map((b: string) => (
                    <span key={b} className="px-3 py-1 rounded-full text-xs font-medium tag-pill">
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg card-hover text-charcoal-600 text-sm font-medium transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/12 to-navy-500/8 text-teal-600 border border-teal-500/20 hover:from-teal-500/20 hover:to-navy-500/12 hover:glow-accent text-sm font-medium transition-all"
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
