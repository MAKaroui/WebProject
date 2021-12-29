const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const app= express()
app.use(bodyParser());

const port = 8000;

// const tasksRoute = require('./routes/tasks')
// const taskModel = require('./models/Task')
// const req = require('express/lib/request')
// app.use("/api/tasks",tasksRoute)

// Connect to the database
mongoose.connect("mongoose://localhost:27017/task-managment", () => {
    console.log("Succesfully conntected to the database")
})

// Define MonogDB Models
const tasks = mongoose.model('Task', {
    id: Number,
    title: String,
    deadline: Date,
    isComplete: Boolean
})
// Create a new task
app.post("/api/tasks", (req,res) =>{
    // Create a new task
    const newTask = new tasks(req.body)
    newTask.save()
    .then((tasks) =>{
        res.status(201).send(tasks)
    })
    .catch((error) =>{
        res.status(500).send(error)
    })
});


app.listen(port, ()=>{
    console.log('app working on port '+port)
})



