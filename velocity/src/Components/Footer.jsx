import React from "react";

//logo
import logo from "../Assets/icons/velocity.svg";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

//framer motion
import { motion } from "motion/react";

// components
import { Copyright } from "./Copyright.jsx";

// links and react scroll
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/*Grids*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:justify-between items-start gap-x-5 gap-y-14"
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/*Links*/}
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <img src={logo} alt="binge sake" className="w-[200px] h-auto" />
            </Link>
            {/*Text*/}
            <div className="text-[#667085]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            {/*Phone and Email*/}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">(123)456-789</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">Office@Velocityrentals.com</div>
              </div>
            </div>
          </div>
          {/*Links*/}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="text-xl mb-8 font-bold mt-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">Locations</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/*program*/}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-8 mt-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-[#667085]">Mon - Fri:</div>
                <div className="font-semibold">09:00AM - 9:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-[#667085]">Sat:</div>
                <div className="font-semibold">09:00AM - 7:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-[#667085]">Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/*NewsLetter*/}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-8 mt-8">News Letter</h3>
            <div className="mb-9 text-[#667085]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input
                type="email"
                placeholder="Your email"
                className="outline-none bg-white h-full border rounded-lg pl-4"
              />
              <button
                type="submit"
                className="rounded-[10px] uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center 
                items-center transition-all duration-300 bg-red-500 w-24 h-14"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
};
