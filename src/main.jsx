import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Test from './Test.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },

  {
    path: "/test",
    element: <Test/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
