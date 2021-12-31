const express= require('express')
const router = express.Router()
const Task = require('../models/Task')
const mongoose = require('../db/index')

router.use(express.json())

router.get('/',(req,res)=>{
    Task.find().then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
})
    
router.post('/',(req,res)=>{
    console.log(req.body);
    const newTask= new Task(req.body);
    newTask.save()
    .then((tasks) => {
        res.send(tasks)
    })
    .catch((error)=>{
        res.send(error);
    })
})

router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    Task.deleteOne({id: req.params.id} , (err, doc) => {
        if (err) {
            res.send("Something wrong when deleting data!");
        } else {
            res.send("Success");
        }
    })
})

router.put('/:id/complete',(req,res)=>{
    Task.findOneAndUpdate({ id: String(req.params.id) }, [ { $set: {  isCompleted : true} }], { new: true }, (err, doc) => {
        if (err) {
    res.send("Something wrong when updating data!");
        }
    }).then(
        res.send("success")
    )
})

router.put('/:id',(req,res)=>{
    Task.findOneAndUpdate({ id: String(req.params.id) }, [ { $set: {  title : req.body.title} }], { new: true }, (err, doc) => {
        if (err) {
    res.send("Something wrong when updating data!");
        }
    }).then(
        res.send("success")
    )
})

module.exports = router;