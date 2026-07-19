"use client";
import { m } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../utils/animation";
import { planning } from "../utils/export";

const Working = () => {
  return (
    <section id="working" aria-label="Comment ça marche" className="w-full scroll-mt-24 bg-ink">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-20 lg:px-8 lg:py-28"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Comment ça marche
        </span>
        <h2 className="font-heading max-w-2xl text-4xl font-semibold text-paper sm:text-5xl">
          Un déroulé simple,{" "}
          <em className="italic text-accent">sans mauvaise surprise</em>
        </h2>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {planning.map((item, index) => (
            <div
              className="flex flex-col items-start gap-4 rounded-3xl border border-paper/10 bg-ink-soft p-7 transition-colors hover:border-accent/40"
              key={item.title}
            >
              <div className="flex w-full items-center justify-between">
                <item.icon aria-hidden className="size-9 text-accent" />
                <span className="font-heading text-4xl font-semibold italic text-paper/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-paper">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-paper/60">
                {item.about}
              </p>
            </div>
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Working;
