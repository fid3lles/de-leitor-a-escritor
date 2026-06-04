export default function Footer() {
  return (
    <footer
      className="bg-dark-section py-6 text-center text-sm text-cream/40"
      style={{ fontFamily: "Consolas, -apple-system, monospace" }}
    >
      <p className="flex items-center justify-center gap-3 flex-wrap">
        <a
          href="https://www.instagram.com/heloisakarin/"
          target="_blank"
          rel="noreferrer"
          className="text-cream/50 hover:text-cream transition-colors duration-200 text-lg"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdR-EaSpDeh9FMUUX5HTlRg"
          target="_blank"
          rel="noreferrer"
          className="text-cream/50 hover:text-cream transition-colors duration-200 text-lg"
        >
          <i className="fa-brands fa-youtube" />
        </a>
        <a
          href="https://www.tiktok.com/@heloisakarin"
          target="_blank"
          rel="noreferrer"
          className="text-cream/50 hover:text-cream transition-colors duration-200 text-lg"
        >
          <i className="fa-brands fa-tiktok" />
        </a>
        <span className="text-cream/20">|</span>
        Made with 💛 by{" "}
        <a
          href="https://github.com/fid3lles"
          target="_blank"
          rel="noreferrer"
          className="text-cream/60 hover:text-cream transition-colors duration-200"
        >
          @fid3lles
        </a>
      </p>
    </footer>
  );
}
