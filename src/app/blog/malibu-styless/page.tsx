"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaClock, FaLaptopCode, FaStar, FaExclamationTriangle, FaLightbulb, FaCheckCircle, FaShoppingCart, FaChartBar, FaBoxes } from "react-icons/fa";
import { FiMonitor, FiActivity, FiTarget, FiBox } from "react-icons/fi";

export default function CaseStudyMalibuStyle() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 font-sans text-white/80 selection:bg-[#F66C44]/30 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-32 pb-16 px-4 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-[#F66C44]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-full flex justify-start mb-8 md:mb-12">

            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-2 text-white/40 hover:text-[#F66C44] text-[10px] font-black uppercase tracking-[0.2em] transition-colors group">

              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver a Casos de Estudio

            </Link>

          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-amber-400 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">
            E-commerce & SaaS
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Malibu Style – E-commerce Customizado <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#F66C44]">y Arquitectura Escalable</span>
          </motion.h1>

          {/* FICHA TÉCNICA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaLaptopCode className="text-amber-400" />
              <span>E-commerce (Marca Personal) & Plantilla SaaS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCheckCircle className="text-[#F66C44]" />
              <span>Fundador & Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaStar className="text-yellow-400" />
              <span className="text-yellow-400 font-bold">5.0</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto px-4 mt-16 space-y-24">
        
        {/* 📌 EL CONTEXTO Y EL RESUMEN */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <FaShoppingCart size={120} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="p-3 bg-amber-500/10 text-amber-400 rounded-xl"><FiActivity /></span>
              El Contexto y el Resumen
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              Fundé y desarrollé desde cero <strong>Malibu Style</strong>, una marca personal de indumentaria impulsada por una plataforma de comercio electrónico propia. En lugar de depender de soluciones enlatadas de terceros, construí un sistema integral con pasarela de pagos, logística automatizada y un panel administrativo propio. Además, diseñé la arquitectura del proyecto de forma tan modular que logré extraer el núcleo del código para crear una plantilla de e-commerce (tipo supermercado online) totalmente reutilizable para otros rubros.
            </p>
          </div>
        </motion.section>

        {/* ⚠️ EL DESAFÍO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pl-6 border-l-4 border-[#F66C44]">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="text-[#F66C44]" />
              El Desafío (El Problema Real)
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Al lanzar una marca de indumentaria, el mayor obstáculo es la dependencia de plataformas genéricas que limitan el control sobre la experiencia del usuario, cobran altas comisiones y no permiten una gestión de datos profunda.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              El desafío era doble: por un lado, brindar a mis clientes una <strong>experiencia de compra fluida, rápida y segura</strong> sin salir del sitio; y por el otro, tener el <strong>control absoluto del backend</strong> para analizar las métricas del negocio, entender qué productos funcionaban mejor y optimizar el crecimiento de la marca sin cuellos de botella técnicos.
            </p>
          </div>
        </motion.section>

        {/* 🎯 EL OBJETIVO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 flex items-center gap-3">
              <FiTarget className="text-amber-400" />
              El Objetivo
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              Desarrollar un canal de ventas independiente y altamente escalable. Para el cliente final, el objetivo era una navegación intuitiva con pagos y envíos automatizados. Para mí, como dueño del negocio, el objetivo era contar con un dashboard de administración centralizado que me permitiera gestionar el inventario en tiempo real y tomar decisiones estratégicas basadas en el análisis de datos puros.
            </p>
          </div>
        </motion.section>

        {/* 💡 LA SOLUCIÓN */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 flex items-center gap-3 justify-center text-center">
            <FaLightbulb className="text-yellow-400" />
            La Solución
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Para lograr el máximo rendimiento y control, dividí el desarrollo en tres pilares fundamentales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiMonitor />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experiencia del Cliente</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Interfaz rápida enfocada en conversión. Integración con la API de MercadoPago para cobros transparentes y la API de Andreani para cotización y seguimiento logístico en tiempo real sin salir del sitio.
              </p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#F66C44]/30 transition-colors">
              <div className="w-12 h-12 bg-[#F66C44]/10 text-[#F66C44] rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dashboard Administrativo</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Panel a medida para carga de productos y control de stock que además cruza datos de ventas para mostrar métricas clave, permitiendo visualizar el comportamiento e identificar tendencias.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiBox />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitectura Modular</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Abstracción del motor del e-commerce separando lógica de la interfaz. Esto derivó en una plantilla escalable y reutilizable adaptable rápidamente a un supermercado online u otras industrias.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ⚙️ STACK TECNOLÓGICO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0A0A0A] p-8 md:p-12 rounded-[2.5rem] border border-white/5">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
            ⚙️ Stack Tecnológico
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Frontend</span>
              <span className="text-white font-medium">React / Vite</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Backend</span>
              <span className="text-white font-medium">Node.js / Express</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Base de Datos</span>
              <span className="text-white font-medium">PostgreSQL / MongoDB</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Infraestructura</span>
              <span className="text-white font-medium">Vercel & Render</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center flex-wrap gap-4">
             <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-amber-500/50 transition-colors">API MercadoPago</span>
             <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-amber-500/50 transition-colors">API Andreani</span>
          </div>
        </motion.section>

        {/* 🚀 IMPACTO Y RESULTADOS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-amber-500/10 rounded-[2.5rem] border border-amber-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              🚀 Impacto y Resultados
            </h2>
            <p className="text-lg md:text-xl text-amber-100/80 leading-relaxed max-w-3xl mx-auto mb-6">
              El desarrollo de Malibu Style me permitió validar un modelo de negocio real manejando el ciclo de vida completo del producto. Para los clientes, logré una experiencia de compra profesional y confiable. A nivel técnico, la creación del dashboard me brindó una ventaja competitiva enorme al poder analizar grandes volúmenes de información transaccional para mejorar la marca.
            </p>
            <p className="text-lg md:text-xl text-amber-100/80 leading-relaxed max-w-3xl mx-auto">
              Como valor agregado, el proyecto derivó en la <strong>creación de un activo digital secundario</strong> (la plantilla reutilizable), demostrando mi capacidad para crear software adaptable a múltiples industrias.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
