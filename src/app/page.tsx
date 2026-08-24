"use client";
import Hero from "@/components/home/Hero";
import BrandSpeed from "@/components/home/BrandSpeed";
import Projects from "@/components/home/Projects";
import ProjectsByCategory from "@/components/home/ProjectsByCategory";
import { HeroScrollDemo } from "@/components/home/HeroScrollDemo";

import CasosDeEstudio from "@/components/home/CasosDeEstudio";
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
import AppShowcase from "@/components/home/AppShowcase";
import DualAppShowcase from "@/components/home/DualAppShowcase";

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

      {/* Wave Transition between Hero and Dark Section */}
      <WaveDivider topColor="#FDF6EC" bottomColor="#0B0B0B" height="clamp(150px, 15vw, 300px)" />

      {/* Creapp App Showcase Section */}
      <div className="bg-[#0B0B0B]" id="creapp">
        <AppShowcase />
      </div>

      {/* Wave Transition (Right to Left / Flipped) */}
      <WaveDivider topColor="#0B0B0B" bottomColor="#FDF6EC" flip height="clamp(150px, 15vw, 300px)" />

      {/* Brand Speed Beige Section */}
      <div className="bg-[#FDF6EC]">
        <BrandSpeed />
      </div>

      <WaveDivider topColor="#FDF6EC" bottomColor="#111111" flip />

      {/* Business Strategy Section */}
      <div className="bg-[#111111] pb-12 relative z-10">
        <ParallaxSection>
          <BusinessStrategy />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#111111" bottomColor="#5BC0BE" height="clamp(100px, 10vw, 200px)" />

      {/* Dual App Showcase Section (Laptop + Mobile view of Club Belgrano) */}
      <div className="bg-gradient-to-b from-[#5BC0BE] to-[#BFE3FA] overflow-hidden relative -mt-[1px]">
        <DualAppShowcase />
      </div>

      <WaveDivider topColor="#BFE3FA" bottomColor="#050505" flip height="clamp(100px, 10vw, 200px)" />

      {/* NEW: Project List Section */}
      <div className="bg-[#050505] py-12" id="proyectos">
        <ParallaxSection offset={60}>
          <ProjectList />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#050505" bottomColor="#0B0B0B" />
      
      {/* Casos de Estudio Section */}
      <div className="bg-[#0B0B0B] py-10" id="casos-de-estudio">
        <CasosDeEstudio />
      </div>

      <WaveDivider topColor="#0B0B0B" bottomColor="#5BC0BE" height="clamp(100px, 10vw, 200px)" />

      {/* NEW: Data Analytics Section */}
      <div className="bg-gradient-to-b from-[#5BC0BE] to-[#BFE3FA] py-12 relative overflow-hidden -mt-[1px]">
        <ParallaxSection offset={40}>
          <DataAnalyticsSection />
        </ParallaxSection>
      </div>

      <WaveDivider topColor="#BFE3FA" bottomColor="#111111" flip height="clamp(100px, 10vw, 200px)" />

      {/* NEW: Startup Pricing Section */}
      <div className="bg-[#111111] pb-12">
        <ParallaxSection offset={100}>
          <section className="py-20 md:py-28 border-t border-white/5">
            <PricingWithChart />
          </section>
        </ParallaxSection>
      </div>

      {/* Wave Transition into Footer */}
      <WaveDivider topColor="#111111" bottomColor="#FDF6EC" height="clamp(150px, 15vw, 300px)" />
    </div>
  );
}
