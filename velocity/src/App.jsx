import React from "react";
import { About } from "./components/About";
import { BackToTopBtn } from "./components/BackToTopBtn";
import { Cars } from "./components/Cars";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import {Header} from "./components/Header.jsx"
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Why } from "./components/Why";
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
        <div className="h-[4000px]"></div>
      </div>
    </SearchContextProvider>
  );
};

export default App;
