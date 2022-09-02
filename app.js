const express = require("express")
const app = express();
const exphbs = require("express-handlebars")
const path = require("path")
const { error } = require("console")
// Data Base Connection
const connect = require('../Portfolio Website/Data Base/getting_data');
const Message = require('../Portfolio Website/Data Base/mongo_db')

const { resolve } = require("path");

let my_data;
connect.once('open', () => {
    const collect = connect.db.collection('render_data')
    console.log("Connecting again")
    collect.find({}).toArray((err, res) => {
        my_data = {
            dataArr: [...res]
        };
    })
})

let dataBase_items = () => {
    return new Promise((resolve, reject) => {
        Message.find({}).lean().then(m => {
            resolve(m)
        })
    })
}

// template engine .... JS
const views_path = path.join(__dirname, 'views/layouts')
app.set('view-engine', 'hbs')
app.engine('hbs', exphbs.engine({
    defaultLayout: false,
    extname: 'hbs'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/static', express.static('static'))
app.set('views', views_path)

app.get('/', async (req, res) => {

    res.render('main.hbs', my_data)

})

app.post('/submission', async (req, res) => {
    const incoming_message = req.body;
    const new_message = new Message({
        Name: incoming_message.Name,
        email: incoming_message.email,
        message: incoming_message.message
    })

    await new_message.save((err, m) => {
        if (err) { console.log(err.message) }

    })
    res.render('main.hbs')
})

app.listen(80, () => {
    console.log("listening at port 80")
})
