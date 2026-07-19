"use client";
import { m } from "framer-motion";
import Image from "next/image";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import { slideUpVariants, zoomInVariants } from "../utils/animation";

const projects = [
  {
    src: project3,
    name: "Séjour repeint & parquet rénové",
    place: "Nantes",
    tags: "Peinture · Parquet",
    className: "sm:col-span-2 sm:row-span-2 h-[260px] sm:h-full sm:min-h-[420px]",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
  {
    src: project1,
    name: "Salle de bain refaite à neuf",
    place: "Rezé",
    tags: "Salle de bain",
    className: "h-[260px] sm:h-[200px]",
    sizes: "(max-width: 640px) 100vw, 25vw",
  },
  {
    src: project2,
    name: "Pose de cuisine & crédence",
    place: "Saint-Herblain",
    tags: "Cuisine",
    className: "h-[260px] sm:h-[200px]",
    sizes: "(max-width: 640px) 100vw, 25vw",
  },
  {
    src: project4,
    name: "Terrasse en bois",
    place: "Vertou",
    tags: "Extérieur",
    className: "sm:col-span-2 h-[260px] sm:h-[200px]",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
];

const Porfolio = () => {
  return (
    <section id="projects" aria-label="Nos réalisations" className="w-full scroll-mt-24 bg-paper">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUpVariants}
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 pb-20 lg:px-8 lg:pb-28"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Nos réalisations
        </span>
        <h2 className="font-heading max-w-xl text-4xl font-semibold text-ink sm:text-5xl">
          Des chantiers récents,{" "}
          <em className="italic text-accent">près de chez vous</em>
        </h2>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomInVariants}
          className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-4"
        >
          {projects.map((project) => (
            <figure
              key={project.name}
              className={`group relative w-full overflow-hidden rounded-3xl ${project.className}`}
            >
              <Image
                src={project.src}
                alt={`${project.name} — ${project.place}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={project.sizes}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="font-heading text-lg font-semibold leading-snug text-paper">
                    {project.name}
                  </p>
                  <p className="text-sm text-paper/70">{project.place}</p>
                </div>
                <span className="hidden shrink-0 rounded-full bg-paper/15 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm sm:block">
                  {project.tags}
                </span>
              </figcaption>
            </figure>
          ))}
        </m.div>
      </m.div>
    </section>
  );
};

export default Porfolio;
