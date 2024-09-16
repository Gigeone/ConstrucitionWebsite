"use client";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../utils/animation";

const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full">
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 text-2xl"
          >
            {" "}
            NOUS CONTACTER
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[40px] font-bold"
          >
            NOUS JOINDRE POUR UNE DEMANDE
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
          <p className="text-gray-600 mt-[60px] text-3xl italic ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            labore. Perspiciatis nostrum voluptatem repellat.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 "
        >
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              type="text"
              placeholder="Votre nom"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Votre numéro de portable"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <textarea
              name=""
              placeholder="Votre Message"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            ></textarea>
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 rounded-lg text-black font-bold w-full"
            >
              ENVOYER
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
