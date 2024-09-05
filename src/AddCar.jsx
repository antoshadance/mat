import Navbar from "./_components/navbar";
import AdminMenu from "./_components/AdminMenu";
import "./Test.css"
import { Image, Plus } from "lucide-react";
import { useState } from "react";
import "./_components/btnaction.css"

const AddCar = () => {

    const [parentHover, setParentHover] = useState(false);

    return ( 
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

            <AdminMenu/>
            
            <div className="h-[calc(100vh-100px)] container-2 flex flex-col w-2/3 gap-y-2  px-2 pt-4" >

                <h1 className="text-center uppercase text-4xl">Каталог</h1>
                
                    <form className="w-full h-full flex pb-2 justify-between">

                        <div className="basis-1/3 h-full px-2 flex flex-col justify-between ">

                            <div className="flex flex-col h-[90%] justify-between container-1 p-1">
                            <div>
                            <label htmlFor="brand">Марка автомобиля</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="brand"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="brand">Модель</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="model"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="year">Год выпуска</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="year"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="price">Цена, руб.</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="price"
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="color">Цвет</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
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
                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                                placeholder="..."
                                name="engine_capacity"
                                ></input>
                                </div>

                                 <div>
                                <label htmlFor="engine_power" >Мощность, л. с.</label>
                                <input
                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                                placeholder="..."
                                name="engine_power"
                                ></input>
                                </div>
                            </div>

                            </div>

                            <div>
                            <label htmlFor="mileage">Пробег, км</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="mileage"
                            ></input>
                            </div>

                            </div>

                            <button className="btn_action bg-transparent border border-white w-full rounded-md p-3 flex items-center justify-center gap-x-4"
                            type="button"
                            >
                                Добавить поле
                            </button>

                        </div>

                        <div className="basis-2/3 pl-24 h-full flex flex-col items-center justify-between">
                            
                            <div className="w-full h-full flex flex-col gap-y-16 container-1">
                            <div className=" w-full h-[40%] bg-[#ccc] relative">
                                <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto" color="black" size={200} strokeWidth={1} />

                                <div className="flex font-semibold absolute w-fit mx-auto left-0 right-0 bottom-5 gap-x-2">
                                <h2 className="text-black text-3xl">Добавить фото</h2>
                                </div>
                            </div>

                            <div className="w-full h-[40%] flex flex-col px-1">
                            <label htmlFor="description">Описание</label>
                            <textarea
                            name="description"
                            className="p-2 w-full min-h-[240px] bg-[#020a0a]/75 rounded-lg resize-none border border-[#ccc]/25"
                            placeholder="..."
                            >
                            </textarea>
                            </div>
                            </div>
                            

                            <button className="btn_action_secondary  border border-[white] text-black bg-white w-full rounded-md p-3 flex items-center justify-center gap-x-4"
                            type="button"
                            >
                                Опубликовать
                            </button>

                        </div>

                    </form>

            </div>

        </div>
        </>
     );
}
 
export default AddCar;