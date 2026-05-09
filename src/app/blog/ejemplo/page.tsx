"use client";
import { DynamicIslandTOC } from "@/components/ui/dynamic-island-toc";

export default function BlogPostPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* TOC Component */}
      <DynamicIslandTOC />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <article className="flex flex-col gap-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 dark:text-white">
              La Evolución de la Arquitectura Web
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Desde HTML estático hasta Edge Computing y Dynamic Islands.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>Gonzalo Martínez</span>
              <span>•</span>
              <span>5 min de lectura</span>
            </div>
          </div>

          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            La web ha evolucionado a un ritmo vertiginoso. Lo que comenzó como simples documentos HTML interconectados se ha transformado en aplicaciones ricas e inmersivas que rivalizan con el software de escritorio. Acompáñanos en un viaje a través de la historia de la arquitectura web.
          </p>

          <h2 className="dark:text-white">Los primeros días: HTML estático (Web 1.0)</h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            En los comienzos, la web era de solo lectura. Los servidores simplemente alojaban archivos HTML planos y los servían a los navegadores cuando se solicitaban. No había interactividad, sin cuentas de usuario y sin contenido dinámico.
          </p>
          <div className="h-48 bg-gradient-to-br from-blue-100 dark:from-blue-950 to-purple-100 dark:to-purple-950 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400">
            [Imagen ilustrativa del HTML estático]
          </div>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Los administradores web editaban manualmente archivos HTML. Si querías cambiar el pie de página en 100 páginas, tenías que editar 100 archivos. Esta era estaba definida por la simplicidad, pero carecía de la flexibilidad necesaria para que la web creciera.
          </p>

          <h3 className="dark:text-white">El rol del Webmaster</h3>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            El "Webmaster" era una figura legendaria, parte diseñador, parte administrador del sistema, parte creador de contenido. Subían archivos vía FTP y rezaban para que nada se rompiera. Si un enlace se rompía, permanecía roto hasta que se corregía manualmente.
          </p>

          <h2 className="dark:text-white">El auge del contenido dinámico</h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            A medida que la web creció, la necesidad de contenido dinámico y específico del usuario se hizo aparente. Esto dio lugar a Server-Side Rendering (SSR). Lenguajes como PHP, Perl y Java permitían a los servidores generar HTML sobre la marcha, extrayendo datos de bases de datos relacionales.
          </p>

          <h3 className="dark:text-white">Server-Side Rendering (SSR) en los 2000s</h3>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Con SSR, cada clic resultaba en una recarga completa de la página. El servidor hacía todo el trabajo pesado. Esta era nos dio foros, comercio electrónico temprano y plataformas CMS como WordPress.
          </p>

          <h4 className="dark:text-white">El cuello de botella de la base de datos</h4>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            A medida que el tráfico escalaba, las bases de datos se convertían en el cuello de botella principal. Consultar una base de datos MySQL para cada carga de página era increíblemente costoso. Se introdujeron capas de caché como Memcached para aliviar el dolor.
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Los desarrolladores pasaban innumerables horas optimizando consultas SQL y ajustando servidores Apache. Era una época de códigos monolíticos, donde un único repositorio contenía el frontend, backend y esquemas de bases de datos.
          </p>

          <h2 data-toc-title="La revolución SPA">
            El cambio de paradigma hacia Client-Side Rendering y la era de las Single Page Applications
          </h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Nota cómo ese encabezado es muy largo, pero gracias al atributo `data-toc-title`, aparece limpiamente como "La revolución SPA" en tu tabla de contenidos.
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Con la llegada de potentes motores JavaScript en navegadores (como V8), los desarrolladores se dieron cuenta de que podían descargar la renderización de la interfaz de usuario al dispositivo del usuario. Esto llevó al nacimiento de la Single Page Application (SPA).
          </p>

          <h3 className="dark:text-white">AJAX lo cambia todo</h3>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            JavaScript asincrónico y XML (AJAX) permitían que las páginas web recuperaran datos en segundo plano sin actualizar la página. Esto hizo que las aplicaciones web se sintieran rápidas y nativas.
          </p>
          <div className="h-64 bg-gradient-to-br from-slate-100 dark:from-slate-800 to-slate-200 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 p-6 text-center">
            <p className="font-semibold">Sigue leyendo para probar el seguimiento del TOC</p>
            <p className="mt-4 text-sm">La tabla de contenidos debería actualizar mientras scrolleas</p>
          </div>

          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Frameworks con AngularJS, Backbone y finalmente React y Vue, estandarizaron este enfoque. Los navegadores ya no eran solo visualizadores de documentos; eran runtimes de aplicaciones completas.
          </p>

          <h2 className="dark:text-white">La era moderna: Edge Computing</h2>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Hoy, estamos moviendo la computación más cerca del usuario. Edge computing, funciones sin servidor (Serverless) y bases de datos distribuidas son la nueva norma. Frameworks como Next.js desdibujan los límites entre frontend y backend.
          </p>

          <h3 className="dark:text-white">Hidratación y Resumibilidad</h3>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Nos dimos cuenta de que enviar enormes paquetes de Javascript al cliente estaba perjudicando el rendimiento. Ahora, utilizamos técnicas como hidratación, hidratación parcial (arquitectura de Islands) y resumibilidad para enviar solo el JS que es absolutamente necesario.
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            Se siente como si hubiéramos dado la vuelta, volviendo a generar HTML en el servidor, pero con infinitamente más poder e interactividad integrados.
          </p>

          <div className="my-16 p-8 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mt-0 mb-4 text-slate-900 dark:text-white">Conclusión</h3>
            <p className="mb-0 text-slate-700 dark:text-slate-300">
              La arquitectura web sigue evolucionando. Lo importante es entender los principios fundamentales: rendimiento, escalabilidad y experiencia del usuario. Sea cual sea la tecnología que uses hoy, estos principios seguirán siendo relevantes mañana.
            </p>
          </div>

          {/* Newsletter Section */}
          <hr className="my-12 border-slate-200 dark:border-slate-700" />

          <h2 data-toc-ignore className="text-center dark:text-white">
            Únete a mi Newsletter
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400">
            Recibe artículos como este directamente en tu bandeja de entrada. Este título utiliza `data-toc-ignore` y no aparece en la tabla de contenidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
            />
            <button className="px-6 py-3 bg-blue-600 dark:bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
              Suscribir
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
