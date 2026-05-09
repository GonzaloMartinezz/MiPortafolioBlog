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

  return null;
}
