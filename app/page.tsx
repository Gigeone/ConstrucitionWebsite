import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Porfolio from "./components/Porfolio";
import Services from "./components/Services";
import Working from "./components/Working";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Porfolio />
      <Working />
    </>
  );
}
