const user = process.env.DB_USER
const pass = process.env.DB_PASS

module.exports = {
    url:`mongodb://${user}:${pass}@ds133360.mlab.com:33360/testing`
}