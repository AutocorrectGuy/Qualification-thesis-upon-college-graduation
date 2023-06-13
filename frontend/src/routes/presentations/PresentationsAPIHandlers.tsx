import { toast } from 'react-toastify'
import axiosInstance from '../../services/axios/axiosConfig'

export type NoteData = {
  _id: string
  name: string
  textContent: string
}

export type PresentationType = {
  name: string
  textContent: string
}
type handleAddPresentationProps = {
  newPresentation: PresentationType
  // setNewPresentation: React.Dispatch<React.SetStateAction<PresentationType>>
}

export const handleAddPresentation = ({ newPresentation }: handleAddPresentationProps) => {
  axiosInstance
    .post(`/presentations`, newPresentation)
    .then(() => {
      // setNewPresentation({ name: '', textContent: '' })
      toast.success(`Prezentācija saglabāta datubāzē!`)
    })
    .catch((error) => toast.error(error))
}

type handleDeletePresentationProps = {
  name: string
  setPresentations: React.Dispatch<React.SetStateAction<NoteData[]>>
}
export const handleDeletePresentation = ({ name, setPresentations }: handleDeletePresentationProps) => {
  const formattedName = encodeURIComponent(name)
  axiosInstance
    .delete(`/presentations/${formattedName}`)
    .then(() => {
      setPresentations((prevPresentations) => prevPresentations.filter((presentation) => presentation.name !== name))
      toast.error(`Prezentācija dzēsta!`)
    })
    .catch((error) => toast.error(error))
}
