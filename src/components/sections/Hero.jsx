import logo from "../../assets/logo.png";
import BackgroundPattern from "../BackgroundPattern";
import PrimaryAddon from "../PrimaryAddon";

export default function Hero() {
  return (
    <section aria-label="Apresentação" className="relative h-screen overflow-hidden bg-cream flex flex-col items-center justify-between px-6 py-10 md:py-16 md:max-h-[80vh]">
      <BackgroundPattern />

      {/* Topo — Logo */}
      <div className="relative z-10 flex justify-center">
        <h1 className="sr-only">De Leitor a Escritor</h1>
        <img
          src={logo}
          alt="De Leitor a Escritor"
          className="w-72 max-w-full drop-shadow-md animate-breathe md:w-105"
        />
      </div>

      {/* Meio — Texto com aspas */}
      <div className="relative z-10 w-full max-w-sm text-center md:max-w-xl">
        <span
          aria-hidden="true"
          className="absolute -top-4 left-0 font-serif text-6xl leading-none select-none text-amber-800/25"
        >
          &ldquo;
        </span>
        <p
          className="font-medium text-amber-950/80 tracking-wide italic px-5"
          style={{ fontSize: "16pt", lineHeight: 1.4 }}
        >
          O guia definitivo{" "}
          <strong className="font-bold not-italic">
            para escrever seu primeiro livro.
          </strong>{" "}
          Uma linha prática para tirar sua ideia da cabeça e colocá-la no papel.
        </p>
        <span
          aria-hidden="true"
          className="absolute -bottom-6 right-0 font-serif text-6xl leading-none select-none text-amber-800/25"
        >
          &rdquo;
        </span>
      </div>

      <PrimaryAddon className="text-amber-950/80" />

      {/* Base — Título dividido pelo SVG + Vídeo */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-4 md:max-w-3xl">
        <h2 className="flex flex-col items-center gap-2 text-center text-xl font-semibold leading-snug text-amber-950/80">
          Assista o vídeo abaixo de 1:15 minutos para conhecer todas as trilhas.
        </h2>
        <div className="w-full overflow-hidden rounded-xl shadow-xl aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/myCUfmnB9Lc"
            title="De Leitor a Escritor — Apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
