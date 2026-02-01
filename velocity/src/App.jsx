import React from "react";
import { About } from "./components/About.jsx";
import { BackToTopBtn } from "./components/BackToTopBtn.jsx";
import { Cars } from "./components/Cars.jsx";
import { Cta } from "./components/Cta.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Why } from "./components/Why.jsx";
import { SearchContextProvider } from "./context/search.jsx";

const App = () => {
  return (
    <SearchContextProvider>
      <div className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Header />
        <Hero />
        <Cars />
        <About />
        <Why />
        <Testimonials />
        <Cta />
        <Footer />
        <BackToTopBtn />
        {/* <div className="h-[4000px]"></div> */}
      </div>
    </SearchContextProvider>
  );
};

export default App;
