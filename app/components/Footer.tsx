import { FaArrowUp } from "react-icons/fa";

const footerLinks = [
  { link: "Accueil", path: "#hero" },
  { link: "À propos", path: "#about" },
  { link: "Savoir-faire", path: "#services" },
  { link: "Réalisations", path: "#projects" },
  { link: "Contact", path: "#contact" },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-ink px-6 py-12 text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="font-heading text-2xl font-semibold">
              Momo <span className="italic text-accent">Renov&apos;</span>
            </p>
            <p className="mt-1 text-sm text-paper/60">
              Petits travaux &amp; rénovation intérieure — Nantes et alentours
            </p>
          </div>
          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map(({ link, path }) => (
                <li key={path}>
                  <a
                    className="text-sm font-medium text-paper/70 transition-colors hover:text-accent"
                    href={path}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-paper/50 sm:flex-row">
          <p className="text-center text-sm">
            © 2026 Momo Renov&apos; — tous droits réservés
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a
              href="/mentions-legales"
              className="transition-colors hover:text-accent"
            >
              Mentions légales
            </a>
            <a
              href="/confidentialite"
              className="transition-colors hover:text-accent"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#hero"
        aria-label="Revenir en haut de page"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-accent p-3 text-paper shadow-lg transition-transform hover:scale-110"
      >
        <FaArrowUp className="size-5" />
      </a>
    </>
  );
};

export default Footer;
