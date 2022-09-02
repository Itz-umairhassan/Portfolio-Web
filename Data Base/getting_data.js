const { rejects } = require("assert")
const { error } = require("console")
const mongoose = require("mongoose")
const { resolve } = require("path")

mongoose.connect('mongodb://localhost:27017/portfolio_data', ({
    useNewUrlParser: true,
    useUnifiedTopology: true
}))

const connect = mongoose.connection

connect.on('error', console.error.bind(console, 'error connection:'))
connect.once('open', () => {
    console.log("DB is connected")
})

module.exports = connect


