"use client";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../utils/animation";

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
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
          BIENVENUE CHEZ
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          Momo Renov'
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-gray-50 mt-[60px] text-3xl italic ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          labore. Perspiciatis nostrum voluptatem repellat, porro dolore
          officiis eveniet blanditiis dignissimos minus dicta consequuntur
          dolorum quod fugiat commodi veniam aut rem.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 "
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sint
          officia, minus quis voluptates minima beatae perspiciatis quo est.
          Commodi quo deserunt optio vel reiciendis laborum necessitatibus
          laboriosam magni animi aliquid dolor ex similique ad ea, adipisci
          incidunt culpa quae saepe ullam iusto. Harum ullam odit, sed impedit,
          aspernatur corrupti consequuntur omnis nobis suscipit nesciunt aut
          possimus perspiciatis quia quos voluptatem laborum, repudiandae nam
          reprehenderit ad est vel molestias ut reiciendis maxime. Dolorum
          inventore totam veniam et odio voluptate aut nostrum eveniet ratione
          iste! Ex tenetur rerum corrupti consectetur repellendus! Reiciendis
          quia dolor reprehenderit sunt incidunt, ex dignissimos earum eum.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold"
        >
          EN SAVOIR PLUS
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
