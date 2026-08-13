import { useState, type FormEvent } from "react";
import { ArrowRightIcon, EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { profile } from "../data/portfolio";

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: EmailIcon,
    label: "Email",
    value: "me@umeshshah.in",
    href: "mailto:me@umeshshah.in",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/umeshkumar-git",
    href: "https://github.com/umeshkumar-git",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Umesh Kumar Shah",
    href: "https://www.linkedin.com/in/umesh-kumar-shah-1375652ba/",
  },
  {
    icon: LocationIcon,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a short message.";
    return next;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "w-full rounded-md border border-slate-300 bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder-slate-500 outline-none transition focus:border-teal-500/60 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-teal-300/50";

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="section-mobile-veil sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Contact
        </h2>
      </div>

      <div>
        <p className="mb-8 leading-relaxed text-slate-400">
          Reach out for full-stack development opportunities, product engineering roles,
          internships, collaborations, or project discussions.
        </p>

        {/* Direct links — same hover-row pattern as Experience / Education */}
        <ul className="group/list">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            const isLink = Boolean(item.href);

            const inner = (
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {item.label}
                </header>

                <div className="z-10 sm:col-span-6">
                  <p
                    className={`text-base font-medium leading-tight text-slate-200 ${
                      isLink ? "group-hover:text-teal-300" : ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={item.label} className="mb-8">
                {isLink ? (
                  <a
                    href={item.href as string}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href?.startsWith("http") ? "noreferrer noopener" : undefined
                    }
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>

        {/* Message form */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
            Send a message
          </h3>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className={fieldClass}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className={fieldClass}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => update("subject")(e.target.value)}
                aria-invalid={Boolean(errors.subject)}
                className={fieldClass}
              />
              {errors.subject && <FieldError>{errors.subject}</FieldError>}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about the opportunity or project"
                value={form.message}
                onChange={(e) => update("message")(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                className={`${fieldClass} resize-y`}
              />
              {errors.message && <FieldError>{errors.message}</FieldError>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex items-center font-semibold leading-tight text-slate-200"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Send via Email
                  </span>
                  <span className="whitespace-nowrap">
                    <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs font-medium text-rose-400">{children}</p>;
}
