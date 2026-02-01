import React, { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa";

import { Link } from "react-scroll";

export const BackToTopBtn = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Link
      to="home"
      smooth={true}
      className={`${!isActive && "hidden"} hidden fixed bg-red-500 hover:bg-red-700 w-10 h-10 z-10 right-16 bottom-11 cursor-pointer md:flex justify-center items-center
    text-white border-2 border-white `}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};
