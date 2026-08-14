# Umesh Kumar Shah — Developer Portfolio

> A modern, responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-umeshshah.in-0f766e?style=for-the-badge)](https://umeshshah.in)
[![GitHub](https://img.shields.io/badge/GitHub-umeshkumar--git-181717?style=for-the-badge\&logo=github)](https://github.com/umeshkumar-git)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

## Overview

This repository contains the source code for **Umesh Kumar Shah's personal developer portfolio**.

The portfolio is designed to present professional experience, selected projects, education, certifications, technical skills, and contact information through a clean, responsive interface.

The application follows a component-driven architecture with portfolio content separated from presentation logic, making the site straightforward to maintain and extend.

### Portfolio

**Live Website:** [umeshshah.in](https://umeshshah.in)

**Repository:** [github.com/umeshkumar-git/umeshshah-portfolio](https://github.com/umeshkumar-git/umeshshah-portfolio)

---

## ✨ Features

* Responsive portfolio layout
* Dark / light theme support
* Smooth scrolling navigation
* Active section tracking
* Accessible skip-to-content navigation
* Resume preview modal
* Resume PDF download
* Featured project showcase
* Additional project archive
* Project GitHub and live-demo links
* Experience timeline
* Education section
* Certifications section
* Technical skills categorized by domain
* Responsive mobile navigation behavior
* Reduced-motion support
* Lazy-loaded project images
* TypeScript-based development
* Vite-powered development and production builds

The application structure includes dedicated components for About, Experience, Projects, Education, Contact, Sidebar, Theme Toggle, Mouse Glow, and Resume Modal functionality.

---

## 🧱 Tech Stack

| Technology                  | Purpose                                    |
| --------------------------- | ------------------------------------------ |
| React 19                    | UI development                             |
| TypeScript                  | Static typing and maintainability          |
| Vite 7                      | Development server and production bundling |
| Tailwind CSS 4              | Utility-first styling                      |
| `@tailwindcss/vite`         | Tailwind/Vite integration                  |
| `clsx`                      | Conditional class composition              |
| `tailwind-merge`            | Safe Tailwind class merging                |
| ESLint / TypeScript tooling | Development quality and type safety        |

The current `package.json` defines React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, `clsx`, `tailwind-merge`, and the React Vite plugin.

---

## 🏗️ Architecture

The project uses a **component-based React architecture**.

```text
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Icons.tsx
│   ├── MouseGlow.tsx
│   ├── Projects.tsx
│   ├── ResumeModal.tsx
│   ├── Sidebar.tsx
│   └── ThemeToggle.tsx
│
├── data/
│   └── portfolio.ts
│
├── hooks/
│   ├── useActiveSection.ts
│   └── useTheme.ts
│
├── utils/
│
├── App.tsx
├── index.css
└── main.tsx

public/
└── images/
```

The repository currently separates `components`, `data`, `hooks`, and `utils`, while `App.tsx` acts as the main composition layer.

### Application flow

```text
main.tsx
   │
   ▼
 App.tsx
   │
   ├── Sidebar
   │
   ├── ThemeToggle
   │
   ├── About
   │
   ├── Experience
   │      └── ResumeModal
   │
   ├── Projects
   │
   ├── Education
   │
   └── Contact
```

---

## 📂 Data-Driven Portfolio

Portfolio content is centralized in:

```text
src/data/portfolio.ts
```

This file contains the primary application data model for:

* Profile information
* Navigation
* About section
* Experience
* Projects
* Education
* Certifications
* Skills
* Social links

This approach keeps content separate from UI components.

For example:

```ts
export const projects = [
  {
    title: "Lavoro Daily Assignment System",
    description: "...",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    live: "https://lavoro.umeshshah.in",
    github: "https://github.com/umeshkumar-git/lavoro",
    image: "/images/lavoro.png",
    featured: true,
  },
];
```

This makes adding or updating a project possible without modifying the rendering logic.

---

## 🚀 Featured Projects

The portfolio currently highlights several projects.

### Lavoro — Daily Assignment System

A structured assignment and productivity platform focused on task distribution, submission management, progress tracking, and institutional workflows.

**Stack:** HTML, CSS, JavaScript, API Integration

* [Live Application](https://lavoro.umeshshah.in)
* [Source Code](https://github.com/umeshkumar-git/lavoro)

### E-commerce Web Application

A full-stack commerce application featuring product browsing, cart workflows, responsive interfaces, and database-backed architecture.

**Stack:** React.js, Node.js, Express.js, MongoDB

* [Source Code](https://github.com/umeshkumar-git/e-commerce-app)

### Eventics — Event Management

An event management platform covering listings, registrations, role-based coordination, and organizer-oriented workflows.

**Stack:** React, Node.js, MongoDB

### Javify — Learning Platform

An education-focused platform designed around guided Java challenges and interactive learning progression.

**Stack:** React.js, TypeScript, Tailwind CSS, Node.js, Prisma, SQL

* [Source Code](https://github.com/umeshkumar-git/JAVIFY)

### MediCheck

A healthcare management platform for medical records, appointments, and patient history.

**Stack:** React.js, Node.js, Express.js, MongoDB

* [Live Application](https://medi-check-ten.vercel.app/)
* [Source Code](https://github.com/umeshkumar-git/MediCheck)

### NOVAPLAY

An interactive media streaming and entertainment platform with real-time communication and engagement capabilities.

**Stack:** React.js, Node.js, WebSocket, Redis

* [Live Application](https://novaplay-gray.vercel.app/)
* [Source Code](https://github.com/umeshkumar-git/NOVAPLAY)

### Agent Arena

A competitive AI-agent environment where autonomous agents compete using algorithmic strategies and decision-making.

**Stack:** Python, FastAPI, WebSocket, Docker

* [Source Code](https://github.com/umeshkumar-git/agent-arena)

Project metadata and links are maintained centrally in `src/data/portfolio.ts`.

---

## 💼 Experience

The portfolio presents experience in a structured timeline.

### Full Stack Developer

**Personal Products & Client Work**

Focus areas include:

* Responsive web application development
* React and Next.js interfaces
* API workflows
* Database modeling
* Product UI systems
* Production-minded delivery

**Technologies:** React.js, Next.js, TypeScript, Node.js, MongoDB, MySQL

The experience section also highlights the Lavoro and Eventics product builds alongside AI/engineering learning credentials.

---

## 🎓 Education & Certifications

### Education

**Bangalore Technological Institute**

Bachelor of Engineering in Computer Science and Engineering

**CGPA:** 8.18

### Certifications & Learning

* Generative AI Mastermind — Outskill
* AI Tools & ChatGPT Workshop — be10x
* AI Agents Intensive Course — Kaggle / Google
* Data Structures and Algorithms — takeuforward.org

---

## 🛠️ Skills

### Frontend

* JavaScript
* TypeScript
* React.js
* Next.js
* HTML
* CSS

### Backend

* Node.js
* REST APIs
* Server-side logic

### Databases

* MongoDB
* MySQL
* Schema Design

### Tools & Languages

* Git
* GitHub
* Java
* C++

These skill categories are defined in the portfolio's central data model.

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js 18+
* npm
* Git

Check your versions:

```bash
node --version
npm --version
git --version
```

### Clone the repository

```bash
git clone https://github.com/umeshkumar-git/umeshshah-portfolio.git
cd umeshshah-portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start the local development environment.

Open the URL shown in the terminal, typically:

```text
http://localhost:5173
```

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The repository currently exposes the following npm scripts:

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 📄 Resume Setup

The portfolio expects the resume at:

```text
public/resume.pdf
```

The application references the resume using:

```ts
resumeUrl: "/resume.pdf";
```

To update the resume:

1. Replace `public/resume.pdf`.
2. Keep the filename as `resume.pdf`, or update `resumeUrl` in `src/data/portfolio.ts`.
3. Run the production build.
4. Verify both the preview and download functionality.

The experience component provides both an in-app résumé viewer and a downloadable PDF action.

---

## 🖼️ Adding Project Images

Project images are stored under:

```text
public/images/
```

Example:

```text
public/
└── images/
    ├── lavoro.png
    ├── ecommerce.png
    ├── eventics.png
    ├── javify.png
    └── portfolio.png
```

Add a new image and reference it from `src/data/portfolio.ts`:

```ts
image: "/images/my-project.png"
```

Project images are rendered with lazy loading and asynchronous decoding to avoid unnecessarily blocking the initial page render.

---

## 🎨 Theming

The application supports both light and dark themes.

Theme state is managed through:

```text
src/hooks/useTheme.ts
```

The main application conditionally renders the mouse-glow effect in dark mode and provides a dedicated theme toggle.

Tailwind CSS is configured with a custom dark-mode variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

The stylesheet also provides light-mode overrides and responsive styling.

---

## ♿ Accessibility

Accessibility is treated as part of the UI architecture rather than an afterthought.

Current implementation includes:

* Skip-to-content navigation
* Semantic section structure
* `aria-label` attributes
* Keyboard-focus styles
* Accessible project links
* Accessible theme controls
* Reduced-motion handling
* Descriptive image `alt` attributes
* Proper button semantics for interactive controls

The application also respects the user's reduced-motion preference by disabling smooth scrolling when `prefers-reduced-motion: reduce` is active.

---

## 📱 Responsive Design

The UI is designed around responsive layouts rather than maintaining separate desktop and mobile applications.

The layout adapts through Tailwind responsive utilities and includes:

* Desktop sidebar navigation
* Mobile sticky section headers
* Responsive project layouts
* Flexible typography and spacing
* Mobile-friendly touch targets
* Responsive content width constraints

The primary application container uses responsive breakpoints and switches to a two-column layout on larger screens.

---

## 🔧 Development Guidelines

When extending the portfolio, follow these principles:

### 1. Keep content in the data layer

Avoid hardcoding portfolio content inside presentation components.

Prefer:

```ts
projects.map(...)
```

over manually duplicating project markup.

### 2. Keep components focused

A component should have one clear responsibility.

For example:

```text
Projects.tsx       → project presentation
Experience.tsx     → experience presentation
ThemeToggle.tsx    → theme interaction
ResumeModal.tsx    → resume interaction
```

### 3. Prefer reusable UI patterns

If multiple sections share the same UI pattern, extract it into a reusable component rather than duplicating markup.

### 4. Preserve accessibility

Any new interactive component should include:

* Keyboard support
* Visible focus states
* Appropriate semantic HTML
* Accessible labels
* Reduced-motion consideration where relevant

### 5. Optimize media

Use appropriately sized images and keep project assets under:

```text
public/images/
```

Avoid unnecessarily large assets.

---

## 🌐 Deployment

The project is a Vite-based frontend application and can be deployed to modern static hosting platforms.

Typical deployment flow:

```text
Git Push
   │
   ▼
CI / Hosting Platform
   │
   ▼
npm install
   │
   ▼
npm run build
   │
   ▼
dist/
   │
   ▼
Production
```

The repository's portfolio currently links to a Vercel deployment, while the application itself identifies `umeshshah.in` as its production portfolio domain.

---

## 🧪 Recommended Engineering Improvements

If this portfolio is being maintained as a serious production project, the next improvements I would recommend are:

### High Priority

* Add automated linting
* Add unit/component tests
* Add CI checks on pull requests
* Add Lighthouse performance checks
* Add an explicit Node.js version policy
* Add error handling around external links and resume loading

### Medium Priority

* Add SEO metadata
* Add Open Graph / Twitter card metadata
* Add structured data for the developer profile
* Add a custom `404` experience
* Add sitemap and robots configuration
* Optimize image formats with WebP/AVIF where appropriate

### Long Term

* Introduce automated deployment previews
* Add analytics with privacy-conscious configuration
* Add automated accessibility testing
* Add visual regression testing
* Add content validation for portfolio data
* Consider a CMS or headless content layer only if portfolio updates become frequent

---

## 📁 Repository Structure

```text
umeshshah-portfolio/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🤝 Contributing

This repository represents a personal portfolio, so feature contributions are generally not required.

However, suggestions, bug reports, accessibility improvements, and constructive feedback are welcome.

For significant changes:

```bash
git checkout -b feature/your-feature
```

Make your changes, verify the production build:

```bash
npm run build
```

Then open a pull request with:

* A clear description
* Screenshots for UI changes
* Testing/build results
* Any relevant architectural considerations

---

## 📬 Contact

**Umesh Kumar Shah**

* Website: [umeshshah.in](https://umeshshah.in)
* GitHub: [@umeshkumar-git](https://github.com/umeshkumar-git)
* LinkedIn: [Umesh Kumar Shah](https://www.linkedin.com/in/umesh-kumar-shah-1375652ba/)
* Email: [me@umeshshah.in](mailto:me@umeshshah.in)

---

## 📜 License

Unless a license file is added to this repository, the portfolio source should be considered **all rights reserved**.

Please contact the author before reusing personal content, branding, portfolio copy, resume information, or project assets.

---

## ⭐ Acknowledgements

Built with:

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* TypeScript

---

<p align="center">
  Designed & developed by <strong>Umesh Kumar Shah</strong>
</p>
