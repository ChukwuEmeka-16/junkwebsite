import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import food from './food.jpeg'





const Cart = () => {

const[cartItems,setCartItems] = useState([])

async function getCartItems(){

  let response = await axios.get("http://localhost:6007/Cart").then((responseu)=>{
   setCartItems(responseu.data)
 })
  
}
useEffect(()=>{

  getCartItems()
  
},[])

const cartstyle = {
    color:'white',
    fontSize:'100px',
   
    
  }


return (
    <>
     <div className='cartContainer'>
      {
        cartItems.length ===0? <div style={cartstyle}>no cart items</div> :cartItems.map((item,index)=>{
           return <CartItem key={index} name={item.name} price={item.price} image={item.image} quantity={item.quantity}/>
        })
      }
      </div>
      <img src={food} className="bg-image" />
    </>
  )
}

export default Cart
