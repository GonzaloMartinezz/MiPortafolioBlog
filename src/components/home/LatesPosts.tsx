interface Post {
  title: string;
  summary: string;
  date: string;
  link: string;
}

const posts: Post[] = [
  {
    title: "Migrando de MERN a Next.js",
    summary: "Mi experiencia dejando React puro para abrazar el Server Side Rendering y TypeScript.",
    date: "10 Dic, 2025",
    link: "#"
  },
  {
    title: "Docker para desarrolladores Frontend",
    summary: "Por qué aprendí a contenerizar mis aplicaciones de Node.js y Mongo.",
    date: "25 Nov, 2025",
    link: "#"
  }
];

export default function LatestPosts() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-blue-200 border-b border-blue-800 pb-2">
        Blog & Pensamientos
      </h2>
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-blue-300 transition">
                {post.title}
                </h3>
                <span className="text-sm text-blue-500 font-mono">{post.date}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {post.summary}
            </p>
            <span className="text-sm text-blue-400 mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
              Leer artículo →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}