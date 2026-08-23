"use client";
import Hero from "@/components/home/Hero";
import BrandSpeed from "@/components/home/BrandSpeed";
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
import { WaveDivider } from "@/components/ui/WaveDivider";

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

      <WaveDivider topColor="#FDF6EC" bottomColor="#0B0B0B" />

      {/* Brand Speed Dark Section */}
      <div className="bg-[#0B0B0B]">
        <BrandSpeed />
      </div>

      <WaveDivider topColor="#0B0B0B" bottomColor="#111111" flip />

      {/* NEW: Business Strategy Section */}
      <div className="bg-[#111111] pb-12">
        <ParallaxSection>
          <BusinessStrategy />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#111111" bottomColor="#050505" />

      {/* NEW: Capabilities Bento Section */}
      <div className="bg-[#050505] py-12">
        <ParallaxSection offset={80}>
          <CapabilitiesSection />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#050505" bottomColor="#0B0B0B" flip />

      {/* Scroll Animation Section */}
      <div className="bg-[#0B0B0B] py-12">
        <HeroScrollDemo />
      </div>

      <WaveDivider topColor="#0B0B0B" bottomColor="#111111" />

      {/* Featured Projects Carousel Section */}
      <div className="bg-[#111111] py-12">
        <ProjectCarousel />
      </div>

      <WaveDivider topColor="#111111" bottomColor="#050505" flip />

      {/* NEW: Project List Section */}
      <div className="bg-[#050505] py-12">
        <ParallaxSection offset={60}>
          <ProjectList />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#050505" bottomColor="#0B0B0B" />

      {/* NEW: Data Analytics Section */}
      <div className="bg-[#0B0B0B] py-12">
        <ParallaxSection offset={40}>
          <DataAnalyticsSection />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#0B0B0B" bottomColor="#111111" flip />

      {/* NEW: Startup Pricing Section */}
      <div className="bg-[#111111] pb-24">
        <ParallaxSection offset={100}>
          <section className="py-20 md:py-28 border-t border-white/5">
            <PricingWithChart />
          </section>
        </ParallaxSection>
      </div>
    </div>
  );
}
