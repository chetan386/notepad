const mongoose = require('mongoose')


const listSchema = new mongoose.Schema({
    heading: String,
    content: String,
    createdAt: {
        type: String,
        default: Date.now
    }
})

const List = new mongoose.model("List",listSchema)

module.exports = List