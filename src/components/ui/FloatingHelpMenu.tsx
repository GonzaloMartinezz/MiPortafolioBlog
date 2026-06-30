"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheck } from "react-icons/fi";

const helpOptions = [
  "Branding",
  "Diseño Web",
  "Fotografía IA",
  "Branding + Web",
];

export default function FloatingHelpMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-4 w-72 bg-[#0B0B0B] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-bold text-lg mb-1">¿En qué te podemos ayudar?</h3>
              <p className="text-[#71717a] text-sm">Elegí un servicio</p>
            </div>

            <div className="flex flex-col gap-1">
              {helpOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className="flex items-center justify-between text-left text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-colors"
                >
                  <span className="text-sm font-medium">{option}</span>
                  {selectedOption === option && (
                    <FiCheck className="text-[#fbbf24]" size={16} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#27272a] hover:bg-[#3f3f46] text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg transition-colors border border-white/10"
      >
        <AnimatePresence mode="wait">
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
      </button>
    </div>
  );
}
