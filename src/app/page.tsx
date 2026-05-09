"use client";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Expertise from "@/components/home/Expertise";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";
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

      {/* Project Spotlight Section */}
      <ProjectSpotlight />

      {/* Gallery Section */}
      <div className="bg-slate-50/50 dark:bg-slate-900/20 -mx-4 md:-mx-12 px-4 md:px-12">
        <Projects />
      </div>

      {/* Expertise Section */}
      <Expertise />
    </div>
  );
}