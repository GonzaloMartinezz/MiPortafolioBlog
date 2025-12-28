import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import { FaMapMarkerAlt, FaBasketballBall, FaHeart, FaLaptopCode, FaServer, FaDatabase, FaDocker } from "react-icons/fa";

export const metadata: Metadata = {
  title: "¿Quién soy? | Gonzalo Martínez",
};

export default function WhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full py-12 md:py-20">
        
        {/* INTRO */}
        <section className="animate-fade-in-up mb-20 text-center md:text-left">
          <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Datos, Código <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              & Basket.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Soy Gonzalo. Analizo datos de día y construyo arquitecturas de software de noche. 
            De <strong className="text-slate-900">Tucumán</strong> para el mundo.
          </p>
        </section>

        {/* TARJETAS DE INFORMACIÓN (Grid Dinámico) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {/* Tarjeta 1 */}
            <div className="animate-fade-in-up delay-100 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                    <FaLaptopCode size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">El Developer</h3>
                <p className="text-slate-500 leading-relaxed">
                    Especializado en el ecosistema <strong>.NET y Node.js</strong>. Me obsesiona la arquitectura limpia y el código escalable. Actualmente migrando del stack MERN a soluciones empresariales robustas.
                </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="animate-fade-in-up delay-200 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm card-hover group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition">
                    <FaBasketballBall size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">El Fanático</h3>
                <p className="text-slate-500 leading-relaxed">
                    Si no estoy programando, estoy viendo a los <strong>Boston Celtics</strong> ☘️. El basket me enseñó que la defensa (backend) gana campeonatos, aunque el ataque (frontend) venda entradas.
                </p>
            </div>
        </section>

        {/* STACK FLOTANTE */}
        <section className="animate-fade-in-up delay-300 mb-24">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Mi Stack</h2>
            <div className="flex flex-wrap gap-4">
                {[
                    { name: "C# / .NET", icon: FaServer, color: "bg-purple-100 text-purple-700" },
                    { name: "React / Next.js", icon: FaLaptopCode, color: "bg-cyan-100 text-cyan-700" },
                    { name: "SQL Server", icon: FaDatabase, color: "bg-slate-100 text-slate-700" },
                    { name: "Docker", icon: FaDocker, color: "bg-blue-100 text-blue-700" },
                ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold ${item.color} card-hover cursor-default`}>
                        <item.icon />
                        {item.name}
                    </div>
                ))}
            </div>
        </section>

        {/* TRAYECTORIA (Timeline Moderno) */}
        <section className="animate-fade-in-up delay-500">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10">Trayectoria</h2>
            <div className="space-y-8">
                
                {/* Item Timeline 1 */}
                <div className="group flex gap-6 items-start p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="hidden md:block w-24 pt-1 font-mono text-sm text-slate-400 group-hover:text-blue-600 transition">HOY</div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Empresa de Tarjetas de Crédito</h3>
                        <p className="text-sm font-medium text-slate-500 mb-2">Analista & Developer</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Analizando datos para campañas de marketing con influencers y desarrollando scripts para automatización interna.
                        </p>
                    </div>
                </div>

                {/* Item Timeline 2 */}
                <div className="group flex gap-6 items-start p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="hidden md:block w-24 pt-1 font-mono text-sm text-slate-400 group-hover:text-blue-600 transition">2025</div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Consultorio Dental App</h3>
                        <p className="text-sm font-medium text-slate-500 mb-2">Freelance</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Full Stack App para gestión de turnos. Mi proyecto más personal para el negocio familiar.
                        </p>
                    </div>
                </div>

                {/* Item Timeline 3 */}
                <div className="group flex gap-6 items-start p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                    <div className="hidden md:block w-24 pt-1 font-mono text-sm text-slate-400 group-hover:text-blue-600 transition">2025</div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">Seminario NBA API</h3>
                        <p className="text-sm font-medium text-slate-500 mb-2">Universidad</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Backend complejo con Docker y Mongo. Aprendí la importancia de la contenerización.
                        </p>
                    </div>
                </div>

            </div>
        </section>

      </main>
    </div>
  );
}