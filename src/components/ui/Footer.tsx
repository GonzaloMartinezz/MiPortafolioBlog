import Link from "next/link";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/projects" },
    { label: "Quién soy", href: "/who" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gonzalomartinezz2004/", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/GonzaloMartinezz", icon: FaGithub },
    { label: "Email", href: "mailto:gonzalomartinezzz04@gmail.com", icon: HiOutlineMail },
  ];

  return (
    <div className="w-full py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-10">
        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-xs">
          <Link href="/" className="group">
            <h3 className="font-black uppercase tracking-tight text-xl text-slate-900 dark:text-white leading-none transition-colors">
              GONZALO
              <span className="text-blue-600">.</span>
            </h3>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Full Stack Developer & Data Analyst.
            <br />
            Construyendo soluciones digitales con propósito desde Tucumán, Argentina.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
            Navegación
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
            Conectemos
          </span>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all duration-200 hover:scale-110"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {currentYear} Gonzalo Martínez. Todos los derechos reservados.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
          Hecho en Tucumán, Argentina
        </p>
      </div>
    </div>
  );
}