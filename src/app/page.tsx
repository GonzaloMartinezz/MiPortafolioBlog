"use client";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Expertise from "@/components/home/Expertise";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import { HeroScrollDemo } from "@/components/home/HeroScrollDemo";
import { motion } from "framer-motion";

export default function Home() {
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

      {/* Projects Carousel Section */}
      <ProjectsCarousel />

      {/* Featured Projects Section */}
      <div className="bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-transparent dark:from-slate-900/30 dark:via-slate-900/20 dark:to-transparent -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 py-4">
        <Projects />
      </div>
    </div>
  );
}
