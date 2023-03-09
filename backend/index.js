const express = require("express");
const cors = require( "cors");
const bodyParser =  require("body-parser");

const {createPool} = require('mysql');
const jwt = require('jsonwebtoken')
const random = require('randomstring')
const app = express()

require('dotenv').config()


// middlewares
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



const pool = createPool({
    host:"localhost",
    user:"Eli",
    password:"smallPIP$"
})




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

/*app.post('/Drinks',upload.single("drinkImage"),(req,res)=>{

  let name = req.body.name
  let price = req.body.price
  let image = req.file.buffer.toString('base64')
  let sql = "insert into portfolio.Drinks (name,price,images) values(?,?,?) "
 
  pool.query(sql,[name,price,image],(err,result)=>{
     if (err) throw err
  
  })
})
*/


app.get('/Drinks',(req,res)=>{
 let sql = 'select * from portfolio.Drinks' 
pool.query(sql,(err,result)=>{
    if(err) throw err
    else{
        res.send(result)
    }
})
    

})


app.get('/Specials',(req,res)=>{
    let sql = 'select * from portfolio.Dishes' 
    pool.query(sql,(err,result)=>{
        if(err) throw err
        else{
           let response = JSON.stringify(result)
          
           res.send(response)
        }

    })
})

app.get('/New',(req,res)=>{
    let sql = 'select * from portfolio.whatsNew' 
    pool.query(sql,(err,result)=>{
        if(err) throw err
        else{
           let response = JSON.stringify(result)
          
           res.send(response)
        }

    })
    
})

app.post('/Cart',(req,res)=>{
  let name = req.body.itemname
  let price = req.body.itemprice
  let image = req.body.itemimage
  let quantity = req.body.quantity 

 
  let sql = 'insert into portfolio.Cart(name,price,image,quantity) VALUES(?,?,?,?)'

  pool.query(sql,[name,price,image,quantity],(err,result)=>{

    if(err) throw err
        else{
           
          
           res.sendStatus(200)
        }
  })
})

app.get('/Cart',(req,res)=>{
    let sql = 'select * from portfolio.Cart'
    pool.query(sql,(err ,result)=>{
        if(err) throw err
        else{
           
          
           res.send(result)
        }
    })
})

app.put('/Cart',(req,res)=>{
    let image = req.body.img
    
   let sql = 'delete from portfolio.Cart where image = ?'
   pool.query(sql,[image],(err,result)=>{
    if(err) throw err
        else{
           
          
           res.send(true)
        }
   })
}) 

app.get('/Profile',(req,res)=>{
   let sql = 'select * from portfolio.users'
})

app.listen(6007,(()=>console.log("running")))