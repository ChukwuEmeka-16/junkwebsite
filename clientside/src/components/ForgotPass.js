import React from 'react'


const ForgotPass = () => {
  return (
    <form className='forgot-form'>
        <div>
            <label >Enter your email :</label>
            <input type="text" />
        </div>

        <div>
            <label htmlFor=""></label>
            <button type='submit'>Submit</button>
        </div>
        <div>
            <label htmlFor="">Enter OTP</label>
            <input type="number" name="" id="" /> 
            <button>SEND</button>
        </div>
        <div>
            <label > Enter new Password</label>
            <input type="text" />
        
        
           <label htmlFor="">Confirm password</label>
           <input type="text" />
            <button>Update</button>
        </div>


        
    </form>
  )
}

export default ForgotPass
