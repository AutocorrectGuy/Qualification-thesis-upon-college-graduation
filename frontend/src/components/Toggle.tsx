import React, { useState } from 'react'

type Props = {
  innerText: string
  onTrue: () => void
  onFalse: () => void
  className?: string
}

const Toggle = ({ innerText, onTrue, onFalse, className }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={["relative inline-flex items-center cursor-pointer bg-slate-600 hover:bg-slate-500 hover:bg-opacity-50 bg-opacity-50 rounded-md px-2",
      className
    ].join(' ')}
      onClick={() => setIsChecked((prev) => {
        const changedState = !prev
        changedState ? onTrue() : onFalse()
        return changedState
      })}
    >
      <div className={[
        "relative w-11 h-6 bg-cyan-800 rounded-full items-center transition-all duration-300 border-2",
        isChecked ? "justify-end bg-opacity-50 border-cyan-700" : "justify-start bg-opacity-25 border-slate-500"
      ].join(" ")}>
        <div className={[
          'absolute -top-[2px] -left-[2px] w-6 h-6 rounded-full border-[3px] transition-all duration-300',
          isChecked ? 'translate-x-full bg-cyan-500 border-cyan-700' : 'bg-slate-600 border-slate-500'
        ].join(' ')} />
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none leading-4">{
        innerText.split(' ').map((word, i) => <div key={`toggle-btn-${innerText}-${i}`}>{word}</div>)
      }</span>
    </div>
  )
}

export default Toggle


