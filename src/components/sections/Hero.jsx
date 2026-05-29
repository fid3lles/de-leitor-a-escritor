import logo from '../../assets/logo.png'
import BackgroundPattern from '../BackgroundPattern'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-16">
      <BackgroundPattern />
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm mx-auto text-center">
        <img
          src={logo}
          alt="De Leitor a Escritor"
          className="w-72 max-w-full drop-shadow-md"
        />
        <p className="text-base font-medium text-amber-950/80 leading-relaxed tracking-wide">
          O treinamento de escrita mais completo do mercado, desde a base da
          escrita até a postura em eventos.
        </p>
      </div>
    </section>
  )
}
