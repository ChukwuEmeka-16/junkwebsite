import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Item from './Item'



const WhatsNew = () => {

  const [newDish,setnewDish] = useState([])

  async function getNew(){
  
    let response = await axios.get("http://localhost:6007/New").then((responseu)=>{
      setnewDish(responseu.data)
   })
    
  }
  useEffect(()=>{
  
    getNew()
    
  },[]) 

  return (
   <>
   {
       newDish.length==0?<div style={{margin:'auto',fontSize:'100px'}}>no dishes</div>:
       newDish.map((item,index)=>{
         return <Item key={index} image={item.images} price={item.price} itemName={item.name} />
       })
   }
   </>
  )
}

export default WhatsNew
