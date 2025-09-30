import React, { useContext } from "react";
import { Search } from "./Search.jsx";
import { SearchContext } from "../context/search.jsx";
import google_play from "../assets/icons/buttons/google-play.svg";
import app_store from "../assets/icons/buttons/app-store.svg";

export const Hero = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and image wrapper*/}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            {/* text wrapper*/}
            <h1 className="text-4xl xl:text-[64px] text-[#101828] xl:leading-[72px] font-extrabold mb-[18px]">
              Explore Our Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </h1>
            <p className="text-base xl:text-xl xl:leading-8">
              Find your ideal ride for any adventur with our diverse range of
              afordable and dependable rentals
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
          <div>{/*image wrapper*/}image</div>
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
