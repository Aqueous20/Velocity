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
          <div>
            <img
              src={car01}
              alt="binge sake"
              className="rounded-[20px] w-[600px] h-[448px]"
            />{" "}
            {/*image*/}
          </div>
          <div>
            <div>
              {/*text & stats*/}
              <h2>Car Services Simplified</h2>
              <p>
                Rent, choose and repair with ease. Our convenient locations
                diverse car types, and reliable repair points ensure a seamless
                car experience
              </p>
              {/*text & stats*/}
              <div className="flex">
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
                {/*repair points*/}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
