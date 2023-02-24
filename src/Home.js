import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Facts from "./component/Facts";
import Footer from "./component/Footer";
import Herosection from "./component/Herosection";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";
import Skills from "./component/Skills";

const Home = () => {
  return (
    <>
      <div>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Herosection />

        <main id="main">
          <About />
          <Facts />
          <Skills />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
