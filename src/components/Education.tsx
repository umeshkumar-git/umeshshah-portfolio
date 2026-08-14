import { certifications, education, skills } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education and credentials"
    >
      <div className="section-mobile-veil sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Education
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {education.map((item) => (
            <li key={item.school} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {item.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <span className="text-base font-medium leading-tight text-slate-200 group-hover:text-teal-300">
                      {item.school}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {item.detail}
                  </p>
                  <div className="mt-3">
                    <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
            Credentials
          </h3>
          <ul className="mt-6 group/list">
            {certifications.map((cert) => (
              <li key={cert.title} className="mb-8">
                <div className="group relative grid gap-2 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                  <header className="z-10 mb-1 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {cert.type}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h4 className="text-base font-medium leading-tight text-slate-200 group-hover:text-teal-300">
                      {cert.title}
                      <span className="text-slate-400"> · {cert.org}</span>
                    </h4>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
            Skills
          </h3>
          <div className="mt-6 space-y-4">
            {(
              [
                ["Frontend", skills.frontend],
                ["Backend", skills.backend],
                ["Database", skills.database],
                ["Tools & Languages", skills.tools],
              ] as const
            ).map(([label, list]) => (
              <div key={label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <ul className="flex flex-wrap" aria-label={label}>
                  {list.map((item) => (
                    <li key={item} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
