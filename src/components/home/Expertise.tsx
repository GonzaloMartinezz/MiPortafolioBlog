"use client"

import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow"
import { motion } from "framer-motion"

const SLIDES = [
  {
    id: "slide-1",
    title: "1. Lógica de tu negocio",
    subtitle: "Análisis de requerimientos y objetivos clave",
    imageUrl: "/GoStats.png",
  },
  {
    id: "slide-2",
    title: "2. Diseño UX/UI",
    subtitle: "Creación de interfaces modernas y atractivas",
    imageUrl: "/loginncoc&m.png",
  },
  {
    id: "slide-3",
    title: "3. Arquitectura de datos",
    subtitle: "Estructuración de información y bases de datos",
    imageUrl: "/ClickHouse.png",
  },
  {
    id: "slide-4",
    title: "4. Producto final",
    subtitle: "Despliegue y ejecución de la aplicación terminada",
    imageUrl: "/bachstage.png",
  },
]

export default function Expertise() {
  return (
    <HoverSlider className="w-full py-12 md:py-20 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-1 mb-4 text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
            METODOLOGÍA
          </span>
          <br />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Pasos para desarrollar la app {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              de tu negocio
            </span>
          </h2>
        </motion.div>

        {/* Interactive Slideshow */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Text Hover Items */}
          <div className="flex flex-col space-y-5 sm:space-y-6 md:space-y-8 w-full lg:w-1/2">
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="flex flex-col">
                <TextStaggerHover
                  index={index}
                  className="cursor-pointer text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white"
                  text={slide.title}
                />
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 font-medium max-w-sm">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Image Preview */}
          <div className="w-full lg:w-1/2">
            <HoverSliderImageWrap className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-slate-700/50">
              {SLIDES.map((slide, index) => (
                <div key={slide.id}>
                  <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </div>
      </div>
    </HoverSlider>
  )
}
