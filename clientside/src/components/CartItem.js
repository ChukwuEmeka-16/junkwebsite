import React from 'react'
import axios from 'axios'

const CartItem = ({name , price , image , quantity}) => {

function checkOut(){
    window.location.href = '/Order'
}

const deleteData = {
   
    img:image
}

async function deleteItem(){
    
 let response = await axios.put("http://localhost:6007/Cart",deleteData)
  alert('deleted sucessfully')
    window.location.reload()
 
}


  return (
    <>
       <div className='cartItem'>
        <section>

            <img src={image} alt="" />
        </section>
        <section >
            { name } <h1>{ 'x' + quantity}</h1>
        </section>

        <section>
          Total : NGN {price*quantity}
        </section>


        <section>
            <button onClick={checkOut}>Order</button>
            <button onClick={deleteItem} >Delete </button>
        </section>
       </div>
    </>
  )
}

export default CartItem
