"use client";

import React, { useState } from "react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import ClientFeedback from "@/components/ui/testimonial";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/ui/features-8";
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { 
  ShieldCheck, 
  Terminal, 
  BadgeDollarSign, 
  Smartphone, 
  Workflow, 
  Zap, 
  Lock, 
  BarChart3, 
  Boxes,
  ArrowRight,
  Calculator,
  Compass
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [1, 2, 3, 4];

export default function StartupLandingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* ── SECTION 1: GSAP FlowArt Scroll ── */}
      <FlowArt aria-label="Lanzamiento Startup Flow">
        
        {/* Card 1: Qué Desarrollo */}
        <FlowSection 
          aria-label="Qué Desarrollo" 
          style={{ 
            backgroundColor: '#0a0a0f', 
            color: '#fff',
            background: 'radial-gradient(ellipse at bottom left, rgba(29, 78, 216, 0.15), transparent 60%)' 
          }}
        >
          <div className="flex flex-col h-full justify-between flex-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">01 — QUÉ DESARROLLO</p>
              <Boxes className="w-5 h-5 text-blue-400" />
            </div>
            
            <hr className="my-6 border-slate-800" />
            
            <div className="my-auto">
              <h1 className="text-[clamp(2.5rem,8vw,9rem)] font-black leading-[0.85] uppercase tracking-tighter">
                Código
                <br />
                Robusto.
                <br />
                SaaS Real.
              </h1>
            </div>
            
            <hr className="my-6 border-slate-800" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-auto">
              <p className="max-w-[45ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-slate-350">
                Construyo productos digitales llave en mano. Desde SaaS de salud encriptados e integraciones Fintech transaccionales, hasta portales PropTech interactivos de alta velocidad.
              </p>
              <div className="flex flex-wrap gap-2.5 max-w-md">
                {["SaaS Médicos", "Fintech Premium", "PropTech", "E-Commerce", "Admin Dashboards"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-800 text-[10px] uppercase font-bold tracking-wider rounded-lg text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Card 2: Qué Logro */}
        <FlowSection 
          aria-label="Qué Logro" 
          style={{ 
            backgroundColor: '#07070b', 
            color: '#fff',
            background: 'radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.15), transparent 60%)' 
          }}
        >
          <div className="flex flex-col h-full justify-between flex-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">02 — QUÉ LOGRO</p>
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            
            <hr className="my-6 border-slate-850" />
            
            <div className="my-auto">
              <h2 className="text-[clamp(2.5rem,8vw,9rem)] font-black leading-[0.85] uppercase tracking-tighter">
                Impacto
                <br />
                Táctico.
                <br />
                Conversión.
              </h2>
            </div>
            
            <hr className="my-6 border-slate-850" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-900/50 border border-slate-850 rounded-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-400">Velocidad Extrema</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Despliegues en la nube en tiempo récord para que tu startup valide su propuesta MVP sin perder tracción de mercado.
                </p>
              </div>
              <div className="p-5 bg-slate-900/50 border border-slate-850 rounded-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-400">Conversión Web</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Diseños UX intuitivos y micro-animaciones en Tailwind que retienen la atención y transforman visitas en suscripciones reales.
                </p>
              </div>
              <div className="p-5 bg-slate-900/50 border border-slate-850 rounded-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-400">Bases Escalables</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Código Typescript robusto estructurado modularmente para soportar miles de consultas por segundo sin cuellos de botella.
                </p>
              </div>
            </div>
            
            <hr className="my-6 border-slate-850" />
            <p className="mt-auto ml-auto max-w-[50ch] text-right text-sm text-slate-400 italic">
              "Cada línea de código está pensada para servir al crecimiento comercial de tu idea."
            </p>
          </div>
        </FlowSection>

        {/* Card 3: Metodología */}
        <FlowSection 
          aria-label="Metodología de Trabajo" 
          style={{ 
            backgroundColor: '#0d0702', 
            color: '#fff',
            background: 'radial-gradient(ellipse at top right, rgba(249, 115, 22, 0.12), transparent 60%)' 
          }}
        >
          <div className="flex flex-col h-full justify-between flex-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">03 — METODOLOGÍA</p>
              <Workflow className="w-5 h-5 text-orange-400" />
            </div>
            
            <hr className="my-6 border-slate-850" />
            
            <div className="my-auto">
              <h2 className="text-[clamp(2.5rem,8vw,9rem)] font-black leading-[0.85] uppercase tracking-tighter">
                Transparente.
                <br />
                Iterativo.
                <br />
                Ágil.
              </h2>
            </div>
            
            <hr className="my-6 border-slate-850" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-900/30 border border-orange-500/10 rounded-2xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">01 — Estructura MVP</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Desglosamos las funciones vitales para lanzar rápido y obtener retroalimentación del mercado con la mínima inversión posible.
                </p>
              </div>
              <div className="p-5 bg-slate-900/30 border border-orange-500/10 rounded-2xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">02 — Prototipado 3D</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Validamos las pantallas en marcos realistas multidispositivo antes de escribir el primer bloque de código lógico.
                </p>
              </div>
              <div className="p-5 bg-slate-900/30 border border-orange-500/10 rounded-2xl">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-400">03 — Hitos Modulares</p>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                  Entregas funcionales cada 2 semanas con reportes, pruebas de estrés y despliegue continuo en entornos de staging.
                </p>
              </div>
            </div>
            
            <hr className="my-6 border-slate-850" />
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xs text-slate-500">Metodología Lean Startup</span>
              <a href="#estimador" className="flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors">
                Estimar costos ahora
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FlowSection>
      </FlowArt>

      {/* ── SECTION 2: Especialización Bento Grid ── */}
      <section className="relative py-24 md:py-32 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="inline-block px-3.5 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-950/40 rounded-full border border-indigo-900/40">
              CORE SERVICES
            </span>
            <h2 className="text-3.5xl sm:text-5xl font-black tracking-tight leading-none text-white mb-6">
              Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Especialización</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Desarrollo de software a medida enfocado en arquitectura de alta disponibilidad, seguridad y una experiencia de usuario impecable.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            
            {/* Box 1: Fintech */}
            <div className="md:col-span-8 p-6 md:p-8 bg-slate-900/40 border border-slate-850 rounded-3xl relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-350 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
                  <BadgeDollarSign className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fintech & Pagos</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Pasarelas de Pago e Infraestructura Financiera</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                  Integración robusta de procesamiento de cobros recurrentes (Suscripciones Stripe), facturación automatizada, reportes financieros seguros y protección contra fraudes en tiempo real.
                </p>
              </div>
            </div>

            {/* Box 2: HealthTech */}
            <div className="md:col-span-4 p-6 md:p-8 bg-slate-900/40 border border-slate-850 rounded-3xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-350 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">HealthTech</span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">SaaS Dental y Médico</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gestión inteligente de agendas clínicas, historias de tratamiento digitalizadas y protección estricta de fichas médicas de pacientes.
                </p>
              </div>
            </div>

            {/* Box 3: Big Data */}
            <div className="md:col-span-4 p-6 md:p-8 bg-slate-900/40 border border-slate-850 rounded-3xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-350 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Analítica</span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Dashboards Corporativos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trazado de gráficos interactivos de alta velocidad para visualización de volúmenes de ventas, métricas ejecutivas y reportes exportables.
                </p>
              </div>
            </div>

            {/* Box 4: E-Commerce */}
            <div className="md:col-span-8 p-6 md:p-8 bg-slate-900/40 border border-slate-850 rounded-3xl relative overflow-hidden group hover:border-purple-500/20 transition-all duration-350 flex flex-col justify-between min-h-[260px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="flex justify-between items-start">
                <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Mobile First</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">E-Commerce y Portales Responsivos</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                  Tiendas online con catálogos dinámicos ultra rápidos, carritos de compras completamente optimizados para celulares y pasarelas de pago listas para vender desde el primer día.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── NEW SECTION: Características de Infraestructura y Calidad de Código ── */}
      <Features />

      {/* ── SECTION 3: Estimador de Costos Interactivo (Stepper) ── */}
      <section id="estimador" className="relative py-24 md:py-32 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block px-3.5 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase bg-orange-950/40 rounded-full border border-orange-900/40">
              COTIZADOR INTERACTIVO
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white tracking-tight leading-none mb-4">
              Estima los <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-450 to-amber-500">Costos de tu App</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Selecciona las etapas de tu presupuesto para conocer qué tipo de desarrollo y qué hitos logramos en tu startup con cada nivel de inversión.
            </p>
          </div>

          {/* Stepper Card */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            
            <Stepper value={currentStep} onValueChange={setCurrentStep} className="space-y-10">
              
              {/* Stepper Indicators Nav */}
              <StepperNav className="justify-between">
                {steps.map((step) => (
                  <StepperItem key={step} step={step}>
                    <StepperTrigger asChild>
                      <StepperIndicator className="data-[state=completed]:bg-orange-500 data-[state=completed]:text-white data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:bg-slate-900 border-slate-800">
                        {step === 1 && <Terminal className="w-3.5 h-3.5" />}
                        {step === 2 && <Boxes className="w-3.5 h-3.5" />}
                        {step === 3 && <Lock className="w-3.5 h-3.5" />}
                        {step === 4 && <Calculator className="w-3.5 h-3.5" />}
                      </StepperIndicator>
                    </StepperTrigger>
                    {steps.length > step && <StepperSeparator className="group-data-[state=completed]/step:bg-orange-500 bg-slate-850" />}
                  </StepperItem>
                ))}
              </StepperNav>

              {/* Stepper Panels Content */}
              <StepperPanel className="text-slate-300 min-h-[220px]">
                
                {/* Paso 1: MVP */}
                <StepperContent value={1} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-orange-400 tracking-wider uppercase">Fase 01</span>
                      <h3 className="text-xl font-bold text-white">Lanzamiento MVP (Producto Viable Mínimo)</h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-2xl font-black text-white">$800 - $1,500</span>
                      <p className="text-[10px] text-slate-500">Inversión Estimada</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Diseñado para validar tu idea de negocio en el mercado real con usuarios verdaderos al menor costo. Desarrollamos las funcionalidades críticas de administración, logueo seguro y flujo básico transaccional.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Despliegue rápido en 2-3 semanas</span>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Base de datos relacional básica</span>
                    </div>
                  </div>
                </StepperContent>

                {/* Paso 2: Crecimiento */}
                <StepperContent value={2} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-orange-400 tracking-wider uppercase">Fase 02</span>
                      <h3 className="text-xl font-bold text-white">Startup en Crecimiento (SaaS Completo)</h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-2xl font-black text-white">$1,800 - $3,500</span>
                      <p className="text-[10px] text-slate-500">Inversión Estimada</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Una aplicación comercial integral con flujos de trabajo avanzados, base de datos compleja, integraciones seguras de cobros recurrentes (Stripe/PayPal) y panel analítico completo para administradores.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Suscripciones Stripe integradas</span>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Dashboards con gráficos en vector</span>
                    </div>
                  </div>
                </StepperContent>

                {/* Paso 3: Enterprise */}
                <StepperContent value={3} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-orange-400 tracking-wider uppercase">Fase 03</span>
                      <h3 className="text-xl font-bold text-white">SaaS Enterprise (Alta Complejidad)</h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-2xl font-black text-white">$4,000+</span>
                      <p className="text-[10px] text-slate-500">Inversión Estimada</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Arquitectura distribuida y multi-rol para operaciones masivas. Diseñado para plataformas corporativas con automatizaciones avanzadas de correos, control granular de permisos, geolocalización e integraciones API robustas.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Control de accesos multi-rol</span>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-slate-300">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span>Triggers y colas automatizadas</span>
                    </div>
                  </div>
                </StepperContent>

                {/* Paso 4: Cotizar */}
                <StepperContent value={4} className="space-y-4">
                  <div className="text-center py-4 space-y-4">
                    <Compass className="w-12 h-12 text-orange-400 mx-auto animate-spin" style={{ animationDuration: '10s' }} />
                    <h3 className="text-lg sm:text-xl font-black text-white">¿Tienes requerimientos especiales para tu Startup?</h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                      Cada startup tiene necesidades únicas. Conversemos por WhatsApp o correo para elaborar un presupuesto modular a tu medida.
                    </p>
                    <div className="pt-2">
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold px-8">
                        <Link href="/contact">Escríbeme Ahora</Link>
                      </Button>
                    </div>
                  </div>
                </StepperContent>

              </StepperPanel>

              {/* Stepper Controls */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep((prev) => prev - 1)} 
                  disabled={currentStep === 1}
                  className="border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl"
                >
                  Anterior
                </Button>
                <span className="text-xs font-mono text-slate-500">
                  Paso {currentStep} de {steps.length}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  disabled={currentStep === steps.length}
                  className="border-slate-800 text-slate-450 hover:bg-slate-800 hover:text-white rounded-xl"
                >
                  Siguiente
                </Button>
              </div>

            </Stepper>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: Testimonios / Reseñas ── */}
      <ClientFeedback />

      {/* CTA Footer Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-xl mx-auto px-4 space-y-6 z-10">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4.5xl leading-none">
            ¿Listo para Lanzar tu Startup?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Consigue un producto premium con metodologías claras y presupuestos controlados de la mano de un Full Stack Developer & Analista de Datos.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold px-8">
              <Link href="/contact">Iniciar Proyecto</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-900 rounded-full">
              <Link href="/">Volver a Portafolio</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
