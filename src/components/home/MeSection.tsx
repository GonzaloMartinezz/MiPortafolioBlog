"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, TrendingUp, Award, MessageSquareQuote, CheckCircle } from "lucide-react";

export default function MeSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] // FIX: Ensures scroll maps exactly to the sticky section height
  });

  // Map the vertical scroll (0 to 1) to horizontal movement (0% to -75%)
  // Since we have 4 panels (each 100vw), we want to move exactly 3 panels left (-75% of total width)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const stats = [
    { label: "Clientes Activos", value: "50+", icon: <Users className="w-6 h-6 text-[#F66C44]" /> },
    { label: "Proyectos Entregados", value: "120+", icon: <CheckCircle className="w-6 h-6 text-[#F66C44]" /> },
    { label: "Años de Experiencia", value: "6+", icon: <Award className="w-6 h-6 text-[#F66C44]" /> },
    { label: "Crecimiento", value: "300%", icon: <TrendingUp className="w-6 h-6 text-[#F66C44]" /> },
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
    <section ref={targetRef} className="relative h-[400vh] bg-[#0B0B0B]">
      {/* Sticky container that stays in view while scrolling */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Animated container that moves horizontally */}
        <motion.div style={{ x }} className="flex w-[400vw]">
          
          {/* Panel 1: Sobre Mi */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative overflow-hidden">
            {/* Aesthetic Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#F66C44]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#F66C44]/5 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-[20vw] sm:text-[15vw] leading-none font-black text-[#F66C44]/5 tracking-tighter absolute bottom-10 left-10 pointer-events-none select-none">
              HOLA!
            </h2>
            <div className="max-w-3xl relative z-10">
              <span className="inline-block py-2 px-5 rounded-full bg-[#F66C44]/10 text-[#F66C44] font-semibold mb-6 border border-[#F66C44]/20 text-sm sm:text-base tracking-wide">
                La Persona Detrás del Código
              </span>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 text-white leading-tight">
                Mucho más que un <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">Desarrollador</span>.
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 leading-relaxed max-w-2xl font-light">
                Soy Gonzalo Martínez. Me especializo en crear experiencias digitales fluidas, escalables y visualmente impactantes. Combino lógica analítica con estética premium para construir productos que destacan.
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F66C44] to-[#FCD100] rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Panel 2: Estadísticas */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-10 sm:mb-16 text-white">
              El impacto en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">Números</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#111111] border border-white/5 p-6 sm:p-8 rounded-3xl hover:border-white/10 hover:bg-[#151515] hover:-translate-y-2 transition-all duration-300 shadow-2xl group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-white/50 font-medium text-base sm:text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 3: Clientes */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#F66C44]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="text-center mb-10 sm:mb-16 relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6">
                Han confiado en mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">Trabajo</span>
              </h3>
              <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto px-4 font-light">
                Desde startups innovadoras hasta empresas consolidadas, ayudando a transformar sus ideas en realidades digitales.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto relative z-10 w-full px-4 sm:px-0">
              {clients.map((client, idx) => (
                <div key={idx} className="flex items-center justify-center p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-3xl hover:border-white/20 hover:bg-white/5 transition-all duration-300 group cursor-default">
                  <span className="text-xl sm:text-2xl font-bold text-white/40 group-hover:text-white transition-colors duration-300 text-center">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 4: Opiniones */}
          <div className="h-screen w-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 shrink-0 relative">
            <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
              <MessageSquareQuote className="w-10 h-10 sm:w-14 sm:h-14 text-[#F66C44]" />
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white">
                Lo que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">Dicen</span> de mi
              </h3>
            </div>
            <div className="flex gap-6 sm:gap-8 overflow-visible max-w-7xl">
              {testimonials.map((test, idx) => (
                <div key={idx} className="w-[300px] sm:w-[450px] shrink-0 bg-[#111111] p-8 sm:p-12 border border-white/5 rounded-[40px] shadow-2xl relative group hover:border-[#F66C44]/20 hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MessageSquareQuote className="w-20 h-20 text-[#F66C44]" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 font-light leading-relaxed italic">
                      "{test.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F66C44] to-[#FCD100] flex items-center justify-center text-black font-bold text-xl">
                        {test.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white">
                          {test.name}
                        </div>
                        <div className="text-[#F66C44] font-medium text-sm sm:text-base">
                          {test.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
