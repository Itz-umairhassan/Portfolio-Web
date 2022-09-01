const express=require("express")
const app=express();
const exphbs=require("express-handlebars")
const path=require("path")

const views_path=path.join(__dirname,'views/layouts')

app.set('view-engine','hbs')
app.engine('hbs',exphbs.engine({
    defaultLayout:false,
    extname:'hbs'
}))

app.use('/static',express.static('static'))
app.set('views',views_path)

app.get('/',(req,res)=>{
   res.render('main.hbs')
})

app.listen(80,()=>{
    console.log("listening at port 80")
})
