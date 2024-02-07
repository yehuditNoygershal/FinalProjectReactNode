const mongoose = require('mongoose')

const TasksSchema=new mongoose.Schema({
    taskId:Number,
    taskTypeId:Number,
    taskName:String,
    contactTaskID:Number,
    contactTaskName:String,
    isReady:String
})

module.exports=mongoose.model('Task',TasksSchema)
