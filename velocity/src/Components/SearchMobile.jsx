import React from "react";
import { DateSelection } from "./DateSelection";
import { HoursSelection } from "./HoursSelection";
import { LocationSelection } from "./LocationSelection";

export const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="caontainer mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button
              className="rounded-[10px] uppercase font-medium text-white tracking-[2px] text-[13px] flex justify-center 
                        items-center transition-all duration-300 h-14 bg-[#ed1d24] hover:bg-[#dd242a] mx-auto w-[164px]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
