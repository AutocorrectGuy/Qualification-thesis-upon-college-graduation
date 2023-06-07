import mongoose, { Schema, Document } from 'mongoose'

export interface INote extends Document {
    name: string
    description: string
}

const NoteSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
})

export default mongoose.model<INote>('Note', NoteSchema)
