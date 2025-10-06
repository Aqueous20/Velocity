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

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import {motion} from "motion/react";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: { car1 },
    info: [
      {
        icon: { gearshift },
        text: "Manual",
      },
      {
        icon: { seat },
        text: "5 Seats",
      },
      {
        icon: { gas },
        text: "Gas",
      },
      {
        icon: { engine },
        text: "1600 HP",
      },
      {
        icon: { wheel },
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: { car2 },
    info: [
      {
        icon: { gearshift },
        text: "Manual",
      },
      {
        icon: { seat },
        text: "5 Seats",
      },
      {
        icon: { gas },
        text: "Gas",
      },
      {
        icon: { engine },
        text: "1600 HP",
      },
      {
        icon: { wheel },
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: { car3 },
    info: [
      {
        icon: { gearshift },
        text: "Automatic",
      },
      {
        icon: { seat },
        text: "5 Seats",
      },
      {
        icon: { gas },
        text: "Gas",
      },
      {
        icon: { engine },
        text: "1600 HP",
      },
      {
        icon: { wheel },
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: { car2 },
    info: [
      {
        icon: { gearshift },
        text: "Automatic",
      },
      {
        icon: { seat },
        text: "5 Seats",
      },
      {
        icon: { gas },
        text: "Gas",
      },
      {
        icon: { engine },
        text: "1600 HP",
      },
      {
        icon: { wheel },
        text: "Front",
      },
    ],
  },
];

export const CarSlider = () => {
  return <div className="container mx-auto">
    <Swiper breakpoints={{320:{slidesPerView}}}></Swiper>
  </div>;
};
