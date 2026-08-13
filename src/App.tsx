import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import MouseGlow from "./components/MouseGlow";
import Projects from "./components/Projects";
import ResumeModal from "./components/ResumeModal";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import { navItems } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";

export default function App() {
	const activeId = useActiveSection(navItems.map((item) => item.id));
	const [resumeOpen, setResumeOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="bg-slate-100 text-slate-600 antialiased transition-colors duration-300 selection:bg-teal-300 selection:text-teal-900 dark:bg-slate-900 dark:text-slate-400">
			{theme === "dark" && <MouseGlow />}

			<div className="fixed right-4 top-4 z-40 md:right-6 md:top-6">
				<ThemeToggle theme={theme} onToggle={toggleTheme} />
			</div>

			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
				<a
					href="#content"
					className="absolute left-0 top-0 z-50 -translate-x-[150%] rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold text-white transition focus:translate-x-0"
				>
					Skip to Content
				</a>

				<div className="lg:flex lg:justify-between lg:gap-4">
					<Sidebar activeId={activeId} />

					<main id="content" className="pt-24 lg:w-[52%] lg:py-24">
						<About />
						<Experience onOpenResume={() => setResumeOpen(true)} />
						<Projects />
						<Education />
						<Contact />

						<footer className="max-w-md text-sm text-slate-500 dark:text-slate-500 sm:pb-0">
							<p>
								Built with{" "}
								<a
									href="https://react.dev/"
									className="font-medium text-slate-700 hover:text-teal-600 focus-visible:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
									target="_blank"
									rel="noreferrer noopener"
								>
									React
								</a>
								,{" "}
								<a
									href="https://vitejs.dev/"
									className="font-medium text-slate-700 hover:text-teal-600 focus-visible:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
									target="_blank"
									rel="noreferrer noopener"
								>
									Vite
								</a>
								, and{" "}
								<a
									href="https://tailwindcss.com/"
									className="font-medium text-slate-700 hover:text-teal-600 focus-visible:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
									target="_blank"
									rel="noreferrer noopener"
								>
									Tailwind CSS
								</a>
								. Coded in a modern developer workflow and
								deployed for{" "}
								<span className="font-medium text-slate-700 dark:text-slate-400">
									umeshshah.in
								</span>
								.
							</p>
						</footer>
					</main>
				</div>
			</div>

			<ResumeModal
				open={resumeOpen}
				onClose={() => setResumeOpen(false)}
			/>
		</div>
	);
}
