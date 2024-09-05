import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AdminMenu = (props) => {
    return ( 
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
        

        <div className="flex flex-col gap-y-1 ">
        <Accordion type="single" collapsible>

            <AccordionItem value="item-1">

                <AccordionTrigger>Управление контентом</AccordionTrigger>

                    <AccordionContent className="text-lg pl-4">

                        <Accordion type="single" collapsible asChild>
                            <AccordionItem  value="item-2">  
                                <AccordionTrigger>Каталог</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-y-4 pl-4">
                                    <AccordionItem role="button">
                                        Просмотр и редактирование каталога
                                    </AccordionItem>
                                    <AccordionItem role="button">
                                        Архив
                                    </AccordionItem>
                                    <AccordionItem role="button">
                                        Добавить автомобиль
                                    </AccordionItem>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible asChild>
                            <AccordionItem  value="item-3">  
                                <AccordionTrigger>Новости</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-y-4 pl-4">
                                    <AccordionItem role="button">
                                        Просмотр и редактирование новостной ленты
                                    </AccordionItem>
                                    <AccordionItem role="button">
                                        Архив
                                    </AccordionItem>
                                    <AccordionItem role="button">
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

     );
}
 
export default AdminMenu;