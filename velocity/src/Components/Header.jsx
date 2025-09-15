import React, { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";
import { SearchMobile } from "./SearchMobile.jsx";
import { useMediaQuery } from "react-responsive";
import logo from "../Assets/icons/velocity.svg";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/search.jsx";

export const Header = () => {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full maax-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4 w-full">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img src={logo} alt="binge sake" className="w-[125px] h-[90px]" />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:justify-between xl:h-max xl:bg-transparent
          xl:pb-0 transition-all duration-150 text-center uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="cursor-pointer xl:hidden rounded-[10px] w-full uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center 
            items-center transition-all duration-300 h-14 max-w-[164px] mx-auto bg-[#101828]"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
          <Link className="cursor-pointer">
            <SearchMobile />
          </Link>
        </nav>
      </div>
    </div>
  );
};
