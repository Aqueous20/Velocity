import React, { useContext } from "react";
import { Search } from "./Search.jsx";
import { SearchContext } from "../context/search.jsx";
import google_play from "../assets/icons/buttons/google-play.svg";
import app_store from "../assets/icons/buttons/app-store.svg";
import hero_car from "../assets/images/hero/car.svg";
import { motion } from "motion/react";


export const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and image wrapper*/}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            {/* text wrapper*/}
            <motion.h1
              initial={{ opacity: 0, y: -40 }} // "down" effect
              whileInView={{ opacity: 1, y: 0 }} // visible state
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.6 }}
              className="text-4xl xl:text-[64px] text-[#101828] xl:leading-[72px] font-extrabold mb-[18px]"
            >
              Explore Our Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </motion.h1>
            <p className="text-base xl:text-xl xl:leading-8 max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable rentals
            </p>
            <div className="flex gap-x-3 justify-center xl:justify-start">
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
            </div>
          </div>
          <div className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] min-[1680px]:right-[120px] xl:top-[48px] xl:left-[40px]">
            {/*image wrapper*/}
            <img src={hero_car} alt="binge sake" className="object-contain" />
          </div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};
