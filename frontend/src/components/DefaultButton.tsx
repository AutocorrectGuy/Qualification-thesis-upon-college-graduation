import React from 'react'

type DefaultButtonProps = {
  text: string
  className?: string
  colorClassName?: string
  type?: 'button' | 'submit' | 'reset'
  IconRight?: JSX.Element
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={
        `inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center focus:ring-4  text-white rounded-lg ${props.colorClassName ?? 'bg-violet-700 hover:bg-violet-500 focus:ring-violet-900'}  ${props.className}`
      }
    >
      {props.text}
      {props.IconRight}
    </button>
  )
}

export default DefaultButton
