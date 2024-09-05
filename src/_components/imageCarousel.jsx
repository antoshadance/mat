import { useState } from "react";
import DotSvg from "../svgs/dot";

const ImageCarousel = (props) => {

    let [imageNum,setImageNum] = useState(0);
    let [isHovering, setIsHovering] = useState(false);

    let images = props.imgs;


    return ( 
        <div className="relative bg-transparent h-full w-full flex" onMouseEnter={()=>{setIsHovering(true)}} onMouseLeave={()=>{setIsHovering(false)}}>
            
            {images!==undefined&&
            <img src={isHovering?images[imageNum]:images[0]}  className="absolute w-full h-full object-cover object-center"/>
            }
            <div className="absolute w-1/3 h-full" onMouseEnter={()=>{setImageNum(0)}}></div>
            <div className="absolute left-[33.3%] w-1/3 h-full" onMouseEnter={()=>{setImageNum(1)}}></div>
            <div className="absolute right-0 w-1/3 h-full" onMouseEnter={()=>{setImageNum(2);}}></div>

            <div className="absolute left-0 right-0 bottom-1 mx-auto rounded-3xl flex w-fit p-2 justify-center gap-x-6  bg-black/50">
                <DotSvg w={8} color={isHovering&&imageNum==0?"gray":"white"}/>
                <DotSvg w={8} color={isHovering&&imageNum==1?"gray":"white"}/>
                <DotSvg w={8} color={isHovering&&imageNum==2?"gray":"white"}/>
            </div>
        </div>
     );
}
 
export default ImageCarousel;