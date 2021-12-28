const express= require('express')
const router = express.Router()


router.get('/api/tasks',(req,res)=>{
res.send({data:"Here is your data"})
})
router.post('/api/tasks',(req,res)=>{
res.send({data:"Task added"})
})
router.delete('/api/tasks/:id',(req,res)=>{
    res.send({data:"Task deleted"})
})
router.put('/api/tasks/:id/complete',(req,res)=>{
    res.send({data:"task modified"})
})
router.put('/api/tasks/:id',(req,res)=>{
    res.send({data:"task modified"})
})

module.export = router;