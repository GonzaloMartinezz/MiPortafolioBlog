"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  // Social icons configuration with varying animation parameters for a natural floating effect
  // Scaled up x, y positions to accommodate the larger profile picture
  const socials = [
    { id: 1, Icon: FaInstagram, color: "#E1306C", delay: 0.1, y: 125, x: -150, rotate: -15, href: "https://instagram.com" },
    { id: 2, Icon: FaLinkedinIn, color: "#0077B5", delay: 0.3, y: 177, x: -82, rotate: -5, href: "https://linkedin.com" },
    { id: 3, Icon: FaGithub, color: "#333", delay: 0.5, y: 196, x: 0, rotate: 0, href: "https://github.com/GonzaloMartinezz" },
    { id: 4, Icon: FaEnvelope, color: "#EA4335", delay: 0.2, y: 177, x: 82, rotate: 5, href: "mailto:gonzalomartinezzz04@gmail.com" },
    { id: 5, Icon: FaWhatsapp, color: "#25D366", delay: 0.6, y: 125, x: 150, rotate: 15, href: "https://wa.me/" },
  ];

  return (
    <section className="relative w-full min-h-[70vh] bg-[#FDF6EC] flex flex-col items-center justify-start overflow-hidden px-6 md:px-12 pb-4 lg:pb-8 pt-20 lg:pt-24 font-sans">

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
          <div className="w-64 h-64 md:w-80 md:h-80 relative z-20 rounded-full overflow-hidden shadow-xl border-4 border-[#FDF6EC]">
            <img
              src="/LogoPerfil.jpg"
              alt="Gonzalo Martinez"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Social Icons (Positioned in an arc around the logo) */}
          {socials.map((social) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: social.x, y: social.y }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: social.delay * 0.5, // Much faster entry
              }}
              className="absolute z-10"
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
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-black/5 pointer-events-auto cursor-pointer hover:scale-110 hover:shadow-xl transition-all"
                style={{ color: social.color }}
              >
                <social.Icon size={22} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Big Bold Title Container */}
        <div className="relative text-center z-20 flex flex-col items-center mt-4">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-black leading-[0.85] tracking-tighter uppercase text-center flex flex-col relative z-20"
            style={{
              color: "#F66C44", // Orange color matching the reference image
              fontSize: "clamp(3.5rem, 8vw, 9rem)"
            }}
          >
            <span>WELCOME TO</span>
            <span className="relative inline-block">
              MY PORTFOLIO
              {/* Hand-drawn style underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-3 md:h-5 rounded-full"
                style={{ backgroundColor: "#F66C44", transformOrigin: "left" }}
              />
            </span>
          </motion.h1>
        </div>

      </div>
    </section>
  );
}
