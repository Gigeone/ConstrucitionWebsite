"use client";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { link: "Accueil", path: "#hero" },
  { link: "À propos", path: "#about" },
  { link: "Savoir-faire", path: "#services" },
  { link: "Réalisations", path: "#projects" },
  { link: "Contact", path: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-ink/10 bg-paper/90 shadow-sm shadow-ink/5"
          : "border-transparent bg-paper/70"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8"
      >
        <a
          href="#hero"
          className="font-heading text-2xl font-semibold tracking-tight text-ink md:text-[27px]"
        >
          Fin<span className="italic text-accent">éo</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <a
                className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/70 transition-colors hover:bg-sand hover:text-ink"
                href={path}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent lg:inline-block"
        >
          Demander un devis
        </a>

        <button
          className="flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? (
            <FaXmark className="size-7 text-accent" />
          ) : (
            <FaBars className="size-7 text-accent" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map(({ link, path }) => (
                <li key={path}>
                  <a
                    className="block w-full rounded-xl px-4 py-3 text-center text-[15px] font-medium text-ink transition-colors hover:bg-sand"
                    href={path}
                    onClick={closeMenu}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 block w-full rounded-xl bg-ink px-4 py-3 text-center text-[15px] font-semibold text-paper"
                >
                  Demander un devis
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
