const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')


const app = express()

//connect to mongodb

mongoose.connect('mongodb://localhost/ninjago')

mongoose.connection.on('connected', function () {  
    console.log('Mongoose connected');
  });


app.use(bodyParser.json())

app.use('/api', routes)

//error handling middleware
app.use(function(err,req,res,next){

    res.status(422).send({error:err.errors.name.message})
})


app.listen(3000, function(){
    console.log('App started, now listening for requests')
})

