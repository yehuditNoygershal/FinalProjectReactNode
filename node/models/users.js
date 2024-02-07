const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    idUser:Number,
    firstName:String,
    lastName:String,
    emailAddress:String,
    phone:String 
})

module.exports=mongoose.model('User',UsersSchema)