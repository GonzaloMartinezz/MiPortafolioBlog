import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Gonzalo Martínez",
};

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center animate-fade-in-up">
      <h1 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase border-b-2 border-blue-600 pb-2">
        Contactame
      </h1>
      <p className="text-slate-500 max-w-lg mb-10 text-lg">
        ¿Tienes un proyecto en mente o simplemente quieres hablar de basket? 
        Estoy disponible para nuevas oportunidades.
      </p>

      {/* Formulario Simulado (mailto) */}
      <a 
        href="mailto:tuemail@gmail.com" 
        className="group inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/30"
      >
        Enviarme un correo
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      </a>

      <div className="mt-12 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
        <p className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">Ubicación</p>
        <p className="font-bold text-slate-900">Tucumán, Argentina 🇦🇷</p>
      </div>
    </div>
  );
}