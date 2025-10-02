import React from "react";

import audi from "../assets/icons/brands/audi.svg";
import bmw from "../assets/icons/brands/bmw.svg";
import ford from "../assets/icons/brands/ford.svg";
import mazda from "../assets/icons/brands/mazda.svg";
import mercedes from "../assets/icons/brands/mercedes.svg";
import skoda from "../assets/icons/brands/skoda.svg";
import vw from "../assets/icons/brands/vw.svg";

import { motion } from "motion/react";

export const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <div className="container mx-auto">
        {/* Brand Wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <img src={ford} alt="binge sake" className="w-[85px] h-[32px]" />
          </div>
          <div>
            <img
              src={mercedes}
              alt="binge sake"
              className="w-[60px] h-[60px]"
            />
          </div>
          <div>
            <img src={audi} alt="binge sake" className="w-[85px] h-[50px]" />
          </div>
          <div>
            <img src={bmw} alt="binge sake" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={vw} alt="binge sake" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={skoda} alt="binge sake" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={mazda} alt="binge sake" className="w-[62px] h-[50px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
