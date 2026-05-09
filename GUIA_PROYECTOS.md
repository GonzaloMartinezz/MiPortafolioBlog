# Guía de Personalización - Proyectos Destacados

## 📋 Ubicación del Componente
- **Archivo**: `src/components/home/FeaturedProjects.tsx`
- **Usado en**: `src/app/page.tsx`

## 🎯 Cómo Agregar/Editar Proyectos

### 1. Agregar una Nueva Imagen

Tienes dos opciones:

#### Opción A: Usar URLs de Unsplash (Recomendado para rápido)
```tsx
image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=720&fit=crop"
```

#### Opción B: Subir imágenes locales
1. Coloca tu imagen en `public/images/proyectos/`
2. Usa la ruta relativa:
```tsx
image: "/images/proyectos/mi-proyecto.jpg"
```

### 2. Estructura de un Proyecto

Cada proyecto en el array `featuredProjects` tiene esta estructura:

```tsx
{
  id: 1,                          // Número único
  title: "Nombre del Proyecto",   // Título visible
  description: "Descripción...",  // Descripción detallada
  image: "URL o ruta local",      // Imagen del proyecto
  tags: ["React", "Node.js"],     // Tecnologías usadas
  link: "https://...",            // Link a la demostración (opcional)
  repo: "https://github.com/...", // Link al repositorio
}
```

### 3. Agregar un Nuevo Proyecto

En el array `featuredProjects`, agrega un nuevo objeto:

```tsx
{
  id: 4,
  title: "Club Belgrano CyD",
  description: "Plataforma para gestión de club deportivo. Inscripción de miembros, eventos, torneos y comunicación con socios.",
  image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=720&fit=crop",
  tags: ["Next.js", "React", "MongoDB"],
  link: "https://app-club-belgranocyd.vercel.app/",
  repo: "https://github.com/gonzalomartinez/club-belgrano",
},
```

### 4. Cambiar Orden de Proyectos

Simplemente reordena los objetos en el array `featuredProjects`.

### 5. Imágenes Recomendadas por Tecnología

| Tecnología | URL de Unsplash |
|-----------|-------------------|
| Dental/Salud | `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=720&fit=crop` |
| Finanzas | `https://images.unsplash.com/photo-1611987147885-1972dd84b96d?w=1400&h=720&fit=crop` |
| E-commerce | `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=720&fit=crop` |
| Deportes | `https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=720&fit=crop` |
| Dashboard | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop` |
| Mapas/Geo | `https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&h=720&fit=crop` |
| Nutrición | `https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=720&fit=crop` |

## 🎨 Características del Componente

✅ **Animación de Scroll**: Imagen se anima mientras scrolleas  
✅ **Navegación**: Botones anterior/siguiente para cambiar entre proyectos  
✅ **Indicadores**: Puntos para navegar directamente a un proyecto  
✅ **Responsive**: Se adapta a móvil, tablet y desktop  
✅ **Información Completa**: Título, descripción, tags, y botones de demo/código  

## 🔧 Personalización Avanzada

### Cambiar el Número Máximo de Proyectos Destacados
El componente muestra **3 proyectos destacados** por defecto. Para agregar más, simplemente agrega más objetos al array `featuredProjects`.

### Modificar Estilos
- **Colores**: Cambia `blue-600` por tu color preferido
- **Tamaño de título**: Ajusta `text-3xl md:text-5xl`
- **Animación**: Edita `ContainerScroll` en `src/components/ui/container-scroll-animation.tsx`

### Agregar Campos Personalizados
Si quieres agregar más información (como fecha, autor, etc.), actualiza la interfaz:

```tsx
interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo: string;
  fecha?: string;        // Nuevo campo
  autor?: string;        // Nuevo campo
}
```

## 🚀 Próximos Pasos

1. **Edita** `src/components/home/FeaturedProjects.tsx`
2. **Actualiza** las imágenes de tus proyectos
3. **Agrega** los links correctos a demos y repositorios
4. **Prueba** el sitio con `npm run dev`

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar imágenes locales?**  
R: Sí, colócalas en `public/images/proyectos/` y usa rutas relativas.

**P: ¿Cómo cambio la altura de la imagen?**  
R: Modifica las clases en el div de imagen dentro de `ContainerScroll`.

**P: ¿Puedo desabilitar la animación?**  
R: Sí, reemplaza `ContainerScroll` con un `div` normal.

**P: ¿Cómo agriego más de 3 proyectos?**  
R: Simplemente agrega más objetos al array `featuredProjects`.
