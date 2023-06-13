import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronRight, faPlay, faFileWord } from '@fortawesome/free-solid-svg-icons'
import jakBuldingImg from '../../assets/img/jakbuilding.png'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

const Home = () => {
  const [imgIsLoaded, setImgIsLoaded] = useState<boolean>(false)


  return (
    <section className="bg-purple-500 bg-opacity-20 min-h-screen"
      style={{
        background: 'linear-gradient(100deg, transparent 5%, rgba(43,12,61,0.4) 50%, rgba(16,16,49, 0.2) 85%)',
        // backdropFilter: `blur(4px)`
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full bg-gray-800 text-white  hover:bg-gray-700" role="alert">
          <span className="text-xs bg-violet-600 rounded-full text-white px-4 py-1.5 mr-3">
            Sveiks!
          </span> <span className="text-sm font-medium">
            Vai esi šeit pirmo reizi?
          </span>
          <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-4 h-4" fill="currentColor" />
        </a>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-5xl text-white">
          Kvalifikācijas darba praktiskā daļa
        </h1>
        <div className='py-10 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-fuchsia-100'>
          <table className="w-full text-left">
            <tr>
              <td className="pr-2 py-1">
                Izglītības iestāde:
              </td>
              <td className="pr-2 py-1">
                <a href='https://jekabpils.jak.lv/' className='font-semibold bg-violet-300 bg-opacity-10 rounded-md px-2 pb-1 hover:bg-violet-700 text-white'>
                  Jēkabpils Agrobiznesa koledža
                </a>
              </td>
            </tr>
            <tr>
              <td className="pr-2 py-1">
                Students:
              </td>
              <td className="pr-2 py-1 font-bold">
                Mārtiņš Stūrainis
              </td>
            </tr>
            <tr>
              <td className="pr-2 py-1">
                Darba vadītājs:
              </td>
              <td className="pr-2 py-1 font-bold">
                Jānis Lietavietis
              </td>
            </tr>
          </table>
        </div>
        {!imgIsLoaded && <Skeleton className='w-full pb-8 h-40 md:h-60' />}
        <img
          src={jakBuldingImg}
          className='rendering-pixelated mx-auto pb-8 h-40 md:h-60'
          onLoad={() => setImgIsLoaded(true)}
          style={imgIsLoaded ? {} : { display: 'none' }}
        />

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-500 focus:ring-4 focus:ring-violet-900">
            Vairāk info
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 -mr-1 w-5 h-5" fill="currentColor" />
          </a>
          <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
            <FontAwesomeIcon icon={faPlay} className="mr-2 w-4 h-4" fill="currentColor" />
            Sākt ģenerēt!
          </a>
        </div>
      </div>
    </section >
  )
}

export default Home
