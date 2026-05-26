"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { useRef } from "react";

function ClientFeedback() {
    const testimonialRef = useRef<HTMLDivElement>(null);
  
    const revealVariants = {
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
      hidden: {
        filter: "blur(10px)",
        y: -20,
        opacity: 0,
      },
    };
  
  return (
    <main className="w-full bg-white dark:bg-slate-950 py-10">
      <section className="relative h-full container text-black dark:text-white mx-auto rounded-lg py-14 bg-white dark:bg-[#0B0F19]/40 border border-slate-200/50 dark:border-slate-800/50 shadow-xl" ref={testimonialRef}>
        <article className="max-w-screen-md mx-auto text-center space-y-3 px-4">
          <TimelineContent as="h2" className="xl:text-4xl text-3xl font-black tracking-tight text-slate-900 dark:text-white" animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef}>
            Confianza en Startups y Grandes Equipos
          </TimelineContent>
          <TimelineContent as="p" className="mx-auto text-slate-550 dark:text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed" animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef}>
            Descubre la experiencia de fundadores y directivos que confiaron en mis soluciones digitales para impulsar sus negocios.
          </TimelineContent>
        </article>
        
        <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          <div className="md:flex lg:flex-col lg:space-y-4 h-full lg:gap-0 gap-4">
            
            <TimelineContent animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-slate-50 dark:bg-slate-900 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800 p-6">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f0c_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0c_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
              <article className="mt-auto relative z-10 flex flex-col justify-between h-full gap-4">
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
                  "Gonzalo ha sido un pilar fundamental en nuestro crecimiento tecnológico. Su agilidad, rapidez de desarrollo y atención al detalle de la UX han llevado a nuestra plataforma al siguiente nivel."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="font-bold lg:text-lg text-sm text-slate-900 dark:text-white">
                      Guillermo Rauch
                    </h3>
                    <p className="text-xs text-slate-400">CEO de Vercel & Enigma</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                    alt="Guillermo Rauch"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500 p-6">
              <article className="mt-auto flex flex-col gap-4">
                <p className="text-blue-50 leading-relaxed text-sm">
                  "Los resultados superaron nuestras expectativas. Desarrolló el sistema financiero MVP a una velocidad increíble y con una solidez impecable."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-blue-500/40">
                  <div>
                    <h3 className="font-bold text-base text-white">Rika Shinoda</h3>
                    <p className="text-xs text-blue-200">CEO de Kintsugi</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=200&auto=format&fit=crop"
                    alt="Rika Shinoda"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-blue-450"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-4 lg:gap-0 gap-4">
            
            <TimelineContent animationNum={2} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-slate-900 text-white overflow-hidden rounded-2xl border border-slate-800 p-6">
              <article className="mt-auto flex flex-col gap-4">
                <p className="text-slate-300 leading-relaxed text-sm">
                  "Altamente profesional. Sus soluciones innovadoras y su enfoque de metodologías de trabajo ágiles cambiaron positivamente la forma en que operamos diariamente."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <div>
                    <h3 className="font-bold lg:text-base text-sm text-white">Jack Reacher</h3>
                    <p className="text-xs text-slate-400">CEO de OdeaoLabs</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&auto=format&fit=crop"
                    alt="Jack Reacher"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={3} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-slate-50 dark:bg-slate-900 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800 p-6">
              <article className="mt-auto flex flex-col gap-4">
                <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-sm">
                  "Estamos sumamente satisfechos con la plataforma dental C&M. Su capacidad técnica y su dedicación superaron ampliamente nuestras proyecciones iniciales."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="font-bold lg:text-base text-sm text-slate-900 dark:text-white">John Davis</h3>
                    <p className="text-xs text-slate-400">Director de Clínicas DentalBo</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200&auto=format&fit=crop"
                    alt="John Davis"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={4} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-slate-900 text-white overflow-hidden rounded-2xl border border-slate-800 p-6">
              <article className="mt-auto flex flex-col gap-4">
                <p className="text-slate-300 leading-relaxed text-sm">
                  "El soporte post-lanzamiento de nuestra startup ha sido excelente. Gonzalo es proactivo, resolutivo y siempre propone mejoras de UX fundamentadas."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <div>
                    <h3 className="font-bold lg:text-base text-sm text-white">Steven Sunny</h3>
                    <p className="text-xs text-slate-400">Fundador de Boxefi</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=200&auto=format&fit=crop"
                    alt="Steven Sunny"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          <div className="h-full md:flex lg:flex-col lg:space-y-4 lg:gap-0 gap-4">
            
            <TimelineContent animationNum={5} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-2xl border border-blue-500 p-6">
              <article className="mt-auto flex flex-col gap-4">
                <p className="text-blue-50 leading-relaxed text-sm">
                  "Un socio tecnológico indispensable para escalar cualquier idea. Gonzalo entiende el negocio y sabe plasmarlo de manera impecable en software."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-blue-500/40">
                  <div>
                    <h3 className="font-bold text-base text-white">Mariano Rauch</h3>
                    <p className="text-xs text-blue-200">Director de Spectrum</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=200&auto=format&fit=crop"
                    alt="Mariano Rauch"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-blue-450"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={6} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-slate-50 dark:bg-slate-900 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800 p-6">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f0c_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0c_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
              <article className="mt-auto relative z-10 flex flex-col justify-between h-full gap-4">
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
                  "El nivel de su Frontend es inmejorable. Combinando Tailwind y Framer Motion, dotó a nuestra interfaz de micro-animaciones dinámicas que cautivaron a nuestros usuarios desde el primer día."
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">Paul Brauch</h3>
                    <p className="text-xs text-slate-400">CTO de Spectrum</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=200&auto=format&fit=crop"
                    alt="Paul Brauch"
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>

        <div className="absolute border-b-2 border-slate-200 dark:border-slate-800 bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:shadow-sm before:border before:border-slate-200 dark:before:border-slate-800 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white dark:after:bg-slate-900 after:shadow-sm after:border after:border-slate-200 dark:after:border-slate-800"></div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
