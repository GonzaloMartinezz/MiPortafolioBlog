"use client";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import ProjectsByCategory from "@/components/home/ProjectsByCategory";
import { HeroScrollDemo } from "@/components/home/HeroScrollDemo";
import MeSection from "@/components/home/MeSection";
import { motion } from "framer-motion";
import DualDeviceShowcase from "@/components/home/DualDeviceShowcase";
import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";
import WorkMethodology from "@/components/home/WorkMethodology";
import AppDevelopmentSteps from "@/components/home/HeroSlideshow";
import BusinessStrategy from "@/components/home/BusinessStrategy";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import ProjectCarousel from "@/components/home/ProjectCarousel";

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

      {/* NEW: Business Strategy Section */}
      <BusinessStrategy />

      {/* NEW: Capabilities Bento Section */}
      <CapabilitiesSection />

      {/* Scroll Animation Section */}
      <div className="section-divider mt-12 md:mt-10">
        <HeroScrollDemo />
      </div>

      {/* NEW: Me Section (Full Page Scroll) */}
      {/* <MeSection /> */}

      {/* NEW: Dual Device App Showcase (Computer + Cellular) */}
      {/* <DualDeviceShowcase /> */}

      {/* NEW: Work Methodology (Steps to develop your business app) */}
      {/* <WorkMethodology /> */}

      {/* NEW: App Development Steps (ZigZag Timeline) */}
      {/*  <AppDevelopmentSteps /> */}

      {/* NEW: Categorized Projects Section */}
      {/*  <ProjectsByCategory /> */}

      {/* Featured Projects Carousel Section */}
      <ProjectCarousel />

      {/* NEW: Startup Pricing Section with Charts */}
      <section className="py-20 md:py-28 border-t border-slate-200/50 dark:border-slate-800/40">
        <PricingWithChart />
      </section>
    </div>
  );
}
