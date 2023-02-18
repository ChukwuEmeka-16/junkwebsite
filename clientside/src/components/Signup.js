import React,{useState} from 'react'
import Axios from 'axios'
import { Link  } from 'react-router-dom'
import useToggleHook from './useToggleHook'
import {useSelector, useDispatch} from 'react-redux'
import { updateEmail } from '../store/signupSlice';
import { updatePass } from '../store/signupSlice';
import { updateName } from '../store/signupSlice';


const Signup = () => {
  const dispatch = useDispatch()
  const {name} = useSelector((state)=>state.signup)
  const {email} = useSelector((state)=>state.signup)
  const {password} = useSelector((state)=>state.signup)
  
  
  

  const Person = {
    name:name,
    email:email,
    password:password
  }
    
const postData = async(e)=>{
    e.preventDefault()
     const theresponse = await Axios.post("http://localhost:6007/Signup",Person)
 
     const result = theresponse.data
     if (result) {
      window.location.href='/Login'
     } else {
      alert('Error signing up , try again')
      window.location.href = '/Signup'
     }
   }

   const{ passToggler,toggle}  = useToggleHook()

   
  return (
    <>
      
      <form className='signup-form' onSubmit={(e)=>postData(e)}  >
      <h1 style={{margin:'auto'}}>SIGN UP</h1>
      <div>
        <label>NAME :</label><input className='' type="text"  onChange={(e)=>dispatch( updateName(e.target.value) )} required />
      </div>
    

      <div>
        <label >EMAIL :</label><input className='' type="email"  onChange={(e)=>dispatch( updateEmail(e.target.value) )} required/>
      </div>
      

      <div>
        <label >Password :</label><input ref={passToggler} className='' type="text"  onChange={(e)=>dispatch( updatePass(e.target.value) )} required/>
      </div>
     
     <div className=' '>
     <input onClick={toggle} type="checkbox" className='' /> 
     </div>
      <div className=''>
        <button type='submit' className=''  onSubmit={(e)=>postData(e)}>SUBMIT</button>
       </div>
    
    </form>


      <div className='have-account'>
        <p> Already have an account? <Link to='/Login'> Login</Link></p>
      </div>
    </>
  )
}

export default Signup
