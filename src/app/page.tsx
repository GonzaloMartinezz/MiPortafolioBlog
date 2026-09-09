"use client";
import Hero from "@/components/home/Hero";
import BrandSpeed from "@/components/home/BrandSpeed";
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
import MainLoader from "@/components/ui/MainLoader";
import TemplateHero from "@/components/home/TemplateHero";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <MainLoader />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Wave Transition between Hero and Dark Section */}
      <WaveDivider topColor="#FDF6EC" bottomColor="#0B0B0B" flip height="clamp(60px, 6vw, 100px)" />

      {/* Creapp App Showcase Section */}
      <div className="bg-[#0B0B0B] relative -mt-[1px]" id="creapp">
        <AppShowcase />
      </div>

      {/* Wave Transition (Right to Left / Flipped) */}
      <WaveDivider topColor="#0B0B0B" bottomColor="#FDF6EC" flip height="clamp(60px, 6vw, 100px)" />

      {/* Brand Speed Beige Section */}
      <div className="bg-[#FDF6EC] relative">
        <BrandSpeed />
      </div>

      {/* Business Strategy Section */}
      <div className="bg-[#111111] pb-12 relative z-10">
        <ParallaxSection>
          <BusinessStrategy />
        </ParallaxSection>
      </div>

      {/* Dual App Showcase Section (First Instance - Tarjeta Titanio) */}
      <div className="bg-gradient-to-b from-[#5BC0BE] to-[#BFE3FA] overflow-hidden relative">
        <DualAppShowcase 
          url="https://tarjetatitanio.vercel.app/"
          title={
            <>
              Innovación para <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e64c22] to-[#FF5E00]">
                Tarjeta Titanio.
              </span>
            </>
          }
          description="Contribuí activamente en el proceso de desarrollo web de la empresa, construyendo interfaces modernas y optimizando la arquitectura para brindar la mejor experiencia a miles de usuarios."
        />
      </div>

      {/* Projects Timeline/Showcase Section */}
      <div id="proyectos" className="bg-[#111111] py-12 relative overflow-hidden">
        <ParallaxSection offset={60}>
          <ProjectList />
        </ParallaxSection>
      </div>

      {/* Template Hero Preview Section */}
      <div className="relative" id="template-hero">
        <TemplateHero />
      </div>

      {/* Casos de Estudio Section */}
      <div className="bg-[#0B0B0B] py-10 relative" id="casos-de-estudio">
        <CasosDeEstudio />
      </div>

      {/* Dual App Showcase Section (Second Instance - Creapp) */}
      <div id="creapp" className="bg-gradient-to-b from-[#5BC0BE] to-[#BFE3FA] overflow-hidden relative">
        <DualAppShowcase 
          url="https://creapp-gamma.vercel.app/" 
          title={
            <>
              Conoce mi trabajo <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e64c22] to-[#FF5E00]">
                y mi visión.
              </span>
            </>
          }
          description="Desarrollé esta plataforma web para que mis futuros clientes puedan conocer en profundidad quién soy, la calidad de mi trabajo y los resultados de alto impacto que podemos lograr juntos."
        />
      </div>

      {/* NEW: Data Analytics Section */}
      <div className="bg-gradient-to-b from-[#5BC0BE] to-[#BFE3FA] py-12 relative overflow-hidden">
        <ParallaxSection offset={40}>
          <DataAnalyticsSection />
        </ParallaxSection>
      </div>

      {/* NEW: Startup Pricing Section */}
      <div className="bg-[#111111] pb-12 relative">
        <ParallaxSection offset={100}>
          <section className="py-20 md:py-28 border-t border-white/5">
            <PricingWithChart />
          </section>
        </ParallaxSection>
      </div>
    </div>
  );
}
