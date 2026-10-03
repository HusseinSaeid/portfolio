import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const DEFAULT_CONTACT_LINKS = [
  {
    name: "Email",
    handle: "husseinsaeid7698@gmail.com",
    href: "mailto:husseinsaeid7698@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    handle: "Hussein El Said",
    href: "https://www.linkedin.com/in/hussein-el-saeid-557a62418/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    handle: "@HusseinSaeid",
    href: "https://github.com/HusseinSaeid",
    icon: FaGithub,
  },
];

export default function Links({ links = DEFAULT_CONTACT_LINKS }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between rounded-xl border border-(--border-color) bg-(--bg-card) p-3.5 transition-all duration-200 hover:border-(--color-brand)/60 hover:bg-(--bg-surface) hover:shadow-md hover:shadow-black/5 dark:hover:shadow-blue-500/5"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Icon Container */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--border-color) bg-(--bg-surface) text-(--text-main) transition-colors group-hover:border-(--color-brand)/40 group-hover:text-(--color-brand)">
                {Icon ? <Icon className="h-4 w-4" /> : null}
              </div>

              {/* Text Meta */}
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-(--text-main) transition-colors group-hover:text-(--color-brand)">
                  {item.name}
                </span>
                <span className="truncate text-xs text-(--text-subtle)">
                  {item.handle}
                </span>
              </div>
            </div>

            {/* External Indicator Arrow */}
            <span
              aria-hidden="true"
              className="text-xs text-(--text-muted) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-(--color-brand)"
            >
              ↗
            </span>
          </a>
        );
      })}
    </div>
  );
}
