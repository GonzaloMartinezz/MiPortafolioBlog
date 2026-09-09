"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiActivity, FiTarget, FiLayers, FiPieChart, FiMousePointer, FiArrowRight } from "react-icons/fi";
import { Warp } from "@paper-design/shaders-react";

export default function DataAnalyticsSection() {
  const features = [
    { icon: FiTrendingUp, title: "Análisis de Tráfico", desc: "Monitorea visitantes únicos y tiempos de sesión." },
    { icon: FiTarget, title: "Mapas de Calor", desc: "Descubre exactamente dónde hacen clic tus usuarios." },
    { icon: FiActivity, title: "Embudos de Conversión", desc: "Optimiza cada paso para convertir más clientes." },
    { icon: FiLayers, title: "A/B Testing", desc: "Prueba versiones para encontrar la que más vende." },
    { icon: FiPieChart, title: "Reportes en Tiempo Real", desc: "Visualiza el rendimiento de tu negocio en vivo." },
    { icon: FiMousePointer, title: "Segmentación Avanzada", desc: "Filtra métricas por dispositivo, ubicación y comportamiento." },
  ];

  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="relative w-full bg-transparent text-slate-900 py-24 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-16 lg:gap-24">
        
        {/* Top: Text Content */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 z-10 px-6">
          <div className="flex items-center gap-4 text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <div className="w-8 sm:w-12 h-[1px] bg-white/50"></div>
            DATA & ANALYTICS
            <div className="w-8 sm:w-12 h-[1px] bg-white/50"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            El análisis perfecto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-sm">
              para tu web.
            </span>
          </h2>

          <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
            Un diseño hermoso no es suficiente. Al lanzar tu sitio web, integramos 
            herramientas de análisis avanzado para entender el comportamiento real 
            de tus usuarios, medir qué funciona y maximizar tus conversiones.
          </p>
        </div>

        {/* Bottom: Shader Cards Grid */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const shaderConfig = getShaderConfig(index)
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative h-80 group cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <Warp
                      style={{ height: "100%", width: "100%" }}
                      proportion={shaderConfig.proportion}
                      softness={shaderConfig.softness}
                      distortion={shaderConfig.distortion}
                      swirl={shaderConfig.swirl}
                      swirlIterations={shaderConfig.swirlIterations}
                      shape={shaderConfig.shape}
                      shapeScale={shaderConfig.shapeScale}
                      scale={1}
                      rotation={0}
                      speed={0.8}
                      colors={shaderConfig.colors}
                    />
                  </div>

                  <div className="absolute inset-0 z-10 p-8 rounded-3xl h-full flex flex-col bg-black/40 border border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-black/20">
                    <div className="mb-6 filter drop-shadow-lg text-white">
                      <feature.icon size={48} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">{feature.title}</h3>

                    <p className="leading-relaxed flex-grow text-white/90 font-medium drop-shadow-sm">{feature.desc}</p>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
