"use client";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import ProjectsByCategory from "@/components/home/ProjectsByCategory";
import Expertise from "@/components/home/Expertise";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import { HeroScrollDemo } from "@/components/home/HeroScrollDemo";
import { motion } from "framer-motion";
import DualDeviceShowcase from "@/components/home/DualDeviceShowcase";
import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import WorkMethodology from "@/components/home/WorkMethodology";

export default function Home() {
  const projectImages = [
    "/coc&m.png",
    "/TT.png",
    "/ClickHouse.png",
    "/GoStats.png",
    "/MS.png",
    "/CB.png",
    "/loginncoc&m.png",
    "/bachstage.png",
    "/IMG3.png",
    "/vistaMac.png"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Scroll Animation Section */}
      <div className="section-divider mt-12 md:mt-10">
        <HeroScrollDemo />
      </div>

      {/* Expertise Section */}
      <Expertise />

      {/* NEW: Dual Device App Showcase (Computer + Cellular) */}
      <DualDeviceShowcase />

      {/* NEW: Work Methodology (Steps to develop your business app) */}
      <WorkMethodology />

      {/* Projects Carousel Section */}
      <ProjectsCarousel />

      {/* NEW: Categorized Projects Section */}
      <ProjectsByCategory />

      {/* NEW: Tilted 3D Project Gallery Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-slate-900 text-white rounded-[3rem] -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="inline-block px-3.5 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-950/40 rounded-full border border-purple-800/40 animate-pulse">
            GALERÍA EDITORIAL
          </span>
          <h2 className="text-3.5xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
            Una Mirada Tridimensional
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Navega por las interfaces de mis desarrollos más recientes con una perspectiva 3D interactiva que responde a tu scroll.
          </p>
        </div>
        <ScrollTiltedGrid images={projectImages} />
      </section>

      {/* Featured Projects Section */}
      <div className="bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-transparent dark:from-slate-900/30 dark:via-slate-900/20 dark:to-transparent -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 py-12">
        <Projects />
      </div>

      {/* NEW: Startup Pricing Section with Charts */}
      <section className="py-20 md:py-28 border-t border-slate-200/50 dark:border-slate-800/40">
        <PricingWithChart />
      </section>
    </div>
  );
}
