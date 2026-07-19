import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MotionProvider from "./components/MotionProvider";
import Porfolio from "./components/Porfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Working from "./components/Working";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Porfolio />
        <Working />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
