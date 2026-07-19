"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-scroll";
import { slideUpVariants } from "../utils/animation";

const highlights = [
  "Artisans qualifiés et assurés",
  "Devis gratuit sous 24h",
  "Chantier propre, délais tenus",
  "Garantie décennale",
];

const About = () => {
  return (
    <div id="about" className="w-full bg-sand">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex w-full flex-col items-start gap-5 lg:w-[45%]"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Qui sommes-nous
          </span>
          <h2 className="font-heading text-4xl font-semibold text-ink sm:text-5xl">
            Une entreprise{" "}
            <em className="italic text-accent">à taille humaine</em>, basée à
            Nantes
          </h2>
          <p className="text-lg leading-relaxed text-ink/70">
            Depuis plus de 12 ans, nous rénovons les appartements et maisons
            de la métropole nantaise, pièce par pièce, du simple coup de neuf
            à la rénovation complète d&apos;une salle de bain.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex w-full flex-col items-start gap-6 lg:w-[45%]"
        >
          <p className="text-base leading-relaxed text-ink/80">
            Momo Renov&apos; est spécialisée dans les petits travaux et le
            second œuvre : salle de bain, cuisine, placo, peinture, parquet.
            Pas de gros œuvre chez nous — uniquement des travaux de finition
            réalisés avec soin, chez les particuliers, à Nantes et dans ses
            alentours. Un seul interlocuteur vous accompagne du devis à la
            livraison, dans le respect de votre budget et de votre quotidien.
          </p>
          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-paper px-4 py-3 text-sm font-medium text-ink/90"
              >
                <FaCheck className="mt-0.5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            className="mt-2 cursor-pointer rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent"
          >
            Parlons de votre projet
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
