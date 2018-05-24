const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const routes = require('./routes/api')
const girlsRoutes = require('./routes/girls')
//const db = require('./config/db')
const db = require('./db')



const app = express()

//connect to mongodb

//mongoose.connect('mongodb://localhost/ninjago')
mongoose.connect(db.url)

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

app.use(express.static('public'))

app.use(bodyParser.json())

//app.use('/api', routes)
app.use('/', girlsRoutes)

//error handling middleware
app.use((err, req, res, next) => {

    res.status(422).send({
        error: err.errors.name.message
    })
})

const serverPort = 3000;
const port = process.env.PORT || serverPort;

app.listen(port, () => {
    console.log('App started, now listening for requests')
})