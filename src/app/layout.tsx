import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/Background"; // Importamos el fondo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Nombre | Portfolio",
  description: "Desarrollador Full Stack y Analista de Datos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-900 text-slate-100 min-h-screen relative selection:bg-blue-500 selection:text-white`}>
        <Background />
        
        <main className="max-w-3xl mx-auto px-6 py-12 backdrop-blur-[2px]">
          {children}
        </main>
        
        <footer className="text-center text-slate-600 py-10 text-sm">
          © 2025 Construido con Next.js & Tailwind
        </footer>
      </body>
    </html>
  );
}