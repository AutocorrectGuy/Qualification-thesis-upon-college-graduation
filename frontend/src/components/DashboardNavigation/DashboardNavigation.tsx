import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { useGlobalState } from '../../contexts/GlobalStateProvider'
import { Link } from 'react-router-dom'
import catImg from '../../assets/img/murrplejak_3.png'
import { catAnimationkeyframes, catAppearDisappearAnimation } from './catAnimation'
import ProximityEffect from './ProximityEffect'
import dashboardNavigationOptions, { DashboardSection } from './dashboardNavigationOptions'

type NavPaneButtonProps = {
  icon: IconDefinition
  innerText: string
  className?: string
  onClick: () => void
  to: string
}

const NavPaneButton = (props: NavPaneButtonProps) => (
  <Link to={props.to}
    onClick={props.onClick}
    className='flex uppercase font-semibold items-center bg-white bg-opacity-10 my-1 rounded-md py-1 px-2 text-fuchsia-100'
  >
    <FontAwesomeIcon icon={props.icon} className={['w-4 h-4', props.className].join(' ')} />
    <p className={['pl-2 text-md', props.className].join(' ')}>{props.innerText}</p>
  </Link>
)

const NavPane = () => {
  const { isMobile, navVisible, setNavVisible } = useGlobalState()

  if (!navVisible) return null

  type dropdownType = {
    i: number
    section: DashboardSection
  }
  const Dropdown = ({ section: { title, items }, i }: dropdownType) => {

    return (
      <div
        className={`flex flex-col`}
        key={`nav-category${i}`}
      >
        <button
          className="text-fuchsia-500 text-[14px] pt-2 text-left hover:text-white duration-300 delay-75 transition-colors"

        >
          {`[${title}]`}
        </button>
        <div className={`overflow-hidden duration-500 transition-all ease-in-out`}>
          {items.map((provided, j) => (
            <NavPaneButton
              {...provided}
              onClick={() => isMobile && setNavVisible(false)}
              key={`nav-category${i}-item-${j}`}
            />
          ))}
        </div>

      </div>
    )
  }

  return (
    <div className={`fixed bg-[#0C0C20] w-72 flex z-50 min-h-screen ${isMobile ? 'right-0 top-0 bottom-0' : ''}`}>
      {/** Overlay */}
      {isMobile && navVisible && (
        <div
          onClick={() => setNavVisible(false)}
          style={{ backdropFilter: `blur(4px)` }}
          className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-950 bg-opacity-95`}
        />
      )}
      {/** Navigation bar */}
      <aside className={`w-72 ${isMobile ? 'fixed z-40' : 'relative'}`}>
        <div className="flex flex-col h-full">
          <div
            className="w-72 p-8 uppercase font-semibold"
            style={{ background: `linear-gradient(#0F1224FF 50%, #0C0C20FF)` }}
          >
            {dashboardNavigationOptions.map((section, i) => (
              <Dropdown section={section} i={i} key={`nav-section-${i}`} />
            ))}
          </div>
          {/** Custom special pixelart image */}
          <div className={`select-none fixed bottom-0 -z-10 w-72 bg-[#0C0C20] h-screen flex ${isMobile ? 'justify-end pr-4' : 'justify-start p-4'}`}>
            <img src={catImg} className="fixed bottom-4 -z-10 w-48 h-48 rendering-pixelated" />
            <style>{catAnimationkeyframes}</style>
            <div
              style={{ ...catAppearDisappearAnimation }}
              className='fixed bottom-[116px] sm:ml-5 mr-[106px] -z-10 w-16 h-4 bg-black'
            />
          </div>
        </div>
      </aside>
    </div>
  )
}

const DashboardNavigation = () => {
  const { isMobile, setNavVisible } = useGlobalState()
  return (
    <>
      <NavPane />
      <ProximityEffect />
      {/** Navigation button */}
      {isMobile && (
        <button
          onClick={() => setNavVisible((value) => !value)}
          className='fixed z-50 top-0 right-0 p-2 m-4 h-fit rounded-md bg-fuchsia-500 bg-opacity-10'
        >
          <FontAwesomeIcon icon={faNavicon} className='text-fuchsia-100 w-6 h-6' />
        </button>
      )}
    </>
  )
}

export default DashboardNavigation
