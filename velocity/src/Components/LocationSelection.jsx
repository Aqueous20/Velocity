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
          Menu Btn
        </MenuButton>
        <MenuItems className="outline-none">Menu Items</MenuItems>
      </div>
    </Menu>
  );
};
