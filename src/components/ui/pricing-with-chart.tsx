'use client';

import { CheckCircleIcon, ArrowUpRight, Zap, Shield, Rocket } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const plans = [
  {
    id: 'landing',
    name: 'Presencia Digital',
    price: '$500',
    period: 'proyecto único',
    description: 'Ideal para negocios que necesitan presencia online profesional rápida.',
    icon: Zap,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    btnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    features: [
      'Landing page de alta conversión',
      'Diseño UX/UI personalizado',
      'Formulario de contacto integrado',
      'Optimización SEO básica',
      'Deploy en producción incluido',
      'Responsive: mobile + desktop',
    ],
    cta: 'Empezar proyecto',
    href: '/contact',
  },
  {
    id: 'webapp',
    name: 'App Web Completa',
    price: '$1.500',
    period: 'proyecto único',
    description: 'Plataforma full-stack con autenticación, base de datos y panel admin.',
    icon: Shield,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800/40',
    btnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    highlight: true,
    features: [
      'Todo lo del plan Presencia Digital',
      'Autenticación y manejo de roles',
      'Base de datos + API REST',
      'Panel de administración completo',
      'Integración de pagos (Stripe)',
      '3 meses de soporte post-entrega',
    ],
    cta: 'Hablar del proyecto',
    href: '/contact',
  },
  {
    id: 'saas',
    name: 'Plataforma SaaS',
    price: 'Personalizado',
    period: 'según alcance',
    description: 'Solución enterprise a medida: múltiples módulos, roles y escala.',
    icon: Rocket,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-200 dark:border-purple-800/40',
    btnClass: 'bg-purple-600 hover:bg-purple-700 text-white',
    features: [
      'Arquitectura SaaS multi-tenant',
      'Módulos personalizados por negocio',
      'Integración con sistemas externos',
      'Dashboard analítico en tiempo real',
      'Soporte y mantenimiento 12 meses',
      'Documentación técnica incluida',
    ],
    cta: 'Pedir cotización',
    href: '/contact',
  },
];

const chartData = [
  { mes: 'Mes 1', landing: 10, webapp: 0, saas: 0 },
  { mes: 'Mes 2', landing: 25, webapp: 10, saas: 0 },
  { mes: 'Mes 3', landing: 40, webapp: 30, saas: 15 },
  { mes: 'Mes 4', landing: 48, webapp: 55, saas: 35 },
  { mes: 'Mes 5', landing: 55, webapp: 80, saas: 60 },
  { mes: 'Mes 6', landing: 60, webapp: 100, saas: 90 },
  { mes: 'Mes 7', landing: 63, webapp: 120, saas: 130 },
  { mes: 'Mes 8', landing: 65, webapp: 138, saas: 175 },
];

const chartConfig = {
  landing: { label: 'Presencia Digital', color: '#10b981' },
  webapp: { label: 'App Web', color: '#3b82f6' },
  saas: { label: 'SaaS / Empresa', color: '#8b5cf6' },
} satisfies ChartConfig;

export function PricingWithChart() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

      {/* Heading */}
      <div className="mb-10 sm:mb-14 text-center">
        <span className="inline-block px-4 py-1 mb-4 text-[12px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
          PLANES & PRECIOS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-slate-900 dark:text-white mb-4">
          Precios que{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Escalan Contigo
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Desde una landing page de conversión hasta una plataforma SaaS completa. Sin costos ocultos, sin sorpresas.
        </p>
      </div>

      {/* Plans grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl sm:rounded-3xl border p-5 sm:p-7 transition-all duration-300 hover:shadow-xl ${
                plan.highlight
                  ? 'bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-700 shadow-lg shadow-blue-100 dark:shadow-blue-950/40 scale-[1.01]'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
                  Más Popular
                </div>
              )}

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-xl ${plan.bg} border ${plan.border}`}>
                  <Icon className={`w-4 h-4 ${plan.color}`} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Plan</p>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">{plan.name}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-3xl sm:text-4xl font-black ${plan.color}`}>{plan.price}</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">/ {plan.period}</span>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                {plan.description}
              </p>

              <div className="h-px bg-slate-100 dark:bg-slate-800 mb-5" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircleIcon className={`h-4 w-4 shrink-0 mt-0.5 ${plan.color}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${plan.btnClass}`}
              >
                {plan.cta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ROI Chart */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-7 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
              Retorno Estimado por Plan
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Impacto acumulado en el negocio (índice relativo) a lo largo del tiempo
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(chartConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: cfg.color }} />
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{cfg.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 sm:p-7">
          <ChartContainer config={chartConfig} className="h-[200px] sm:h-[240px] w-full">
            <LineChart data={chartData} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(148,163,184,0.1)" />
              <XAxis
                dataKey="mes"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 11, fill: '#94a3b8' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 11, fill: '#94a3b8' }}
                width={32}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line dataKey="landing" type="monotone" stroke="#10b981" strokeWidth={2.5} dot={false} />
              <Line dataKey="webapp" type="monotone" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
              <Line dataKey="saas" type="monotone" stroke="#8b5cf6" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      {/* Bottom note */}
      <p className="text-center text-xs text-slate-400 mt-5">
        Todos los precios son en USD. Los plazos y precios finales se definen en la propuesta según el alcance del proyecto.{' '}
        <a href="/contact" className="text-blue-500 hover:underline font-medium">
          Hablemos →
        </a>
      </p>
    </div>
  );
}
