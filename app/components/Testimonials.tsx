"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { slideUpVariants, zoomInVariants } from "../utils/animation";
import { clients } from "../utils/export";

const Testimonials = () => {
  return (
    <div id="clients" className="w-full bg-sand">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-20 lg:px-8 lg:py-28"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Témoignages
        </span>
        <h2 className="font-heading max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
          Ce que nos clients{" "}
          <em className="italic text-accent">disent de nous</em>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {clients.map((item) => (
            <div
              className="flex flex-col items-start gap-5 rounded-3xl bg-paper p-8"
              key={item.name}
            >
              <div className="flex w-full items-center justify-between">
                <FaQuoteLeft className="text-2xl text-accent" />
                <div className="flex gap-1 text-sm text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/80">
                {item.about}
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-ink/10 pt-5">
                <Image
                  className="size-12 rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-sm font-bold text-ink">{item.name}</h3>
                  <p className="text-sm text-accent-dark">{item.post}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
