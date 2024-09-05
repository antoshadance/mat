import Navbar from "./_components/navbar";
import AdminMenu from "./_components/AdminMenu";
import "./Test.css"
import { Plus } from "lucide-react";
import { useState } from "react";

const AddCar = () => {

    const [parentHover, setParentHover] = useState(false);

    return ( 
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

            <AdminMenu/>
            
            <div className="h-[calc(100vh-100px)] container-2 flex flex-col w-2/3 gap-y-2  px-2 pt-4" >

                <h1 className="text-center uppercase text-4xl">Каталог</h1>
                
                    <form className="w-full h-full flex pb-2">

                        <div className="basis-1/3 h-full px-2 flex flex-col justify-between ">

                            <div className="flex flex-col h-[90%] justify-between container-1 px-1">
                            <div>
                            <label htmlFor="brand">Марка автомобиля</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="brand"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="brand">Модель</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="model"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="year">Год выпуска</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="year"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="price">Цена, руб.</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="price"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="color">Цвет</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="color"
                            ></input>
                            </div>

                            <div>

                            <label >Двигатель</label>
                            <div className="flex gap-x-2">

                                <div>
                                <label htmlFor="engine_capacity" >Объем, л.</label>
                                <input
                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                                placeholder="..."
                                name="engine_capacity"
                                ></input>
                                </div>

                                 <div>
                                <label htmlFor="engine_power" >Мощность, л. с.</label>
                                <input
                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                                placeholder="..."
                                name="engine_power"
                                ></input>
                                </div>
                            </div>

                            </div>

                            <div>
                            <label htmlFor="mileage">Пробег, км</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]"
                            placeholder="..."
                            name="mileage"
                            ></input>
                            </div>

                            </div>

                            <button className="btn_action bg-transparent border border-white w-full rounded-md p-3 flex items-center justify-center gap-x-4"
                            onMouseEnter={()=>{setParentHover(true)}} onMouseLeave={()=>{setParentHover(false)}}
                            type="button"
                            >
                                <Plus
                                color={parentHover?"black":"#ccc"}
                                />
                                Добавить поле
                            </button>

                        </div>

                        <div className="basis-2/3 h-full">

                        </div>

                    </form>

            </div>

        </div>
        </>
     );
}
 
export default AddCar;