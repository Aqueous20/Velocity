import React from "react";

//framer motion
import { motion } from "motion/react";

//icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

//car image
import car from "../assets/images/why/car.svg";

export const Why = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center py-16 xl:py-24 overflow-hidden"
      id="why"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-4xl mb-6 font-bold text-center"
        >
          Unmatched Excellence and Customer Satisfaction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the competition. From the moment you engage with us we strive to
          exceed your expectations in every interaction
        </motion.p>
        {/*Car Image*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <img src={car} alt="binge sake" className="w-[1060px] h-[420px]" />
        </motion.div>
        {/*Grid Items*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/*Item 1*/}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] mb-4 text-red-500" />
            <h3 className="text-xl mb-4 font-semibold">
              Rent Simply And Quickly
            </h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experince with us is nothing short of outstanding
            </p>
          </div>
          {/*Item 2*/}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] mb-4 text-red-500" />
            <h3 className="text-xl mb-4 font-semibold">
              Modern & well maintained vehicles
            </h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experince with us is nothing short of outstanding
            </p>
          </div>
          {/*Item 3*/}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] mb-4 text-red-500" />
            <h3 className="text-xl mb-4 font-semibold">
              Promt and flexible services
            </h3>
            <p className="hidden xl:flex">
              We prioritize your need and we go above and beyond to ensure your
              experince with us is nothing short of outstanding
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
