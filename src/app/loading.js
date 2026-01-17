export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      <span className="animate-pulse">Carregando...</span>
    </div>
  );
}
