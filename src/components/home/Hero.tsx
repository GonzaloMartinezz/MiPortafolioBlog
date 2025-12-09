import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10">
      <div className="space-y-4 md:w-2/3">
        <h1 className="text-4xl font-bold tracking-tight text-blue-100">
          Hola, soy Gonzalo Martinez
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Desarrollador Web especializado en el stack MERN y ahora explorando el ecosistema .NET. 
          Me apasiona transformar datos en experiencias visuales y funcionales.
        </p>
        
        {/* Redes Sociales */}
        <div className="flex gap-4 pt-2">
           {/* Puedes crear un componente separado para estos botones si quieres */}
          <a href="https://linkedin.com" target="_blank" className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg text-blue-200 transition text-sm">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg text-blue-200 transition text-sm">
            GitHub
          </a>
        </div>
      </div>
      
      {/* Logo / Cara */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50"></div>
        {/* Asegúrate de tener la imagen en la carpeta public */}
        <Image 
          src="/yo.jpg" 
          alt="Foto de perfil" 
          width={160} 
          height={160} 
          className="rounded-full border-2 border-blue-400 object-cover relative z-10"
          priority // Esto le dice a Next.js que cargue esta imagen rápido
        />
      </div>
    </section>
  );
}