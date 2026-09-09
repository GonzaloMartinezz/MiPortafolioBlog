"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDatabase, FaShieldAlt, FaChartPie, FaMobileAlt, FaLaptopCode, FaCheckCircle, FaStar, FaBasketballBall } from "react-icons/fa";
import { FiActivity, FiServer, FiLayout, FiImage } from "react-icons/fi";

export default function CaseStudyClubBelgrano() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 font-sans text-white/80 selection:bg-sky-500/30 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-32 pb-16 px-4 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        {/* Glow Effects - Celeste/Cyan theme */}
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-full flex justify-start mb-8 md:mb-12">

            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-2 text-white/40 hover:text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group">

              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver a Casos de Estudio

            </Link>

          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-sky-400 uppercase bg-sky-500/10 rounded-full border border-sky-500/20">
            ERP & Business Intelligence
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Plataforma Integral y BI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">para Club Belgrano Cultural y Deportivo</span>
          </motion.h1>

          {/* FICHA TÉCNICA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaLaptopCode className="text-sky-400" />
              <span>ERP & BI (Club Belgrano C y D)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCheckCircle className="text-cyan-400" />
              <span>Full Stack Developer & Data Analyst</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaStar className="text-yellow-400" />
              <span className="text-yellow-400 font-bold">5.0</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto px-4 mt-16 space-y-20">
        
        {/* 📌 EL CONTEXTO Y EL RESUMEN */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <FaBasketballBall size={120} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="p-3 bg-sky-500/10 text-sky-400 rounded-xl"><FiActivity /></span>
              El Contexto y el Resumen
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10 mb-6">
              Diseñé y desarrollé una solución de gestión deportiva completa que fusiona el control administrativo con el análisis de datos en tiempo real. Este sistema no solo administra la información puramente deportiva (jugadores, socios, partidos), sino que automatiza los procesos críticos del negocio del club, como finanzas, ventas y stock de utilería.
            </p>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              Una solución de software completa diseñada para transformar la administración operativa y deportiva de un club, centralizando toda la información en paneles avanzados de Inteligencia de Negocios (BI) de alta seguridad.
            </p>
          </div>
        </motion.section>

        {/* 📸 IMAGEN 1 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full relative rounded-[2rem] border border-white/10 overflow-hidden group shadow-[0_0_50px_rgba(56,189,248,0.1)]">
          <img src="/BLOGCYDEQUIPO.png" alt="Dashboard de Gestión de Equipo" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* ⚠️ EL DESAFÍO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pl-6 border-l-4 border-sky-400">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              01. El Desafío
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Los clubes deportivos suelen enfrentarse a un problema operativo grave: manejan su información de manera fragmentada, perdiendo tiempo y recursos en tareas repetitivas. Las finanzas y el pago de cuotas de socios van por un lado, el stock de indumentaria por otro, y las estadísticas deportivas en planillas de papel o Excels básicos.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              El objetivo principal fue desarrollar una solución robusta y unificada que lograra automatizar los procesos críticos (Ventas, Stock, Finanzas) para evitar fugas de dinero, y proporcionar Inteligencia de Negocios (BI) para que la comisión directiva pudiera tomar decisiones basadas en datos reales.
            </p>
          </div>
        </motion.section>

        {/* 📸 IMAGEN 2 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full relative rounded-[2rem] border border-white/10 overflow-hidden group shadow-[0_0_50px_rgba(34,211,238,0.1)]">
          <img src="/BLOGESTADISTICASCYD.png" alt="Módulo de Estadísticas Deportivas" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* 💡 LA SOLUCIÓN */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">
            02. La Solución
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Se diseñó una arquitectura de software escalable, modular y altamente segura, combinando tecnologías de alto rendimiento para garantizar fluidez tanto en la gestión diaria como en la visualización de datos en vivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-sky-500/30 transition-colors">
              <div className="w-12 h-12 bg-sky-500/10 text-sky-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiServer />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitectura Fullstack</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Backend estructurado en .NET Core para el manejo robusto de lógica de negocios y transacciones financieras, conectado a un Frontend dinámico desarrollado en React.
              </p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiActivity />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sincronización en Tiempo Real</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Módulo para gestión deportiva integrando Socket.IO, permitiendo la transmisión de estadísticas de partidos (goles, faltas, cambios) al instante, sin recargar la página.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seguridad y Autenticación</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Autenticación estricta basada en roles (JWT/RBAC) para separar de manera segura las interfaces y permisos entre administradores financieros, cuerpo técnico y socios.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">BI & Almacenamiento Cloud</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Integración con AWS S3 para optimización de imágenes (fotos de jugadores/escudos) y creación de un Data Warehouse conectado a paneles interactivos en Power BI.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 📸 IMAGEN 3 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full relative rounded-[2rem] border border-white/10 overflow-hidden group shadow-[0_0_50px_rgba(99,102,241,0.1)]">
          <img src="/BLOGSHOPCYD.png" alt="Módulo Administrativo y Tienda del Club" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* ⚙️ STACK TECNOLÓGICO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0A0A0A] p-8 md:p-12 rounded-[2.5rem] border border-white/5">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
            ⚙️ Stack Tecnológico
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Frontend</span>
              <span className="text-white font-medium">React</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Backend</span>
              <span className="text-white font-medium">.NET Core</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Data & BI</span>
              <span className="text-white font-medium">Power BI</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Cloud & Storage</span>
              <span className="text-white font-medium">AWS S3</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center flex-wrap gap-4">
             <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-sky-500/50 transition-colors">Socket.IO</span>
             <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-sky-500/50 transition-colors">JWT / RBAC</span>
             <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-sky-500/50 transition-colors">Vercel & Render</span>
          </div>
        </motion.section>

        {/* 🚀 IMPACTO Y RESULTADOS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-tr from-sky-900/40 to-cyan-900/20 rounded-[2.5rem] border border-sky-500/20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              03. El Resultado
            </h2>
            <p className="text-lg text-sky-100/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              La digitalización completa del flujo de trabajo del club generó un impacto medible y casi inmediato en la operatividad diaria de la institución:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <FaChartPie className="text-sky-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Eficiencia Operativa</h4>
                  <p className="text-white/60 text-sm">Reducción del 30% en errores manuales relacionados con la carga de datos administrativos, control de inventario y conciliación de pagos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiActivity className="text-cyan-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Visibilidad 360°</h4>
                  <p className="text-white/60 text-sm">La integración de Power BI permitió a la directiva evaluar la rentabilidad del club, el estado de morosidad y el rendimiento deportivo desde un único centro de comando.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiServer className="text-blue-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Decisiones Estratégicas</h4>
                  <p className="text-white/60 text-sm">La disponibilidad de estadísticas históricas y en vivo facilitó la planificación de presupuestos, compra inteligente de stock y asignación de recursos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaMobileAlt className="text-indigo-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Experiencia Institucional</h4>
                  <p className="text-white/60 text-sm">Los tiempos de respuesta optimizados del sistema agilizaron el trabajo del staff administrativo, mejorando la atención a los socios y la imagen del club.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
