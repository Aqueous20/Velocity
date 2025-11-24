import React, { useContext } from "react";
import { SearchContext } from "../context/search.jsx";
import { LocationSelection } from "./LocationSelection.jsx";
import { DateSelection } from "./DateSelection.jsx";
import { HoursSelection } from "./HoursSelection.jsx";

export const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "rounded-[10px] w-full uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center items-center transition-all duration-300 h-14 bg-red-500 xl:w-[164px]"
                : "rounded-[10px] w-full uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center items-center transition-all duration-300 h-16 bg-red-500 xl:w-[184px]"
            } `}
          >
            Seacrh
          </button>
        </div>
      </div>
    </div>
  );
};
