const express = require('express')
const app= express()

const mongoose = require('./db/index')
const taskModel = require('./models/Task')
const tasksRoute= require("./routes/tasks")


const port = 8000;


app.listen(port, ()=>{
    console.log('app working on port '+port)
})



