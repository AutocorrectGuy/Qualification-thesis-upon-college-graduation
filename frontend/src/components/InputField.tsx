import React from 'react'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  labelText?: string
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
}

const InputField = ({
  value,
  onChange,
  labelText,
  placeholder,
  containerClassName,
  labelClassName,
  inputClassName
}: Props) => {

  const onChangeSanitize = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    onChange(e)
  }

  return (
    <div className={`flex items-center ${containerClassName}`}>
      {
        labelText &&
        <label className={`block text-sm font-medium text-white whitespace-nowrap pr-2 ${labelClassName}`}>
          {labelText}
        </label>
      }
      <input
        type="text"
        className={`border text-sm rounded-lg block w-full p-2 bg-slate-800 bg-opacity-50 border-slate-600 placeholder-slate-400 text-white focus:ring-slate-500 focus:border-slate-500 focus:outline-none ${inputClassName}`}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={onChangeSanitize}
      />
    </div>
  )
}

export default InputField