"use client";
import { m } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../utils/animation";
import { allservices } from "../utils/export";

const Services = () => {
  return (
    <section id="services" aria-label="Nos savoir-faire" className="w-full scroll-mt-24 bg-paper">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-20 lg:px-8 lg:py-28"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Nos savoir-faire
        </span>
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
            Tout pour rénover votre intérieur,{" "}
            <em className="italic text-accent">sans gros œuvre</em>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink/60">
            Des interventions ciblées, réalisées par des artisans
            expérimentés, pour transformer chaque pièce de votre logement.
          </p>
        </div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allservices.map((item) => (
            <m.div
              variants={zoomInVariants}
              className="group flex flex-col items-start gap-4 rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/5"
              key={item.title}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                <item.icon aria-hidden />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/70">
                {item.about}
              </p>
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Services;
