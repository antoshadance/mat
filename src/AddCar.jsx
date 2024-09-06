import Navbar from "./_components/navbar";
import AdminMenu from "./_components/AdminMenu";
import "./Test.css"
import { Image, Plus } from "lucide-react";
import { useState } from "react";
import "./_components/btnaction.css"

const AddCar = () => {


    const [formData,setFormData] = useState({
        brand:"",
        model:"",
        year:"",
        price:"",
        color:"",
        engine_capacity:"",
        engine_power:"",
        mileage:"",
        imgs:"",
        description: "",
    })

    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        const data = {...formData};
        console.log(data)

        fetch("http://localhost:8713/api/cars/create-new",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
    }

    return ( 
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

            <AdminMenu/>
            
            <div className="h-[calc(100vh-100px)] container-2 flex flex-col w-2/3 gap-y-2  px-2 pt-4" >

                <h1 className="text-center uppercase text-4xl">Каталог</h1>
                
                    <form className="w-full h-full flex pb-2 justify-between" onSubmit={handleSubmit}>

                        <div className="basis-1/3 h-full px-2 flex flex-col justify-between ">

                            <div className="flex flex-col h-[90%] justify-between container-1 p-1">
                            <div>
                            <label htmlFor="brand">Марка автомобиля</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="model">Модель</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="year">Год выпуска</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="price">Цена, руб.</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            ></input>
                            </div>

                            <div>
                            <label htmlFor="color">Цвет</label>
                            <input
                            className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                            placeholder="..."
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
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
                                value={formData.engine_capacity}
                                onChange={handleChange}
                                ></input>
                                </div>

                                 <div>
                                <label htmlFor="engine_power" >Мощность, л. с.</label>
                                <input
                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                                placeholder="..."
                                name="engine_power"
                                value={formData.engine_power}
                                onChange={handleChange}
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
                            value={formData.mileage}
                            onChange={handleChange}
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
                            <input name="file" id="file" type="file" className="bg-white" height={0} width={0} style={{display: "none"}} ></input>

                            <label htmlFor="file" className="w-full h-[40%]">
                            <div role="button" className=" w-full h-full bg-[#ccc] relative">
                                <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto" color="black" size={200} strokeWidth={1} />
                                <h2 className=" absolute bottom-0 w-fit left-0 right-0 mx-auto text-black text-3xl pb-6">Добавить фото</h2>
                            </div>
                            </label>

                            <div className="w-full h-[40%] flex flex-col px-1">
                            <label htmlFor="description">Описание</label>
                            <textarea
                            name="description"
                            className="p-2 w-full min-h-[240px] bg-[#020a0a]/75 rounded-lg resize-none border border-[#ccc]/25"
                            placeholder="..."
                            value={formData.description}
                            onChange={handleChange}
                            >
                            </textarea>
                            </div>
                            </div>
                            

                            <button className="btn_action_secondary  border border-[white] text-black bg-white w-full rounded-md p-3 flex items-center justify-center gap-x-4"
                            type="submit"
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