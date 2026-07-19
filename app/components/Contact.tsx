"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { slideUpVariants, zoomInVariants } from "../utils/animation";

const contactInfo = [
  { icon: FaPhone, label: "06 12 34 56 78" },
  { icon: FaEnvelope, label: "contact@momorenov.fr" },
  { icon: FaLocationDot, label: "Nantes et sa métropole (44)" },
];

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex w-full flex-col items-start gap-5 lg:w-[45%]"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nous contacter
          </span>
          <h2 className="font-heading text-4xl font-semibold text-ink sm:text-5xl">
            Un projet en tête ?{" "}
            <em className="italic text-accent">Parlons-en.</em>
          </h2>
          <p className="text-lg leading-relaxed text-ink/70">
            Salle de bain à refaire, pièce à repeindre, parquet à poser ?
            Décrivez-nous votre projet : nous revenons vers vous sous 24h
            avec un devis gratuit et sans engagement. Nous intervenons à
            Nantes et dans toute la métropole.
          </p>

          <ul className="mt-4 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon />
                </span>
                <span className="font-medium text-ink/80">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="w-full lg:w-[48%]"
        >
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomInVariants}
            className="flex flex-col items-start gap-4 rounded-3xl border border-ink/10 bg-white p-8 shadow-xl shadow-ink/5"
          >
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <textarea
              placeholder="Décrivez votre projet (pièce, surface, travaux souhaités…)"
              rows={4}
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            ></textarea>
            <motion.button
              variants={zoomInVariants}
              className="w-full rounded-xl bg-accent px-10 py-4 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
            >
              Envoyer ma demande
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
