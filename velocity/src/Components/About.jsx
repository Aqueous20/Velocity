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
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="w-full min-h-screen pt-20 xl:pt-28 flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-12 xl:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={car01}
              alt="car showcase"
              className="rounded-[20px] w-full max-w-[600px] h-auto object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-snug"
            >
              Car Services Simplified
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.6 }}
              className="text-gray-600 mb-10 max-w-md leading-relaxed"
            >
              Rent, choose, and repair with ease. Our convenient locations,
              diverse car types, and reliable repair points ensure a seamless
              car experience.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-wrap items-center justify-start gap-8 mb-12"
            >
              {/* Car Types */}
              <div className="flex flex-col items-center text-center">
                <MdOutlineDirectionsCar className="text-5xl text-red-500 mb-2" />
                <div className="text-3xl font-black mb-1">
                  {inView ? (
                    <CountUp start={0} end={50} duration={3} delay={1} />
                  ) : null}
                  +
                </div>
                <div className="uppercase text-[13px] font-semibold text-[#667085]">
                  Car <br /> Types
                </div>
              </div>

              {/* Rental Outlets */}
              <div className="flex flex-col items-center text-center">
                <MdOutlineMapsHomeWork className="text-5xl text-red-500 mb-2" />
                <div className="text-3xl font-black mb-1">
                  {inView ? (
                    <CountUp start={0} end={135} duration={3} delay={1} />
                  ) : null}
                </div>
                <div className="uppercase text-[13px] font-semibold text-[#667085]">
                  Rental <br /> Outlets
                </div>
              </div>

              {/* Repair Points */}
              <div className="flex flex-col items-center text-center">
                <MdOutlineBuildCircle className="text-5xl text-red-500 mb-2" />
                <div className="text-3xl font-black mb-1">
                  {inView ? (
                    <CountUp start={0} end={35} duration={3} delay={1} />
                  ) : null}
                </div>
                <div className="uppercase text-[13px] font-semibold text-[#667085]">
                  Repair <br /> Points
                </div>
              </div>
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.6 }}
              className="bg-red-500 hover:bg-[#dd242a] rounded-[10px] w-full sm:w-[184px] h-14 uppercase font-medium text-white tracking-[2px] text-[13px] shadow-lg transition-all"
            >
              See All Cars
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
