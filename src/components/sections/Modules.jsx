import { useEffect, useRef, useState } from "react";
import PrimaryAddon from "../PrimaryAddon";
import professora from "../../assets/heloisa.png";

const modules = [
  {
    title: "Para onde sua ideia vai te levar?",
    description:
      "Um módulo onde destrinchamos os primeiros passos da escrita: por que muitas pessoas tem ideias, mas não escrevem seus livros, como pensar na carreira da escrita e como idenfiticar uma ideia que pode virar um livro.",
  },
  {
    title: "Deixando a ideia robusta",
    description:
      "Um módulo onde sua história se encaixa, o que toda história deve ter e como usar os gêneros para te ajudar, e não limitar.",
  },
  {
    title: "Construção de personagens",
    description:
      "Um módulo onde destrinchamos a criação de perssonagens para que sua história seja marcante por meio da trajetória deles.",
  },
  {
    title: "Construção de mundo",
    description:
      "Um módulo para te ajudar a entender como estruturar bons mundos, explicando conceitos de forma prática para que você possa aplicar tranquilamente.",
  },
  {
    title: "Estrutura da escalaleta",
    description:
      "Um módulo para desmistificar a escaleta e te ajudar a entender sua própria história e escrita.",
  },
  {
    title: "O primeiro capítulo",
    description:
      "Você sabia que é nessa parte que muitas editoras decidem se vão seguir ou não com a leitura da sua história e com uma possível publicação? É por isso que esse módulo te ajuda a entender o que colocar no primeiro capítulo.",
  },
  {
    title: "Viradas narrativas",
    description:
      "Um módulo para te ajudar a manter o ritmo da história e fisgar o leitor por meio de plots, foreshadowings, clímax e uma boa conclusão.",
  },
];

function ModuleCard({ title, description, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-10 w-full rounded-2xl bg-module-card px-6 py-5 shadow-[0_6px_20px_rgba(0,0,0,0.35)] text-center transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: visible ? `${index * 80}ms` : "0ms",
      }}
    >
      <h3 className="mb-2 font-bold text-white" style={{ fontSize: "20px" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/65">{description}</p>
    </div>
  );
}

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

const LIGHT_SPOTS = [
  "radial-gradient(ellipse 50% 30% at 10% 12%, rgba(80,138,115,0.58) 0%, transparent 65%)",
  "radial-gradient(ellipse 42% 52% at 82% 58%, rgba(65,118,98,0.54) 0%, transparent 65%)",
  "radial-gradient(ellipse 60% 38% at 48% 92%, rgba(72,128,106,0.50) 0%, transparent 65%)",
  "radial-gradient(ellipse 38% 48% at 88% 22%, rgba(55,100,82,0.36) 0%, transparent 60%)",
  "radial-gradient(ellipse 48% 32% at 22% 52%, rgba(60,108,88,0.32) 0%, transparent 60%)",
  "radial-gradient(ellipse 35% 42% at 65% 38%, rgba(50,92,74,0.28) 0%, transparent 58%)",
  "radial-gradient(ellipse 55% 28% at 5%  78%, rgba(52,96,78,0.22)  0%, transparent 55%)",
  "radial-gradient(ellipse 30% 45% at 75% 75%, rgba(48,88,70,0.20)  0%, transparent 55%)",
].join(", ");

export default function Modules() {
  const sectionRef = useRef(null);
  const spotsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spots = spotsRef.current;
    if (!section || !spots) return;

    // Captura offsetTop após layout
    let sectionTop = 0;
    const capture = () => {
      sectionTop = window.scrollY + section.getBoundingClientRect().top;
    };
    requestAnimationFrame(capture);

    const onScroll = () => {
      // Enquanto a seção está sticky (rect.top ≈ 0), usa scrollY para gerar drift
      const rect = section.getBoundingClientRect();
      const entering = -rect.top * 0.18; // parallax ao entrar/sair
      const drifting = (window.scrollY - sectionTop) * 0.1; // drift dentro da seção sticky
      spots.style.transform = `translateY(${entering + drifting}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-dark-section px-6 pt-15 pb-20 text-white rounded-t-3xl"
    >
      {/* Light spots com parallax */}
      <div
        ref={spotsRef}
        className="pointer-events-none absolute"
        style={{
          inset: "-20% 0", // estende para cima/baixo para cobrir o movimento
          background: LIGHT_SPOTS,
          willChange: "transform",
        }}
      />

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.07,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold text-center">Os módulos</h2>
          <PrimaryAddon
            className="text-white"
            bgColor="var(--color-dark-section)"
          />
        </div>

        {/* Cards + dotted connecting line */}
        <div className="relative flex w-full flex-col items-stretch gap-7">
          <div
            className="absolute left-1/2 top-0 bottom-0 z-0 -translate-x-1/2"
            style={{
              width: "2px",
              backgroundImage:
                "repeating-linear-gradient(to bottom, var(--color-cream) 0, var(--color-cream) 3px, transparent 3px, transparent 10px)",
            }}
          />
          {modules.map((mod, i) => (
            <ModuleCard key={i} {...mod} index={i} />
          ))}
        </div>

        {/* Professora */}
        <div className="flex flex-col items-center gap-6 w-full mt-8">
          <h2 className="text-3xl font-bold text-center text-white">
            A professora
          </h2>

          <PrimaryAddon
            className="text-white"
            bgColor="var(--color-dark-section)"
          />

          <div className="w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
            <div className="h-105 w-full">
              <img
                src={professora}
                alt="Heloísa Karin"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div
              className="-mt-6 relative rounded-t-3xl px-6 pt-6 pb-12 border-t border-white/10"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-module-card) 80%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <h3 className="text-3xl font-black leading-tight tracking-tight text-white text-center">
                Heloísa Karin
              </h3>

              <div className="relative mt-5 pt-3 pb-5 pl-7 pr-5">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 font-serif text-5xl leading-none select-none text-white/70"
                >
                  &ldquo;
                </span>
                <p className="text-base leading-relaxed text-white/70 italic">
                  Escritora da Thomas Nelson Brasil, professora de escrita,
                  licenciada em História e pós-graduada em Teologia e
                  Literatura.
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-1 font-serif text-5xl leading-none select-none text-white/70"
                >
                  &rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
