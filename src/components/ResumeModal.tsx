import { useEffect } from "react";
import {
  DownloadIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  WebsiteIcon,
} from "./Icons";
import {
  resumeCertifications,
  resumeEducation,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from "../data/resume";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

const linkIcons = {
  web: WebsiteIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm dark:bg-slate-950/80"
      role="dialog"
      aria-modal="true"
      aria-label="Full résumé"
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 lg:p-10">
        <div
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-teal-500/5"
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
          />

          {/* Action bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/85 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 sm:px-8">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                {resumeProfile.name}
              </p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">Résumé</p>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={resumeProfile.pdfUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300/30 bg-teal-400/10 px-3 py-2 text-xs font-semibold text-teal-300 transition hover:bg-teal-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 sm:px-4 sm:text-sm"
              >
                <DownloadIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close résumé"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-slate-100 sm:px-4 sm:text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative px-5 py-8 sm:px-8 sm:py-10">
            {/* Header */}
            <header className="border-b border-slate-200 pb-8 dark:border-white/10">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                {resumeProfile.name}
              </h1>
              <p className="mt-2 text-base font-medium text-teal-300">
                {resumeProfile.role}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                <a
                  href={`mailto:${resumeProfile.email}`}
                  className="transition hover:text-teal-300"
                >
                  {resumeProfile.email}
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                <a
                  href={`tel:${resumeProfile.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-teal-300"
                >
                  {resumeProfile.phone}
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {resumeProfile.links.map((link) => {
                  const Icon = linkIcons[link.type];
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-300/40 dark:hover:bg-teal-400/10 dark:hover:text-teal-300"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                      <ExternalLinkIcon className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </header>

            {/* Two-column body */}
            <div className="grid gap-10 pt-8 lg:grid-cols-3 lg:gap-8">
              {/* Main column */}
              <div className="space-y-10 lg:col-span-2">
                <Section title="Projects">
                  <div className="space-y-4">
                    {resumeProjects.map((project) => (
                      <article
                        key={project.title}
                        className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-teal-500/30 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-teal-300/30 dark:hover:bg-white/[0.06]"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="text-base font-semibold text-slate-100">
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1.5 transition hover:text-teal-300"
                            >
                              {project.title}
                              <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </a>
                          </h3>
                          <span className="font-mono text-xs text-slate-500">
                            {project.period}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {project.description}
                        </p>

                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <li key={tech}>
                              <span className="inline-block rounded-full bg-teal-400/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
                                {tech}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Section>

                <Section title="Education">
                  <div className="space-y-4">
                    {resumeEducation.map((edu) => (
                      <div
                        key={edu.degree}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="text-sm font-semibold text-slate-100">
                            {edu.degree}
                          </h3>
                          <span className="font-mono text-xs text-slate-500">
                            {edu.period}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4">
                          <p className="text-sm text-slate-400">{edu.institute}</p>
                          <span className="rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-teal-300">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>

              {/* Sidebar column */}
              <div className="space-y-10">
                <Section title="Technical Skills">
                  <div className="space-y-5">
                    {resumeSkills.map((group) => (
                      <div key={group.label}>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {group.label}
                        </h3>
                        <ul className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <li key={item}>
                                <span className="inline-block rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-teal-300/30 dark:hover:text-teal-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title="Certifications">
                  <ul className="space-y-3">
                    {resumeCertifications.map((cert) => (
                      <li
                        key={cert.title}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <p className="text-sm font-semibold text-slate-100">
                          {cert.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {cert.org} · <span className="font-mono">{cert.date}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
        {title}
        <span className="h-px flex-1 bg-gradient-to-r from-teal-300/30 to-transparent" />
      </h2>
      {children}
    </section>
  );
}
