"use client";
import { m } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaLocationDot, FaStar } from "react-icons/fa6";
import bathImg from "../assets/project1.jpg";
import roomImg from "../assets/project3.jpg";

import { slideUpVariants, zoomInVariants } from "../utils/animation";

const stats = [
  { value: "12 ans", label: "d'expérience en rénovation" },
  { value: "300+", label: "chantiers livrés dans la région" },
  { value: "24h", label: "pour recevoir votre devis" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Présentation"
      className="relative w-full scroll-mt-24 overflow-hidden bg-paper"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(188,84,50,0.22) 0%, rgba(188,84,50,0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] size-[420px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(237,230,217,0.9) 0%, rgba(237,230,217,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:justify-between lg:px-8 lg:py-28">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex w-full flex-col items-start gap-6 lg:w-[52%]"
        >
          <m.span
            variants={slideUpVariants}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-ink/80"
          >
            <FaLocationDot className="text-accent" />
            Artisans à Nantes &amp; alentours
          </m.span>

          <m.h1
            variants={slideUpVariants}
            className="font-heading text-balance text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Petits travaux,{" "}
            <em className="italic text-accent">grandes finitions.</em>
          </m.h1>

          <m.p
            variants={slideUpVariants}
            className="max-w-xl text-lg leading-relaxed text-ink/70"
          >
            Salle de bain, cuisine, placo, peinture, parquet : Momo Renov&apos;
            rénove votre intérieur pièce par pièce, avec des finitions
            soignées, des délais tenus et un chantier toujours propre.
          </m.p>

          <m.div
            variants={slideUpVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Demander un devis gratuit
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Voir nos réalisations
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </m.div>

          <m.div
            variants={slideUpVariants}
            className="mt-6 flex w-full flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[160px] text-sm text-ink/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </m.div>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="relative w-full max-w-md lg:w-[42%] lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src={roomImg}
              alt="Séjour rénové : peinture et parquet posés par Momo Renov'"
              className="h-[420px] w-full object-cover lg:h-[540px]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              placeholder="blur"
              priority
            />
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:block lg:-left-12 lg:w-52">
            <Image
              src={bathImg}
              alt="Salle de bain rénovée par Momo Renov'"
              className="h-32 w-full object-cover lg:h-36"
              sizes="208px"
              placeholder="blur"
            />
          </div>

          <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-lg lg:-right-6">
            <FaStar className="text-accent" />
            Devis gratuit, sans engagement
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;
