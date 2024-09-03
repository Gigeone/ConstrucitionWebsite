"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../assets/heroimg.png";
import backgroundImg from "../assets/backgroundImg.png";

import { slideUpVariants, zoomInVariants } from "../utils/animation";
const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          NOUS SOMMES LA TEAM MOMO !
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold"
        >
          Nous construisons vos rêves
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-white text-[20px] text-justify">
          {" "}
          Nous sommes spécialisés dans tous types de travaux chez les
          particuliers. Que ce soit pour des rénovations, des extensions, des
          constructions neuves, ou des aménagements intérieurs et extérieurs,
          notre équipe d'experts est à votre service pour transformer votre
          vision en réalité. Nous nous engageons à fournir un travail de
          qualité, en respectant vos besoins et votre budget, pour vous offrir
          un espace qui vous ressemble.
        </p>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="uppercase bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold"
          >
            En savoir plus
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="uppercase border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold"
          >
            Nous joindre
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="w-[40%] flex fle-col justify-end items-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
        >
          <Image
            src={heroImg}
            alt="hero image"
            className="lg:h-[600px] h-[300px] lg:mb-[-100px]"
            width={473} // Largeur de l'image en pixels
            height={774} // Hauteur de l'image en pixels
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
