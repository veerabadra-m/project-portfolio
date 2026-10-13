import { Printer, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Briefcase, Code2, Award, Globe } from 'lucide-react';
import { personal, skillCategories, experience, projects, education, languages } from '@/data/portfolio';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-700">
      {/* Print toolbar */}
      <div className="no-print sticky top-0 z-50 bg-navy-800 text-cream-100 px-6 py-3 flex items-center justify-between shadow-lg">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('switch-view', { detail: 'portfolio' }))}
          className="flex items-center gap-2 text-sm font-medium hover:text-teal-300 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Portfolio
        </button>
        <h1 className="text-sm font-mono tracking-wide hidden sm:block">Printable Resume</h1>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-cream-50 text-sm font-medium transition-colors"
        >
          <Printer size={16} /> Print / Save PDF
        </button>
      </div>

      {/* Resume document */}
      <div className="max-w-4xl mx-auto my-8 mx-4 sm:mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none print:my-0">
        {/* Header */}
        <div className="bg-navy-800 text-cream-100 px-8 py-10 print:px-6 print:py-6">
          <h1 className="text-3xl font-extrabold tracking-tight">{personal.name}</h1>
          <p className="text-teal-300 text-lg font-medium mt-1">{personal.title}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-4 text-sm text-cream-200/80">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
              <Mail size={14} /> {personal.email}
            </a>
            <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
              <Phone size={14} /> {personal.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Github size={14} /> GitHub
            </span>
            <span className="flex items-center gap-1.5">
              <Linkedin size={14} /> LinkedIn
            </span>
          </div>
        </div>

        <div className="px-8 py-8 print:px-6 print:py-6 space-y-8">
          {/* Profile */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <Award size={18} className="text-teal-600" /> Profile
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed">{personal.about}</p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <Code2 size={18} className="text-teal-600" /> Technical Skills
            </h2>
            <div className="space-y-2.5">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <span className="text-sm font-semibold text-navy-700 sm:w-56 shrink-0">{cat.title}</span>
                  <span className="text-sm text-charcoal-600">{cat.skills.join(" · ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <Briefcase size={18} className="text-teal-600" /> Experience
            </h2>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-sm font-bold text-navy-800">{exp.role}</h3>
                <p className="text-sm text-teal-700 font-medium">{exp.company} — {exp.subtitle}</p>
                <ul className="mt-2 space-y-1">
                  {exp.points.map((point, pi) => (
                    <li key={pi} className="text-sm text-charcoal-600 flex gap-2 leading-relaxed">
                      <span className="text-teal-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <Globe size={18} className="text-teal-600" /> Selected Projects
            </h2>
            {projects.map((project) => (
              <div key={project.id} className="mb-4">
                <h3 className="text-sm font-bold text-navy-800">{project.name}</h3>
                <p className="text-sm text-charcoal-600 mt-0.5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded tag-navy">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <GraduationCap size={18} className="text-teal-600" /> Education
            </h2>
            <div>
              <h3 className="text-sm font-bold text-navy-800">{education.degree}</h3>
              <p className="text-sm text-teal-700 font-medium">{education.institution}</p>
              <div className="flex gap-4 mt-1 text-sm text-charcoal-500">
                <span>CGPA: <span className="font-semibold text-navy-700">{education.cgpa}</span></span>
                <span>{education.date}</span>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-navy-800 font-bold text-lg border-b-2 border-teal-500 pb-1.5 mb-3 flex items-center gap-2">
              <Globe size={18} className="text-teal-600" /> Languages
            </h2>
            <p className="text-sm text-charcoal-600">{languages.join(" · ")}</p>
          </section>
        </div>

        {/* Footer bar */}
        <div className="bg-navy-800/5 border-t border-navy-200/20 px-8 py-4 print:px-6 text-center">
          <p className="text-xs text-charcoal-400">{personal.name} — {personal.title} — {personal.email}</p>
        </div>
      </div>
    </div>
  );
}
