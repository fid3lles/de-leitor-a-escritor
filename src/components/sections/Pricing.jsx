const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-dark-section px-6 py-16 text-white flex flex-col items-center gap-6 rounded-t-3xl">
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.06,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs">
        <h2 className="text-4xl font-black tracking-widest uppercase text-center text-white">
          Investimento
        </h2>

        {/* Price */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-8xl font-black leading-none tracking-tight text-module-card">
            R$97
          </span>
          <span className="text-xl font-bold tracking-widest text-module-card">
            12X 00,00
          </span>
        </div>

        {/* CTA button */}
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-module-card py-5 text-sm font-black tracking-widest uppercase text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer"
        >
          Escreva sua história
        </button>
      </div>
    </section>
  );
}
