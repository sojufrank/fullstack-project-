const info = require('./.env')

module.exports = {
    url:`mongodb://${info.user}:${info.pass}@ds133360.mlab.com:33360/testing`
}