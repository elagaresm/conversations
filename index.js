const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const PORT = 3000
const cors = require('cors')

// for writing in file
const fs = require("fs")


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
// app.use(express.urlencoded({ extended: true }))


app.get('/', async(req, res) => {
    let data
    try {
        data = fs.readFileSync('./list.txt', 'utf8').split(' ').filter(id => id != '')
    } catch {
        console.log('cannot find file list.txt')
    }
    res.render('home', {conversations: data})
})


app.post('/', async (req, res) => {
    const { conversationID } = req.body
    try {
            fs.appendFileSync('./list.txt', conversationID + " ")
    } catch (err) {
        console.log('couldnt write on list.txt')
        console.log(err)
    }
    res.redirect('/')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port: ${PORT}`)
})
