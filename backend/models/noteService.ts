import Note, { INote } from './Note'

export const createNote = async (
    name: string,
    description: string
): Promise<INote> => {
    const note = new Note({
        name,
        description,
    })
    
    return await note.save()
}

export const getAllNotes = async (): Promise<INote[]> => {
    return await Note.find()
}

export const getNoteByName = async (name: string): Promise<INote | null> => {
    return await Note.findOne({ name: name })
}

export const deleteNoteByName = async (name: string): Promise<INote | null> => {
    return await Note.findOneAndDelete({ name: name })
}
