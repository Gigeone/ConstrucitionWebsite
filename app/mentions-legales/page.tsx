import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales | Finéo",
  description:
    "Mentions légales du site de Finéo, entreprise de rénovation intérieure et petits travaux à Nantes.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        Le site momorenov.fr est édité par <strong>Finéo</strong>{" "}
        [forme juridique et capital social à compléter], immatriculée sous le
        numéro SIRET [à compléter], dont le siège social est situé à [adresse
        à compléter], 44000 Nantes.
      </p>
      <p>
        Téléphone : 06 12 34 56 78 — Email : contact@momorenov.fr
        <br />
        Directeur de la publication : [nom du gérant à compléter]
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par [hébergeur à compléter — par exemple Vercel
        Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —
        vercel.com].
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, images, logo,
        charte graphique) est la propriété de Finéo, sauf mention
        contraire. Toute reproduction, même partielle, est interdite sans
        autorisation écrite préalable.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Finéo s&apos;efforce de maintenir les informations de ce
        site exactes et à jour, mais ne peut garantir l&apos;exactitude, la
        complétude ou l&apos;actualité de l&apos;ensemble des contenus. Les
        photos de réalisations sont présentées à titre illustratif.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les données transmises via le formulaire de contact sont traitées
        conformément à notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>
    </LegalLayout>
  );
}
