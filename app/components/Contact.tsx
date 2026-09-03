"use client";
import { m } from "framer-motion";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { slideUpVariants, zoomInVariants } from "../utils/animation";

const contactInfo = [
  {
    icon: FaPhone,
    label: "06 12 34 56 78",
    href: "tel:+33612345678",
  },
  {
    icon: FaEnvelope,
    label: "contact@momorenov.fr",
    href: "mailto:contact@momorenov.fr",
  },
  { icon: FaLocationDot, label: "Nantes et sa métropole (44)" },
];

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact" className="w-full scroll-mt-24 bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:px-8 lg:py-28">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="flex w-full flex-col items-start gap-5 lg:w-[45%]"
        >
          <span className="eyebrow text-sm font-semibold uppercase tracking-widest text-accent">
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

          <address className="mt-4 flex flex-col gap-4 not-italic">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon aria-hidden />
                </span>
                {href ? (
                  <a
                    href={href}
                    className="font-medium text-ink/80 transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="font-medium text-ink/80">{label}</span>
                )}
              </div>
            ))}
          </address>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="w-full lg:w-[48%]"
        >
          <m.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomInVariants}
            className="flex flex-col items-start gap-4 rounded-3xl border border-ink/10 bg-white p-8 shadow-xl shadow-ink/5"
          >
            <label className="sr-only" htmlFor="contact-name">
              Votre nom
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Votre nom"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <label className="sr-only" htmlFor="contact-email">
              Votre email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Votre email"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <label className="sr-only" htmlFor="contact-phone">
              Votre numéro de téléphone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Votre numéro de téléphone"
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />
            <label className="sr-only" htmlFor="contact-message">
              Votre message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Décrivez votre projet (pièce, surface, travaux souhaités…)"
              rows={4}
              className="w-full rounded-xl border border-ink/15 bg-paper/50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            ></textarea>
            <m.button
              type="submit"
              variants={zoomInVariants}
              className="w-full rounded-xl bg-accent px-10 py-4 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
            >
              Envoyer ma demande
            </m.button>
          </m.form>
        </m.div>
      </div>
    </section>
  );
};

export default Contact;
