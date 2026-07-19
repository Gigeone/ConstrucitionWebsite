import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const footerLinks = [
  { link: "Accueil", path: "hero" },
  { link: "À propos", path: "about" },
  { link: "Savoir-faire", path: "services" },
  { link: "Réalisations", path: "projects" },
  { link: "Contact", path: "contact" },
];

const Footer = () => {
  return (
    <>
      <div className="w-full bg-ink px-6 py-12 text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl font-semibold">
              Momo <span className="italic text-accent">Renov&apos;</span>
            </h2>
            <p className="mt-1 text-sm text-paper/60">
              Petits travaux &amp; rénovation intérieure — Nantes et alentours
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map(({ link, path }) => (
              <Link
                key={path}
                className="cursor-pointer text-sm font-medium text-paper/70 transition-colors hover:text-accent"
                to={path}
                spy={true}
                smooth={true}
                offset={-90}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center border-t border-paper/10 pt-6 text-paper/50">
          <p className="text-center text-sm">
            © 2026 Momo Renov&apos; — tous droits réservés
          </p>
        </div>
      </div>

      <Link
        id="icon-box"
        to="hero"
        spy={true}
        smooth={true}
        offset={-90}
        className="fixed bottom-6 right-6 z-50 flex cursor-pointer items-center justify-center rounded-full bg-accent p-3 text-paper shadow-lg transition-transform hover:scale-110"
      >
        <FaArrowUp className="size-5" />
      </Link>
    </>
  );
};

export default Footer;
