import { ToastContainer } from 'react-toastify'
import DashboardNavigation from '../components/DashboardNavigation/DashboardNavigation'
import { Outlet } from 'react-router-dom'
// import { useGlobalState } from '../contexts/GlobalStateProvider'
import { SkeletonTheme } from 'react-loading-skeleton'

const DefaultLayout = () => {
  // const { isMobile, navVisible } = useGlobalState()

  return (
    <SkeletonTheme baseColor="#0C0C20" highlightColor="#262739">
      <div className="bg-black min-h-screen w-full">
        <div
          className="flex bg-indigo-900 bg-opacity-25 min-h-screen pt-16 sm:pt-0 w-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, #0E142390 1px, transparent 1px), linear-gradient(90deg, #0E142390 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        >
          <div className="flex justify-center max-w-7xl w-full sm:mx-auto sm:relative">
            <div className="sm:sticky sm:top-0 sm:left-0">
              <DashboardNavigation />
            </div>
            <div className="max-w-7xl w-full sm:pl-72 px-2 sm:px-4 sm:ml-4">
              <Outlet />
            </div>
          </div>
          <ToastContainer
            theme='dark'
            autoClose={2000}
            hideProgressBar={true}
            toastStyle={{ backgroundColor: "#272A3A" }}
          />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default DefaultLayout
