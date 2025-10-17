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
      className="w-full h-screen pt-[60px] xl:pt-[120px] flex items-center"
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }} // "down" effect
            whileInView={{ opacity: 1, y: 0 }} // visible state
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <img
              src={car01}
              alt="binge sake"
              className="rounded-[20px] w-[600px] h-[448px]"
            />{" "}
            {/*image*/}
          </motion.div>
          <div className="flex-1 flex items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              {/*text & stats*/}
              <motion.h2
                initial={{ opacity: 0, y: 40 }} // "down" effect
                whileInView={{ opacity: 1, y: 0 }} // visible state
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.6 }}
                className="text-4xl mb-6 font-bold"
              >
                Car Services Simplified
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }} // "down" effect
                whileInView={{ opacity: 1, y: 0 }} // visible state
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Rent, choose and repair with ease. Our convenient locations
                diverse car types, and reliable repair points ensure a seamless
                car experience
              </motion.p>
              {/*text & stats*/}
              <motion.div
                initial={{ opacity: 0, y: 40 }} // "down" effect
                whileInView={{ opacity: 1, y: 0 }} // visible state
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/*Car Types*/}
                <div className="flex flex-col w-[100px] ">
                  <MdOutlineDirectionsCar className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-[#667085]">
                    car <br /> types
                  </div>
                </div>
                {/*rental outlets*/}
                <div className="flex flex-col w-[100px] ">
                  <MdOutlineMapsHomeWork className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-[#667085]">
                    rental <br /> outlets
                  </div>
                </div>
                {/*repair points*/}
                <div className="flex flex-col w-[100px] ">
                  <MdOutlineBuildCircle className="text-5xl text-red-500 mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-[#667085]">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              {/*button*/}
              <motion.button
                initial={{ opacity: 0, y: 40 }} // "down" effect
                whileInView={{ opacity: 1, y: 0 }} // visible state
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden xl:block bg-red-500 hover:bg-[#dd242a] rounded-[10px] w-full h-16 uppercase font-medium 
                          text-white tracking-[2px] text-[13px] max-w-[184px]"
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
