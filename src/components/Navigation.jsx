"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
		document.documentElement.classList.toggle("dark");
	};

	const navLinks = [
		{ name: "Home", href: "#hero" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Education", href: "#education" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
						US
					</div>

					{/* Desktop Links */}
					<div className="hidden md:flex gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm font-medium hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
							>
								{link.name}
							</a>
						))}
					</div>

					{/* Theme Toggle + Mobile Menu */}
					<div className="flex items-center gap-4">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
							aria-label="Toggle theme"
						>
							{isDark ? <Sun size={20} /> : <Moon size={20} />}
						</button>

						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden pb-4 space-y-2 border-t border-slate-200 dark:border-slate-700 pt-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="block px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
							>
								{link.name}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
