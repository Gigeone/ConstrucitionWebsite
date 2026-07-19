import { FaPlus } from "react-icons/fa6";
import { faqs } from "../utils/export";

const Faq = () => {
  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className="w-full scroll-mt-24 bg-paper"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-20 lg:px-8 lg:py-28">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Questions fréquentes
        </span>
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
            Vous vous demandez{" "}
            <em className="italic text-accent">sûrement…</em>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink/60">
            Les réponses aux questions qu&apos;on nous pose le plus souvent.
            Une autre question ?{" "}
            <a href="#contact" className="font-semibold text-accent underline-offset-4 hover:underline">
              Écrivez-nous.
            </a>
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-ink/10 bg-white px-6 py-1 transition-colors open:border-accent/40 hover:border-accent/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-heading text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <FaPlus
                  aria-hidden
                  className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-ink/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
