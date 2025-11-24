import React from "react";

import engine from "../assets/icons/carSlider/engine.svg";
import gas from "../assets/icons/carSlider/gas.svg";
import gearshift from "../assets/icons/carSlider/gearshift.svg";
import seat from "../assets/icons/carSlider/seat.svg";
import wheel from "../assets/icons/carSlider/wheel.svg";

import car1 from "../assets/images/carSlider/car01.svg";
import car2 from "../assets/images/carSlider/car02.svg";
import car3 from "../assets/images/carSlider/car03.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { motion } from "motion/react";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: car1,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: car2,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: car3,
    info: [
      {
        icon: gearshift,
        text: "Automatic",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: car2,
    info: [
      {
        icon: gearshift,
        text: "Automatic",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
];

export const CarSlider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // "up" effect
      whileInView={{ opacity: 1, y: 0 }} // visible state
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <img
                  src={car.image}
                  alt="binge sake"
                  className="w-[380px] h-[284px]"
                />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[12px] uppercase text-[#667885]">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div className="mb-10 text-red-500 font-semibold uppercase">
                      {car.price}/day
                    </div>
                  </div>
                  <div className="flex gap-x-2 text-red-500 h-max">
                    {new Array(Math.floor(car.stars))
                      .fill(0)
                      .map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    {!Number.isInteger(car.stars) && <FaStarHalfAlt />}
                  </div>
                </div>
                <div className="text-center text-red-500 uppercase mb-2 mr-14">
                  car info
                </div>
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-[#101828] w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <img
                            src={item.icon}
                            alt="binge sake"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className="rounded-[10px] w-full uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center 
                            items-center transition-all duration-300 bg-red-500 h-16 cursor-pointer"
                >
                  See details
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
