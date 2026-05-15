"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ThemeSwitch = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  if (!mounted) {
    return <div className={cn("w-[64px] h-[32px] rounded-full bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800", className)} />;
  }

  return (
    <button
      className={cn(
        "relative flex items-center w-[64px] h-[32px] rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 overflow-hidden border",
        isDark ? "bg-[#0f172a] border-slate-700/50" : "bg-slate-100 border-slate-300/80",
        className
      )}
      onClick={toggleTheme}
      {...props}
      aria-label="Alternar tema oscuro/claro"
    >
      {/* Background Icons (Left / Right) */}
      <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
        <SunIcon size={14} className={cn("transition-colors duration-300", isDark ? "text-slate-600" : "text-slate-400 opacity-0")} />
        <MoonIcon size={14} className={cn("transition-colors duration-300", isDark ? "text-slate-400 opacity-0" : "text-slate-400")} />
      </div>

      {/* Interactive Moving Thumb */}
      <motion.div
        className={cn(
          "relative z-10 flex items-center justify-center w-[24px] h-[24px] rounded-full shadow-md transition-colors duration-300",
          isDark 
            ? "bg-slate-800 border border-slate-600 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.5)]" 
            : "bg-white border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
        )}
        initial={false}
        animate={{
          x: isDark ? 32 : 0, // Track: 64px, Padding: 4px*2, Thumb: 24px -> 64 - 8 - 24 = 32
          rotate: isDark ? -180 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <MoonIcon size={12} strokeWidth={2.5} className="text-slate-200" />
        ) : (
          <SunIcon size={12} strokeWidth={2.5} className="text-slate-700" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeSwitch;
