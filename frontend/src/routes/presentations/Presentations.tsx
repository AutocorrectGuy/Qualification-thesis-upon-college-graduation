import React, { useState, useEffect } from 'react'
import PresentationCard from '../../components/PresentationCard'
import { NoteData, handleAddPresentation, handleDeletePresentation, PresentationType } from './PresentationsAPIHandlers'
import axiosInstance from '../../services/axios/axiosConfig'

const Presentations = () => {
  const [presentations, setPresentations] = useState<NoteData[]>([])

  useEffect(() => {
    axiosInstance
      .get('/presentations')
      .then((response) => setPresentations(response.data))
      .catch((error) => console.log(error))
  }, [])


  return (
    <div className='flex flex-wrap justify-center max-w-4xl w-full mx-auto'>
      {presentations && presentations.map((presentationProps) => (
        <PresentationCard
          key={presentationProps._id}
          {...presentationProps}
          onDelete={() => handleDeletePresentation({ name: presentationProps.name, setPresentations })}
        />
      ))}
    </div>
  )
}

export default Presentations
