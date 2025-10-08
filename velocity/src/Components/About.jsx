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
      className="w-full h-screen pt-[60px] xl:pt-[120px] flex items-center ref={ref}"
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
              <div>
                {/*Car Types*/}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
