"use client";

import { Button } from "@/components/ui/button";
import { SelectDropdown } from "../components/select/select-dropdown";
import { useState } from "react";

const OPTIONS = [
  {
    id: "1",
    name: "liver",
  },
  {
    id: "2",
    name: "stomach",
  },
];

const CategoryFilter: React.FC = () => {
  const [options, setOptions] = useState<string>("");
  return (
    <div className="w-full h-20 flex lg:flex-row md:flex-col flex-col items-start lg:items-center justify-start gap-4 lg:gap-8">
      <Button className="rounded-md bg-secondary_color text-white">
        Shop By Category
      </Button>
      <div className="flex flex-row items-center gap-4">
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS}
            setOption={setOptions}
            label="Special Prices"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS}
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
            options={OPTIONS}
            setOption={setOptions}
            label="By Price"
          />
        </div>
        <div className="min-w-[110px]">
          <SelectDropdown
            options={OPTIONS}
            setOption={setOptions}
            label="By Availability"
          />
        </div>
      </div>
    </div>
  );
};
export default CategoryFilter;
