"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark / light mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-8 place-items-center rounded-full border border-line transition-colors hover:bg-card"
    >
      {/* Shape is driven by CSS so there is no hydration flash */}
      <span className="size-3 rounded-full bg-fg dark:bg-transparent dark:ring-2 dark:ring-fg" />
    </button>
  );
}
