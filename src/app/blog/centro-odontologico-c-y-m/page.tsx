"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaClock, FaLaptopCode, FaStar, FaExclamationTriangle, FaLightbulb, FaCheckCircle, FaUserMd, FaWhatsapp, FaServer, FaDatabase } from "react-icons/fa";
import { FiMonitor, FiSmartphone, FiActivity } from "react-icons/fi";

export default function CaseStudyOdontologico() {
  return (
    <div className="min-h-screen bg-[#050505] pb-24 font-sans text-white/80 selection:bg-[#F66C44]/30 selection:text-white">
      
      {/* HERO SECTION */}
      <div className="relative w-full pt-32 pb-16 px-4 overflow-hidden border-b border-white/5 bg-[#0A0A0A]">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-[#F66C44]/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-full flex justify-start mb-8 md:mb-12">

            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-2 text-white/40 hover:text-[#F66C44] text-[10px] font-black uppercase tracking-[0.2em] transition-colors group">

              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Volver a Casos de Estudio

            </Link>

          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#3b82f6] uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            SaaS & Salud
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Sistema Integral de Gestión y Turnos <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#F66C44]">para Consultorio Odontológico</span>
          </motion.h1>

          {/* FICHA TÉCNICA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaCalendar className="text-blue-400" />
              <span>10 Abril 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaClock className="text-blue-400" />
              <span>2 meses</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <FaLaptopCode className="text-[#F66C44]" />
              <span>Full Stack (Único Dev)</span>
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
        
        {/* 📌 EL CONTEXTO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-white/5">
              <FaUserMd size={120} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="p-3 bg-blue-500/10 text-blue-400 rounded-xl"><FiActivity /></span>
              El Contexto y el Resumen
            </h2>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              Construí desde cero un SaaS (Software as a Service) a medida para un centro odontológico. El objetivo principal era modernizar su gestión operativa, unificando en un solo dashboard la administración de turnos, consultas, fichas médicas y odontogramas digitales, integrando además un chatbot con WhatsApp Business API disponible 24/7.
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
              El centro odontológico se enfrentaba a una <strong>pérdida significativa de tiempo y dinero</strong> debido a un problema operativo muy claro: el alto índice de cancelaciones y el ausentismo de los pacientes.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Al depender de métodos tradicionales de agendamiento, muchos pacientes simplemente olvidaban sus turnos. Además, la carga administrativa para el personal (tomar los datos, coordinar el día, recordar la cita) era manual, ineficiente y propensa a errores.
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
            Para resolver esta problemática, diseñé y desarrollé un ecosistema digital completo dividido en 4 etapas clave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiMonitor />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plataforma de Autogestión</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Interfaz donde el paciente ingresa fácilmente, registra sus datos personales, detalla el motivo de su visita y selecciona sus preferencias de días y horarios.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaServer />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flujo de Aprobación</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Implementé una lógica de aprobación en lugar de reservas directas. La asistente recibe la solicitud, evalúa el tratamiento, ajusta el tiempo y confirma el turno definitivo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automatización Omnicanal</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Una vez aprobado el turno, el sistema dispara automáticamente una confirmación detallada por correo electrónico y WhatsApp.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#F66C44]/30 transition-colors">
              <div className="w-12 h-12 bg-[#F66C44]/10 text-[#F66C44] rounded-2xl flex items-center justify-center mb-6 text-xl">
                <FiSmartphone />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recordatorios Preventivos</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Para atacar el ausentismo, una automatización envía un recordatorio por WhatsApp el día anterior a la cita, asegurando la asistencia.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MOCKUPS REEMPLAZADOS POR LAS CAPTURAS REALES */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          {/* Autogestión (Main wide image) */}
          <div className="w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
              <span className="text-white font-medium text-sm">Formulario de Autogestión del Paciente</span>
            </div>
            <img 
              src="/BLOSOLICITARTURNO.png" 
              alt="Formulario de Autogestión" 
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dashboard Admin */}
            <div className="w-full rounded-3xl border border-white/10 overflow-hidden shadow-xl relative group bg-zinc-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                <span className="text-white font-medium text-sm">Dashboard de Administración</span>
              </div>
              <img 
                src="/BLOGADMIN.png" 
                alt="Dashboard de Aprobación" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* WhatsApp Bot */}
            <div className="w-full rounded-3xl border border-white/10 overflow-hidden shadow-xl relative group bg-zinc-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                <span className="text-white font-medium text-sm">Confirmación por WhatsApp</span>
              </div>
              <img 
                src="/BLOGBOT.png" 
                alt="Confirmación Automática por WhatsApp" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </motion.section>

        {/* 🛠️ MI ROL */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8 flex items-center gap-3">
            <FaLaptopCode className="text-blue-400" />
            Mi Rol y Experiencia End-to-End
          </h2>
          <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 space-y-6">
            <p className="text-white/70">
              Al desempeñarme como Único Desarrollador durante estos 2 meses, fui responsable del ciclo de vida completo del producto:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                <span className="text-white/80"><strong>Análisis de requerimientos:</strong> Entender el dolor del cliente (las ausencias) y mapear el flujo de trabajo de la secretaria.</span>
              </li>
              <li className="flex gap-4 items-start">
                <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                <span className="text-white/80"><strong>Arquitectura y Desarrollo:</strong> Creación de la base de datos para centralizar el historial médico, odontogramas digitales y el desarrollo del panel de control.</span>
              </li>
              <li className="flex gap-4 items-start">
                <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                <span className="text-white/80"><strong>Integraciones de Terceros:</strong> Conexión exitosa con la API de WhatsApp Business para la mensajería automatizada y el chatbot 24/7.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 🚀 IMPACTO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-8 md:p-12 bg-blue-500/10 rounded-[2.5rem] border border-blue-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              🚀 El Impacto y Resultados
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto">
              El sistema transformó por completo la operativa del centro odontológico. La automatización de confirmaciones y recordatorios <strong>redujo drásticamente las inasistencias por olvido</strong>. A su vez, el personal administrativo fue liberado de la carga de agendamiento manual, permitiéndoles enfocarse en la atención presencial del paciente a través de un panel centralizado e intuitivo.
            </p>
          </div>
        </motion.section>

        {/* STACK TECNOLÓGICO */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-12 border-t border-white/5 text-center">
          <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Stack Tecnológico Utilizado</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Agrega o modifica estas tecnologías según lo que realmente usaste */}
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">Next.js</span>
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">React</span>
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">TypeScript</span>
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">PostgreSQL</span>
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">WhatsApp API</span>
            <span className="px-4 py-2 bg-[#111] rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 transition-colors">Tailwind CSS</span>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
