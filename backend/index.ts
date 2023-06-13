import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import {
    createPresentation,
    getAllPresentations,
    getPresentationByName,
    deletePresentationByName,
} from './models/presentation/presentationServices'

config()

mongoose.connect(process.env.MONGODB_URI || '')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/build/`))

app.post('/api/presentations', async (req, res) => {
    try {
        const note = await createPresentation(req.body.name, req.body.textContent)
        res.send(note)
    } catch (error) {
        // console.log(error)
    }
})

app.get('/api/presentations', async (req, res) => {
    const notes = await getAllPresentations()
    res.send(notes)
})

app.get('/api/presentations/:name', async (req, res) => {
    try {
        const note = await getPresentationByName(req.params.name)
        res.send(note)
    } catch (error) {
        // console.log(error)
    }
})

app.delete('/api/presentations/:name', async (req, res) => {
    try {
        const note = await deletePresentationByName(req.params.name)
        res.send(note)
    } catch (error) {
        // console.log(error)
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
