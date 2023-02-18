const express = require("express");
const cors = require( "cors");
const bodyParser =  require("body-parser");
//const session = require("express-session")
const {createPool} = require('mysql');
const jwt = require('jsonwebtoken')
const random = require('randomstring')
const app = express()
require('dotenv').config()
//const stripe = require('stripe')(process.env.STRIPE_KEY)


// middlewares
app.use(cors())


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const pool = createPool({
    host:"localhost",
    user:"Eli",
    password:"smallPIP$"
})
/*app.use(session({

    secret:'mykey',
    resave:false,
    saveUninitialized:false
}))*/



// global variables

//let signed = false


// routing here
/*app.get("/Community",(req,res)=>{
    res.send("hello")
   const sql = 'SELECT * FROM users where name = ? '
   const name = "eli"
   pool.query(sql,[name],(err,result)=>{
     if (err) {
        
     }
   })
})*/


/*app.post("/Community",(req,res)=>{

    //res.send("awesome inded")
    const mail = req.body.email
    const sql = "insert into portfolio.Community_users(email) VALUES(?)"
    pool.query(sql,[mail],(err,result)=>{
        if (err) {
           res.send(false)

        }else{
        res.send(true)}
    })
 
})*/



app.post("/Signup",(req,res)=>{

    const mail = req.body.email
    const name = req.body.name
    const password = req.body.password
    const sql = "insert into portfolio.users(name,email,password) VALUES(?,?,?)"




    pool.query(sql,[name,mail,password],(err,result)=>{
        if (err) {
           res.send(false)

        }else{
        res.send(true)}
    })
 
})


app.post("/Login",(req,res)=>{
   
    let sql = "select * from portfolio.users where email =? and password = ?"
    
    let  email = req.body.email
    let pass = req.body.password
    
    pool.query(sql,[email,pass],(err,result)=>{
        if(err){
            res.json({success:false,message:"error, try again later"})// this is saying the response body  should be parsed as json and return a javascript object
         
        }
       
       if (result.length > 0) {
        const jwtsecret = random.generate()
       // console.log(result[0].name);
        const token = jwt.sign({email},jwtsecret,{expiresIn:'12h'})

        res.json({success:true,name:result[0].name ,token})
       } else {
       res.json({success:false,message:"user with this Email and password combination not found"})
      
       
    
       }
    })
   
})




app.listen(6007,(()=>console.log("running")))