"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaClock, FaLaptopCode, FaStar, FaExclamationTriangle, FaLightbulb, FaCheckCircle, FaChartLine, FaServer, FaShieldAlt } from "react-icons/fa";
import { FiMonitor, FiActivity, FiTarget } from "react-icons/fi";

export default function CaseStudyTarjetaTitanio() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 font-sans text-white/80 selection:bg-[#F66C44]/30 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-32 pb-16 px-4 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-[#F66C44]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-full flex justify-start mb-8 md:mb-12">

            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-2 text-white/40 hover:text-[#F66C44] text-[10px] font-black uppercase tracking-[0.2em] transition-colors group">

              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver a Casos de Estudio

            </Link>

          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
            Finanzas & Dashboards
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Plataforma Digital y Dashboards <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#F66C44]">para Tarjeta Titanio</span>
          </motion.h1>

          {/* FICHA TÉCNICA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCalendar className="text-purple-400" />
              <span>Julio 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaClock className="text-purple-400" />
              <span>2 meses</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaLaptopCode className="text-[#F66C44]" />
              <span>Full Stack Web Dev</span>
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
        
        {/* 📌 CONTEXTO GENERAL */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <FaChartLine size={120} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="p-3 bg-purple-500/10 text-purple-400 rounded-xl"><FiActivity /></span>
              Contexto General
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              Desarrollo de ecosistema digital interno para <strong>Tarjeta Titanio</strong>, una entidad financiera enfocada en brindar soluciones de crédito. El proyecto fue creado para modernizar la infraestructura interna y cubrir la necesidad básica de tener acceso rápido, seguro y centralizado a los datos de clientes, transacciones y métricas financieras en tiempo real.
            </p>
          </div>
        </motion.section>

        {/* ⚠️ EL DESAFÍO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="pl-6 border-l-4 border-[#F66C44]">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="text-[#F66C44]" />
              El Desafío
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              La empresa enfrentaba procesos de gestión mayormente manuales, lo que generaba cuellos de botella severos en la atención al cliente y en la validación de operaciones.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              La <strong>falta de sincronización de datos en tiempo real</strong> entre las distintas sucursales hacía imprescindible construir una plataforma digital escalable desde cero, capaz de manejar altos volúmenes de datos financieros sin comprometer el rendimiento.
            </p>
          </div>
        </motion.section>

        {/* 🎯 EL OBJETIVO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 flex items-center gap-3">
              <FiTarget className="text-purple-400" />
              El Objetivo
            </h2>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              "Diseñar y desplegar una aplicación web fullstack que centralice la gestión operativa, optimice drásticamente los tiempos de respuesta y ofrezca una experiencia de usuario fluida y moderna, garantizando estrictos estándares de seguridad financiera."
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
            Resolvimos el desafío mediante una reestructuración profunda desde la ingeniería del software y el diseño de experiencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaServer />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitectura</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Creación de una API REST robusta y un frontend basado en componentes modulares e independientes para facilitar el mantenimiento y escalabilidad.
              </p>
            </div>
            
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#F66C44]/30 transition-colors">
              <div className="w-12 h-12 bg-[#F66C44]/10 text-[#F66C44] rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiMonitor />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diseño de Interfaz</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Implementación de una UI enfocada en la usabilidad, con estética dark-mode premium y alto contraste para facilitar la lectura de datos numéricos.
              </p>
            </div>

            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Despliegue</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Puesta en producción mediante contenedores, asegurando la integridad de los datos transaccionales y alta disponibilidad del servicio 24/7.
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
              <span className="text-white font-medium">React / Next.js</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Backend</span>
              <span className="text-white font-medium">Node.js</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Base de Datos</span>
              <span className="text-white font-medium">PostgreSQL</span>
            </div>
            <div className="text-center p-6 bg-[#111] rounded-2xl border border-white/5">
              <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Infraestructura</span>
              <span className="text-white font-medium">Docker / Vercel</span>
            </div>
          </div>
        </motion.section>

        {/* 📈 RESULTADOS E IMPACTO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-purple-500/10 rounded-[2.5rem] border border-purple-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              📈 Resultados e Impacto
            </h2>
            <p className="text-lg md:text-xl text-purple-100/80 leading-relaxed max-w-3xl mx-auto">
              La implementación de este ecosistema logró una <strong>digitalización completa del flujo de trabajo de la organización</strong>. Se consiguió una automatización clave de tareas repetitivas, mejorando radicalmente la eficiencia en la gestión de usuarios y eliminando los históricos cuellos de botella operativos de la sucursal.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
