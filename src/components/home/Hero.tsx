"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  // Force cache invalidation
  // Social icons positioned responsively in a semi-circle along the edge of the profile picture
  // R = 50% (radius) + 26px (24px half icon + 2px gap)
  const socials = [
    { id: 1, Icon: FaInstagram, color: "#E1306C", delay: 0.1, rotate: -15, href: "https://instagram.com", left: "calc(50% - 48.3% - 25px)", top: "calc(50% + 12.9% + 7px)" },
    { id: 2, Icon: FaLinkedinIn, color: "#0077B5", delay: 0.3, rotate: -5, href: "https://linkedin.com", left: "calc(50% - 30.4% - 16px)", top: "calc(50% + 39.6% + 21px)" },
    { id: 3, Icon: FaGithub, color: "#333", delay: 0.5, rotate: 0, href: "https://github.com/GonzaloMartinezz", left: "50%", top: "calc(100% + 26px)" },
    { id: 4, Icon: FaEnvelope, color: "#EA4335", delay: 0.2, rotate: 5, href: "mailto:gonzalomartinezzz04@gmail.com", left: "calc(50% + 30.4% + 16px)", top: "calc(50% + 39.6% + 21px)" },
    { id: 5, Icon: FaWhatsapp, color: "#25D366", delay: 0.6, rotate: 15, href: "https://wa.me/", left: "calc(50% + 48.3% + 25px)", top: "calc(50% + 12.9% + 7px)" },
  ];

  // Use a mounted state to prevent AdBlockers from causing hydration mismatch
  // by stripping social media <a> tags from the server HTML before React hydrates
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] bg-[#FDF6EC] flex flex-col items-center justify-start overflow-hidden px-6 md:px-12 pb-4 lg:pb-6 pt-16 lg:pt-20 font-sans">

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto mt-0 md:mt-2">

        {/* Profile Image - Ampliado y sin recortes circulares, con redes sociales */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 mb-8 mt-4 flex items-center justify-center"
        >
          {/* Profile Picture Container - Redondeado */}
          <div className="w-48 h-48 md:w-60 md:h-60 relative z-20 rounded-full overflow-hidden shadow-xl border-4 border-[#FDF6EC]">
            <img
              src="/LogoPerfil.jpg"
              alt="Gonzalo Martinez"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Social Icons (Positioned in an arc around the logo) */}
          {mounted && socials.map((social) => (
            <div
              key={social.id}
              className="absolute z-10 w-12 h-12 -ml-6 -mt-6"
              style={{
                top: social.top,
                left: social.left,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: social.delay * 0.5,
                }}
                className="w-full h-full"
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [social.rotate, social.rotate + 8, social.rotate]
                  }}
                  transition={{
                    y: { duration: 2.5 + social.delay, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 3.5 + social.delay, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg border border-black/5 pointer-events-auto cursor-pointer hover:scale-110 hover:shadow-xl transition-all"
                  style={{ color: social.color }}
                >
                  <social.Icon size={22} />
                </motion.a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Big Bold Title Container */}
        <div className="relative text-center z-20 flex flex-col items-center mt-4">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-black leading-[0.9] tracking-tighter uppercase text-center flex flex-col items-center relative z-20"
            style={{
              color: "#F66C44",
              fontSize: "clamp(2.2rem, 7vw, 6rem)"
            }}
          >
            {/* Desktop: WELCOME TO on one line */}
            <span className="hidden md:block">WELCOME TO</span>

            {/* Mobile: each word its own line */}
            <span className="md:hidden">WELCOME</span>
            <span className="md:hidden">TO</span>
            <span className="md:hidden">MY</span>

            {/* Desktop: MY PORTFOLIO with ball + underline */}
            <span className="hidden md:relative md:mt-2 md:inline-block relative mt-2 md:flex">
              MY PORTFOLIO
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-3 md:h-5 rounded-full"
                style={{ backgroundColor: "#F66C44", transformOrigin: "left" }}
              />
              <motion.div
                drag
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                whileDrag={{ scale: 1.2 }}
                className="absolute top-1/2 -translate-y-1/2 -right-[clamp(2.8rem,8vw,6rem)] cursor-grab active:cursor-grabbing z-50 touch-none"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut", repeatType: "mirror" }}
                  className="text-[clamp(2rem,6vw,6rem)] inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  🏀
                </motion.div>
              </motion.div>
            </span>

            {/* Mobile: PORTFOLIO with ball + underline */}
            <span className="md:hidden relative mt-2">
              PORTFOLIO
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-3 rounded-full"
                style={{ backgroundColor: "#F66C44", transformOrigin: "left" }}
              />
              <motion.div
                drag
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                whileDrag={{ scale: 1.2 }}
                className="absolute top-1/2 -translate-y-1/2 -right-[3rem] cursor-grab active:cursor-grabbing z-50 touch-none"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut", repeatType: "mirror" }}
                  className="text-[2.5rem] inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  🏀
                </motion.div>
              </motion.div>
            </span>
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
