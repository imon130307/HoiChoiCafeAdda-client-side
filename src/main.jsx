import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-full mx-auto box-border p-0 m-0">
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
