import building from "../assets/building.svg";
import construction from "../assets/construction.svg";
import design from "../assets/design.svg";
import document from "../assets/document.svg";
import paint from "../assets/paint.svg";
import support from "../assets/support.svg";

import { FaRegBuilding, FaSitemap } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "Rénovation Intérieure",
    about:
      "Nous offrons des services complets de rénovation pour redonner vie à vos bâtiments, en respectant vos besoins et vos attentes.",
  },
  {
    icon: construction,
    title: "SERVICES DE CONSTRUCTION",
    about:
      "Nous assurons la construction de bâtiments de qualité, de la conception à la réalisation, avec un souci constant de la satisfaction client.",
  },
  {
    icon: design,
    title: "CONCEPTION ET PLANIFICATION",
    about:
      "Notre équipe vous accompagne dans la conception et la planification de vos projets, en tenant compte de tous les détails pour garantir le succès.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Nous gérons toute la documentation nécessaire pour vos projets de construction, y compris les permis et les rapports techniques.",
  },
  {
    icon: paint,
    title: "DESIGN INTÉRIEUR",
    about:
      "Nous créons des espaces intérieurs qui reflètent vos goûts et vos besoins, alliant esthétique et fonctionnalité.",
  },
  {
    icon: support,
    title: "SERVICE CLIENT",
    about:
      "Notre équipe est disponible pour répondre à vos questions et vous accompagner tout au long de votre projet, de la conception à la réalisation.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planification",
    about:
      "Nous vous accompagnons dans la planification de vos projets de construction, de la conception initiale jusqu'aux détails finaux, pour garantir un déroulement sans accroc.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "conception",
    about:
      "Nos experts en design créent des plans sur mesure pour répondre à vos besoins, en intégrant des solutions innovantes et esthétiques dans chaque projet.",
  },
  {
    icon: FaRegBuilding,
    title: "réalisation",
    about:
      "Nous réalisons vos projets de construction avec précision, en respectant les normes de qualité et les délais impartis, du gros œuvre aux finitions.",
  },
  {
    icon: FaSitemap,
    title: "finition",
    about:
      "Nous apportons la touche finale à vos travaux, en soignant les détails pour un résultat impeccable, qui répond à vos attentes les plus élevées.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
