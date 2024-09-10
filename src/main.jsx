import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Test from './Test.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ImageCarousel from './_components/imageCarousel.jsx'
import AddCar from './AddCar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/test",
    element: <Test/>
  },
  {
    path: "/carousel",
    element: <ImageCarousel/>
  },
  {
    path: "/add-car",
    element: <AddCar/>
<<<<<<< HEAD
=======
  },
  {
    path: "/edit-catalog",
    element: <Test/>
>>>>>>> 9d5a8194ebc00da967c24d315a55d84e5f3914bd
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
