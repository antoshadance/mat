import { Link } from "react-router-dom";
import Navbar from "./_components/navbar.jsx";
import "./Test.css";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Search } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Test = () => {
    return (
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

            <div className="container-1 h-[calc(100vh-100px)] w-1/3 flex flex-col border-r-[1px] border-[#ccc]/10 gap-y-20">

                <div className="flex flex-col gap-y-2 pt-4">
                    <h2>Андреев Андрей Андреевич</h2>
                    <div className="flex justify-left gap-x-2">
                        <h2>Роль: </h2>
                        <p>Сотрудник, Контент менеджер</p>
                    </div>
                    <div className="flex justify-left gap-x-2">
                        <h2>Внутренний номер: </h2>
                        <p>123 456</p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 ">
                <Accordion type="single" collapsible>

                    <AccordionItem value="item-1">

                        <AccordionTrigger>Управление контентом</AccordionTrigger>

                            <AccordionContent className="text-lg pl-4">

                                <Accordion type="single" collapsible asChild>
                                    <AccordionItem  value="item-2">  
                                        <AccordionTrigger>Каталог</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-y-8 pl-4">
                                            <AccordionItem>
                                                Просмотр и редактирование каталога
                                            </AccordionItem>
                                            <AccordionItem>
                                                Архив
                                            </AccordionItem>
                                            <AccordionItem>
                                                Добавить автомобиль
                                            </AccordionItem>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Accordion type="single" collapsible asChild>
                                    <AccordionItem  value="item-3">  
                                        <AccordionTrigger>Новости</AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-y-8 pl-4">
                                            <AccordionItem>
                                                Просмотр и редактирование новостной ленты
                                            </AccordionItem>
                                            <AccordionItem>
                                                Архив
                                            </AccordionItem>
                                            <AccordionItem>
                                                Добавить новость
                                            </AccordionItem>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </AccordionContent>

                            

                    </AccordionItem>

                </Accordion>
                </div>

                <div className="p-2 mt-auto">
                <button className='btn_action bg-transparent border border-white w-full rounded-md p-3'>
                    Выйти из аккаунта
                </button>
                </div>

            </div>


            <div className="container-1 min-h-[calc(100vh-100px)] w-2/3 flex flex-col px-2 pt-4">
                <div>
                    <h1 className="uppercase text-center text-4xl">Каталог</h1>
                </div>
                <div className="w-full flex py-8">
                    <input type="text" className="border-b-[1px] border-[#ccc]/25 bg-transparent px-4 text-[#ccc] w-[95%] focus:outline-none" placeholder="Поиск по названию, дате, номеру документа или сделки ...">
                    </input>
                    <button className="hover:text-white flex border-[1px] rounded-r-sm px-2 py-1 border-[#ccc]/50">
                        
                        <Search/>
                        Искать
                    </button>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="basis-1/2">
                        <p className="underline w-fit">Фильтры</p>
                    </div>
                    <div className="basis-1/2 flex justify-end">
                    <DropdownMenu className="" >
                    <DropdownMenuTrigger className="text-right w-fit">Сортировка по: Дата добавления</DropdownMenuTrigger>
                        <DropdownMenuContent  className="bg-transparent rounded-sm" side="bottom-right">
                            <DropdownMenuLabel>Сортировка по</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Дата добавления</p></DropdownMenuItem>
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Дата редактирования</p></DropdownMenuItem>
                            <DropdownMenuItem className="group p-0"><p role="button" className="p-2 w-full text-[#ccc] group-hover:text-black">Марка</p></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}
 
export default Test;   