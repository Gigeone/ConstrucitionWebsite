import { FaArrowUp } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-center items-center gap-2 p-5">
        <FaCopyright className="fill-yellow-500 lg:size-5 size-8" />
        <p className="text-lg text-center">
          Copyright 2024, Matthieu GH Agency, All Rights Reserved
        </p>
      </div>
      {/* icon box */}
      <div
        id="icon-box"
        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <FaArrowUp className="size-6" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
