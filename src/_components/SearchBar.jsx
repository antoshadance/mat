import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {

    const [parentHover,setParentHover] = useState(false);

    return ( 
        <div className=" flex flex-col">
                <div>
                    <h1 className="uppercase text-center text-4xl">Каталог</h1>
                </div>
                <div className="w-full flex py-8">
                    <input type="text" className="border-b-[1px] border-[#ccc]/25 bg-transparent px-4 text-[#ccc] w-[95%] focus:outline-none" placeholder="Поиск по названию, дате, номеру документа или сделки ...">
                    </input>
                    <button className="hover:text-white flex border-[1px] rounded-r-sm px-2 py-1 border-[#ccc]/50 transition"  onMouseEnter={()=>{setParentHover(true)}} onMouseLeave={()=>{setParentHover(false)}}>
                        
                        <Search color={parentHover?"white":"#ccc"} />
                        Искать
                    </button>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="basis-1/2">
                        <p className="underline w-fit hover:text-white transition" role="button" >Фильтры</p>
                    </div>
                    <div className="basis-1/2 flex justify-end">
                    <DropdownMenu className="" >
                    <DropdownMenuTrigger className="text-right w-fit hover:text-white transition">Сортировка по: Дата добавления</DropdownMenuTrigger>
                        <DropdownMenuContent  className="bg-[#020a0a] rounded-sm" side="bottom-right">
                            <DropdownMenuLabel className="">Сортировка по</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Дата добавления</p></DropdownMenuItem>
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Дата редактирования</p></DropdownMenuItem>
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Марка</p></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </div>
        </div>
     );
}
 
export default SearchBar;