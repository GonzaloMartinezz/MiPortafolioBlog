import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-20 border-t border-slate-200 bg-gradient-to-b from-white to-blue-300">
      
      {/* CAMBIO AQUÍ: Se eliminó 'max-w-7xl mx-auto' y se dejó 'w-full' */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* 1. IZQUIERDA: TU MARCA */}
        <div className="text-center md:text-left">
           <h3 className="font-display font-black uppercase tracking-tighter text-xl text-slate-900 leading-none">
             Gonzalo <br /> Martínez
           </h3>
        </div>

        {/* 2. CENTRO: CRÉDITOS Y DATOS */}
        <div className="text-center flex flex-col gap-2">
          
          {/* Línea principal */}
          <p className="font-mono text-[15px] md:text-lg  font-bold tracking-widest text-slate-900 uppercase">
            DEVELOPED & DESIGNED BY GONZALO MARTÍNEZ © {new Date().getFullYear()}
          </p>
        </div>

        {/* 3. DERECHA: REDES SOCIALES */}
        <div className="flex gap-4 items-center">
            {[
            { icon: FaGithub, link: "https://github.com/GonzaloMartinezz", color: "hover:text-black" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/gonzalomartinezz2004/", color: "hover:text-blue-700" },
            { icon: FaInstagram, link: "https://www.instagram.com/gonchi_martinezz/", color: "hover:text-pink-600" },
            ].map((Social, index) => (
            <a 
                key={index}
                href={Social.link} 
                target="_blank" 
                className={`text-slate-400 transition-all duration-300 hover:scale-125 ${Social.color}`}
            >
                <Social.icon size={30} />
            </a>
            ))}
        </div>

      </div>
    </footer>
  );
}