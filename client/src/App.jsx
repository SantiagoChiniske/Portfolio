import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/header/header";
import Start from "./components/start/start";
import About from "./components/about/about";
import Tecnologias from "./components/tecnologias/tecnologias";
import Projetos from "./components/projetos/projetos";
import Contato from "./components/contato/contato";
import Footer from "./components/footer/footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-in");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />

        <div className="fade-in"><Start /></div>
        <div className="fade-in"><About /></div>
        <div className="fade-in"><Tecnologias /></div>
        <div className="fade-in"><Projetos /></div>
        <div className="fade-in"><Contato /></div>

      <Footer />
    </>
  );
}

export default App;
