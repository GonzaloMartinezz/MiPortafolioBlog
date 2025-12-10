import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"; 
import "./globals.css";
import Background from "@/components/ui/Background";

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
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-slate-900 text-slate-100 min-h-screen relative selection:bg-blue-500 selection:text-white`}>
        <Background />
        
        {/* CAMBIO CLAVE AQUÍ: max-w-4xl -> max-w-6xl */}
        <main className="max-w-6xl mx-auto px-6 md:px-12 backdrop-blur-[2px]">
          {children}
        </main>
        
        <footer className="text-center text-slate-600 py-10 text-xs font-mono">
          © 2025 Gonzalo Martínez. Next.js & Tailwind.
        </footer>
      </body>
    </html>
  );
}