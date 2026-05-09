"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme") || "light";
    const isDarkTheme = theme === "dark";
    setIsDark(isDarkTheme);
    applyTheme(isDarkTheme ? "dark" : "light");
  }, []);

  const applyTheme = (theme: Theme) => {
    const html = document.documentElement;

    // Trigger fade animation
    html.style.opacity = "0.95";

    setTimeout(() => {
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
      html.style.opacity = "1";
    }, 150);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
      aria-label="Cambiar tema"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
