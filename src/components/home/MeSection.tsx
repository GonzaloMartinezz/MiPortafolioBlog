"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, TrendingUp, Award, MessageSquareQuote, CheckCircle } from "lucide-react";

export default function MeSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map the vertical scroll (0 to 1) to horizontal movement (0% to -75%)
  // Since we have 4 panels (each 100vw), we want to move exactly 3 panels left (-75% of total width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const stats = [
    { label: "Clientes Activos", value: "50+", icon: <Users className="w-6 h-6 text-yellow-500" /> },
    { label: "Proyectos Entregados", value: "120+", icon: <CheckCircle className="w-6 h-6 text-yellow-500" /> },
    { label: "Años de Experiencia", value: "6+", icon: <Award className="w-6 h-6 text-yellow-500" /> },
    { label: "Crecimiento", value: "300%", icon: <TrendingUp className="w-6 h-6 text-yellow-500" /> },
  ];

  const testimonials = [
    {
      name: "María Gómez",
      role: "CEO, TechStart",
      text: "Gonzalo transformó nuestra visión en una aplicación increíble. Su atención al detalle y enfoque en la experiencia de usuario superó nuestras expectativas.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Innovación, DataFlow",
      text: "El nivel de profesionalismo y la calidad del código son excepcionales. Entregó el proyecto a tiempo y con resultados sobresalientes.",
    },
    {
      name: "Ana Fernández",
      role: "Fundadora, Creative Studio",
      text: "Una colaboración fantástica. Entendió perfectamente la estética que buscábamos y la implementó con animaciones fluidas y modernas.",
    }
  ];

  const clients = [
    "TechStart", "DataFlow", "Creative Studio", "Global Solutions", "NextGen", "AlphaCorp"
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-slate-50 dark:bg-slate-950/50">
      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Animated container that moves horizontally */}
        <motion.div style={{ x }} className="flex w-[400vw]">
          
          {/* Panel 1: Sobre Mi */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl animate-blob pointer-events-none"></div>
            <h2 className="text-[20vw] sm:text-[15vw] leading-none font-bold gradient-text tracking-tighter opacity-5 dark:opacity-10 absolute bottom-10 left-10 pointer-events-none select-none">
              HOLA!
            </h2>
            <div className="max-w-3xl relative z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 font-semibold mb-6 border border-yellow-400/20 text-sm sm:text-base">
                La Persona Detrás del Código
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-slate-800 dark:text-white leading-tight">
                Mucho más que un <br />
                <span className="gradient-text">Desarrollador</span>.
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Soy Gonzalo Martínez. Me especializo en crear experiencias digitales fluidas, escalables y visualmente impactantes. Combino lógica analítica con estética premium para construir productos que destacan.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
          </div>

          {/* Panel 2: Estadísticas */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10 sm:mb-16 text-slate-800 dark:text-white">
              El impacto en <span className="gradient-text">Números</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 sm:p-8 hover-lift border-slate-200 dark:border-white/10 dark:bg-white/5 bg-white/80 shadow-sm sm:shadow-md">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                    {stat.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-1 sm:mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium text-base sm:text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 3: Clientes */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-yellow-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
            <div className="text-center mb-10 sm:mb-16 relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">
                Han confiado en mi <span className="gradient-text">Trabajo</span>
              </h3>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                Desde startups innovadoras hasta empresas consolidadas, ayudando a transformar sus ideas en realidades digitales.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto relative z-10 w-full px-4 sm:px-0">
              {clients.map((client, idx) => (
                <div key={idx} className="flex items-center justify-center p-6 sm:p-8 glass-card border-slate-200 dark:border-white/10 dark:bg-white/5 bg-white/80 shadow-sm sm:shadow-md hover-glow group transition-all duration-300">
                  <span className="text-xl sm:text-2xl font-bold text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 text-center">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 4: Opiniones */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
              <MessageSquareQuote className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500" />
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 dark:text-white">
                Lo que <span className="gradient-text">Dicen</span> de mi
              </h3>
            </div>
            <div className="flex gap-6 sm:gap-8 overflow-visible max-w-7xl">
              {testimonials.map((test, idx) => (
                <div key={idx} className="w-[300px] sm:w-[400px] shrink-0 glass-card p-6 sm:p-10 border-slate-200 dark:border-white/10 dark:bg-white/5 bg-white/80 shadow-md hover-lift relative group">
                  <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity">
                    <MessageSquareQuote className="w-16 h-16 sm:w-24 sm:h-24 text-slate-800 dark:text-white" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 italic leading-relaxed">
                      "{test.text}"
                    </p>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {test.name}
                      </div>
                      <div className="text-yellow-600 dark:text-yellow-500 font-medium text-sm sm:text-base">
                        {test.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Extra padding at the end of scroll to allow full view */}
              <div className="w-[10vw] shrink-0"></div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
