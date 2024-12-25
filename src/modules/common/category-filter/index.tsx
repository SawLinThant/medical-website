"use client";

import { Button } from "@/components/ui/button";
import { SelectDropdown } from "../components/select/select-dropdown";
import { useState } from "react";

const OPTIONS = [
  {
    id: "1",
    name: "Brand 1",
  },
  {
    id: "2",
    name: "Brand 2",
  },
];
const OPTIONS_TWO = [
  {
    id: "1",
    name: "lowest to higest",
  },
  {
    id: "2",
    name: "higest to lowest",
  },
];
const OPTIONS_THREE = [
  {
    id: "1",
    name: "company 1",
  },
  {
    id: "2",
    name: "company 2",
  },
];
const OPTIONS_FOUR = [
  {
    id: "1",
    name: "In stock",
  },
  {
    id: "2",
    name: "Out of stock",
  },
];
const OPTIONS_FIVE = [
  {
    id: "1",
    name: "30% off",
  },
  {
    id: "2",
    name: "20% off",
  },
];

const CategoryFilter: React.FC = () => {
  const [options, setOptions] = useState<string>("");
  console.log(options)
  return (
    <div className="w-full h-20 flex lg:flex-row md:flex-col flex-col items-start lg:items-center justify-start gap-4 lg:gap-8">
      <Button className="rounded-md bg-secondary_color text-white">
        Shop By Category
      </Button>
      <div className="flex flex-row items-center gap-4">
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS_FIVE}
            setOption={setOptions}
            label="Special Prices"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS_THREE}
            setOption={setOptions}
            label="By Company"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS}
            setOption={setOptions}
            label="By Brand"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS_TWO}
            setOption={setOptions}
            label="By Price"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS_FOUR}
            setOption={setOptions}
            label="By Availability"
          />
        </div>
      </div>
    </div>
  );
};
export default CategoryFilter;
