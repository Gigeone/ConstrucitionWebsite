import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/homeimg.webp";
import { slideUpVariants } from "./animations";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center bg-center"
      style={{ backgroundImage: "url(${backgroundImage})" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      >
        <motion.h1
          variants={slideUpVariants}
          className=""

          </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;
