import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-subtle sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · Tailwind · Motion
        </p>
      </div>
    </footer>
  );
}
