"use client";

import { MoonIcon, SunIcon } from "@/lib/icons";

/**
 * Stateless theme toggle — icons are swapped purely by CSS (dark: variants)
 * so the markup is identical for server render and hydration.
 * The initial theme class is applied by the inline script in layout.tsx.
 */
export default function ThemeToggle() {
  function toggle() {
    // `classList.toggle` returns true when the class is present afterwards
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* private mode */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      title="Toggle theme"
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300/60 bg-white/60 text-slate-600 transition-all duration-300 hover:scale-110 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:bg-white/5 dark:text-amber-300 dark:hover:border-amber-300 dark:hover:text-amber-300"
    >
      {/* Shown while the page is dark */}
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
      {/* Shown while the page is light */}
      <MoonIcon className="h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}
