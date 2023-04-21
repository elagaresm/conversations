const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const PORT = 3000
const cors = require('cors')
const { addToDatabase, readDatabase, clearDatabase } = require('./middleware/database.js')

// for writing in file
const fs = require("fs")


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))


app.get('/', async(req, res) => {
    const data = readDatabase('./db.json');
    res.render('home', {data})
})


app.post('/long', async (req, res) => {
    const { conversationID } = req.body
    addToDatabase('./db.json', 'conversations', conversationID)
    res.status(200).end()
})

app.post('/escalations', async (req, res) => {
    const { conversationID } = req.body
    addToDatabase('./db.json', 'escalations', conversationID)
    res.status(200).end()
})

app.post('/hide', async (req, res) => {
    const { conversationID, reason } = req.body
    addToDatabase('./db.json', 'hidden', {conversationID, reason})
    res.status(200).end()
})

app.delete('/clear', async(req, res) => {
    clearDatabase('./db.json')
    res.redirect('/')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port: ${PORT}`)
})
