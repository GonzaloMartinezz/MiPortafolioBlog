"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Timeline from "@/components/home/Timeline";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  viewport: { once: true },
});

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24">
      {/* ── AMBIENT GLOW ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full pt-28 pb-32">
        {/* HERO HEADER */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-24 md:mb-32">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-[0.25em] text-[#F66C44] uppercase bg-[#F66C44]/10 rounded-full border border-[#F66C44]/20 backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5" /> Bitácora
            </span>

            <h1 className="text-[clamp(3rem,6vw,6rem)] font-black leading-[0.85] tracking-tighter text-white mb-8">
              Mi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] via-orange-400 to-[#FCD100]">
                Experiencia.
              </span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
              Mi recorrido construyendo productos digitales, diseñando arquitecturas escalables y creando experiencias excepcionales.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE SECTION */}
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp(0.1)}>
             <Timeline />
          </motion.div>
        </section>
      </div>
    </main>
  );
}