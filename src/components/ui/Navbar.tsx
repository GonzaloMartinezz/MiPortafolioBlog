"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiMail, FiHome, FiBriefcase, FiUser, FiFileText, FiMessageCircle, FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Left Column Links
const mainLinks = [
  { href: "/", label: "Inicio", desc: "Vuelve a la pantalla principal", icon: FiHome },
  { href: "/projects", label: "Proyectos", desc: "Explora mis últimos trabajos", icon: FiBriefcase },
  { href: "/who", label: "Sobre mí", desc: "Conoce mi historia y método", icon: FiUser },
  { href: "/blog", label: "Blog", desc: "Artículos sobre diseño y código", icon: FiFileText },
  { href: "/contact", label: "Contacto", desc: "Hablemos sobre tu proyecto", icon: FiMessageCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full flex items-center justify-between py-4 md:py-5 transition-all duration-300 relative z-[999999] px-6 md:px-12 ${
          scrolled ? "py-3 md:py-3.5 bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5" : "bg-transparent"
        }`}
        aria-label="Navegación principal"
      >
        {/* LOGO (Clicks open mega menu) */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
           <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-[#F66C44] transition-all">
             <Image src="/LOGOia.png" alt="Logo" width={48} height={48} className="object-cover w-full h-full" />
           </div>
        </div>

        {/* RIGHT ICONS & MENU BUTTON */}
        <div className="flex gap-3 md:gap-4 items-center">
          {/* Hamburger - All Screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all shadow-md border ${
              menuOpen ? 'bg-[#0B0B0B] text-white border-transparent' : 'bg-white text-black border-slate-200 hover:bg-slate-50'
            }`}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-[#0B0B0B]/60 backdrop-blur-sm z-[999998]"
          />
        )}
      </AnimatePresence>

      {/* MEGA MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[70px] md:top-[80px] left-4 right-4 md:left-12 md:right-auto md:w-[850px] bg-[#0F0F11] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[999999] overflow-hidden border border-white/10 flex flex-col origin-top-left"
          >
            {/* Columns Container */}
            <div className="flex flex-col md:flex-row h-full max-h-[75vh] md:max-h-[80vh] overflow-y-auto md:overflow-visible">
              
              {/* Left Column: Features/Links */}
              <div className="w-full md:w-[60%] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                <div className="col-span-full">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Navegación</p>
                </div>
                
                {mainLinks.map((link) => (
                  <Link 
                    href={link.href} 
                    key={link.href}
                    className="flex items-start gap-4 p-3 -m-3 rounded-2xl hover:bg-white/5 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive(link.href) ? "bg-[#F66C44]/20 text-[#F66C44] scale-110" : "bg-white/5 text-white/50 group-hover:bg-[#F66C44]/20 group-hover:text-[#F66C44] group-hover:scale-110"
                    }`}>
                      <link.icon size={18} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm mb-1 transition-colors ${isActive(link.href) ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                        {link.label}
                      </h3>
                      <p className="text-[11px] text-white/40 leading-snug group-hover:text-white/60 transition-colors">
                        {link.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right Column: Explore */}
              <div className="w-full md:w-[40%] bg-[#151518] p-6 md:p-8 flex flex-col border-t md:border-t-0 md:border-l border-white/5">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">Explorar</p>
                
                <div className="flex flex-col gap-5 flex-1">
                  {/* Highlight Item 1 */}
                  <Link href="/projects" className="group flex gap-4 items-center p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                    <div className="w-16 h-12 bg-white/5 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <div className="w-8 h-8 bg-blue-500 rounded-sm transform -rotate-6 group-hover:rotate-0 transition-transform"></div>
                    </div>
                    <p className="text-xs font-semibold text-white/60 leading-snug group-hover:text-blue-400 transition-colors">
                      Caso de Éxito: Gestión Odontológica
                    </p>
                  </Link>

                  {/* Highlight Item 2 */}
                  <Link href="/projects" className="group flex gap-4 items-center p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                    <div className="w-16 h-12 bg-white/5 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors">
                      <div className="w-8 h-8 bg-purple-500 rounded-sm transform rotate-3 group-hover:rotate-0 transition-transform"></div>
                    </div>
                    <p className="text-xs font-semibold text-white/60 leading-snug group-hover:text-purple-400 transition-colors">
                      Tarjeta Titanio: Finanzas modernas
                    </p>
                  </Link>
                  
                  {/* Highlight Item 3 */}
                  <Link href="/who" className="group flex gap-4 items-center p-2 -m-2 rounded-xl hover:bg-white/5 transition-all">
                    <div className="w-16 h-12 bg-white/5 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#F66C44]/50 transition-colors">
                      <div className="w-8 h-8 bg-[#F66C44] rounded-full group-hover:scale-110 transition-transform"></div>
                    </div>
                    <p className="text-xs font-semibold text-white/60 leading-snug group-hover:text-[#F66C44] transition-colors">
                      Mi metodología y cómo trabajo
                    </p>
                  </Link>
                </div>

                <Link href="/projects" className="mt-8 text-xs font-bold text-blue-400 flex items-center gap-1 hover:gap-2 transition-all w-fit">
                  Ver todos los proyectos <FiArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#0A0A0C] border-t border-white/10 p-4 md:px-8 py-4 flex justify-between items-center text-xs md:text-sm">
               <span className="text-white/50 font-medium">¿Listo para transformar tu idea?</span>
               <Link href="/contact" className="font-bold text-[#F66C44] flex items-center gap-1.5 hover:text-[#FF8666] transition-colors bg-[#F66C44]/10 px-3 py-1.5 rounded-full hover:bg-[#F66C44]/20">
                  <FiPlayCircle size={16} /> Agenda una charla
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}