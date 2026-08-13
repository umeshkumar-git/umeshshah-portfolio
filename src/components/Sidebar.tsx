import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  WebsiteIcon,
} from "./Icons";
import { navItems, profile } from "../data/portfolio";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
  Website: WebsiteIcon,
} as const;

type SidebarProps = {
  activeId: string;
};

export default function Sidebar({ activeId }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
            <a href="/" className="hover:text-teal-600 dark:hover:text-slate-100">
              {profile.name}
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 dark:text-slate-200 sm:text-xl">
            {profile.title}
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-600 dark:text-slate-400">
            {profile.blurb}
          </p>
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    className="group flex items-center py-3"
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-900 dark:bg-slate-200"
                          : "w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-900 group-focus-visible:w-16 group-focus-visible:bg-slate-900 dark:bg-slate-600 dark:group-hover:bg-slate-200 dark:group-focus-visible:bg-slate-200"
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-slate-900 dark:text-slate-200"
                          : "text-slate-500 group-hover:text-slate-900 group-focus-visible:text-slate-900 dark:text-slate-500 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {profile.socials.map((social) => {
          const Icon = iconMap[social.name as keyof typeof iconMap] ?? WebsiteIcon;
          return (
            <li key={social.name} className="text-xs">
              <a
                className="block text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-slate-200"
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={social.label}
              >
                <span className="sr-only">{social.label}</span>
                <Icon className="h-6 w-6" />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
