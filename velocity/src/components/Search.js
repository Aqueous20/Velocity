"use client";

import React, { useContext } from "react";
import { SearchContext } from "../context/search";
import LocationSelector from "./LocationSelector";

function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelector></LocationSelector>
      </div>
      
    </div>
  );
}

export default Search;
