import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../index'
type Props = {}

const NavBarTop = (props: Props) => {
  const { pathname } = useLocation()

  return (
    <nav className="bg-white dark:bg-gray-900 h-16 overflow-hidden flex items-center justify-between mx-auto px-2 w-full">
      <ul className="font-medium h-10 flex md:p-0 rounded-lg flex-row md:space-x-8 md:mt-0 md:border-0">
        {routes
          .filter(({ path }) => path !== '*')
          .map(({ path }) => <Link
            to={path}
            key={`li-${path}`}
            className={['block py-2 rounded text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent px-2 dark:text-white',
              path === '/aktualitates' ? 'text-emerald-500 dark:text-yellow-300' : 'text-gray-200',
              path === pathname ? 'bg-gray-200 dark:bg-gray-800' : 'bg-transparent'
            ].join(' ')}>
            {path === '/' ? 'sakums' : path.replace('/', '')}
          </Link>)}
      </ul>
    </nav>

  )
}

export default NavBarTop