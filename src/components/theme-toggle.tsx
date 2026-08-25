"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
