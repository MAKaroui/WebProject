const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task',()=>{
    
console.log('successfully connected to DB');
})

module.exports = mongoose;