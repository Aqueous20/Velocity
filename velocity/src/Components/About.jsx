import React from "react";

import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import car01 from "../assets/images/about/car01.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full min-h-screen flex items-center py-16 xl:py-24 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:items-start xl:flex-row xl:justify-between gap-10 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={car01}
              alt="about car"
              className="rounded-[20px] w-full max-w-[500px] h-auto mx-auto"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="w-full xl:max-w-[517px]">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.6 }}
                className="text-3xl md:text-4xl mb-6 font-bold"
              >
                Car Services Simplified
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10 max-w-md leading-relaxed"
              >
                Rent, choose and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-wrap gap-8 mb-12"
              >
                {/* SINGLE STAT */}
                <div className="flex flex-col items-center w-[90px]">
                  <MdOutlineDirectionsCar className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-1">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] text-[#667085] font-semibold text-center leading-tight">
                    car types
                  </div>
                </div>

                <div className="flex flex-col items-center w-[90px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-1">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] text-[#667085] font-semibold text-center leading-tight">
                    rental outlets
                  </div>
                </div>

                <div className="flex flex-col items-center w-[90px]">
                  <MdOutlineBuildCircle className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-1">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] text-[#667085] font-semibold text-center leading-tight">
                    repair points
                  </div>
                </div>
              </motion.div>

              {/* Button (desktop only) */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-red-500 hover:bg-[#dd242a] rounded-[10px] w-full h-16 
                           max-w-[184px] uppercase font-medium text-white tracking-[2px] text-[13px]"
              >
                See all cars
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
