import { useEffect, useRef, useState } from "react";
import PrimaryAddon from "../PrimaryAddon";
import payments from "../../assets/payments.svg";

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

function useCountDown(from, to, duration, trigger) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from - (from - to) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, from, to, duration]);

  return value;
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const price = useCountDown(300, 97, 1500, visible);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 overflow-hidden bg-cream px-6 py-16 text-amber-950/80 flex flex-col items-center gap-6 rounded-t-3xl"
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{
          opacity: 0.06,
          backgroundImage: GRAIN_SVG,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xs md:max-w-sm">
        <h2 className="text-3xl font-bold text-center text-amber-950">
          Investimento
        </h2>

        <PrimaryAddon
          className="text-amber-950/80"
          bgColor="var(--color-cream)"
        />

        {/* Price */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-8xl font-black tracking-tight text-amber-950"
            style={{ lineHeight: 0.8 }}
          >
            <span className="text-5xl align-top">R$</span> {price}
            <span className="text-3xl">, 00</span>
          </span>
          <span className="text-lg font-bold tracking-widest text-amber-950/60">
            12x 10,03
          </span>
        </div>

        {/* Payments marquee */}
        <div className="w-4/5 overflow-hidden opacity-70 my-5">
          <div className="flex w-max animate-marquee">
            <img src={payments} alt="" className="h-6 shrink-0" />
            <img
              src={payments}
              alt=""
              className="h-6 shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* CTA button */}
        <a
          href="https://pay.hotmart.com/B105616878D?checkoutMode=2&off=m70knns4"
          onClick="return false;"
          className="hotmart-fb hotmart__button-checkout mt-4 block w-full rounded-full py-5 text-center text-sm font-black tracking-widest uppercase text-white animate-breathe active:scale-95 cursor-pointer"
          style={{
            backgroundColor: "rgb(71,150,120)",
            boxShadow:
              "0 0 18px rgba(71,150,120,0.55), 0 0 40px rgba(71,150,120,0.30), 0 0 70px rgba(71,150,120,0.15)",
          }}
        >
          Escreva sua história
        </a>
      </div>
    </section>
  );
}
