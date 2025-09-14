import React from "react";
import { About } from "./Components/About";
import { BackToTopBtn } from "./Components/BackToTopBtn";
import { Cars } from "./Components/Cars";
import { Cta } from "./Components/Cta";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Testimonials } from "./Components/Testimonials";
import { Why } from "./Components/Why";
import {SearchContextProvider} from "./Context/search.jsx"


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
