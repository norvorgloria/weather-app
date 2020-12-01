const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{type: String, minlength: 5, maxlength: 16, unique: true}
    email: {type: String, unique: true}
    password: {type: String, minlength: 8}
})

const user = mongoose.model('user', userSchema)
module.exports = user
const userSchema 