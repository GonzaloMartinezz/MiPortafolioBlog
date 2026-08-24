"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck } from "react-icons/fi";

const navOptions = [
  { label: "Creapp", id: "creapp" },
  { label: "Proyectos", id: "proyectos" },
  { label: "About Me", id: "about" },
  { label: "Experiencia", id: "experiencia" },
];

export default function FloatingHelpMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-4 w-64 bg-[#0B0B0B] border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Menú Rápido</h3>
              <p className="text-[#71717a] text-sm">Navegá por las secciones</p>
            </div>

            <div className="flex flex-col gap-1">
              {navOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => scrollToSection(option.id)}
                  className="flex items-center justify-between text-left text-white/80 hover:text-white hover:bg-[#F66C44]/20 hover:border-[#F66C44]/30 border border-transparent px-4 py-3 rounded-xl transition-all duration-300"
                >
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#27272a] hover:bg-[#3f3f46] text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transition-colors border border-white/10"
      >
        {mounted ? (
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="gm"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                GM
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div>GM</div>
        )}
      </button>
    </div>
  );
}
