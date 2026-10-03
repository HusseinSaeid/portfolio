import { useState } from "react";
import { NavLink } from "react-router";
import { AnimatedThemeToggler } from "~/components/ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import { useTheme } from "~/contexts/theme-context";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Projects", href: "/projects" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact Me", href: "/contact-me" },
  ];

  return (
    <nav className="relative flex items-center justify-between p-6 md:p-8 [view-transition-name:navbar]">
      <div className="hidden md:flex"></div>
      <div className="hidden gap-4 md:flex">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            viewTransition
            className={({ isActive }) =>
              `font-audiowide transition-colors duration-300 ease-in-out ${
                isActive ? "text-(--color-brand)" : "hover:text-(--color-brand)"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-6 w-6 font-audiowide transition-transform duration-300 active:scale-90 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <Menu
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen
              ? "rotate-90 opacity-0 scale-50"
              : "rotate-0 opacity-100 scale-100"
          }`}
        />
        <X
          className={`absolute inset-0 transition-all duration-300 ${
            isOpen
              ? "rotate-0 opacity-100 scale-100"
              : "-rotate-90 opacity-0 scale-50"
          }`}
        />
      </button>
      <AnimatedThemeToggler
        theme={theme}
        onThemeChange={setTheme}
        className="flex items-center justify-center"
      />{" "}
      <div
        className={`absolute top-full right-0 left-0 z-50 flex flex-col gap-5 bg-(--bg-main) p-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            viewTransition
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-audiowide transition-colors duration-300 ease-in-out ${
                isActive ? "text-(--color-brand)" : "hover:text-(--color-brand)"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
