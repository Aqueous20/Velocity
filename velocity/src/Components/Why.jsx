import React from "react";

//framer motion
import { motion } from "motion/react";

//icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

//car image
import car from "../assets/images/why/car.svg"

export const Why = () => {
  return (
    <section
      className="w-full h-screen pt-[60px] xl:pt-[120px] flex items-center"
      id="why"
    >
      <div className="container mx-auto">
        <h2 className="">Unmatched Excellence and Customer Satisfaction</h2>
        <p className="">
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us we strive to
          exceed your expectations in every interaction
        </p>
        {/*Car Image*/}
        <div>
          <img src={car} alt="binge sake" className="w-[1060px] h-[420px]" />
        </div>
      </div>
    </section>
  );
};
