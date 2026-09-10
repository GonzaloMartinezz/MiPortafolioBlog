"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiHome, FiBriefcase, FiUser, FiFileText, FiMessageCircle, FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Left Column Links
const mainLinks = [
  { href: "/", label: "Inicio", desc: "Vuelve a la pantalla principal", icon: FiHome },
  { href: "/projects", label: "Proyectos", desc: "Explora mis últimos trabajos", icon: FiBriefcase },
  { href: "/who", label: "Sobre mí", desc: "Conoce mi historia y método", icon: FiUser },
  { href: "/blog", label: "Experiencia", desc: "Proyectos reales y resultados", icon: FiFileText },
  { href: "/contact", label: "Contacto", desc: "Hablemos sobre tu proyecto", icon: FiMessageCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  const titles = [
    "Software Developer",
    "Data Analytics",
    "Founder MalibuStyles",
    "Sales Agent"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        className={`fixed top-0 left-0 w-full flex justify-center items-center py-2 md:py-3 transition-all duration-300 z-[999999] px-4 md:px-12 ${
          scrolled ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-sm border-b border-white/5" : "bg-transparent"
        }`}
        aria-label="Navegación principal"
      >
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
          
          {/* LEFT: Name */}
          <div className="flex-1 flex justify-end items-center pr-3 md:pr-6">
             <span className={`font-bold text-[10px] sm:text-xs md:text-sm tracking-wide uppercase text-right leading-none whitespace-nowrap transition-colors ${scrolled ? 'text-white' : 'text-slate-900'}`}>
               Gonzalo Martinez
             </span>
          </div>

          {/* CENTER: LOGO */}
          <div className="shrink-0 flex justify-center items-center">
            <div 
              className={`w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center overflow-hidden border-[3px] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(246,108,68,0.4)] ${
                menuOpen ? 'border-[#F66C44] scale-105' : 'border-white/20 hover:border-[#F66C44] hover:scale-105'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image src="/LOGOia.png" alt="Logo Menú" width={64} height={64} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* RIGHT: Animated Title */}
          <div className="flex-1 flex justify-start items-center pl-3 md:pl-6">
            <div className="relative h-5 md:h-6 w-full flex items-center overflow-hidden">
              {mounted && (
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 font-bold text-[10px] sm:text-xs md:text-sm text-[#F66C44] tracking-wide uppercase leading-none whitespace-nowrap text-left"
                  >
                    {titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
          </div>
          
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
            initial={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[80px] md:top-[120px] left-1/2 w-[95%] max-w-5xl bg-[#050505]/95 backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-[999999] overflow-hidden border border-white/10 flex flex-col origin-top max-h-[calc(100vh-95px)] md:max-h-[calc(100vh-140px)]"
          >
            {/* Inner Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F66C44]/5 via-transparent to-blue-500/5 pointer-events-none" />

            {/* Columns Container */}
            <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-y-auto relative z-10 custom-scrollbar">

              {/* Left Column: Navigation */}
              <div className="w-full md:w-[60%] p-6 md:px-10 md:py-8 flex flex-col pt-8">
                <p className="text-[10px] font-black text-[#F66C44] uppercase tracking-widest mb-6 md:mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F66C44] animate-pulse" />
                  Navegación
                </p>

                <div className="grid grid-cols-1 gap-y-2 md:gap-y-1">
                  {mainLinks.map((link, i) => (
                    <motion.div 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                    >
                        <Link
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                        className="group flex items-center gap-4 md:gap-4 p-3 md:p-3 rounded-2xl md:rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Soft background sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.02] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        
                        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-lg relative z-10 ${isActive(link.href) ? "bg-[#F66C44] text-white shadow-[#F66C44]/30 scale-105" : "bg-[#111111] text-white/50 group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:scale-110 border border-white/5"}`}>
                          <link.icon size={18} className={isActive(link.href) ? "" : "group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"} />
                        </div>
                        <div className="flex flex-col relative z-10">
                          <h3 className={`font-black text-base md:text-lg tracking-tight transition-all duration-300 ${isActive(link.href) ? "text-white" : "text-white/60 group-hover:text-white group-hover:translate-x-1"}`}>
                            {link.label}
                          </h3>
                          <p className="text-[10px] md:text-[11px] text-white/30 font-medium leading-snug group-hover:text-white/50 transition-colors mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Direct CTA: Agendar charla */}
                <div className="mt-4 pt-4 border-t border-white/10 block md:hidden">
                  <Link
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); handleNav("/contact"); }}
                    className="w-full group flex items-center justify-center gap-3 font-bold text-white text-sm uppercase tracking-wider bg-gradient-to-r from-[#F66C44] to-[#e64c22] px-5 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(246,108,68,0.3)] hover:shadow-[0_0_30px_rgba(246,108,68,0.5)] transition-all duration-300 active:scale-[0.98]"
                  >
                    <FiPlayCircle size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Agendar charla</span>
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Spacer to fix scroll padding bug on flex containers */}
                <div className="h-8 md:h-12 shrink-0 w-full" />
              </div>

              {/* Right Column: Explore (Hidden on mobile) */}
              <div className="hidden md:flex w-full md:w-[40%] bg-[#0B0B0B]/50 p-6 md:p-12 flex-col border-t md:border-t-0 md:border-l border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay pointer-events-none" />
                
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-6 md:mb-8 relative z-10">Explorar</p>

                <div className="flex flex-col gap-4 flex-1 relative z-10">
                  {/* Highlight Item 1 */}
                  <Link href="/blog/centro-odontologico-c-y-m" onClick={(e) => { e.preventDefault(); handleNav("/blog/centro-odontologico-c-y-m"); }} className="group relative flex flex-col p-5 rounded-3xl bg-[#111111] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-700" />
                    <h4 className="text-white font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">Caso de Éxito Odontológico</h4>
                    <p className="text-white/40 text-[11px] leading-relaxed">Plataforma integral para gestión de clínicas</p>
                  </Link>

                  {/* Highlight Item 2 */}
                  <Link href="/blog/tarjeta-titanio-sa" onClick={(e) => { e.preventDefault(); handleNav("/blog/tarjeta-titanio-sa"); }} className="group relative flex flex-col p-5 rounded-3xl bg-[#111111] border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/30 transition-colors duration-700" />
                    <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">Tarjeta Titanio: Finanzas</h4>
                    <p className="text-white/40 text-[11px] leading-relaxed">Sistemas internos y dashboards operativos</p>
                  </Link>
                </div>

                <Link href="/projects" onClick={(e) => { e.preventDefault(); handleNav("/projects"); }} className="mt-8 text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white flex items-center gap-2 transition-all w-fit group relative z-10">
                  Ver portafolio <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* Spacer to fix scroll padding bug on flex containers */}
                <div className="h-8 md:h-12 shrink-0 w-full" />
              </div>
            </div>

            {/* Bottom Bar (Desktop) */}
            <div className="hidden md:flex w-full bg-[#030303] border-t border-white/5 px-8 py-5 justify-between items-center gap-4 relative z-10 shrink-0">
              <span className="text-white/50 text-xs font-medium">¿Listo para transformar tu idea en un producto digital?</span>
              <Link href="/contact" onClick={(e) => { e.preventDefault(); handleNav("/contact"); }} className="group flex items-center gap-2 font-bold text-black text-xs uppercase tracking-widest bg-white px-6 py-3 rounded-full hover:bg-[#F66C44] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(246,108,68,0.4)]">
                <FiPlayCircle size={16} className="group-hover:scale-110 transition-transform" /> Agenda una charla
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}