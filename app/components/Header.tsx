"use client";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const navItems = [
    {
      link: "Accueil",
      path: "home",
    },
    {
      link: "A propos",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    // {
    //   link: "Porfolio",
    //   path: "porfolio",
    // },
    {
      link: "Projets",
      path: "projects",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="w-full bg-white flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-black font-bold text-3xl md:text-4xl font-rubik">
        Momo<span className="text-yellow-500 italic">Renov</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold  cursor-pointer p-3 rounded-full hover:bg-yellow-500 over:text-black text-[15px]"
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
          >
            {link}
          </Link>
        ))}
      </ul>
      <button className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-3 rounded-full text-black font-semibold hover:scale-105 hidden transition-transform duration-300 cursor-pointer md-flex">
        Nous rejoindre
      </button>

      {/* Mobile menu */}
      <button
        className="lg:hidden flex justify-between items-center mt-3"
        onClick={toggleMenu}
      >
        <div>
          {open ? (
            <FaXmark className="text-3xl text-yellow-500 cursor-pointer" />
          ) : (
            <FaBars className="text-3xl text-yellow-500 cursor-pointer" />
          )}
        </div>
      </button>
      <button
        className={`${
          open ? "flex" : "hidden"
        } w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`}
        tabIndex={0}
        onClick={closeMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            closeMenu();
          }
        }}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold  cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
            >
              {link}
            </Link>
          ))}
        </ul>
      </button>
    </nav>
  );
};

export default Header;
