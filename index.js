const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const routes = require('./routes/api')
const girlsRoutes = require('./routes/girls')
const db = require('./config/db')



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


app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;
    console.log('App started, now listening for requests')
})