import React from "react";

// swiper react component

import { Swiper, SwiperSlide } from "swiper/react";

// image
import avatar01 from "../assets/images/testimonial/avatar.png";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper/modules";

//icons
import { FaQuoteLeft } from "react-icons/fa";

//framer motion
import { motion } from "motion/react";

//data
const testimonialData = [
  {
    message:
      "They truly exceeded my expectaions and made my car rental experience a delight",
    avatar: avatar01,
    name: "John Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exceeded my expectaions and made my car rental experience a delight",
    avatar: avatar01,
    name: "John Doe",
    job: "Photographer & Videographer",
  },
];

export const TestimonialSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[450px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-red-500 mb-6" />
                <div className=" text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <img
                  src={avatar}
                  alt="binge sake"
                  className="w-[64px] h-[64px] mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-[667085]">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
