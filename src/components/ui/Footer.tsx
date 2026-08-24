import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    <div className="relative w-full overflow-hidden flex flex-col pt-0 md:pt-4 pb-8 px-6 md:px-12 bg-[#FDF6EC] -mt-[1px]">

      {/* CTA Section */}
      <div className="relative z-10 flex flex-col items-center text-center mb-32 max-w-4xl mx-auto mt-8">
        <span className="text-slate-500 text-[10px] md:text-xs font-black tracking-widest uppercase mb-6">
          Membresía exclusiva para diseño de calidad
        </span>
        <h2 className="text-6xl md:text-[7rem] lg:text-[9rem] font-black uppercase text-[#F66C44] mb-8 leading-[0.9] tracking-tighter">
          Diseño que <br className="hidden md:block"/> acelera
        </h2>
        <p className="text-slate-600 text-sm md:text-lg mb-12 max-w-2xl mx-auto font-medium">
          Si te encuentras atascado entre la idea y el producto final, seré el socio tecnológico para guiarte al siguiente nivel sin fricciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="bg-[#F66C44] text-white px-8 py-4 rounded-full font-bold hover:bg-[#e64c22] transition-colors shadow-xl">
            Agendar Llamada
          </Link>
          <Link href="/projects" className="bg-transparent border border-[#F66C44]/30 text-[#F66C44] px-8 py-4 rounded-full font-bold hover:bg-[#F66C44]/10 hover:border-[#F66C44] transition-all">
            Ver Proyectos
          </Link>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-300/50">
        
        {/* Brand */}
        <Link href="/" className="group">
          <h3 className="font-black uppercase tracking-tight text-xl text-slate-900 leading-none transition-colors">
            GONZALO
            <span className="text-[#F66C44]">.</span>
          </h3>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-500 hover:text-[#F66C44] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#F66C44] bg-[#F66C44]/10 hover:bg-[#F66C44]/20 transition-all duration-200 hover:scale-110 border border-[#F66C44]/20"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} Gonzalo Martínez. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </div>
  );
}