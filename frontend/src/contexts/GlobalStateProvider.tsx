import React, { createContext, useState, useEffect, useContext } from 'react'

interface GlobalStateContextValue {
  windowWidth: number
  isMobile: boolean
  navVisible: boolean
  setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultGlobalState: GlobalStateContextValue = {
  windowWidth: 0,
  isMobile: false,
  navVisible: false,
  setNavVisible: () => { }
}

const GlobalStateContext = createContext<GlobalStateContextValue>(defaultGlobalState)

type GlobalStateProviderProps = {
  children: React.ReactNode
}

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [navVisible, setNavVisible] = useState(!isMobile)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 640)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => { setNavVisible(!isMobile) }, [isMobile])

  return (
    <GlobalStateContext.Provider value={{ windowWidth, isMobile, navVisible, setNavVisible }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext as React.Context<GlobalStateContextValue>)

export default GlobalStateProvider
