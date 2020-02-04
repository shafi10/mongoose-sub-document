const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://shafi:shafi100@ds357708.mlab.com:57708/sub-document',()=>{
    console.log('Database connected')
})

const app = express()

const dataRoutes = require('./routes/data')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

app.use(dataRoutes)

app.listen(3000, ()=>{
    console.log('server listen on port 3000')
})