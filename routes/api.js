const express = require('express')
const router = express.Router()


//get a list of ninjas from db
router.get('/ninjas', function(req,res){
    console.log('received get request to /api/ninjas')
    res.send({type:'GET'})
})

//add a new ninja to db
router.post('/ninjas', function(req,res){
    console.log(req.body)
    console.log('received POST request')
    res.send({
        type:'get',
        name:req.body.name,
        sex:req.body.sex,
        data:req.body
    })
})

//update a ninja in the db
router.put('/ninjas/:id', function(req,res){
    res.send({type:'PUT'})
})

//delete a ninja from the db
router.delete('/ninjas/:id', function(req,res){
    res.send({type:'DELETE'})
})

module.exports = router