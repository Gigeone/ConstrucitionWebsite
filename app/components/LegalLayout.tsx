import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const LegalLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4"
        >
          <Link
            href="/"
            className="font-heading text-2xl font-semibold tracking-tight text-ink"
          >
            Momo <span className="italic text-accent">Renov&apos;</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FaArrowLeft aria-hidden />
            Retour au site
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="font-heading text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="mt-10 flex flex-col gap-4 leading-relaxed text-ink/80 [&_a]:font-semibold [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-6 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink">
          {children}
        </div>
      </main>

      <footer className="w-full border-t border-ink/10 px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-sm text-ink/50">
          © 2026 Momo Renov&apos; — tous droits réservés
        </p>
      </footer>
    </>
  );
};

export default LegalLayout;
