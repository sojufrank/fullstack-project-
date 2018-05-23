const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninjas')


//get a list of ninjas from db
router.get('/ninjas', function(req,res,next){
    console.log('received get request to /api/ninjas')
    res.send({type:'GET'})
})

//add a new ninja to db
router.post('/ninjas', function(req,res,next){

    Ninja.create(req.body)
        .then(ninja => {
            res.send(ninja)
        })
        .catch(next)
        //.catch(err => res.send(err))
        
})

//update a ninja in the db
router.put('/ninjas/:id', function(req,res,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(function(){
            Ninja.findOne({_id:req.params.id}).then(ninja => {
                res.send(ninja)
            })
        })
    //res.send({type:'PUT'})
})

//delete a ninja from the db
router.delete('/ninjas/:id', function(req,res,next){
    Ninja.findByIdAndRemove({_id:req.params.id})
        .then(ninja => res.send(ninja))
        //.catch(next)
    //res.send({type:'DELETE'})
})

module.exports = router