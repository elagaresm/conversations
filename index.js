const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const PORT = 3000
const Conversation = require('./models/conversations')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/conversations');
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('Database connected')
})


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))


app.get('/', async (req, res) => {
    const conversations = await Conversation.find({})
    res.render('home', {conversations : conversations ? conversations : []})
})


app.post('/', async (req, res) => {
    const { conversationID } = req.body
    const newConv = new Conversation({conversationID})
    await newConv.save()
    res.redirect('/')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port: ${PORT}`)
})
