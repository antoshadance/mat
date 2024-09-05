import { Link } from "react-router-dom";
import Navbar from "./_components/navbar.jsx";
import "./Test.css";
import { useEffect, useState } from "react";
import AdminMenu from "./_components/AdminMenu.jsx";
import SearchBar from "./_components/SearchBar.jsx";
import CarCard from "./_components/carCard.jsx";


const Test = () => {

    const [data,setData] = useState(undefined)

    useEffect(()=>{
        fetch("http://localhost:8713/cars").then(r=>r.json()).then((d)=>{console.log(d)})
    },[])


    return (
        <>
        <Navbar/>
        <div className="min-h-[calc(100vh-100px)] flex w-full px-24  text-lg">

        <AdminMenu/>

        <div className="h-[calc(100vh-100px)] container-2 flex flex-col w-2/3 gap-y-2  px-2 pt-4" >
        <SearchBar/>
        </div>

        </div>
        </>
    );
}
 
export default Test;   