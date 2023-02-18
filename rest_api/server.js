const express = require("express");
const cors = require( "cors");
const bodyParser =  require("body-parser");
require('dotenv').config()
const {createPool} = require('mysql');

const app = express()
// middlewares
app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const pool = createPool({
    host:"localhost",
    user:"Eli",
    password:"smallPIP$"
})


// routing for getting things from the api
app.get('/Dishes',(req,res)=>{
  res.sendFile

})

app.get('/New',(req,res)=>{
    res.sendFile
})
app.get('/Drinks',(req,res)=>{
    res.sendFile
})

// routing for adding new values

app.post('/Dishes',(req,res)=>{
    sql=''
  

})
  
app.post('/New',(req,res)=>{
    sql=''
})


app.post('/Drinks',(req,res)=>{
    sql=''
})

// routing for deleting items

app.delete('/Dishes',(req,res)=>{
    sql=''
  

})
  
app.delete('/New',(req,res)=>{
    sql=''
})


app.delete('/Drinks',(req,res)=>{
    sql=''
})