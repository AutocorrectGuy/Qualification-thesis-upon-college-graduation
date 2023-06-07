
export type NoteData = {
  name: string
  description: string
  _id: string
  onDelete: () => void
}

const Note = ({ _id, name, description, onDelete }: NoteData) => {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg shadow-md m-2">
      <div className='flex items-start justify-between'>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <button
          className="ml-1 bg-red-500 bg-opacity-25 hover:bg-opacity-50 text-white font-bold py-0.5 px-2 rounded"
          onClick={() => onDelete()}
        >
          X
        </button>
      </div>
      <p className="text-gray-800">{description}</p>

    </div>
  )
}

export default Note
