export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-slate-900">
      {/* Círculo Azul Oscuro */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      {/* Círculo Azul Claro */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      {/* Círculo Cian/Azul medio */}
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
}