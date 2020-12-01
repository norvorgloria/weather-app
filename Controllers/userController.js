const User = require('../models/userModel')



const userCtrl = {}

// create a user = POST method
userCtrl.createUser = async (req, res) => {
    const newUser = new User(req.body)
    try{
        console.log(req.body)
        await newUser.save()
        console.log(newUser)
        res.status(200).send({ message: 'Your account has been created', result})
    } catch( error ) {
        console.log(error)
    }
}

//read a user detail = GET method

userCtrl.getUserDetails = async (req, res) = {
    try {
        let person = await. User.find({username: req.body.username})
        if (!person){
            res.status
        }
        
    }
}
module.exports = userCtrl


