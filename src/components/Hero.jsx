"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/umeshkumar-git",
			label: "GitHub",
		},
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/umesh-kumar-shah",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:me@umeshshah.in", label: "Email" },
	];

	return (
		<section
			id="hero"
			className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid md:grid-cols-2 gap-12 items-center"
				>
					{/* Left: Text Content */}
					<motion.div variants={itemVariants} className="space-y-8">
						<div>
							<h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
								Hi, I'm{" "}
								<span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
									Umesh
								</span>
							</h1>
							<p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
								Full Stack Developer | React & Next.js
								Specialist
							</p>
							<p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
								I build beautiful, scalable web applications
								that users love. Currently a BTech student at
								Bangalore Technological Institute, actively
								seeking internships to grow my skills and impact
								real-world projects.
							</p>
						</div>

						{/* CTA Buttons */}
						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-4"
						>
							<a
								href="#projects"
								className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:gap-3 shadow-lg hover:shadow-xl"
							>
								View My Work <ArrowRight size={20} />
							</a>
							<a
								href="/resume.pdf"
								download="Umesh_Kumar_Shah_Resume.pdf"
								className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-semibold transition-all"
							>
								<Download size={20} /> Resume
							</a>
						</motion.div>

						{/* Social Links */}
						<motion.div
							variants={itemVariants}
							className="flex gap-4 pt-4"
						>
							{socialLinks.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-900 dark:text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
									aria-label={label}
								>
									<Icon size={24} />
								</a>
							))}
						</motion.div>
					</motion.div>

					{/* Right: Profile Image */}
					<motion.div
						variants={itemVariants}
						className="relative h-96 md:h-full flex items-center justify-center"
					>
						{/* Gradient Background Circle */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>

						{/* Image Container */}
						<div className="relative w-full max-w-md">
							<Image
								src="/profile.jpg"
								alt="Umesh Kumar Shah"
								width={400}
								height={500}
								className="rounded-2xl shadow-2xl object-cover w-full h-auto"
								priority
							/>
							{/* Border Glow Effect */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
