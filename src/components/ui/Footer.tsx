export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>
      <p className="text-slate-600 text-xs font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} Gonzalo Martínez. All rights reserved.
        <br />
        Built with Next.js and Tailwind CSS.
        <br />
        Hosted on Vercel.
        <br />
        Designed by Gonzalo Martínez.<br />
        <br />
        Made with 💙 in Argentina.
        <br />
        Contact:qlMwI@example.com
      </p>
    </footer>
  );
}