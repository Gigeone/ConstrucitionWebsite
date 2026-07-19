import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Momo Renov'",
  description:
    "Politique de confidentialité et protection des données personnelles du site de Momo Renov', Nantes.",
  alternates: {
    canonical: "/confidentialite",
  },
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <p>
        Momo Renov&apos; attache une grande importance à la protection de vos
        données personnelles. Cette page décrit les données collectées via le
        site momorenov.fr et l&apos;usage qui en est fait, conformément au
        Règlement général sur la protection des données (RGPD).
      </p>

      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact collecte uniquement les informations
        nécessaires au traitement de votre demande : nom, adresse email,
        numéro de téléphone et contenu de votre message. Aucune autre donnée
        personnelle n&apos;est collectée.
      </p>

      <h2>Finalité et base légale</h2>
      <p>
        Ces données sont utilisées exclusivement pour répondre à votre
        demande de renseignement ou de devis. Le traitement repose sur les
        mesures précontractuelles prises à votre demande (article 6.1.b du
        RGPD).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant la durée du traitement de votre
        demande, puis au maximum 3 ans à compter du dernier contact, avant
        d&apos;être supprimées.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées uniquement à Momo Renov&apos;. Elles ne
        sont ni vendues, ni cédées, ni transmises à des tiers.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n&apos;utilise pas de cookies de suivi ni d&apos;outil de
        mesure d&apos;audience tiers déposant des cookies.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation et d&apos;opposition
        sur vos données. Pour l&apos;exercer, écrivez-nous à
        contact@momorenov.fr. Vous pouvez également introduire une
        réclamation auprès de la CNIL (cnil.fr).
      </p>
    </LegalLayout>
  );
}
