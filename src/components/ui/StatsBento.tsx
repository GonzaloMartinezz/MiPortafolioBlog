import React from 'react';
import { CreditCard, DollarSign, ArrowUpRight, BarChart3, Users, Zap } from 'lucide-react';

export default function StatsBento() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      
      {/* Card 1: Payment Gateways */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 p-6 sm:p-8 flex flex-col min-h-[320px] group">
        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 relative z-10">
          Soporte Multi-Plataforma
        </h3>
        <p className="text-sm text-slate-400 relative z-10 max-w-xs leading-relaxed">
          Integración fluida con cualquier pasarela de pago o API externa para mantener tus operaciones sin interrupciones.
        </p>

        {/* Graphics */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] flex items-center justify-center overflow-hidden">
          {/* Subtle logos background (simulated) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 gap-4 flex-wrap px-10">
            <div className="w-16 h-8 bg-white rounded-md" />
            <div className="w-12 h-12 bg-white rounded-full" />
            <div className="w-20 h-6 bg-white rounded-sm" />
            <div className="w-14 h-14 bg-white rounded-lg" />
            <div className="w-24 h-8 bg-white rounded-md" />
          </div>
          
          {/* Central Glow Icon */}
          <div className="relative z-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F66C44] to-[#f83600] flex items-center justify-center shadow-[0_0_40px_rgba(246,108,68,0.4)] group-hover:scale-110 transition-transform duration-500">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Card 2: Automated Scheduling */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 p-6 sm:p-8 flex flex-col min-h-[320px] group">
        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 relative z-10">
          Automatización de Procesos
        </h3>
        <p className="text-sm text-slate-400 relative z-10 max-w-xs leading-relaxed">
          Programa tareas por adelantado y automatiza flujos recurrentes para mantener el negocio organizado.
        </p>

        {/* Graphics */}
        <div className="absolute bottom-[-20px] right-0 w-full h-[220px] flex items-center justify-center">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#F66C44]/40 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-h-[120px] w-[1px] bg-gradient-to-b from-transparent via-[#F66C44]/40 to-transparent" />
          
          {/* Central Node */}
          <div className="relative z-20 w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#F66C44]/30 flex items-center justify-center shadow-[0_0_30px_rgba(246,108,68,0.2)]">
            <DollarSign className="w-6 h-6 text-[#F66C44]" />
            {/* Concentric rings */}
            <div className="absolute inset-[-20px] rounded-full border border-[#F66C44]/20 animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-[#F66C44]/10 animate-[spin_6s_linear_infinite_reverse]" />
          </div>

          {/* Avatars */}
          <div className="absolute top-[20%] left-[15%] w-8 h-8 rounded-full bg-slate-800 border-2 border-[#111111] flex items-center justify-center">
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="absolute bottom-[20%] left-[25%] w-8 h-8 rounded-full bg-slate-800 border-2 border-[#111111] flex items-center justify-center">
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="absolute top-[30%] right-[15%] w-8 h-8 rounded-full bg-slate-800 border-2 border-[#111111] flex items-center justify-center">
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="absolute bottom-[25%] right-[20%] w-8 h-8 rounded-full bg-slate-800 border-2 border-[#111111] flex items-center justify-center">
            <Users className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Card 3: Payments Without Limits */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 p-6 sm:p-8 flex flex-col min-h-[320px] group">
        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
          Escalabilidad Sin Límites
        </h3>
        <p className="text-sm text-slate-400 max-w-xs leading-relaxed mb-8">
          Arquitectura diseñada para soportar alto tráfico y miles de usuarios concurrentes sin restricciones.
        </p>

        {/* Graphics - User List */}
        <div className="flex flex-col gap-3 mt-auto">
          {[
            { name: "Arjun Malik", email: "arjun.malik@ejemplo.com", status: "Aprobado", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { name: "Ravi Kumar", email: "ravi.kumar@ejemplo.com", status: "Aprobado", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { name: "Dev Patel", email: "dev.patel@ejemplo.com", status: "Pendiente", color: "text-orange-500", bg: "bg-orange-500/10" },
          ].map((user, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-[#1A1A1A] border border-white/5 group-hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center">
                  <Users className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <p className="text-[10px] text-slate-500">{user.email}</p>
                </div>
              </div>
              <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${user.bg} ${user.color}`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: Real-Time Expense Tracking */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 p-6 sm:p-8 flex flex-col min-h-[320px] group">
        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
          Métricas en Tiempo Real
        </h3>
        <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-8">
          Monitorea cada evento mientras sucede. Te damos claridad instantánea y control total sobre tus datos.
        </p>

        {/* Graphics - Bar Chart */}
        <div className="mt-auto h-[140px] w-full flex items-end justify-between gap-1 sm:gap-2 px-2 pb-2">
          {[40, 65, 45, 80, 50, 95, 60, 45, 85, 55, 75, 45].map((height, i) => (
            <div key={i} className="relative w-full group/bar flex flex-col justify-end h-full">
              {/* Tooltip for the highest bar (index 5) */}
              {i === 5 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#F66C44] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  Jun 30: 95k
                </div>
              )}
              {/* Top accent part of bar */}
              <div 
                className="w-full bg-gradient-to-t from-[#F66C44] to-[#f83600] rounded-t-sm transition-all duration-500 group-hover/bar:brightness-125"
                style={{ height: `${height}%` }}
              />
              {/* Bottom dark part of bar */}
              <div 
                className="w-full bg-[#1A1A1A] rounded-b-sm transition-all duration-500"
                style={{ height: '30%' }}
              />
            </div>
          ))}
        </div>
        {/* Chart X-axis labels */}
        <div className="flex justify-between px-2 mt-2">
          {['Ene', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month, i) => (
            <span key={i} className="text-[9px] text-slate-600 font-medium uppercase tracking-wider">{month}</span>
          ))}
        </div>
      </div>

    </div>
  );
}
