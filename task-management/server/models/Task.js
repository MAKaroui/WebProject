const mongoose = require('mongoose')

const Tasks= mongoose.model('Tasks',
{   id: Number,
    title: String,
    deadline: Date, 
    isCompleted: Boolean
})

module.exports =Tasks;