import { Outlet } from 'react-router-dom'
import NavBarTop from '../components/NavBarTop'

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex flex-col overflow-x-hidden max-w-screen-xl mx-auto">
        <NavBarTop />
        <div className='min-h-[100vh-64px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout