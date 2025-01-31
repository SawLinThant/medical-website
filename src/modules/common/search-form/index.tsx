// "use client"

// import { Input } from "@/components/ui/input";
// import { SelectDropdown } from "../components/select/select-dropdown";
// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import { Category, getCategories } from "@/lib/apolloClient/services/category";
// import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
// import { useRouter } from "next/navigation";


// const SearchForm: React.FC = () => {
//   const [options, setOptions] = useState<string>("");
//   const [category, setCategory] = useState<Category[]>();
//   const router = useRouter();
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { categories } = await getCategories(serverApolloClient);
//         setCategory(categories);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);
//   const handleSubmit = () => {
//     router.push(`/products`)
//   }

//   return (
//     <div className="w-full h-full rounded-md border border-gray-300 bg-slate-100 py-2">
//       <div className="w-full h-full flex flex-row gap-2">
//         <div className="h-full w-[130px] border-r border-gray-500">
//           <SelectDropdown
//             options={category || []}
//             setOption={setOptions}
//             label="Category"
//           />
//         </div>
//         <form action="" className="w-full h-full">
//           <div className="relative w-full h-full">
//             <Input placeholder="Search in shop" className="rounded-r-md pb-1 rounded-l-none h-5 bg-transparent border-none min-w-[17rem] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none" />
//             <div className="absolute top-0 right-3">
//               <Search />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SearchForm;
"use client"

"use client"

import { Input } from "@/components/ui/input";
import { SelectDropdown } from "../components/select/select-dropdown";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Category, getCategories } from "@/lib/apolloClient/services/category";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { useRouter } from "next/navigation";

const SearchForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await getCategories(serverApolloClient);
        setCategories(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    if (selectedCategory) {
      queryParams.append("category", selectedCategory);
    }
    
    if (searchTerm.trim()) {
      queryParams.append("name", searchTerm.trim());
    }

    const queryString = queryParams.toString();
    router.push(`/product/list${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="w-full h-full rounded-md border border-gray-300 bg-slate-100 py-2">
      <div className="w-full h-full flex flex-row gap-2">
        <div className="h-full w-[130px] border-r border-gray-500">
          <SelectDropdown
            options={categories}
            setOption={setSelectedCategory}
            label="Category"
          />
        </div>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <div className="relative w-full h-full">
            <Input 
              placeholder="Search in shop" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-r-md pb-1 rounded-l-none pr-10 h-5 bg-transparent border-none min-w-[17rem] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none" 
            />
            <button type="submit" className="absolute top-0 right-3">
              <Search className="cursor-pointer" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
