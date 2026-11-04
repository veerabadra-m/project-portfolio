
import { useState, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';

import { personal } from '@/data/portfolio';

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};

    if (!form.name.trim()) {
      e.name = 'Name is required';
    }

    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    }

    if (!form.subject.trim()) {
      e.subject = 'Subject is required';
    }

    if (!form.message.trim()) {
      e.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (validate()) {
      setSubmitted(true);

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((previous) => ({
        ...previous,
        [key]: undefined,
      }));
    }

    setSubmitted(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: personal.location,
      href: undefined as string | undefined,
    },
  ];

  const inputClass = (hasError: boolean) =>
    `w-full border bg-[var(--bg-tertiary)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] ${
      hasError
        ? 'border-red-500 focus:border-red-500'
        : 'border-[var(--border)] focus:border-[var(--accent-secondary)]'
    }`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-5 py-24 text-[var(--text-primary)] transition-colors duration-300 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[var(--accent)]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="reveal mb-16">
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-[var(--accent-secondary)] sm:text-sm">
            06 / CONTACT
          </p>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Let's Build
              <br />
              Something
              <br />
              <span className="text-[var(--accent-secondary)]">
                Together.
              </span>
            </h2>

            <div className="lg:pb-2">
              <p className="max-w-lg text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                I'm looking for an opportunity to apply my technical
                knowledge, gain industry experience, and grow as a
                software professional.
              </p>

              <p className="mt-6 flex items-center gap-3 font-mono text-xs tracking-widest text-[var(--text-muted)]">
                <span className="h-px w-10 bg-[var(--accent-secondary)]" />
                OPEN TO OPPORTUNITIES
              </p>
            </div>
          </div>
        </div>

        {/* Contact layout */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact details */}
          <div className="reveal space-y-4">

            <div className="mb-7">
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-secondary)]">
                GET IN TOUCH
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Contact Information
              </h3>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              const content = (
                <div className="group flex items-center gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:border-[var(--accent-secondary)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--accent-secondary)]/30 bg-[var(--accent)]/10 text-[var(--accent-secondary)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)]">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                      {info.label}
                    </p>

                    <p className="break-words text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                      {info.value}
                    </p>
                  </div>

                  {info.href && (
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-secondary)]"
                    />
                  )}

                  <span className="sr-only">
                    Contact detail {index + 1}
                  </span>
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            {/* Social links */}
            <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="mb-5 font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
                FIND ME ONLINE
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg-tertiary)] px-5 py-3 text-sm font-semibold transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                >
                  <Github size={19} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="flex items-center gap-3 border border-[var(--border)] bg-[var(--bg-tertiary)] px-5 py-3 text-sm font-semibold transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
                >
                  <Linkedin size={19} />
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="reveal border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent-secondary)]">
                SEND A MESSAGE
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Let's Talk<span className="text-[var(--accent-secondary)]">.</span>
              </h3>

              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Fill in the details below to get in touch.
              </p>
            </div>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-semibold tracking-wide text-[var(--text-secondary)]"
              >
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={inputClass(!!errors.name)}
                placeholder="Enter your name"
                aria-invalid={!!errors.name}
              />

              {errors.name && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle size={13} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-semibold tracking-wide text-[var(--text-secondary)]"
              >
                EMAIL ADDRESS
              </label>

              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={inputClass(!!errors.email)}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />

              {errors.email && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle size={13} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-semibold tracking-wide text-[var(--text-secondary)]"
              >
                SUBJECT
              </label>

              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                className={inputClass(!!errors.subject)}
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
              />

              {errors.subject && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle size={13} />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-7">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold tracking-wide text-[var(--text-secondary)]"
              >
                YOUR MESSAGE
              </label>

              <textarea
                id="contact-message"
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={`${inputClass(!!errors.message)} resize-none`}
                placeholder="Tell me about your opportunity or project..."
                aria-invalid={!!errors.message}
              />

              {errors.message && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
                  <AlertCircle size={13} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-widest text-[var(--accent-contrast)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/20"
            >
              <Send size={17} />
              Validate Message
              <ArrowUpRight size={17} />
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-5 border border-[var(--accent-secondary)]/30 bg-[var(--accent)]/10 p-4 text-center text-sm text-[var(--text-primary)]"
              >
                Thank you! Your details have been validated successfully.
              </p>
            )}
          </form>
        </div>

        {/* Bottom text */}
        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
          <span className="h-px w-8 bg-[var(--accent-secondary)]" />
          HAVE A PROJECT OR OPPORTUNITY? LET'S CONNECT.
        </div>
      </div>
    </section>
  );
}
