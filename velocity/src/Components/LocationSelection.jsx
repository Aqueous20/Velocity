import React, { useState } from "react";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "40 South Camp Road, Kingston Jamaica",
  "6 Butter Cup Drive, Kingston Jamaica",
  "5 Cactus Way, Kingston Jamaica",
  "7 Barbican Drive, Kingston Jamaica",
  "Norman Manley Airport, Kingston Jamaica",
  "Main Street 123, United States",
  "Business Avenue 456, Canada",
  "Park Road 789, United Kingdom",
];

export const LocationSelection = () => {
  const [location, setLocation] = useState("Select Loation");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <MenuButton className="dropdown-btn w-full h-full flex flex-col justify-center items-center outline-none xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-red-500" />
                <div className="text-[15px] uppercase font-bold">
                  Select Loactions
                </div>
              </div>
              <div className="uppercase font-medium text-[13px] text-[#667085] text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </MenuButton>
        <MenuItems
          className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] 
                              left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm 
                              text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]"
        >
          {locations.map((location, index) => {
            return <div key={index}>{location}</div>;
          })}
        </MenuItems>
      </div>
    </Menu>
  );
};
