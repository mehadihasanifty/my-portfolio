"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the current year in the footer. The server renders an empty
 * span (prerender-safe with Cache Components); the client writes the
 * live year straight into the DOM after hydration.
 */
export default function CurrentYear() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return <span ref={ref}>2026</span>;
}
