const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninjas')

//read
router.get('/ninjas', function(req,res,next){

    Ninja.find().then(ninja => {
        res.send(ninja)
    })
})

//create
router.post('/ninjas', function(req,res,next){

    Ninja.create(req.body)
        .then(ninja => {
            res.send(ninja)
        })
        .catch(next)        
})

//update
router.put('/ninjas/:id', function(req,res,next){

    Ninja.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(function(){
            Ninja.findOne({_id:req.params.id}).then(ninja => {
                res.send(ninja)
            })
        })
})

//delete
router.delete('/ninjas/:id', function(req,res,next){

    Ninja.findByIdAndRemove({_id:req.params.id})
        .then(ninja => res.send(ninja))
})

module.exports = router