import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from "./Icons";
import { profile, projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="section-mobile-veil sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {featured.map((project) => (
            <li key={project.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.live ?? project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <ExternalLinkIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>

                  <ProjectLinks
                    title={project.title}
                    github={project.github}
                    live={project.live}
                  />

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative sm:order-1 sm:col-span-2">
                  <div
                    className="absolute inset-0 -z-10 rounded bg-teal-400/10 blur-2xl"
                    aria-hidden="true"
                  />
                  <img
                    alt={`${project.title} logo`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:translate-y-1"
                    src={project.image}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {more.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
              More projects
            </h3>
            <ul className="mt-6 group/list">
              {more.map((project) => (
                <li key={project.title} className="mb-8">
                  <div className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                    <div className="relative z-10 sm:order-1 sm:col-span-1">
                      <div
                        className="absolute inset-0 -z-10 rounded-lg bg-teal-400/10 blur-xl"
                        aria-hidden="true"
                      />
                      <img
                        alt={`${project.title} logo`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-square w-14 rounded-lg border-2 border-slate-200/10 bg-slate-950 object-cover transition group-hover:border-slate-200/30"
                        src={project.image}
                      />
                    </div>

                    <div className="z-10 sm:order-2 sm:col-span-5">
                      <h4>
                        <a
                          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                          href={project.live ?? project.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>
                            {project.title}
                            <span className="inline-block">
                              <ExternalLinkIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </span>
                        </a>
                      </h4>
                      <p className="mt-2 text-sm leading-normal text-slate-400">
                        {project.description}
                      </p>

                      <ProjectLinks
                        title={project.title}
                        github={project.github}
                        live={project.live}
                      />

                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {project.tech.map((tech) => (
                          <li key={tech} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12">
          <a
            className="group inline-flex items-center font-medium leading-tight text-slate-200"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Project Archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project Archive
              </span>
              <span className="whitespace-nowrap">
                <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectLinks({
  title,
  github,
  live,
}: {
  title: string;
  github: string;
  live: string | null;
}) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <a
        href={github}
        target="_blank"
        rel="noreferrer noopener"
        className="relative z-10 text-slate-400 transition hover:text-slate-200"
        aria-label={`${title} source code`}
      >
        <GitHubIcon className="h-5 w-5" />
      </a>

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer noopener"
          className="relative z-10 text-slate-400 transition hover:text-slate-200"
          aria-label={`${title} live deployment`}
        >
          <ExternalLinkIcon className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
