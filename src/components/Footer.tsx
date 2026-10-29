import Link from "next/link";
import { navLinks, profile, socials } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";
import CurrentYear from "./CurrentYear";
import { HeartIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-12 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6">
        {/* Brand + quick links */}
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-md">
              {profile.initials}
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.name}
              <span className="text-indigo-500">.</span>
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <SocialLinks socials={socials} size="md" />
        </div>

        <div className="h-px w-full max-w-md bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            © <CurrentYear /> {profile.name}. Built with{" "}
            <span className="inline-flex items-center align-middle">
              <HeartIcon className="h-3.5 w-3.5 fill-current text-fuchsia-500" />
            </span>{" "}
            using <span className="font-semibold text-slate-700 dark:text-slate-200">Next.js</span> &{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">Tailwind CSS</span>.
          </p>
          <p className="text-xs">Built with purpose, crafted with care — secure by design.</p>
        </div>
      </div>
    </footer>
  );
}
