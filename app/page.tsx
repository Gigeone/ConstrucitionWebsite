import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MotionProvider from "./components/MotionProvider";
import Porfolio from "./components/Porfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Working from "./components/Working";
import { faqs } from "./utils/export";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <MotionProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Porfolio />
        <Working />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
