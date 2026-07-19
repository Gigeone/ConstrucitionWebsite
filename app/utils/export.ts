import type { IconType } from "react-icons";
import {
  FaBath,
  FaBorderAll,
  FaBroom,
  FaFileSignature,
  FaKitchenSet,
  FaPaintRoller,
  FaRegComments,
  FaScrewdriverWrench,
  FaTrowelBricks,
} from "react-icons/fa6";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

export const allservices = [
  {
    icon: FaBath,
    title: "Salle de bain",
    about:
      "Rénovation complète ou partielle : douche à l'italienne, faïence, meuble vasque, plomberie. Une salle de bain moderne, pensée pour votre quotidien.",
  },
  {
    icon: FaKitchenSet,
    title: "Cuisine",
    about:
      "Pose de cuisine, crédence, plan de travail et petits aménagements sur mesure. Nous coordonnons chaque détail pour une cuisine prête à vivre.",
  },
  {
    icon: FaTrowelBricks,
    title: "Placo & cloisons",
    about:
      "Cloisons, doublages, faux plafonds et isolation. Nous redessinons vos volumes avec des finitions nettes, prêtes à peindre.",
  },
  {
    icon: FaPaintRoller,
    title: "Peinture",
    about:
      "Murs, plafonds et boiseries : préparation des supports, enduits et mise en peinture soignée, avec des conseils couleurs adaptés à votre intérieur.",
  },
  {
    icon: FaBorderAll,
    title: "Parquet & sols",
    about:
      "Pose de parquet flottant, stratifié ou massif, vinyle et carrelage. Un sol durable et bien posé, qui change tout de suite l'ambiance d'une pièce.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Petits travaux",
    about:
      "Montage de meubles, pose d'étagères, reprises et retouches diverses : nous nous occupons de tous ces petits chantiers que l'on repousse toujours.",
  },
];

export const planning = [
  {
    icon: FaRegComments,
    title: "Échange & visite",
    about:
      "Vous nous décrivez votre projet, nous nous déplaçons gratuitement chez vous, à Nantes et dans les alentours, pour prendre les mesures.",
  },
  {
    icon: FaFileSignature,
    title: "Devis clair & gratuit",
    about:
      "Vous recevez un devis détaillé poste par poste, sans surprise et sans engagement, sous 24h après notre visite.",
  },
  {
    icon: FaPaintRoller,
    title: "Travaux soignés",
    about:
      "Nos artisans interviennent aux dates convenues, avec des matériaux de qualité et un souci constant de la finition.",
  },
  {
    icon: FaBroom,
    title: "Chantier propre",
    about:
      "Nous vous livrons un chantier nettoyé, prêt à vivre, et nous restons disponibles après les travaux si besoin.",
  },
];

export const faqs = [
  {
    question: "Quel est le délai pour recevoir un devis ?",
    answer:
      "Après un premier échange et une visite gratuite chez vous, vous recevez un devis détaillé sous 24h. Il est gratuit et sans engagement.",
  },
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      "Nous intervenons à Nantes et dans toute la métropole : Rezé, Saint-Herblain, Vertou, Orvault, Carquefou, Bouguenais, Couëron… En pratique, dans un rayon d'environ 30 km autour de Nantes.",
  },
  {
    question: "Êtes-vous assurés ?",
    answer:
      "Oui. Nous disposons d'une assurance responsabilité civile professionnelle et de la garantie décennale. Les attestations vous sont fournies sur simple demande, avec le devis.",
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer:
      "Cela dépend du chantier : comptez 1 à 2 semaines pour une salle de bain complète, 2 à 3 jours pour la peinture d'une pièce, 1 à 3 jours pour la pose d'un parquet. Le délai précis figure dans le devis et il est respecté.",
  },
  {
    question: "Peut-on habiter le logement pendant les travaux ?",
    answer:
      "Dans la grande majorité des cas, oui. Nous protégeons les sols et les meubles, limitons la poussière et laissons un chantier propre et rangé chaque soir.",
  },
  {
    question: "Faites-vous le gros œuvre ?",
    answer:
      "Non, nous sommes spécialisés dans le second œuvre et les finitions : salle de bain, cuisine, placo, peinture, parquet et petits travaux. Si votre projet nécessite du gros œuvre, nous pouvons vous orienter vers des partenaires de confiance.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alexandre Petit",
    about:
      "Notre salle de bain a été entièrement refaite : douche à l'italienne, faïence, meuble vasque. Résultat impeccable et chantier propre chaque soir.",
    post: "Salle de bain — Nantes",
  },
  {
    image: client2,
    name: "Julie Girard",
    about:
      "Peinture complète de notre appartement avant emménagement. Délais tenus, finitions nickel et de très bons conseils sur les couleurs.",
    post: "Peinture — Saint-Herblain",
  },
  {
    image: client3,
    name: "Samuel Perrot",
    about:
      "Pose d'un parquet et de cloisons en placo dans les combles. Travail précis, devis respecté au centime. Je recommande vivement.",
    post: "Placo & parquet — Vertou",
  },
];
