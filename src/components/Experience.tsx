import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon } from "./Icons";
import { experience, profile } from "../data/portfolio";

type ExperienceProps = {
	onOpenResume: () => void;
};

export default function Experience({ onOpenResume }: ExperienceProps) {
	return (
		<section
			id="experience"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Work experience"
		>
			<div className="section-mobile-veil sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
					Experience
				</h2>
			</div>

			<div>
				<ol className="group/list">
					{experience.map((item) => (
						<li
							key={`${item.title}-${item.period}`}
							className="mb-12"
						>
							  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
								<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

								<header
									className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
									aria-label={item.period}
								>
									{item.period}
								</header>

								<div className="z-10 sm:col-span-6">
									<h3 className="font-medium leading-snug text-slate-200">
										<div>
											<a
												className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
												href={item.companyUrl}
												target={
													item.companyUrl.startsWith(
														"http",
													)
														? "_blank"
														: undefined
												}
												rel={
													item.companyUrl.startsWith(
														"http",
													)
														? "noreferrer noopener"
														: undefined
												}
												aria-label={`${item.title} at ${item.company}`}
											>
												<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
												<span>
													{item.title} ·{" "}
													<span className="inline-block">
														{item.company}
														<ExternalLinkIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
													</span>
												</span>
											</a>
										</div>
									</h3>

									<p className="mt-2 text-sm leading-normal text-slate-400">
										{item.description}
									</p>

									<ul
										className="mt-2 flex flex-wrap"
										aria-label="Technologies used"
									>
										{item.tech.map((tech) => (
											<li
												key={tech}
												className="mr-1.5 mt-2"
											>
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
				</ol>

				<div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
					<button
						type="button"
						onClick={onOpenResume}
						className="group inline-flex items-center font-semibold leading-tight text-slate-200"
						aria-label="View full résumé"
					>
						<span>
							<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
								View Full Résumé
							</span>
							<span className="whitespace-nowrap">
								<ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
							</span>
						</span>
					</button>

					<a
						className="group inline-flex items-center text-sm font-medium leading-tight text-slate-500 transition hover:text-teal-300 focus-visible:text-teal-300"
						href={profile.resumeUrl}
						download="Umesh_Kumar_Shah_Resume.pdf"
						aria-label="Download résumé PDF"
					>
						<DownloadIcon className="mr-1.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" />
						<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
							Download Résumé
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
