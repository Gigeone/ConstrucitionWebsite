"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const navItems = [
  { link: "Accueil", path: "hero" },
  { link: "À propos", path: "about" },
  { link: "Savoir-faire", path: "services" },
  { link: "Réalisations", path: "projects" },
  { link: "Contact", path: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-ink md:text-[27px]">
          Momo <span className="italic text-accent">Renov&apos;</span>
        </h1>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="cursor-pointer rounded-full px-4 py-2 text-[15px] font-medium text-ink/70 transition-colors hover:bg-sand hover:text-ink"
              activeClass="bg-sand text-ink"
              to={path}
              spy={true}
              smooth={true}
              offset={-90}
            >
              {link}
            </Link>
          ))}
        </ul>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-90}
          className="hidden cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent lg:inline-block"
        >
          Demander un devis
        </Link>

        <button
          className="flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <FaXmark className="size-7 text-accent" />
          ) : (
            <FaBars className="size-7 text-accent" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  className="w-full cursor-pointer rounded-xl px-4 py-3 text-center text-[15px] font-medium text-ink transition-colors hover:bg-sand"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                onClick={closeMenu}
                className="mt-2 w-full cursor-pointer rounded-xl bg-ink px-4 py-3 text-center text-[15px] font-semibold text-paper"
              >
                Demander un devis
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
