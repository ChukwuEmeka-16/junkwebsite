import React from 'react'
import { Link  } from 'react-router-dom'
import Axios from 'axios'
import useToggleHook from './useToggleHook'
import {useSelector, useDispatch} from 'react-redux'
import { updateEmail } from '../store/loginSlice';
import { updatePass } from '../store/loginSlice';
import food from './food.jpeg'

const Login = () => {
  // email and pass state variable
  const { email } = useSelector((state)=>state.login)
  const { password } = useSelector((state)=>state.login)
  


  const dispatch = useDispatch()
   

  
 
  
    
const data ={
  email:email,
  password:password
}

  const{ passToggler,toggle}  = useToggleHook()

  


  async  function login(e) {
     e.preventDefault()
   
      let response = await Axios.post('http://localhost:6007/Login',data)
      


      if(response.data.success){
        localStorage.setItem('token',response.data.token)
        window.location.href = '/'
       // authUserName = response.data.name
       
      }else{
       alert(response.data.message)
      }
      
    }

   // console.log('authUserName');
  return (
    <>
    <img src={food} className="bg-image" />
      <form className='login-form' onSubmit={(e)=>login(e)}>
      <h1 style={{margin:'auto'}}>LOG IN</h1>
        <div >
            <label htmlFor="">Email :</label>
            <input onChange={(e)=>dispatch( updateEmail(e.target.value) )} type="email" className='input' required />
        </div>

        <div>
            <label htmlFor=""> Password :</label>
            <input onChange={(e)=>dispatch( updatePass(e.target.value) )} ref={passToggler} type="text" className='input' required />
        </div>

        <div id='check'>
         <label htmlFor="">hide password</label><input  onClick={toggle} type="checkbox"  /> 
        </div>
       
        <div className=''> 
            <button className='' >Log in</button> 
        </div>
        
      </form>
      <div  className='forgot-password'>
      <Link   to='/Forgotten'> forgot password? click here</Link>
      </div>
     
      
    </>
  )
}

export default Login
