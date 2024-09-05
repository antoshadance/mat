import "./btnaction.css"
import ImageCarousel from "./imageCarousel";

const CarCard = (props) => {
    return ( 
        <div className="flex bg-[#020a0a]/50 min-h-[200px] h-[200px] max-h-[200px]">
            <div className="w-1/3 py-4">
                <ImageCarousel imgs={props.imgs}/>
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-around items-start text-sm gap-y-2">
                
                <div className="w-full h-3/4 flex flex-col justify-between">
                <h2 className="text-lg">{props.brand} {props.model}, {props.year}</h2>
                <p className="text-xl">{props.price} руб. </p>
                <p className="line-clamp-2 ">Новый автомобиль, без пробега по РФ! Новый автомобиль, без пробега по РФ! Покупка в лизинг, с НДС и без.</p>
                </div>

                <div className="flex w-full justify-between">
                <button className='btn_action bg-transparent border basis-[45%] border-white rounded-md p-1'>
                    Редактировать
                </button>
                <button className='btn_action_delete bg-transparent border basis-[45%] border-white rounded-md p-1'>
                    Удалить
                </button>
                </div> 

            </div>
        </div>
     );
}
 
export default CarCard;