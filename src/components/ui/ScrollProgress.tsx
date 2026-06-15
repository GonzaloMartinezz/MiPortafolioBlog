"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map progress from 0 to 1 to a top position from 0% to calc(100% - thumb_height)
  // The track is h-32 (128px), thumb is h-8 (32px). 
  // We can just use framer motion to translate Y from 0 to 96px.
  const y = useTransform(scrollYProgress, [0, 1], [0, 96]);

  if (!mounted) return null;

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <div className="w-1.5 h-32 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-full relative overflow-hidden shadow-inner">
        <motion.div 
          className="absolute top-0 left-0 w-full h-8 bg-yellowx rounded-full shadow-[0_0_10px_rgba(252,209,0,0.5)]"
          style={{ y }}
        />
      </div>
    </div>
  );
};
