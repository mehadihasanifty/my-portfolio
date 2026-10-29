"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "@/lib/icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/#home" className="group flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-md transition-transform duration-300 group-hover:rotate-6">
            {profile.initials}
          </span>
          <span className="hidden text-lg font-bold tracking-tight text-slate-900 sm:block dark:text-white">
            {profile.name}
            <span className="text-indigo-500">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:brightness-110 sm:inline-flex"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300/60 text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200 lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-slate-200/70 transition-[max-height,opacity] duration-300 lg:hidden dark:border-slate-800 ${
          menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        } ${scrolled || menuOpen ? "border-t" : ""}`}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link, index) => (
            <li key={link.id} style={{ transitionDelay: `${index * 40}ms` }}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  activeId === link.id
                    ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                )}
              </Link>
            </li>
          ))}
          <li className="px-1 pt-2">
            <a
              href={profile.resumeUrl}
              download
              className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-base font-semibold text-white shadow-md"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
