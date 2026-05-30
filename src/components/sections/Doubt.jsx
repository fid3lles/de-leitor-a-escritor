import InstagramFeed from "../InstagramFeed";
import PrimaryAddon from "../PrimaryAddon";

export default function Doubt() {
  return (
    <section className="bg-cream px-6 py-20 flex flex-col items-center gap-8 rounded-t-3xl overflow-hidden">
      <h2 className="text-3xl font-bold text-amber-950 text-center">
        Ainda em dúvida?
      </h2>
      <PrimaryAddon className="text-amber-950/80" />
      <p
        className="max-w-sm text-amber-950/70"
        style={{
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        Consuma nosso conteúdo gratuito. Temos um perfil cheio de instruções
        para escritores e uma masterclass de 1 hora no YouTube. Deguste nosso
        método de ensino.
      </p>

      <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-xl aspect-video">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/UCkWmVpjWYE?si=lr5VT4k3lfSbx98A"
          title="De Leitor a Escritor — Masterclass"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <PrimaryAddon className="text-amber-950/80" />

      <InstagramFeed />
    </section>
  );
}
