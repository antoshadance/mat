import Navbar from "./_components/navbar";
import AdminMenu from "./_components/AdminMenu";
import "./Test.css"
import { CircleX, Image, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./_components/btnaction.css"

const AddCar = () => {

    
//FORM (MAIN)
    const [formData,setFormData] = useState({
        brand:"",
        model:"",
        year:"",
        price:"",
        color:"",
        engine_capacity:"",
        engine_power:"",
        mileage:"",
        imgs:[],
        description: "",
    })

    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
//


//LUCIDE ICONS HOVER
    const handleIconHoverOn  = (e) => {
        let arr = Array.from(e.target.children)
        arr.forEach((e)=>{e.setAttribute("stroke","white")})
    }


    const handleIconHoverOut = (e) => {
        let arr = Array.from(e.target.children)
        arr.forEach((e)=>{e.setAttribute("stroke","#ccc")})
    }
//


// IMAGES AND PREVIEWS
    const [images,setImages] = useState(formData.imgs)
    const [previews, setPreviews] = useState([])

    const handleImageDelete = (e) => {
            console.log(e.target.parentElement.previousElementSibling)        
    }


    function handleImageChange(e) {
        
        let tmp = [];
        let uploaded = Array.from(e.target.files);
        setFormData({
            ...formData,
            imgs: uploaded
        })
        uploaded.forEach((e)=>{tmp.push(URL.createObjectURL(e))})
        setPreviews(tmp)
    }

    function handleImagesInitialSet(ev) {
        setImages(ev.target.files)
        setFormData({
            ...formData,
            imgs: [...ev.target.files]
        })
    }
//
    



//INPUTS
        const [newInputCount,setNewInputCount] = useState(0);
        const [extraInputs,setExtraInputs] = useState([]);

        function handleInputNameChange (ev,e,i) {
            let nextInputs = [...extraInputs]
            nextInputs[i].name = ev.target.value
            setExtraInputs(nextInputs)
        }

        function handleInputValueChange(ev,e,i) {
            let nextInputs = [...extraInputs]
            nextInputs[i].value=ev.target.value
            setExtraInputs(nextInputs)
        }

        function addNewInput () {
            setExtraInputs([
                ...extraInputs,
                {
                    name: "Новое поле "+newInputCount,
                    value:""
                }
            ])
            setNewInputCount(newInputCount+1)
        }

        function handleInputDelete (i) {
            setExtraInputs(extraInputs.filter((e,index)=>i!==index))
        }

        useEffect(()=>{
            setFormData({
                ...formData,
                extraInputs:[...extraInputs]
            })
        },[extraInputs])  
//


//SUBMITTING FORM
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
            }).then(setTimeout(()=>{
                setFormData({
                    brand:"",
                    model:"",
                    year:"",
                    price:"",
                    color:"",
                    engine_capacity:"",
                    engine_power:"",
                    mileage:"",
                    imgs:[],
                    description: "",
                })
                setExtraInputs([])
                setPreviews([])
                setNewInputCount(0)
            },1000))

    }
//
    
    
    return ( 
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

            <AdminMenu/>
            
            <div className="h-[calc(100vh-100px)] container-2 flex flex-col w-2/3 gap-y-2  px-2 pt-4" >

                <h1 className="text-center uppercase text-4xl">Каталог</h1>
                
                    <form className="w-full h-full flex pb-2 justify-between" onSubmit={handleSubmit}>

                        <div className="basis-1/3 h-full px-2 flex flex-col justify-between ">

                            <div className="flex flex-col h-[full] gap-y-5 container-1 p-1">
                            <div className="">
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
                            <div className="flex gap-x-2 items-end">

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

                            {extraInputs.length!==0&&
                                extraInputs.map((e,i)=>{
                                    return (
                                        <div key={i}>
                                            <input
                                            type="text"
                                            placeholder={e.name}
                                            className="bg-transparent text-[#ccc] placeholder-[#ccc]/50 focus:outline-none"
                                            onChange={(ev)=>{handleInputNameChange(ev,e,i)}} 
                                            />
                                            <div className="flex">
                                                <input
                                                className="bg-[#020a0a]/75 w-full text-[#ccc] border rounded-lg px-2 border-[#ccc]/25"
                                                placeholder="..."
                                                name={e.name}
                                                value={e.value}
                                                onChange={(ev)=>{handleInputValueChange(ev,e,i)}}
                                                ></input>
                                                <button
                                                type="button"
                                                className="h-full w-1/6 py-1 flex items-center justify-center"
                                                onClick={()=>{handleInputDelete(i)}}
                                                >
                                                    <X
                                                    onMouseEnter={handleIconHoverOn}
                                                    onMouseLeave={handleIconHoverOut}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            </div>

                            <button className="btn_action bg-transparent border border-white w-full rounded-md p-3 flex items-center justify-center gap-x-4"
                            type="button"
                            onClick={addNewInput}
                            >
                                Добавить поле
                            </button>

                        </div>

                        <div className="basis-2/3 pl-24 h-full flex flex-col items-center">
                            
                            <div className="w-full h-full flex flex-col gap-y-16 container-1">
                            <input name="file" id="file" type="file" className="bg-white" height={0} width={0} style={{display: "none"}} multiple onChange={handleImageChange}></input>

                            <label htmlFor="file" className="w-full h-[40%] ">
                            <div role="button" className=" w-full h-[280px] bg-[#ccc] relative" >
                                {previews.length==0?
                                <>
                                <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto" color="black" size={200} strokeWidth={1} />
                                <h2 className=" absolute bottom-0 w-fit left-0 right-0 mx-auto text-black text-3xl pb-6">Добавить фото</h2>
                                </>
                                :
                                <div className="w-full h-full flex">
                                    <div className="w-1/2 h-full relative">
                                    <img
                                    className="w-full h-full object-cover"
                                    src={previews[0]}
                                    />
                                    <div className="absolute bottom-0  bg-black/25 backdrop-blur-sm w-full p-2">
                                        <h2 className="text-white">Основное фото</h2>
                                    </div>
                                    </div>
                                    <div className="container-1 p-1 h-full w-1/2 gap-1 flex flex-wrap justify-between ">
                                        {previews.map((e,i)=>{
                                            return (
                                                <div className="basis-[49%] h-[100px] relative">
                                                    <img
                                                    key={i}
                                                    src={e}
                                                    className={i==0?"w-full h-full object-cover blur-sm":"w-full h-full object-cover"}                                                
                                                    />
                                                    <button type="button" className=" absolute top-0 right-0"   onClick={handleImageDelete}>
                                                    <X  strokeWidth={1.5} onMouseEnter={handleIconHoverOn} onMouseLeave={handleIconHoverOut} style={{transition: "all .5 ease-in-out"}}/>
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>    
                            }
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