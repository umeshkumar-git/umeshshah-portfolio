import { useEffect } from "react";
import { DownloadIcon } from "./Icons";
import { resumeProfile } from "../data/resume";

type ResumeModalProps = {
	open: boolean;
	onClose: () => void;
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

					{/* Action bar (kept simple and professional) */}
					<div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/85 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 sm:px-8">
						<div className="min-w-0">
							<p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
								{resumeProfile.name}
							</p>
							<p className="truncate text-xs text-slate-500 dark:text-slate-400">
								Résumé
							</p>
						</div>

						<div className="flex shrink-0 items-center gap-2 sm:gap-3">
							<a
								href={resumeProfile.pdfUrl}
								download
								className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300/30 bg-teal-400/10 px-3 py-2 text-xs font-semibold text-teal-300 transition hover:bg-teal-400/20 focus-visible:outline-2 focus-visible:outline-teal-300 sm:px-4 sm:text-sm"
							>
								<DownloadIcon className="h-4 w-4" />
								<span className="hidden sm:inline">
									Download PDF
								</span>
								<span className="sm:hidden">PDF</span>
							</a>

							<button
								type="button"
								onClick={onClose}
								aria-label="Close résumé"
								className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-slate-100 sm:px-4 sm:text-sm"
							>
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="h-4 w-4"
									aria-hidden="true"
								>
									<path
										d="M18 6L6 18M6 6l12 12"
										strokeLinecap="round"
									/>
								</svg>
								<span className="hidden sm:inline">Close</span>
							</button>
						</div>
					</div>

					{/* PDF viewer */}
					<div className="relative px-5 py-4 sm:px-6 sm:py-6">
						<div className="w-full overflow-hidden">
							<iframe
								src={resumeProfile.pdfUrl}
								title="Umesh Kumar Shah Résumé"
								className="w-full border-none"
								style={{
									border: "none",
									height: "calc(100vh - 180px)",
									minHeight: "400px",
									maxHeight: "85vh",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
