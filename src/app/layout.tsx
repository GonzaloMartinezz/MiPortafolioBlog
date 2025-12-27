import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Gonzalo Martínez | Portfolio",
  description: "Desarrollador Full Stack y Analista de Datos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* CAMBIO: bg-slate-50 (Claro) y text-slate-900 (Oscuro) */}
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-slate-50 text-slate-900 min-h-screen relative selection:bg-blue-600 selection:text-white overflow-x-hidden`}>
        
        {/* Fondo decorativo sutil (mancha azul muy suave) */}
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-blue-100/40 blur-[120px] -z-10 rounded-full pointer-events-none transform -translate-y-1/2"></div>

        <main className="max-w-6xl mx-auto px-6 md:px-12">
          {children}
        </main>
        
        <footer className="text-center text-slate-400 py-10 text-xs font-mono border-t border-slate-200 mt-20">
          © 2025 Gonzalo Martínez. Next.js & Tailwind.
        </footer>
      </body>
    </html>
  );
}