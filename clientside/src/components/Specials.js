import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Item from './Item'
const Specials = () => {

const [specials,setSpecials] = useState([])

async function getSpecials(){

  let response = await axios.get("http://localhost:6007/Specials").then((responseu)=>{
   setSpecials(responseu.data)
 })
  
}
useEffect(()=>{

  getSpecials()
  
},[])



return (
    <>
    {
      specials.length==0?<div style={{margin:'auto',fontSize:'100px'}}>no specials</div>:
    specials.map((item,index)=>{
      return <Item key={index} image={item.images} price={item.price} itemName={item.name} />
    })
    }
    
    </>
  )
}

export default Specials
