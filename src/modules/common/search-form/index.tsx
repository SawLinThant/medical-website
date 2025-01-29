"use client"

import { Input } from "@/components/ui/input";
import { SelectDropdown } from "../components/select/select-dropdown";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Category, getCategories } from "@/lib/apolloClient/services/category";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";


const SearchForm: React.FC = () => {
  const [options, setOptions] = useState<string>("");
  const [category, setCategory] = useState<Category[]>()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await getCategories(serverApolloClient);
        setCategory(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full h-full rounded-md border border-gray-300 bg-slate-100 py-2">
      <div className="w-full h-full flex flex-row gap-2">
        <div className="h-full w-[130px] border-r border-gray-500">
          <SelectDropdown
            options={category || []}
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
