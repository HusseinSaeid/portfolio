export default function Summary() {
  return (
    <div className="w-full max-w-4xl space-y-6 py-8 ">
      <span className="font-audiowide text-xs text-(--color-brand)">
        About Me{" "}
      </span>

      <h2 className="max-w-4xl text-2xl font-light leading-relaxed tracking-tight text-(--text-main) sm:text-3xl md:text-4xl lg:text-5xl lg:leading-snug">
        A performance-driven{" "}
        <span className="font-medium text-(--text-main)">
          Frontend Developer
        </span>{" "}
        engineering high-speed, interactive web applications.
      </h2>

      <p className="max-w-4xl text-base leading-relaxed text-(--text-main)/80 sm:text-lg">
        Specializing in{" "}
        <span className="font-medium text-(--text-main) underline decoration-(--color-brand) decoration-2 underline-offset-4">
          React.js
        </span>
        ,{" "}
        <span className="font-medium text-(--text-main) underline decoration-(--color-brand) decoration-2 underline-offset-4">
          Next.js
        </span>
        ,{" "}
        <span className="font-medium text-(--text-main) underline decoration-(--color-brand) decoration-2 underline-offset-4">
          TypeScript
        </span>
        , and{" "}
        <span className="font-medium text-(--text-main) underline decoration-(--color-brand) decoration-2 underline-offset-4">
          Tailwind CSS
        </span>
        . Focused on modern client-side state management with{" "}
        <span className="font-medium text-(--text-main) underline decoration-(--color-brand) decoration-2 underline-offset-4">
          Zustand{" "}
        </span>
        , building modular UI architectures, REST/tRPC API integrations, and Web
        Accessibility.
      </p>
    </div>
  );
}
