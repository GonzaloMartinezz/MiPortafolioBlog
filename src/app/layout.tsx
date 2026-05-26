import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeAnimator } from "@/components/providers/ThemeAnimator";
import { DynamicIslandTOC } from "@/components/ui/dynamic-island-toc";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalomartinez.dev"),
  title: "Gonzalo Martínez — Full Stack Developer & Data Analyst",
  description:
    "Portafolio de Gonzalo Martínez: Desarrollo web Full Stack, análisis de datos y soluciones digitales de alto impacto desde Tucumán, Argentina.",
  icons: {
    icon: "/LogoPerfil.jpg",
  },
  openGraph: {
    title: "Gonzalo Martínez — Full Stack Developer & Data Analyst",
    description:
      "Desarrollo web Full Stack, análisis de datos y soluciones digitales de alto impacto.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden antialiased`}
      >
        <ThemeProvider>
          <ThemeAnimator>
            {/* Navbar */}
            <div className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100/50 dark:border-slate-800/50">
              <div className="max-w-none w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <Navbar />
              </div>
            </div>

            {/* Main Content */}
            <main className="max-w-none w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10 flex-1 flex flex-col">
              <DynamicIslandTOC selector="section h2, article h1, article h2, [data-toc]">
                {children}
              </DynamicIslandTOC>
            </main>

            {/* Footer */}
            <div className="w-full border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mt-auto">
              <div className="max-w-none w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
                <Footer />
              </div>
            </div>
          </ThemeAnimator>
        </ThemeProvider>
      </body>
    </html>
  );
}