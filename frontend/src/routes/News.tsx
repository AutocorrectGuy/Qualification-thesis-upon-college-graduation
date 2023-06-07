import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from '../components/Note'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


type NoteData = {
  _id: string
  name: string
  description: string
}

type Props = {}

const API_URL = 'https://ieskaitesdarbs.onrender.com/api/'
// const API_URL = 'http://localhost:3001/api/'
const News = (props: Props) => {
  const [notes, setNotes] = useState<NoteData[]>([])
  const [newNote, setNewNote] = useState({ name: '', description: '' })

  useEffect(() => {
    axios
      .get(`${API_URL}notes`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.log(error))
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  const handleAddNote = () => {
    axios
      .post(`${API_URL}notes`, newNote)
      .then((response) => {
        setNotes((prevNotes) => [...prevNotes, response.data])
        setNewNote({ name: '', description: '' })
        toast.success(`Ziņa ${newNote.name} pievienota`)
      })
      .catch((error) => toast.error(error))
  }

  const handleDeleteNote = (name: string) => {
    const formattedName = encodeURIComponent(name)
    axios
      .delete(`${API_URL}notes/${formattedName}`)
      .then(() => {
        console.log('aaa')
        setNotes((prevNotes) => prevNotes.filter((note) => note.name !== name))
        toast.error(`Ziņa "${name}" dzēsta`)
      })
      .catch((error) => toast.error(error))
  }

  return (
    <div>
      <div className="flex justify-center mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleAddNote()
          }}
        >
          <input
            type="text"
            name="name"
            value={newNote.name}
            placeholder="Name"
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
          <input
            type="text"
            name="description"
            value={newNote.description}
            placeholder="Description"
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pievienot
          </button>
        </form>
      </div>
      <div className="flex flex-wrap p-4">
        {notes && notes.map((noteProps) => (
          <Note
            key={noteProps._id}
            {...noteProps}
            onDelete={() => handleDeleteNote(noteProps.name)}
          />
        ))}
      </div>
      <ToastContainer theme="dark" />
    </div>
  )
}

export default News
