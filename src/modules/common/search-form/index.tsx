import { Input } from "@/components/ui/input";
import { SelectDropdown } from "../components/select/select-dropdown";
import { useState } from "react";
import { Search } from "lucide-react";

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

const SearchForm: React.FC = () => {
  const [options, setOptions] = useState<string>("");
  return (
    <div className="w-full h-full rounded-md border bg-slate-100 py-2">
      <div className="w-full h-full flex flex-row gap-2">
        <div className="h-full w-[130px] border-r border-gray-500">
          <SelectDropdown
            options={OPTIONS}
            setOption={setOptions}
            label="Category"
          />
        </div>
        <form action="" className="w-full h-full">
          <div className="relative w-full h-full">
            <Input placeholder="Search in shop" className="rounded-r-md pb-1 rounded-l-none h-5 bg-transparent border-none min-w-[17rem] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none" />
            <div className="absolute top-0 right-3">
              <Search />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchForm;
