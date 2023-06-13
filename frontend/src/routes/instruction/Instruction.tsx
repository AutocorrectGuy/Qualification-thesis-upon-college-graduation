import Markdown from '../../components/markdown/Markdown'


const textContent = '#hello!'

const Instruction = () => {
  return (
    <div className='flex flex-col'>
      <Markdown textContent={textContent} />
    </div>
  )
}

export default Instruction