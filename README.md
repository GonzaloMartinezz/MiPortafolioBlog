# 👨‍💻 Mi Portafolio Profesional

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)

Este es el repositorio del código fuente de mi portafolio personal. Un sitio web minimalista, performante y moderno diseñado para mostrar mi trayectoria, habilidades y proyectos como Desarrollador Full Stack.

🔗 **Demo en vivo:** [https://tu-usuario.vercel.app](https://tu-usuario.vercel.app) *(Reemplaza esto cuando tengas tu link)*

---

## 🚀 Tecnologías

Este proyecto está construido con las tecnologías más demandadas de la industria actual:

- **[Next.js 14](https://nextjs.org/) (App Router):** Framework de React para producción, renderizado del lado del servidor (SSR) y optimización SEO.
- **[TypeScript](https://www.typescriptlang.org/):** Para un código robusto, tipado estático y escalable.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades para un diseño rápido, responsive y moderno.
- **Diseño UI:** Estética personalizada con fondo animado (Blur/Gradient), modo oscuro por defecto y diseño "Mobile First".

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y limpia basada en el `App Router` de Next.js:

mi-portafolio/
├── public/                 # Archivos estáticos (imágenes, favicon)
│   ├── yo.jpg              # Tu foto
│   └── logo.png
├── src/
│   ├── app/                # AQUÍ VIVEN LAS PÁGINAS (Rutas)
│   │   ├── layout.tsx      # El marco principal (Navbar, Footer, Fondo)
│   │   ├── page.tsx        # La página de inicio (/)
│   │   ├── globals.css     # Estilos globales (Tailwind)
│   │   └── blog/           # (Opcional) Si quisieras una ruta /blog
│   │       └── page.tsx
│   ├── components/         # TUS COMPONENTES REUTILIZABLES
│   │   ├── ui/             # Elementos visuales puros (Botones, Fondo)
│   │   │   └── Background.tsx
│   │   └── home/           # Componentes específicos del Home
│   │       ├── Hero.tsx
│   │       ├── Timeline.tsx
│   │       └── Projects.tsx
│   └── data/               # (Opcional) Datos fijos para no ensuciar componentes
│       └── projects.ts
├── tsconfig.json           # Configuración de TypeScript (No tocar por ahora)
└── package.json
