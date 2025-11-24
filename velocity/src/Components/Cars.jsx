import React from "react";

import {Brands} from './Brands'
import {CarSlider} from './CarSlider'

export const Cars = () => {
  return (
    <section
      className="min-h-screen flex items-center overflow-hidden py-16"
      id="cars"
    >
      <div className="container mx-auto">
        <Brands />
        <div className="mb-5">
          <CarSlider />
        </div>
      </div>
    </section>
  );
};
