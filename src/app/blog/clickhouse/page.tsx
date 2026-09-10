"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaBuilding, FaHandshake, FaDesktop, FaMobileAlt, FaDatabase, FaLaptopCode, FaCheckCircle, FaStar, FaWhatsapp, FaCalendar, FaClock } from "react-icons/fa";
import { FiActivity, FiLayout, FiMessageCircle, FiSettings } from "react-icons/fi";

export default function CaseStudyClickhouse() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 font-sans text-white/80 selection:bg-emerald-500/30 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-32 pb-16 px-4 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        {/* Glow Effects - Emerald/Teal theme for Real Estate */}
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-full flex justify-start mb-8 md:mb-12">

            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-2 text-white/40 hover:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group">

              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver a Casos de Estudio

            </Link>

          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Real Estate & PropTech
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Clickhouse: Plataforma Inmobiliaria <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">para Gestión y Venta Directa</span>
          </motion.h1>

          {/* FICHA TÉCNICA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCalendar className="text-emerald-400" />
              <span>Marzo 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaClock className="text-emerald-400" />
              <span>1 mes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaLaptopCode className="text-emerald-400" />
              <span>Desarrollo Web & Dashboard Admin</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCheckCircle className="text-teal-400" />
              <span>Full Stack Developer</span>
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
              <FaBuilding size={120} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><FiActivity /></span>
              El Contexto y el Resumen
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10 mb-6">
              Un canal de comercialización independiente diseñado para eludir intermediarios tradicionales, permitiendo la gestión centralizada de una cartera de propiedades.
            </p>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              Esta plataforma devuelve el control total al propietario, priorizando el contacto directo, la confianza y la eliminación de comisiones externas en operaciones de venta y alquiler.
            </p>
          </div>
        </motion.section>



        {/* ⚠️ EL DESAFÍO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pl-6 border-l-4 border-emerald-400">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              01. El Desafío
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              El mercado inmobiliario y de alquileres temporarios está dominado por plataformas de terceros (como Airbnb o Booking) que, si bien aportan visibilidad, imponen altas comisiones, dictan las reglas de cancelación y despersonalizan por completo la relación entre el dueño y el inquilino o comprador.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              El cliente necesitaba romper con esta dependencia. El desafío principal consistía en construir un ecosistema digital propio que transmitiera el mismo nivel de seguridad y profesionalismo que los gigantes del sector, pero con un objetivo radicalmente distinto: fomentar el contacto directo (1 a 1).
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Se requería un sistema donde el propietario pudiera mostrar el valor real de sus inmuebles con lujo de detalles, facilitando una negociación directa ("el lleva y trae") para construir un vínculo de confianza genuino con el cliente final.
            </p>
          </div>
        </motion.section>



        {/* 💡 LA SOLUCIÓN */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">
            02. La Solución
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Se desarrolló "Clickhouse", una aplicación web a medida estructurada en dos frentes principales: una interfaz pública atractiva para la conversión de prospectos y un panel de administración privado de alto rendimiento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiSettings />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Panel de Gestión (Backoffice)</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Se construyó un dashboard intuitivo donde el cliente puede dar de alta cada propiedad. Este módulo permite ingresar especificaciones exhaustivas: metraje, costos exactos, nivel de equipamiento, disponibilidad y galerías de imágenes.
              </p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-teal-500/30 transition-colors">
              <div className="w-12 h-12 bg-teal-500/10 text-teal-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Catálogo Digital Optimizado</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Se diseñó una interfaz de usuario fluida y visualmente impactante, orientada a destacar los atributos de cada departamento o casa. La navegación permite a los usuarios filtrar y explorar las propiedades de manera ágil.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Módulo de Contacto Directo</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                En lugar de un botón de "Reserva Automática" que bloquea el calendario, se implementaron flujos de contacto directo (formularios de consulta y redirección a WhatsApp) para calificar al cliente y negociar de forma personalizada.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitectura Independiente</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                El sistema se construyó con un enfoque de alta escalabilidad, garantizando tiempos de carga rápidos para las galerías de imágenes y un entorno seguro para alojar la información estratégica del negocio.
              </p>
            </div>
          </div>
        </motion.section>



        {/* 🚀 IMPACTO Y RESULTADOS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-tr from-emerald-900/20 to-teal-900/10 rounded-[2.5rem] border border-emerald-500/20">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
              03. El Resultado
            </h2>
            <p className="text-lg text-emerald-100/80 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              La implementación de Clickhouse transformó la forma en que el cliente comercializa sus desarrollos y alquileres, logrando una independencia tecnológica y comercial absoluta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <FaDesktop className="text-emerald-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Eliminación de Intermediarios</h4>
                  <p className="text-white/60 text-sm">Reducción a cero de las comisiones pagadas a plataformas de terceros, maximizando el margen de ganancia en cada alquiler o venta concretada.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaHandshake className="text-teal-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Construcción de Confianza</h4>
                  <p className="text-white/60 text-sm">Al interactuar directamente desde el primer momento, el propietario logró establecer relaciones más transparentes y seguras con sus clientes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaDatabase className="text-green-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Control Total de la Información</h4>
                  <p className="text-white/60 text-sm">El cliente ahora posee el control absoluto sobre cómo se exhiben sus propiedades, pudiendo actualizar precios y descripciones en tiempo real.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiLayout className="text-cyan-400 text-3xl shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Gestión Centralizada</h4>
                  <p className="text-white/60 text-sm">El proceso de mostrar propiedades pasó de ser un intercambio caótico de fotos a un enlace profesional y estructurado, elevando la percepción de la marca.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
