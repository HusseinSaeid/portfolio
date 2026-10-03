const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend Familiarity",
    skills: ["Node.js", "Payload CMS", "Sanity CMS", "MongoDB", "tRPC", "SQL"],
  },
  {
    category: "State Management & Data",
    skills: ["Zustand", "TanStack Query", "REST APIs", "API Integration"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "CI/CD"],
  },
  {
    category: "Development Practices",
    skills: [
      "Responsive Web Design",
      "Accessibility",
      "SEO",
      "Performance Optimization",
      "UI/UX Principles",
      "Clean Code",
    ],
  },
];
export function Skills() {
  return (
    <div className="w-full max-w-4xl space-y-6 pt-4">
      <div className="flex items-center gap-3">
        <span className="font-audiowide text-xs text-(--color-brand)">
          Technical Stack
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-xs md:text-base font-semibold uppercase tracking-wider text-(--text-main)">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-(--border-color) px-2.5 py-1 text-xs md:text-base text-(--text-main) hover:border-(--color-brand) hover:bg-portfolio-bg-dark hover:text-portfolio-bg-light dark:hover:bg-portfolio-bg-light dark:hover:text-portfolio-bg-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
