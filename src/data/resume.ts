export const resumeProfile = {
	name: "Umesh Kumar Shah",
	role: "Computer Science & Engineering Undergraduate (B.E.)",
	email: "me@umeshshah.in",
	phone: "+91 9301464989",
	links: [
		{
			label: "umeshshah.in",
			type: "web" as const,
			href: "https://umeshshah.in",
		},
		{
			label: "umeshkumar-git",
			type: "github" as const,
			href: "https://github.com/umeshkumar-git",
		},
		{
			label: "umesh-kumar-shah",
			type: "linkedin" as const,
			href: "https://www.linkedin.com/in/umesh-kumar-shah-1375652ba/",
		},
	],
	pdfUrl: "/images/umeshshah_resume.pdf",
};

export const resumeEducation = [
	{
		degree: "Bachelor of Engineering in Computer Science and Engineering",
		institute: "Bangalore Technological Institute",
		period: "2023 – Present",
		score: "CGPA: 8.12",
	},
	{
		degree: "MPBSE 12th State Board",
		institute: "Madhya Pradesh Board of Secondary Education",
		period: "2021",
		score: "94%",
	},
	{
		degree: "MPBSE 10th State Board",
		institute: "Madhya Pradesh Board of Secondary Education",
		period: "2019",
		score: "94%",
	},
];

export const resumeSkills = [
	{
		label: "Languages",
		items: ["JavaScript", "TypeScript", "C++", "Java", "C", "HTML", "CSS"],
	},
	{
		label: "Frameworks & Libraries",
		items: ["React.js", "Next.js", "Node.js", "Express.js"],
	},
	{ label: "Databases", items: ["MongoDB", "MySQL", "Prisma ORM"] },
	{ label: "Developer Tools", items: ["Git", "GitHub", "REST APIs"] },
	{
		label: "Core Competencies",
		items: [
			"Data Structures & Algorithms",
			"Full-Stack Web Development",
			"Problem Solving",
		],
	},
];

export const resumeCertifications = [
	{ title: "Generative AI Mastermind", org: "Outskill", date: "2026" },
	{ title: "AI Tools & ChatGPT Workshop", org: "be10x", date: "Mar 2026" },
	{
		title: "AI Agents Intensive Course",
		org: "Kaggle / Google",
		date: "Dec 2025",
	},
];

export const resumeProjects = [
	{
		title: "Javify – Gamified Java Learning Platform",
		period: "Jan 2026 – Present",
		description:
			"AI-powered platform with interactive coding challenges, gamification, coding battles, and analytics.",
		tech: [
			"React.js",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Express.js",
			"Prisma",
			"SQL",
		],
		href: "https://github.com/umeshkumar-git/JAVIFY",
	},
	{
		title: "E-commerce Web Application",
		period: "Feb 2026 – Present",
		description:
			"Full-stack platform for product browsing, cart management, and secure authentication.",
		tech: ["React.js", "Node.js", "Express.js", "MongoDB/MySQL"],
		href: "https://github.com/umeshkumar-git/e-commerce-app",
	},
	{
		title: "Lavoro Daily Assignment System",
		period: "Oct 2025 – Nov 2025",
		description:
			"Productivity-focused task management system tracking daily assignments and deadlines.",
		tech: ["HTML", "CSS", "JavaScript", "REST APIs"],
		href: "https://lavoro.umeshshah.in",
	},
];
