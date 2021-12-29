const express= require('express')
const router = express.Router()
const Task =require('../models/Task')
const mongoose = require('../db/index')
const bodyParser = require('body-parser')

router.use(bodyParser())


router.get('/',(req,res)=>{
    
    
})
    
router.post('/',(req,res)=>{
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
    res.send({data:"Task deleted"})
})

router.put('/:id/complete',(req,res)=>{
    res.send({data:"task modified"})
})

router.put('/:id',(req,res)=>{
    res.send({data:"task modified"})
})

module.exports = router;