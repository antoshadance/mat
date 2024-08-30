
import { Link } from "react-router-dom";
import "./Navbar.css";
import HorizontalLogo from "../svgs/horlogo";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false)
    const toggleNavbar = () => {
        setIsClicked(!isClicked)
    }

    const [scroll,setScroll] = useState(0);

    useEffect(()=>{
        document.addEventListener("scroll",()=>{setScroll(window.scrollY)})
    },[])

    useEffect(()=>{
        let cls = ["outline","outline-1","outline-[#cccccc]/10"]
        if (scroll !== 0) {
            cls.forEach((el)=>{document.querySelector("nav").classList.add(el)})
        } else
        cls.forEach((el)=>{document.querySelector("nav").classList.remove(el)})
    },[scroll])

    const [loginModalOpen,setLoginModalOpen] = useState(false)




    return (
        <> 
        <nav className="py-5 px-5  md:px-24 flex justify-between h-[100px] w-full backdrop-blur-sm z-10 sticky top-0" >

            <Link to={"/"} className="logo_link" onClick={()=>{setIsClicked(false)}}><HorizontalLogo h="100%" w="100%" fill="currentColor" /></Link>

            <button className="lg:hidden" onClick={toggleNavbar}>
                    {isClicked?
                        (<svg  className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>)
                        :
                        (<svg  className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/></svg>)
                    }
            </button>

            <ul className="navul uppercase w-fit items-center hidden lg:flex">
                <li>
                    <Link to={"/"}
                    className="hover:text-white transition"
                    >Главная страница</Link>
                </li>

                <li>
                    <Link to={"/"}
                    className="hover:text-white transition"
                    >Услуги</Link>
                </li>

                <li>
                    <Link to={"/"}
                    className="hover:text-white transition"
                    >Контакты</Link>
                </li>

                <li>
                    <Link to={"/"}
                    className="hover:text-white transition"
                    >Новости и обзоры</Link>
                </li>

                <li>
                    <Link to={"/"}
                    className="hover:text-white transition"
                    >Авто в наличии</Link>
                </li>

                <li>
                    <Link to={"/test"}
                    className="hover:text-white transition"
                    >Личный кабинет</Link>
                </li>
            </ul>

            

        </nav>
        {isClicked?
            <ul className="flex flex-col justify-between pt-16 pb-64 w-full h-[calc(100vh-100px)] fixed top-[100px] backdrop-blur-sm text-center uppercase font-semibold text-xl">
                <li>
                <Link to={"/"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Главная страница</Link>
            </li>

            <li>
                <Link to={"/"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Услуги</Link>
            </li>

            <li>
                <Link to={"/"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Контакты</Link>
            </li>

            <li>
                <Link to={"/"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Новости и обзоры</Link>
            </li>

            <li>
                <Link to={"/"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Авто в наличии</Link>
            </li>

            <li>
                <Link to={"/test"}
                className="hover:text-white transition"
                onClick={toggleNavbar}
                >Личный кабинет</Link>
            </li>
            </ul>
        :""}
        </>
     );
}
 
export default Navbar;