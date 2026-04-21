"use client";

import { motion } from "framer-motion";

export default function Skills() {
	const skillCategories = [
		{
			title: "💻 Frontend",
			icon: "⚛️",
			skills: [
				{ name: "React.js", level: 90 },
				{ name: "Next.js", level: 85 },
				{ name: "TypeScript", level: 80 },
				{ name: "Tailwind CSS", level: 95 },
				{ name: "HTML/CSS", level: 95 },
			],
		},
		{
			title: "🔧 Backend",
			icon: "🛠️",
			skills: [
				{ name: "Node.js", level: 80 },
				{ name: "Express.js", level: 85 },
				{ name: "MongoDB", level: 80 },
				{ name: "MySQL", level: 75 },
			],
		},
		{
			title: "📚 Languages & Tools",
			icon: "💡",
			skills: [
				{ name: "JavaScript", level: 90 },
				{ name: "C++", level: 75 },
				{ name: "Git/GitHub", level: 88 },
				{ name: "Data Structures", level: 85 },
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="skills"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl font-bold mb-4">
						Technical Skills
					</h2>
					<p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						A diverse toolkit built through hands-on projects and
						continuous learning
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-3 gap-8"
				>
					{skillCategories.map((category, idx) => (
						<motion.div
							key={idx}
							variants={itemVariants}
							whileHover={{ translateY: -5 }}
							className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">
									{category.icon}
								</span>
								<h3 className="text-2xl font-bold">
									{category.title}
								</h3>
							</div>

							<div className="space-y-4">
								{category.skills.map((skill, i) => (
									<div key={i}>
										<div className="flex justify-between mb-2">
											<span className="font-medium text-slate-900 dark:text-white">
												{skill.name}
											</span>
											<span className="text-sm text-slate-600 dark:text-slate-400">
												{skill.level}%
											</span>
										</div>
										<div className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{
													width: `${skill.level}%`,
												}}
												transition={{
													duration: 1,
													ease: "easeOut",
												}}
												viewport={{ once: true }}
												className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
											></motion.div>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
