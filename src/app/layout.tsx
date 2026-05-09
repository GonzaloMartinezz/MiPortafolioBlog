import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeAnimator } from "@/components/providers/ThemeAnimator";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Desarrollador Full Stack y Analista de Datos",
  // SOLUCIÓN AL ERROR DEL FAVICON 404:
  icons: {
    icon: "/LogoPerfil.jpg", // Asegúrate de que esta imagen esté en la carpeta public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} ${outfit.variable} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden`}>
        <ThemeProvider>
          <ThemeAnimator>
            {/* Navbar Container */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-12 relative z-50">
                <Navbar />
            </div>

            {/* Contenido Principal */}
            <main className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 flex-1 w-full">
              {children}
            </main>
            
            {/* Footer Container */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-12 relative z-10">
              <Footer />
            </div>
          </ThemeAnimator>
        </ThemeProvider>
      </body>
    </html>
  );
}
