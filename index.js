const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//const routes = require('./routes/api')

// set up express app

const app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

//app.use('/api',routes)
app.use('/api',require('./routes/api'))

app.listen(3000, function(){
    console.log('App started, now listening for requests')
})

