import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
	icon: LucideIcon;
	href: string;
	label: string;
}

export interface HeroConfig {
	resumeUrl: string;
	projectsLink: string;
}

/**
 * Social media links - externalized for easy maintenance
 * Update here instead of in component
 */
export const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: Github,
		href: "https://github.com/umeshkumar-git",
		label: "GitHub",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/numesh-kumar-shah/",
		label: "LinkedIn",
	},
	{
		icon: Mail,
		href: "mailto:me@umeshshah.in",
		label: "Email",
	},
]; // <--- This closing bracket and semicolon fix the build error!
