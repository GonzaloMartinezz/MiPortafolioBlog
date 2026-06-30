"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  offset = 50,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // El fondo se mueve a una velocidad diferente (parallax)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      {/* Capa de Fondo con Parallax */}
      <motion.div 
        style={{ y: yBackground }} 
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30"
      >
        {/* Un resplandor sutil (glow) o gradiente que se mueve al hacer scroll */}
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#fbbf24] blur-[120px] md:blur-[180px] opacity-20 mix-blend-screen" />
      </motion.div>

      {/* Contenido Frontal (normal) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
