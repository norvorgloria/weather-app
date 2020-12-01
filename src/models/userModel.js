const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({                        //setting model keys
    username: {type: String, minlength: 5, maxlength: 16},
    email: {type: String},
    password: {type: String, minlength:8}
})

const User = mongoose.model('user', userSchema)  //modelling a collection called user

module.exports = User
