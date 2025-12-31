import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; 
import Footer from "@/components/ui/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Gonzalo Martínez | Portfolio",
  description: "Desarrollador Full Stack y Analista de Datos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-slate-50 text-slate-900 min-h-screen relative selection:bg-blue-600 selection:text-white overflow-x-hidden`}>
        
        {/* --- FONDO ANIMADO (Efecto visual) --- */}
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {/* Mancha Azul */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            {/* Mancha Violeta */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            {/* Mancha Rosa (abajo) */}
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navbar Full Width (Responsive: padding chico en móvil, grande en PC) */}
        <div className="w-full px-4 md:px-8 lg:px-12 relative z-50">
            <Navbar />
        </div>

        {/* Contenido Principal */}
        <main className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {children}
        </main>
      </body>
      <Footer />
    </html>
  );
}