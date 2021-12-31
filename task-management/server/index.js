const express = require('express')
const app= express()

const tasksRoute = require('./routes/tasks')
const cors = require("cors");
const mongoose = require('./db/index')
const taskModel = require('./models/Task')



app.use(cors());
app.use(express.json())
app.use("/api/tasks",tasksRoute)


const port = 8000;


app.listen(port, ()=>{
    console.log('app working on port '+port)
})



