import React from "react";
import { useContext, useState, useEffect } from "react";
//import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/icons/logo.svg";

function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //Add Event Listener
    window.addEventListener("scroll", handleScroll);

    //Remove Event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(header);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex-col xl:flex-row xl:items-center xl:justify-between">
        <div>
          {/* logo */}
          <Link>
            <div className="w-[130px] h-fit">
              <img src={logo} alt="binge sake"></img>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
