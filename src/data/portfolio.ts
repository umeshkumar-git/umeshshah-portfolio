export const profile = {
	name: "Umesh Kumar Shah",
	firstName: "Umesh",
	title: "Software Developer",
	headline: "I build structured, reliable web products.",
	blurb: "Bengaluru-based full-stack developer focused on clean systems, thoughtful UX, and recruiter-ready product craft.",
	email: "me@umeshshah.in",
	phone: "+91 9301464989",
	location: "Bengaluru, India",
	// Official resume PDF. Place the file at: public/resume.pdf
	resumeUrl: "/resume.pdf",
	githubUrl: "https://github.com/umeshkumar-git",
	socials: [
		{
			name: "GitHub",
			href: "https://github.com/umeshkumar-git",
			label: "GitHub",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/in/umesh-kumar-shah-1375652ba/",
			label: "LinkedIn",
		},
		{
			name: "Email",
			href: "mailto:me@umeshshah.in",
			label: "Email",
		},
		{
			name: "Website",
			href: "https://umeshshah.in",
			label: "Website",
		},
		{
			name: "Google Developer",
			href: "https://developers.google.com/profile/u/umeshshah",
			label: "Google Developer",
		},
	],
};

export const navItems = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
	`I'm a software engineer who enjoys building full-stack products end to end — from crisp React interfaces to reliable Node APIs and thoughtful data models. I care about maintainable code, accessible UI, and presenting work clearly for the people who will use and hire for it.`,
	`My stack centers on JavaScript, TypeScript, React.js, Next.js, Node.js, MongoDB, and MySQL. I like working where product thinking meets engineering craft: structured components, clean API boundaries, and interfaces that feel intentional rather than improvised.`,
	`Outside of shipping features, I keep sharpening fundamentals through DSA practice, AI tooling, and hands-on project work — always aiming for systems that are simple to explain, easy to extend, and solid in production.`,
];

export const experience = [
	{
		period: "2026",
		title: "Software Development Intern",
		company: "Pantech Solutions India Pvt. Ltd.",
		companyUrl: "https://www.pantechsolutions.net/",
		description:
			"Completed an internship focused on practical software development, programming, technical problem-solving, and project-based learning.",
		tech: [
			"Software Development",
			"Programming",
			"Problem Solving",
			"Project Learning",
		],
	},
	{
		period: "2023 — Present",
		title: "Full Stack Developer",
		company: "Personal Products & Client Work",
		companyUrl: "https://umeshshah.in",
		description:
			"Design and develop responsive, scalable web applications across the stack. Own product UI systems, API workflows, database modeling, and polished delivery for portfolio and production-minded builds.",
		tech: [
			"React.js",
			"Next.js",
			"TypeScript",
			"Node.js",
			"MongoDB",
			"MySQL",
		],
	},
	{
		period: "Featured",
		title: "Lavoro — Daily Assignment System",
		company: "Product Build",
		companyUrl: "#projects",
		description:
			"Built a structured daily assignment and productivity platform for task distribution, submission management, progress tracking, and institutional workflow clarity.",
		tech: ["Next.js", "TypeScript", "MySQL"],
	},
	{
		period: "Featured",
		title: "Eventics — Event Management",
		company: "Product Build",
		companyUrl: "#projects",
		description:
			"Shipped an event coordination product covering listings, registration flows, role-based coordination, and organizer-focused screens with a full-stack React and Node foundation.",
		tech: ["React", "Node.js", "MongoDB"],
	},
	{
		period: "Learning",
		title: "AI & Engineering Credentials",
		company: "Outskill · be10x · Kaggle/Google · takeUforward",
		companyUrl: "#education",
		description:
			"Completed Generative AI Mastermind, AI Tools & ChatGPT workshop, AI Agents Intensive Course, and DSA problem-solving practice focused on interview-ready fundamentals.",
		tech: ["Generative AI", "DSA", "Problem Solving"],
	},
];

export const projects = [
	{
		title: "Lavoro Daily Assignment System",
		description:
			"A structured daily assignment and productivity system for task distribution, submission management, progress tracking, and institutional workflow clarity.",
		tech: ["HTML", "CSS", "JavaScript", "API Integration"],
		href: "https://lavoro.umeshshah.in",
		live: "https://lavoro.umeshshah.in",
		github: "https://github.com/umeshkumar-git/lavoro",
		image: "/images/lavoro.png",
		featured: true,
	},
	{
		title: "E-commerce Web Application",
		description:
			"A full-stack commerce platform with product browsing, cart flows, user-friendly layouts, and scalable database-backed architecture.",
		tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
		href: "https://github.com/umeshkumar-git/e-commerce-app",
		live: null,
		github: "https://github.com/umeshkumar-git/e-commerce-app",
		image: "/images/ecommerce.png",
		featured: true,
	},
	{
		title: "Eventics Event Management",
		description:
			"Event coordination covering listings, registration flows, role-based coordination, and polished organizer-style screens.",
		tech: ["React", "Node.js", "MongoDB"],
		href: "https://umeshshah.in",
		live: null,
		github: "https://github.com/umeshkumar-git",
		image: "/images/eventics.png",
		featured: true,
	},
	{
		title: "Javify Learning Platform",
		description:
			"A learning platform that turns Java practice into guided challenges, interactive progression, and education-first modules.",
		tech: [
			"React.js",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"Prisma",
			"SQL",
		],
		href: "https://github.com/umeshkumar-git/JAVIFY",
		live: null,
		github: "https://github.com/umeshkumar-git/JAVIFY",
		image: "/images/javify.png",
		featured: false,
	},
	{
		title: "MediCheck",
		description:
			"A healthcare management platform for tracking medical records, appointments, and patient history with secure data handling.",
		tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
		href: "https://medi-check-ten.vercel.app/",
		live: "https://medi-check-ten.vercel.app/",
		github: "https://github.com/umeshkumar-git/MediCheck",
		image: "/images/portfolio.png",
		featured: false,
	},
	{
		title: "NOVAPLAY",
		description:
			"An interactive media streaming and entertainment platform with real-time content delivery and user engagement features.",
		tech: ["React.js", "Node.js", "WebSocket", "Redis"],
		href: "https://novaplay-gray.vercel.app/",
		live: "https://novaplay-gray.vercel.app/",
		github: "https://github.com/umeshkumar-git/NOVAPLAY",
		image: "/images/portfolio.png",
		featured: false,
	},
	{
		title: "Agent Arena",
		description:
			"A competitive AI agent battleground where autonomous agents compete, showcasing algorithmic strategies and decision-making.",
		tech: ["Python", "FastAPI", "WebSocket", "Docker"],
		href: "https://github.com/umeshkumar-git/agent-arena",
		live: null,
		github: "https://github.com/umeshkumar-git/agent-arena",
		image: "/images/portfolio.png",
		featured: false,
	},
];

export const education = [
	{
		period: "Engineering",
		school: "Bangalore Technological Institute",
		detail: "Bachelor of Engineering in Computer Science and Engineering with focus on software development, web technologies, databases, and engineering fundamentals.",
		metric: "8.18 CGPA",
	},
	{
		period: "Higher Secondary",
		school: "12th Standard",
		detail: "Strong academic foundation with consistent performance and disciplined study habits.",
		metric: "94%",
	},
	{
		period: "Secondary",
		school: "10th Standard",
		detail: "Completed foundational education with high academic standing.",
		metric: "94%",
	},
];

export const certifications = [
	{
		type: "Certification",
		title: "Generative AI Mastermind",
		org: "Outskill",
		description:
			"Hands-on learning around generative AI workflows, modern tools, and AI-assisted productivity.",
	},
	{
		type: "Workshop",
		title: "AI Tools & ChatGPT Workshop",
		org: "be10x",
		description:
			"Practical workshop focused on AI tools, prompt workflows, and ChatGPT productivity applications.",
	},
	{
		type: "Course",
		title: "AI Agents Intensive Course",
		org: "Kaggle / Google",
		description:
			"Learning program covering the emerging AI agents ecosystem and applied AI concepts.",
	},
	{
		type: "Achievement",
		title: "Data Structures and Algorithms",
		org: "takeuforward.org",
		description:
			"Problem-solving focused on DSA fundamentals, patterns, and coding interview preparation.",
	},
];

export const skills = {
	frontend: [
		"JavaScript",
		"TypeScript",
		"React.js",
		"Next.js",
		"HTML",
		"CSS",
	],
	backend: ["Node.js", "REST APIs", "Server Logic"],
	database: ["MongoDB", "MySQL", "Schema Design"],
	tools: ["Git", "GitHub", "Java", "C++"],
};
