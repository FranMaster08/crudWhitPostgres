
const express = require('express')
const path = require('path');
const app = express()
const rutas = require('./routes/index')
const nunjucks=require('nunjucks')
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())


//configuracion de Nunjucks
app.set('view engine')
nunjucks.configure([path.resolve(__dirname,'./views')],{
    autoescape:false,
    express:app
})




app.use('/', rutas)
module.exports=app