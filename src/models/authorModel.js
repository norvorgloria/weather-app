const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    authorName: {type: String},
    bookTitle: {type: String},
    bookPages: {type: Number},
    bookISBN: {type: Number},
    bookLikes: {type: Number}
})

const Author = mongoose.model('author', authorSchema)

module.exports = Author
