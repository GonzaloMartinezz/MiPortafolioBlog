"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeAnimator({ children }: { children: React.ReactNode }) {
  const [isChanging, setIsChanging] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleThemeChange = () => {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 600);
      return () => clearTimeout(timer);
    };

    // Escuchar cambios de tema en localStorage
    window.addEventListener("storage", handleThemeChange);

    // Observar cambios de clase en el html
    const observer = new MutationObserver(() => {
      setIsChanging(true);
      setTimeout(() => setIsChanging(false), 600);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  if (!mounted) {
    return <div className="flex-1 w-full flex flex-col">{children}</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col">
      {isChanging && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/5 dark:bg-white/5 sepia:bg-amber-900/5 high-contrast:bg-white/10 pointer-events-none z-[9999]"
        />
      )}
      <motion.div
        key={isChanging ? "changing" : "stable"}
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 w-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
