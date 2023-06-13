import { useState } from 'react'
import pptxgen from 'pptxgenjs'
import DefaultButton from '../../components/DefaultButton'
import { handleAddPresentation, PresentationType } from '../presentations/PresentationsAPIHandlers'
import { generatePresentation, DEFAULT_PRESENTATION_TEXT } from './pptxGenerator.helpers'

const inputFieldClassName = 'w-full p-2 border border-gray-900 shadow-md shadow-gray-800 rounded-lg bg-white bg-opacity-5'

const CreatePPTX = () => {
  const [newPresentation, setNewPresentation] = useState<PresentationType>(DEFAULT_PRESENTATION_TEXT)
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setNewPresentation((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-center'>
      <form
        className='flex flex-col w-full max-w-lg justify-center mt-4 text-gray-200 p-5 rounded-lg bg-gray-900 bg-opacity-50'
      >
        <h1 className='text-4xl mb-8 text-white font-bold text-center'>
          Prezentācijas faila izveide
        </h1>
        <input
          autoComplete='off'
          type='text'
          name='name'
          value={newPresentation.name}
          placeholder='Ievadiet prezentācijas nosaukumu'
          onChange={handleInputChange}
          className={`${inputFieldClassName} font-semibold text-violet-100 text-2xl`}
        />
        <label className='pt-6 pb-2'>ChatGPT ģenerētais teksts:</label>
        <textarea
          name='textContent'
          value={newPresentation.textContent}
          className={`${inputFieldClassName} sm:min-h-[400px] text-purple-100`}
          placeholder='Ievadiet prezentācijas tekstuālo saturu'
          onChange={handleInputChange}
        />
        <div className='flex my-4 justify-evenly'>
          <DefaultButton
            text='Izveidot prezentāciju'
            onClick={() => generatePresentation(newPresentation)}
          />
          <DefaultButton
            text='Pievienot datubāzei'
            className='bg-purple-600 hover:bg-purple-500'
            onClick={() => {
              handleAddPresentation({ newPresentation })
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default CreatePPTX
