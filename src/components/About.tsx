import { aboutParagraphs } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="section-mobile-veil sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div>
        {aboutParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`leading-relaxed text-slate-600 dark:text-slate-400 ${index > 0 ? "mt-4" : ""}`}
          >
            {paragraph.split(/(JavaScript|TypeScript|React\.js|Next\.js|Node\.js|MongoDB|MySQL)/g).map((part, i) =>
              [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "MySQL",
              ].includes(part) ? (
                <span key={i} className="font-semibold text-slate-900 dark:text-slate-200">
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              ),
            )}
          </p>
        ))}

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Featured products", value: "5" },
            { label: "Engineering CGPA", value: "8.18" },
            { label: "Core technologies", value: "10+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-200 bg-white/60 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-900/40"
            >
              <div className="font-semibold text-teal-600 dark:text-teal-300">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
