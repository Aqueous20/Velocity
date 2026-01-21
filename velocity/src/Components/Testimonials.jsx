import React from "react";

//components
import { TestimonialSlider } from "./TestimonialSlider.jsx";

export const Testimonials = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center py-16 xl:py-24 overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  );
};
