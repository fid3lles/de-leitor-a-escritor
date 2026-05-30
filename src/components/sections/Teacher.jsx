import professora from "../../assets/heloisa.png";

export default function Teacher() {
  return (
    <section className="bg-cream px-6 pt-12.5 pb-20 flex flex-col items-center gap-10 rounded-t-3xl overflow-hidden">

      <h2 className="text-3xl font-bold text-amber-950">A professora</h2>

      {/* Card */}
      <div className="w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">

        {/* Photo — larger */}
        <div className="h-105 w-full">
          <img
            src={professora}
            alt="Heloísa Karin"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Info panel — glassy green */}
        <div
          className="-mt-6 relative rounded-t-3xl px-6 pt-6 pb-8 border-t border-white/10"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-module-card) 65%, transparent)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <h3 className="text-3xl font-black leading-tight tracking-tight text-white">
            Heloísa Karin
          </h3>

          {/* Quoted description */}
          <div className="relative mt-5 pl-5 pr-2">
            <span
              aria-hidden="true"
              className="absolute -top-4 left-0 font-serif text-6xl leading-none select-none text-cream/30"
            >
              &ldquo;
            </span>

            <p className="text-sm leading-relaxed text-white/70 italic">
              Escritora da Thomas Nelson Brasil, professora de escrita,
              licenciada em História e pós-graduada em Teologia e Literatura.
            </p>

            <span
              aria-hidden="true"
              className="absolute -bottom-6 right-0 font-serif text-6xl leading-none select-none text-cream/30"
            >
              &rdquo;
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
