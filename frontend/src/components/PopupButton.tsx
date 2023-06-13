import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

type popButtonType = 'open' | 'close' | 'accept'
type DEFAULT_POP_OPTS_TYPE = { [K in popButtonType]: {
  [J in 'innerText' | 'className']: string
} }
const DEFAULT_BTN_OPTS: DEFAULT_POP_OPTS_TYPE = {
  accept: {
    className: 'bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600',
    innerText: 'Akceptēt'
  },
  close: {
    className: 'bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600',
    innerText: 'Aizvērt'
  },
  open: {
    className: 'bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600',
    innerText: 'Atvērt'
  }
}

type DefaultCloseButtonProps = {
  callback: () => void
  btnType: popButtonType
}

const PopButton = ({ callback, btnType }: DefaultCloseButtonProps) => {
  return <button
    onClick={() => callback()}
    className={`${DEFAULT_BTN_OPTS[btnType].className} py-2 px-4 w-full text-sm font-medium rounded-lg sm:w-auto focus:outline-none focus:z-10`}>
    {DEFAULT_BTN_OPTS[btnType].innerText}
  </button>
}

type PopupProps = {
  children?: React.ReactNode
  innerText?: { h1: string; p: string }
  OpenButtonElement?: JSX.Element
  onButtonOpen?: () => void
  CloseButtonElement?: JSX.Element
  onButtonClose?: () => void
  AcceptButtonElement?: JSX.Element
  onButtonAccept?: () => void
}

const PopupButton = ({
  children,
  innerText,
  OpenButtonElement,
  onButtonOpen,
  CloseButtonElement,
  onButtonClose,
  AcceptButtonElement,
  onButtonAccept
}: PopupProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const changeOpenState = () => setIsOpen((openState) => !openState)

  const onBgClickClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === e.currentTarget) {
      if (onButtonClose) onButtonClose()
      changeOpenState()
    }
  }

  const DefaultInnerElement = ({ h1, p }: { h1: string, p: string }) =>
    <div className="mb-4 text-sm font-light text-gray-400">
      <h3 className="mb-3 text-2xl font-bold text-white">{h1}</h3>
      <p className='text-sm min-h-[94px] max-h-fit'>{p}</p>
    </div>

  const handleButton = (callback: () => void) => {
    if (callback) callback()
    changeOpenState()
  }

  const DefaultButtonWrapper = ({ children, callback }: {
    children: React.ReactNode,
    callback: () => void
  }): JSX.Element =>
    <div className='h-full' onClick={() => handleButton(callback)}>
      {children}
    </div>

  return (<>
    {/** Open Button Element */}
    {OpenButtonElement
      ? <DefaultButtonWrapper callback={onButtonOpen!}>
        {OpenButtonElement}
      </DefaultButtonWrapper>
      : <PopButton btnType='open' callback={() => handleButton(onButtonOpen!)} />
    }
    {/** The Popup overlay */}
    {isOpen && <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-80 bg-black"
      onClick={(e) => onBgClickClose(e)}
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 rounded-lg shadow bg-gray-800 md:p-8">
          {innerText && <DefaultInnerElement h1={innerText.h1} p={innerText.p} />}
          {children}
          <div className="flex items-center flex-row-reverse pt-0">
            <div className='sm:ml-2'>
              {AcceptButtonElement
                ? <DefaultButtonWrapper callback={onButtonAccept!}>
                  {AcceptButtonElement}
                </DefaultButtonWrapper>
                : <PopButton btnType='accept' callback={() => handleButton(onButtonAccept!)} />
              }
            </div>
            {CloseButtonElement
              ? <DefaultButtonWrapper callback={onButtonClose!}>
                {CloseButtonElement}
              </DefaultButtonWrapper>
              : <PopButton btnType='close' callback={() => handleButton(onButtonClose!)} />
            }
          </div>
        </div>
      </div>
    </div>
    }
  </>)
}

export default PopupButton