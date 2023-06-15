import './services/tailwindcss/output.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFoundPage from './routes/404/NotFoundPage'
import DefaultLayout from './layouts/DefaultLayout'
import CreatePPTX from './routes/createPPTX/CreatePPTX'
import GlobalStateProvider from './contexts/GlobalStateProvider'
import Home from './routes/home/Home'
import Presentations from './routes/presentations/Presentations'
import CreatePrompt from './routes/createPrompt/CreatePrompt'
import SinglePresentation from './routes/singlePresentation/SinglePresentation'
import Instruction from './routes/instruction/Instruction'
import Task_1 from './routes/jakTasks/Task_1'
import Task_2 from './routes/jakTasks/Task_2'
import Animation from './routes/flappy/Animation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // main menu
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/presentations',
        element: <Presentations />,
      },
      {
        path: '/presentations/:name',
        element: <SinglePresentation />,
      },

      // Create presentations
      {
        path: '/instruction',
        element: <Instruction />,
      },
      {
        path: '/create-prompt',
        element: <CreatePrompt />,
      },
      {
        path: '/create-pptx',
        element: <CreatePPTX />
      },

      /**
       * JAK uzdevumi
       */

      {
        path: '/uzdevums-1',
        element: <Task_1 />,
      },
      {
        path: '/uzdevums-2',
        element: <Task_2 />
      },
      {
        path: '/mpr1-mpr2',
        element: <Animation />
      },
      {
        path: '*',
        element: <NotFoundPage />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalStateProvider>
    <RouterProvider router={router} />
  </GlobalStateProvider>
)
