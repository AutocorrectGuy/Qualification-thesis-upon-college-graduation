import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Budget from './routes/Budget'
import Contacts from './routes/Contacts'
import EasyToRead from './routes/EasyToRead'
import News from './routes/News'
import Properties from './routes/Properties'
import PublicParticipation from './routes/PublicParticipation'
import Scope from './routes/Scope'
import Services from './routes/Services'
import './services/tailwindcss/output.css'
import DefaultLayout from './layouts/DefaultLayout'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/aktualitates', element: <News /> },
  { path: '/budzets', element: <Budget /> },
  { path: '/kontakti', element: <Contacts /> },
  { path: '/vieglilasit', element: <EasyToRead /> },
  { path: '/ipasumi', element: <Properties /> },
  { path: '/sabiedribaslidzdaliba', element: <PublicParticipation /> },
  { path: '/darbibasjoma', element: <Scope /> },
  { path: '/pakalpojumi', element: <Services /> },
  { path: '*', element: <NotFound /> },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([{ element: <DefaultLayout />, children: routes }])} />
  </React.StrictMode>
)
