const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationsSchema = new Schema ({
    conversationID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Conversation', ConversationsSchema)
