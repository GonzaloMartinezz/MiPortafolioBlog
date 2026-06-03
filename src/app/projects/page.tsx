import Projects from "@/components/home/Projects";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import type { Metadata } from "next";
import ProjectsByCategory from "@/components/home/ProjectsByCategory";

export const metadata: Metadata = {
  title: "Proyectos | Gonzalo Martínez",
  description: "Explora mi portafolio de proyectos: aplicaciones web, plataformas de gestión, e-commerce y herramientas de análisis de datos.",
};

export default function ProjectsPage() {
  const projectGalleryItems = [
    {
      id: 1,
      type: "image",
      title: "Apex Analytics Platform",
      desc: "Traducir datos complejos en información procesable para usuarios empresariales.",
      url: "/GoStats.png",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
      links: "https://app-gostats.vercel.app/",
      tags: ["SaaS", "Visualización de datos", "UI/UX"],
    },
    {
      id: 2,
      type: "image",
      title: "Malibu Styless",
      desc: "E-commerce de indumentaria deportiva con catálogo y pagos.",
      url: "/MS.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://malibustyle.vercel.app/",
      tags: ["E-commerce", "Desarrollo Web"],
    },
    {
      id: 3,
      type: "image",
      title: "Centro Odontológico",
      desc: "Sitio web institucional para clínica odontológica.",
      url: "/coc&m.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://app-consultorio-odontologico.vercel.app/",
      tags: ["Desarrollo Web"],
    },
    {
      id: 4,
      type: "image",
      title: "Portal de Propiedades",
      desc: "Plataforma móvil para búsqueda y listado de inmuebles.",
      url: "/ClickHouse.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://app-clickhouse.vercel.app/",
      tags: ["Aplicación Móvil", "UI/UX"],
    },
    {
      id: 5,
      type: "image",
      title: "Cultura de Basket",
      desc: "Plataforma institucional para club deportivo.",
      url: "/CB.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://app-club-belgranocyd.vercel.app/",
      tags: ["Desarrollo Web"],
    },
  ];

  const featuredItems: CardStackItem[] = [
    {
      id: 1,
      title: "Titanio Business (GoStats)",
      description: "Plataforma SaaS avanzada para la visualización de datos financieros en tiempo real.",
      imageSrc: "/GoStats.png",
      href: "https://tarjetatitanio.vercel.app/",
    },
    {
      id: 2,
      title: "Malibu Styles E-commerce",
      description: "Experiencia de compra fluida y moderna para indumentaria deportiva de alta gama.",
      imageSrc: "/MS.png",
      href: "https://app-malibu-style.vercel.app/",
    },
    {
      id: 3,
      title: "ClickHouse Propiedades",
      description: "Buscador inteligente y catálogo inmersivo para el mercado de bienes raíces premium.",
      imageSrc: "/ClickHouse.png",
      href: "https://app-clickhouse.vercel.app/",
    },
    {
      id: 4,
      title: "Centro Odontológico C&M",
      description: "SaaS de gestión médica y turnos inteligentes para profesionales de la salud.",
      imageSrc: "/coc&m.png",
      href: "https://app-consultorio-odontologico.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 w-full max-w-none px-4 md:px-12 lg:px-24">
        {/* Interactive Showcase Section */}
        <section className="py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-400">
              Proyectos Destacados
            </h1>
            <p className="mt-4 text-lg text-neutral-400">
              Explora una selección de mis mejores proyectos interactivos a través de esta galería dinámica de tarjetas en 3D.
            </p>
          </div>
          <div className="mx-auto w-full max-w-4xl px-4 py-8">
            <CardStack
              items={featuredItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              cardWidth={560}
              cardHeight={350}
            />
          </div>
        </section>



        {/* Project Spotlight */}
        <ProjectSpotlight
          projects={projectGalleryItems.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.desc,
            image: item.url,
            demoLink: item.links,
            codeLink: "#",
          }))}
        />

        {/* Other Projects */}
        <div className="mt-10">
          <Projects />
        </div>
        {/* NEW: Categorized Projects Section */}
        <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24">
          <ProjectsByCategory />
        </div>
      </div>
    </div>
  );
}
