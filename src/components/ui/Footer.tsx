import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LOGO */}
        <div className="flex-shrink-0">
          <h3 className="font-display font-black uppercase tracking-tighter text-lg text-slate-900 dark:text-white leading-none">
            GONZALO MARTINEZ
          </h3>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">© 2024 Gonzalo Martinez. All rights reserved.</p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-8 items-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Github</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mail</a>
        </div>

      </div>
    </footer>
  );
}