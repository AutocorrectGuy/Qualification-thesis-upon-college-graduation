import { faEllipsis, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export type PresentationData = {
  name: string
  textContent: string
  _id: string
  onDelete: () => void
}
type PresentationCardDropdownProps = {
  className: string
  formattedName: string
  baseHref: string
  onDelete: () => void
}
const PresentationCardDropdown = ({ className, formattedName, baseHref, onDelete }: PresentationCardDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  return (
    <div className={className}>
      {/* Dropdown button */}
      <button
        className="inline-block text-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none  focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="sr-only">
          Open dropdown
        </span>
        <FontAwesomeIcon icon={faEllipsis} className='w-6 h-6 text-fuchsia-100' aria-hidden="true" fill="currentColor" />
      </button>

      {/** Dropdown menu */}
      {dropdownOpen &&
        <div className="z-10 top-12 absolute text-base rounded-lg shadow w-fit bg-gray-700 p-1 flex flex-col" >
          <Link to={`/presentations/${formattedName}`}
            className="block px-4 py-2 text-sm rounded-md hover:bg-gray-600 text-gray-200 hover:text-white"
          >
            Atvērt
          </Link>
          <button className="block px-4 py-2 text-sm rounded-md hover:bg-gray-600 text-gray-200 hover:text-white"
            onClick={() => onDelete()}
          >
            Dzēst
          </button>
        </div>
      }
    </div>
  )
}

const PresentationCard = (props: PresentationData) => {
  const baseHref = 'http://localhost:3001/api/presentations/'
  const formattedName = encodeURIComponent(props.name)

  return (
    <div className="m-2 pt-2 pb-4 px-2 max-w-[200px] w-full border rounded-lg shadow bg-slate-700 bg-opacity-25 border-slate-700 transition-all duration-300">
      <div >
        <PresentationCardDropdown
          className='flex justify-end relative'
          baseHref={baseHref}
          formattedName={formattedName}
          onDelete={props.onDelete}
        />
      </div>
      <div className="flex flex-col items-center h-60">
        <FontAwesomeIcon icon={faFilePowerpoint} className='w-24 h-24 mb-3 rounded-full shadow-lg text-fuchsia-100' />
        <h5 className="mb-1 text-xl font-medium text-white text-center">
          {props.name.length > 30 ? props.name.substring(0, 30) + "..." : props.name}
        </h5>
        {/* <Link to={`?name=${formattedName}`} */}
        <Link to={`/presentations/${formattedName}`}
          className="mt-auto inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:ring-4 focus:outline-none bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-700">
          Atvērt
        </Link>
      </div>
    </div >
  )
}

export default PresentationCard

