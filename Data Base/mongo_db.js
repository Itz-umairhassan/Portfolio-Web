const { error } = require("console")
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/portfolio_data', ({
    useNewUrlParser: true,
    useUnifiedTopology: true
}))

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connection:'))
db.on('open', () => { console.log("data base connected") })

const Message_schema = mongoose.Schema({
    "Name": "string",
    "email": "string",
    "message": "string"
})

const Message = mongoose.model('Message', Message_schema)

module.exports = Message
