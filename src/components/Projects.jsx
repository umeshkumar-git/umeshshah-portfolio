'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, Code2 } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Web Application',
      description:
        'Full-stack e-commerce platform with product browsing, cart management, and secure authentication. Features real-time inventory tracking.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: '/projects/ecommerce.jpg',
      github: '#',
      live: '#',
      date: 'Feb 2026 - Present',
      featured: true,
    },
    {
      id: 2,
      title: 'Lavoro - Task Management System',
      description:
        'Smart task management system for tracking assignments and deadlines. Includes calendar integration and productivity analytics.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      image: '/projects/lavoro.jpg',
      github: '#',
      live: 'https://lavoro.umeshshah.in',
      date: 'Oct 2025 - Nov 2025',
    },
    {
      id: 3,
      title: 'Eventics - Event Management',
      description:
        'Collaborative event management platform for scheduling events and tracking participants. Real-time updates and notifications.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/projects/eventics.jpg',
      github: '#',
      live: '#',
      date: 'Sep 2025 - Dec 2025',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
