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
import ProjectList from "@/components/home/ProjectList";
import DataAnalyticsSection from "@/components/home/DataAnalyticsSection";
import ParallaxSection from "@/components/ui/ParallaxSection";

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
      <ParallaxSection>
        <BusinessStrategy />
      </ParallaxSection>

      {/* NEW: Capabilities Bento Section */}
      <ParallaxSection offset={80}>
        <CapabilitiesSection />
      </ParallaxSection>

      {/* Scroll Animation Section */}
      <div className="section-divider mt-12 md:mt-10">
        <HeroScrollDemo />
      </div>

      {/* Featured Projects Carousel Section */}
      <ProjectCarousel />

      {/* NEW: Project List Section (Alternating zig-zag style) */}
      <ParallaxSection offset={60}>
        <ProjectList />
      </ParallaxSection>

      {/* NEW: Data Analytics Section with Floating Phones */}
      <ParallaxSection offset={40}>
        <DataAnalyticsSection />
      </ParallaxSection>

      {/* NEW: Startup Pricing Section with Charts */}
      <ParallaxSection offset={100}>
        <section className="py-20 md:py-28 border-t border-slate-200/50 dark:border-slate-800/40">
          <PricingWithChart />
        </section>
      </ParallaxSection>
    </div>
  );
}
