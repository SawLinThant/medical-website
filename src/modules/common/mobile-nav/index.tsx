"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { MobileNavSheet } from "./sheet"
import SearchForm from "../search-form"

const MobileNav:React.FC = () => {
    return(
        <nav className="w-full h-full p-4 lg:hidden block bg-secondary_color">
            <div className="w-full flex flex-row items-center justify-between gap-3">
                <div className="md:block hidden">
                    <SearchForm/>
                </div>
                <div className="relative block w-full md:hidden">
                    <Input className="h-11 w-full pl-12 border rounded-md focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Search Products "/>
                    <div className="absolute top-2 left-3">
                        <Search size={25}/>
                    </div>
                </div>
                <MobileNavSheet/>
            </div>
        </nav>
    )
}
export default MobileNav