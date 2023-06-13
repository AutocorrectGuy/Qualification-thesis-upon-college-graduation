import mongoose, { Schema, Document } from 'mongoose'

export interface IPresentation extends Document {
    name: string
    textContent: string
}

const PresentationSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    textContent: { type: String, required: true },
})

export default mongoose.model<IPresentation>('Presentation', PresentationSchema)
