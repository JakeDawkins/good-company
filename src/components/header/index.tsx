export default function Header() {
  return (
    <div className="flex justify-center flex-col items-center py-4 md:py-12">
      <div className="relative">
        <div className="absolute -left-16 top-1/2 w-12 border-t border-sage/60"></div>
        <div className="absolute -right-16 top-1/2 w-12 border-t border-sage/60"></div>
        <p className="uppercase font-semibold text-slate tracking-[0.3em] text-xs mb-4 text-center">
          Welcome to
        </p>
      </div>
      <h1 className="text-6xl md:text-7xl font-extralight text-darkGreen tracking-tight text-center">
        Good Company
      </h1>
    </div>
  );
}
