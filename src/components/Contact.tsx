import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, AlertCircle } from 'lucide-react';
import { personal } from '@/data/portfolio';

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location, href: undefined as string | undefined },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-cream-200/50 bg-gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-mono text-teal-600 tracking-widest mb-2">06 / CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800">Let's Build Something Together</h2>
          <p className="text-charcoal-500 mt-4 max-w-2xl mx-auto">
            I'm looking for an opportunity to apply my technical knowledge, gain industry experience, and grow as a software professional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="card-hover rounded-xl p-5 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal-500/6 rounded-full blur-2xl" />
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/12 to-navy-500/8 text-teal-600 transition-all">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium text-charcoal-700">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} className="block">{content}</a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <div className="card rounded-xl p-5">
              <p className="text-xs text-charcoal-400 mb-3">Find me on</p>
              <div className="flex gap-3">
                <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-cream-200/60 hover:bg-gradient-to-br hover:from-teal-500/12 hover:to-navy-500/8 hover:text-teal-600 hover:glow-accent text-charcoal-500 transition-all">
                  <Github size={20} />
                </a>
                <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-cream-200/60 hover:bg-gradient-to-br hover:from-teal-500/12 hover:to-navy-500/8 hover:text-teal-600 hover:glow-accent text-charcoal-500 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="reveal card rounded-2xl p-6 md:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-charcoal-600 mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-cream-100 border text-sm text-charcoal-800 placeholder:text-charcoal-300 outline-none transition-all ${
                  errors.name ? "border-red-400/50" : "border-navy-200/30 focus:border-teal-400/50 focus:shadow-md focus:shadow-teal-500/10 focus:bg-cream-50"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-600 mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-cream-100 border text-sm text-charcoal-800 placeholder:text-charcoal-300 outline-none transition-all ${
                  errors.email ? "border-red-400/50" : "border-navy-200/30 focus:border-teal-400/50 focus:shadow-md focus:shadow-teal-500/10 focus:bg-cream-50"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-600 mb-1.5">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-cream-100 border text-sm text-charcoal-800 placeholder:text-charcoal-300 outline-none transition-all ${
                  errors.subject ? "border-red-400/50" : "border-navy-200/30 focus:border-teal-400/50 focus:shadow-md focus:shadow-teal-500/10 focus:bg-cream-50"
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal-600 mb-1.5">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-cream-100 border text-sm text-charcoal-800 placeholder:text-charcoal-300 outline-none transition-all resize-none ${
                  errors.message ? "border-red-400/50" : "border-navy-200/30 focus:border-teal-400/50 focus:shadow-md focus:shadow-teal-500/10 focus:bg-cream-50"
                }`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-accent bg-gradient-accent-hover text-cream-100 font-medium text-sm transition-all glow-accent hover:glow-accent-strong flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>

            {submitted && (
              <p className="text-sm text-teal-600 text-center">
                Thank you! Your message has been validated successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
