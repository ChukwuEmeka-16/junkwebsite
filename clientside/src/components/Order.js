import React,{useState} from 'react'

const Order = () => {

   const[total,setTotal] = useState(4500)

function submitted() {
   alert('submitted')
}
  return (
    <div className='Order-container'>
      <div>.</div>
      <form className='Order-form-container' onSubmit={submitted}>

        <div>
         <h1>NGN  {total}</h1>
       
      </div>


         <div className="Card-body">
  

         <div className='CardNumber-container'>
            <label htmlFor=""> Card Number</label>
            <input type="text" placeholder='1234 5*** ****' required/>
         </div>

         <div className='CardName-container'>
         <label htmlFor=""> Name on card</label>
            <input type="text" placeholder='John Doe' required/>
         </div>

      <div className='CardExpdateCvv-container'>

       <div className='expdate-container'>
         <label htmlFor=""> Expiry date</label>
            <input type="date" required />
       </div>

       <div className='cvv-container'>
         <label htmlFor="">CVV</label>
         <input type="number" placeholder='123' required />
        </div>

      </div>

         <div className='CardPayNow-container'> 
            <button>Pay now</button>
         </div>

         </div>
      </form>
    </div>
  )
}

export default Order
