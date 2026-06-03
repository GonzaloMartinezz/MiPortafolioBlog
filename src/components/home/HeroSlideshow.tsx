"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const STEPS = [
  {
    id: "01",
    title: "Descubrimiento & Estrategia",
    description: "Analizamos a fondo tu modelo de negocio, definimos las metas operativas e investigamos detalladamente la experiencia ideal para tus usuarios.",
    icon: Search,
  },
  {
    id: "02",
    title: "Diseño UX/UI & Prototipado",
    description: "Creamos interfaces modernas de alta fidelidad. Diseñamos prototipos totalmente interactivos y navegables antes de comenzar a escribir código.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Desarrollo de Software ágil",
    description: "Programamos tu app con código escalable, limpio y testeado. Realizamos entregas continuas semanales en un servidor de pruebas dedicado.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Lanzamiento & Escalabilidad",
    description: "Publicamos tu app en las tiendas de Apple y Google o en servidores Cloud optimizados, y te brindamos soporte de infraestructura post-lanzamiento.",
    icon: Rocket,
  },
]

export default function AppDevelopmentSteps() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#040810]">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
          >
            Desarrollo tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">app ideal</span><br />
            para tus clientes.
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/80 via-amber-500/50 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0
              const Icon = step.icon

              return (
                <div key={step.id} className={`relative flex items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-end`}>
                  
                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#0a0a0a] border-2 border-orange-600/40 rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-orange-500" />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-[calc(100%-5rem)] md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="flex flex-col gap-5 p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 shadow-2xl hover:border-orange-500/30 hover:shadow-[0_20px_60px_rgba(249,115,22,0.1)] transition-all duration-500">
                      <span className="w-fit px-4 py-1.5 rounded-full bg-orange-600 font-black text-[10px] tracking-widest text-white uppercase shadow-lg shadow-orange-600/30">
                        PASO {step.id}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
