const mongoose = require('mongoose')

const Task= mongoose.model('Tasks',
{   id: Number,
    title: String,
    deadline: Date, 
    isCompleted: Boolean
})

module.exports =Task;