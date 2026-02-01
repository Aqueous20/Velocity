import React from "react";
import phone from "../assets/images/cta/phone.png";

import app_store from "../assets/icons/buttons/app-store.svg";
import google_play from "../assets/icons/buttons/google-play.svg";

//framer motion
import { motion } from "motion/react";

export const Cta = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center py-16 xl:py-24 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/*text*/}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                viewport={{ once: false, amount: 0.6 }}
                className="text-4xl mb-20 font-bold"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis, facere libero sunt eveniet laudantium quae.
                Distinctio sed necessitatibus tempore at! Quo reiciendis
                voluptas corporis blanditiis cupiditate itaque deserunt vitae
                ea.
              </motion.p>
              {/*BTNS*/}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="bg-[#101828] h-[54px] rounded-[5px] px-4 transition-all duration-300">
                  <img
                    src={google_play}
                    alt="binge sake"
                    className="w-[132px] h-[36px]"
                  />
                </button>
                <button className="bg-[#101828] h-[54px] rounded-[5px] px-4 transition-all duration-300">
                  <img
                    src={app_store}
                    alt="binge sake"
                    className="w-[132px] h-[36px]"
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {/*image*/}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <img src={phone} alt="binge sake" className="w-[320px] h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
