import './index.css'
import Navbar from './_components/navbar';
import "./_components/btnaction.css"


function Home() {

  return (
    <>
    <Navbar/> 
    <div className='min-h-[calc(100vh-100px)] bg-no-repeat bg-cover px-5 md:px-24 flex flex-col justify-between pb-16 '  >
        <h1 className='text-center text-4xl font-semibold pt-[50px] uppercase '>Продажа авто под любой запрос</h1>
        <ul className='w-1/2 h-fit uppercase text-4xl flex flex-col gap-y-24'>
          <li>Прямая продажа автомобилей </li>
          <li>Продажа автомобилей в лизинг, юридическим лицам с ндс</li>
          <li>Работаем со всеми городами России</li>
        </ul>
        <div className='flex flex-col md:flex-row justify-between gap-x-16 gap-y-16'>
          <button className='btn_action bg-transparent border border-white rounded-md p-3 text-xl basis-1/3'>
            Подбор автомобиля
          </button>
          <button className='btn_action bg-transparent border border-white rounded-md p-3 text-xl basis-1/3'>
            Подбор автомобиля
          </button>
          <button className='btn_action bg-transparent border border-white rounded-md p-3 text-xl basis-1/3'>
            Подбор автомобиля
          </button>
        </div>
    </div>
    </>
  )
}

export default Home
