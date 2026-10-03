#  Minimalist Futuristic Portfolio

> A sleek, high-performance personal developer portfolio built with **React Router v7**, **Vite**, and **Tailwind CSS v4**, connected to an external **Sanity CMS** backend. Engineered with a futuristic design system, native CSS View Transitions, and a custom dual-theme engine.

![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity_CMS-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

##  Design System & Theme Architecture

* **Dual Theme Engine:**
  * **Dark Mode (`.dark`):** High-contrast obsidian void (`#121418`), elevated surface layers (`#1a1d23` / `#1e2229`), glowing borders, and electric blue brand accents (`#3b82f6`).
  * **Light Mode:** Warm cream / yellowish-white background (`#fbf9f4`), soft sand cards (`#eee7d8`), and deep blue brand contrast (`#1d4ed8`).
* **Futuristic Typography:** Powered by `@fontsource-variable/geist` for sleek body text, `Inter`, and `Audiowide` for cyber-styled headings.
* **Native View Transitions:** Built-in CSS `::view-transition` keyframe slide animations (`page-slide-in` / `page-slide-out`) with smooth route navigation and theme transition overrides.
* **Modern UI Primitives:** Integrated with Shadcn UI (`oklch` color spaces) and Tailwind CSS v4 plugins (`@tailwindcss/typography`, `@tw-animate-css`).

---

##   Main Portfolio Sections

| Section | Description | Data Source |
| :--- | :--- | :---: |
| **01. Hero** | Futuristic headline loader with `Audiowide` typography, personal pitch, and action CTA buttons. | Sanity CMS |
| **02. About** | Developer backstory, interactive technical skill matrix, and career timeline. | Sanity CMS |
| **03. Projects** | Interactive gallery featuring tech stack tags, dynamic preview cards, live demos, and GitHub repos. | Sanity CMS |
| **04. Blog** | Article listing and detail view rendering Sanity Portable Text content. | Sanity CMS |
| **05. Contact Me** | Communication interface with direct messaging options and social profiles. | Sanity CMS |

---

## 🛠️ Tech Stack

* **Framework:** React Router v7 (`react-router.config.ts`)
* **Build Tool:** Vite (`vite.config.ts`)
* **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`), Shadcn UI (`components.json`), Lucide Icons
* **Fonts:** `@fontsource-variable/geist`, `Audiowide`, `Inter`
* **Headless CMS:** Sanity CMS (`@sanity/client`, `@portabletext/react`, GROQ)
* **Language & Runtime:** TypeScript, Node.js
* **Containerization:** Docker (`Dockerfile`, `.dockerignore`)

---

##   Project Structure

```text
portfolio/
├── app/
│   ├── components/          # Reusable UI components & section layouts
│   ├── contexts/            # React Contexts (Theme state & View Transitions)
│   ├── lib/                 # Utility functions & helpers
│   ├── routes/              # Page components (Hero, About, Projects, Blog, Contact)
│   ├── sanity/              # Sanity client setup & GROQ query functions
│   ├── app.css              # Tailwind v4 import directives, theme variables, custom utilities & view transitions
│   ├── root.tsx             # Root application wrapper & HTML layout
│   └── routes.ts            # React Router v7 routes configuration
├── build/                   # Production output
├── public/                  # Static assets and icons
├── .dockerignore            # Docker exclusion file
├── .gitignore               # Git exclusion file
├── components.json          # Shadcn UI configuration
├── Dockerfile               # Production Docker build instructions
├── package.json             # Dependencies and scripts
├── react-router.config.ts    # React Router config
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite build configuration
```

---

##   Getting Started

### Prerequisites

* Node.js `v18+`
* `npm` / `pnpm` / `yarn`
* Active [Sanity.io](https://www.sanity.io/) account & project ID

### 1. Clone Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables Setup

Create a `.env` file in the root directory:

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

### 4. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

##   Docker Deployment

Build and run the portfolio locally using Docker:

```bash
# Build Docker image
docker build -t portfolio-frontend .

# Run Docker container
docker run -p 3000:3000 portfolio-frontend
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
