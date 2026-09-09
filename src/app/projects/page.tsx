
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ProjectSpotlight } from "@/components/home/ProjectSpotlight";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { ArticleGrid } from "@/components/ui/article-grid";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Proyectos | Gonzalo Martínez",
  description: "Explora mi portafolio de proyectos: aplicaciones web, plataformas de gestión, e-commerce y herramientas de análisis de datos.",
};

export default function ProjectsPage() {
  const projectGalleryItems = [
    {
      id: 1,
      type: "image",
      title: "Creapp",
      desc: "Ecosistema Digital: Plataforma integral con herramientas de gestión, diseño moderno y soluciones escalables para potenciar negocios.",
      url: "/CREAPPPROYECTO.png",
      span: "md:col-span-4 md:row-span-4 sm:col-span-2 sm:row-span-2",
      links: "https://creapp-gamma.vercel.app/",
      tags: ["SaaS", "Gestión", "UI/UX"],
    },
    {
      id: 2,
      type: "image",
      title: "DropUp Equipament",
      desc: "E-commerce para venta de equipamientos médicos con catálogo de productos, carrito de compras, gestión de inventario y pagos integrados.",
      url: "/DROPUPROYECTO.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://dropup-equipament.vercel.app/",
      tags: ["E-commerce", "Equipamiento Médico"],
    },
    {
      id: 3,
      type: "image",
      title: "GoStats",
      desc: "SaaS analítico avanzado para la visualización de datos financieros, gráficos en tiempo real y métricas clave de negocio.",
      url: "/GoStats.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://app-gostats.vercel.app/",
      tags: ["Desarrollo Web", "Finanzas"],
    },
    {
      id: 4,
      type: "image",
      title: "Malibu Style",
      desc: "Tienda online de indumentaria con arquitectura escalable, catálogo dinámico y panel administrativo propio sin intermediarios.",
      url: "/MS.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://app-malibu-style.vercel.app/",
      tags: ["Aplicación Web", "E-commerce"],
    },
    {
      id: 5,
      type: "image",
      title: "Blog Nutrición Deportiva",
      desc: "Plataforma integral para nutricionista deportiva. Incluye blog, control de pacientes y un modelo estratégico para mejorar la condición física de alumnos.",
      url: "/SISASISTANTPROYECTO.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "#",
      tags: ["Blog", "Salud y Deporte"],
    },
    {
      id: 6,
      type: "image",
      title: "3D Dental Studio",
      desc: "Aplicación web institucional y SaaS de turnos para clínica odontológica con panel administrativo para profesionales de la salud.",
      url: "/3DENTALSTUDIOPROYECTO.png",
      span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
      links: "https://3d-dentalstudio-beta.vercel.app/",
      tags: ["Software Médico", "Gestión"],
    },
  ];

  const featuredItems: CardStackItem[] = [
    {
      id: 1,
      title: "Creapp",
      description: "Ecosistema Digital: Plataforma integral con herramientas de gestión, diseño moderno y soluciones escalables para potenciar negocios.",
      imageSrc: "/CREAPPPROYECTO.png",
      href: "https://creapp-gamma.vercel.app/",
    },
    {
      id: 2,
      title: "DropUp Equipament",
      description: "E-commerce para venta de equipamientos médicos con catálogo de productos, carrito de compras, gestión de inventario y pagos integrados.",
      imageSrc: "/DROPUPROYECTO.png",
      href: "https://dropup-equipament.vercel.app/",
    },
    {
      id: 3,
      title: "GoStats",
      description: "SaaS analítico avanzado para la visualización de datos financieros, gráficos en tiempo real y métricas clave de negocio.",
      imageSrc: "/GoStats.png",
      href: "https://app-gostats.vercel.app/",
    },
    {
      id: 4,
      title: "Malibu Style",
      description: "Tienda online de indumentaria con arquitectura escalable, catálogo dinámico y panel administrativo propio sin intermediarios.",
      imageSrc: "/MS.png",
      href: "https://app-malibu-style.vercel.app/",
    },
    {
      id: 5,
      title: "Blog Nutrición Deportiva",
      description: "Plataforma integral para nutricionista deportiva. Incluye blog, control de pacientes y un modelo estratégico para mejorar la condición física de alumnos.",
      imageSrc: "/SISASISTANTPROYECTO.png",
      href: "#",
    },
    {
      id: 6,
      title: "3D Dental Studio",
      description: "Aplicación web institucional y SaaS de turnos para clínica odontológica con panel administrativo para profesionales de la salud.",
      imageSrc: "/3DENTALSTUDIOPROYECTO.png",
      href: "https://3d-dentalstudio-beta.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 w-full max-w-none">
        {/* Interactive Showcase Section */}
        <section className="py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-400 px-4">
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

        {/* New Article/Blog Grid Section */}
        <section className="bg-[#0A0A0A] border-t border-white/5 pb-20">
          <ArticleGrid articles={[
            {
              id: 1,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "Creapp",
              description: "Ecosistema Digital: Plataforma integral con herramientas de gestión, diseño moderno y soluciones escalables para potenciar negocios.",
              image: "/CREAPPPROYECTO.png",
              href: "https://creapp-gamma.vercel.app/"
            },
            {
              id: 2,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "DropUp Equipament",
              description: "E-commerce de equipamiento deportivo y fitness con carrito de compras, gestión de inventario y pagos integrados.",
              image: "/DROPUPROYECTO.png",
              href: "https://dropup-equipament.vercel.app/"
            },
            {
              id: 3,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "GoStats",
              description: "SaaS analítico avanzado para la visualización de datos financieros, gráficos en tiempo real y métricas clave de negocio.",
              image: "/GoStats.png",
              href: "https://app-gostats.vercel.app/"
            },
            {
              id: 4,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "Malibu Style",
              description: "Tienda online de indumentaria con arquitectura escalable, catálogo dinámico y panel administrativo propio sin intermediarios.",
              image: "/MS.png",
              href: "https://app-malibu-style.vercel.app/"
            },
            {
              id: 5,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "Blog Nutrición Deportiva",
              description: "Plataforma integral para nutricionista deportiva: blog de contenido, control de pacientes y modelo estratégico personalizado para mejorar la condición física de alumnos.",
              image: "/SISASISTANTPROYECTO.png",
              href: "#"
            },
            {
              id: 6,
              author: "Gonzalo Martínez",
              date: "2026",
              readTime: "Ver Demo →",
              title: "3D Dental Studio",
              description: "Aplicación web institucional y SaaS de turnos para clínica odontológica con panel administrativo para profesionales de la salud.",
              image: "/3DENTALSTUDIOPROYECTO.png",
              href: "https://3d-dentalstudio-beta.vercel.app/"
            }
          ]} />
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



      </div>
    </div>
  );
}
