import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 py-12">
      {/* LOGO */}
      <div className="flex-shrink-0">
        <h3 className="font-display font-black uppercase tracking-tighter text-lg text-slate-900 leading-none">
          GONZALO MARTINEZ
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">© 2024 Gonzalo Martinez. All rights reserved.</p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="flex gap-8 items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Mail</a>
      </div>
    </div>
  );
}