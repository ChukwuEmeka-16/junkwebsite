import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Item from './Item'

const Drinks = () => {

  const [drinks,setDrinks]= useState([])
  

async function getDrinks(){
 
  let response = await axios.get("http://localhost:6007/Drinks")
  
   setDrinks(response.data)
 
}


useEffect( ()=>  {
  
 getDrinks()
 
},[])




  return (
   <>
     {
     drinks.length==0?<div style={{margin:'auto',fontSize:'100px'}}>no drinks</div>: 
      
      
      drinks.map((item,index)=>{
        return <Item key={index} image={item.images} price={item.price} itemName={item.name}/>
      })
     }
   
   
   
   
    </>
  )
}

export default Drinks
