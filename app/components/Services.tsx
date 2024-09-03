"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideUpVariants, zoomInVariants } from "../utils/animation";
import { allservices } from "../utils/export";

const Services = () => {
  return (
    <div id="services" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex  flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          OFFRE SPECIALE
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          NOS SERVICES
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]"
        >
          {allservices.map((item, index) => (
            <motion.div
              variants={zoomInVariants}
              className="flex justify-center items-start gap-5 p-8"
              key={index}
            >
              <Image
                src={item.icon}
                alt="icon"
                width={50}
                height={50}
                className=" border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2"
              />

              <div className="flex flex-col justify-center items-start gp-3">
                <h1 className="text-black text-xl font-bold">{item.title}</h1>
                <p className=" mt-[10px] text-black text-[18px] text-justify">
                  {item.about}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
