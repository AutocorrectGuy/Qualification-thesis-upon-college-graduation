import Markdown from '../../components/markdown/Markdown'
import { task_1_description } from './assets/taskDescriptions'
import DefaultButton from '../../components/DefaultButton'
import { useState } from 'react'
import { toast } from 'react-toastify'


const colors = ['bg-[#F25A53]', 'bg-[#F2AF32]', 'bg-[#26BE3D]']

const Task_1 = () => {
  const [formName, setFormName] = useState<string>('Windows form')
  const [firstBtnColor, setFirstBtnColor] = useState<string>('bg-sky-400')
  const [picturesVisible, setPicturesVisible] = useState<boolean>(false)

  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-2'>
      <Markdown textContent={task_1_description} />
      <div className='flex flex-col min-h-screen items-center justify-center gap-2'>
        <div className='aspect-square w-3/4 border border-slate-600 rounded-xl'>
          <div className='flex items-center h-12 w-full border-b border-slate-600 justify-between px-4'>
            <div className='text-white select-none'>
              {formName}
            </div>
            <div className='flex gap-2'>
              {colors.map(color => <div className={`rounded-full w-4 h-4 hover:brightness-125 ${color}`}></div>)}
            </div>
          </div>
          <div className='h-[calc(100%-46px)]'>
            <div className={`w-full h-full grid grid-cols-2 ${picturesVisible ? 'visible' : 'hidden'}`}>
              {[...Array(4)].map((_x, i) => <img className='w-full p-2 rounded-2xl' src={`https://picsum.photos/20${i}`} />)}
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <DefaultButton
            text='btn-1'
            colorClassName={`${firstBtnColor} hover:brightness-125 h-fit`}
            onClick={() => setFormName('Mana forma')}
          />
          <DefaultButton
            text='btn-2'
            colorClassName='bg-[#F2AF32] hover:brightness-125 h-fit'
            onClick={() => {
              setFirstBtnColor('bg-[#F25A53]')
              toast.info('Mārtiņš Stūrainis', { autoClose: false, position: 'top-center' })
            }}
          />
          <DefaultButton
            text='btn-3'
            colorClassName='bg-[#26BE3D] hover:brightness-125 h-fit'
            onClick={() => {
              setPicturesVisible(!picturesVisible)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Task_1