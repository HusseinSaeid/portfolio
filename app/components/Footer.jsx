export default function Footer() {
  return (
    <footer className="w-full  border-t border-(--border-color) py-6 px-4">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-audiowide text-xs uppercase tracking-widest text-(--text-subtle)">
            © {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>

        <p className="text-xs text-(--text-subtle)">
          Built with{" "}
          <span className="font-medium text-(--text-main)  decoration-(--color-brand) decoration-2 underline-offset-4">
            React Router
          </span>
          ,{" "}
          <span className="font-medium text-(--text-main)  decoration-(--color-brand) decoration-2 underline-offset-4">
            Tailwind CSS
          </span>
          , and{" "}
          <span className="font-medium text-(--text-main)  decoration-(--color-brand) decoration-2 underline-offset-4">
            Sanity
          </span>
        </p>
      </div>
    </footer>
  );
}
