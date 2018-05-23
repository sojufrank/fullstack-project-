const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninjas')


router.get('/ninjas',(req,res) =>{
    Ninja.find()
        .then(ninja => {
            res.send(ninja)
        })
    //res.send("hello world")
})


/*
//read
router.get('/ninjas',(req,res,next) => {
  
    Ninja.find().then(ninja => {
        res.send(ninja)
    })

   Ninja.geoNear(
       {type:'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 100000, spherical:true}
   ).then(ninjas => {
       res.send(ninjas)
   })
  

  Ninja.aggregate().near({
    near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    maxDistance: 100000,
    spherical: true,
    distanceField: 'dist.calculated'
  }).then(function (ninjas) {
    res.send(ninjas)
  })

})

//create
router.post('/ninjas',(req,res,next) => {
    Ninja.create(req.body)
        .then(ninja => {
            res.send(ninja)
        })
        .catch(next)
})

//update
router.put('/ninjas/:id',(req,res,next) => {
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then(() => {
            Ninja.findOne({_id:req.params.id})
            .then(ninja => {
                res.send(ninja)
            })
        })
})

//delete
router.delete('/ninjas/:id',(req,res,next) => {
    Ninja.findByIdAndRemove({_id:req.params.id})
        .then(ninja => {
            res.send(ninja)
        })
})
*/

module.exports = router