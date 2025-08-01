import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

const App: React.FC = () => {
  return (
    <>
      {/* ניווט */}
      <Navigation />

      {/* תוכן האתר */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
};

export default App;
