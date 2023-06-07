import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import {
    createNote,
    getAllNotes,
    getNoteByName,
    deleteNoteByName,
} from './models/noteService'

config()

mongoose.connect(process.env.MONGODB_URI || '')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/build/`))

app.post('/api/notes', async (req, res) => {
    try {
        const note = await createNote(req.body.name, req.body.description)
        res.send(note)
    } catch (error) {
        console.log(error)
    }
})

app.get('/api/notes', async (req, res) => {
    const notes = await getAllNotes()
    res.send(notes)
})

app.get('/api/notes/:name', async (req, res) => {
    try {
        const note = await getNoteByName(req.params.name)
        res.send(note)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/notes/:name', async (req, res) => {
    try {
        const note = await deleteNoteByName(req.params.name)
        res.send(note)
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.PORT || 3001

// eveyrting that is not API route, is a react page
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
