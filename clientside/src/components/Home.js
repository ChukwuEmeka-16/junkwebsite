import React, {useRef,useEffect ,useState } from 'react'
import WhatsNew from './WhatsNew'
import Drinks from './Drinks'
import Specials from './Specials'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'
import { updateSearchValue } from '../store/searchbarSlice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import food from './food.jpeg'



const Home = () => {
  const dispatch = useDispatch()
  const { searchValue } = useSelector((state)=>state.search)


  //const [search, setsearch] = useState('')
   
  const searchParams = {
    Search:searchValue
  }



async function Searchitem() {
      const response  = await axios.get("http://localhost:6007/Home",searchParams)
    

  }


   
  const headerLoginBtnToggler = useRef()
  const headerProfileToggler = useRef()
   useEffect(()=>{
    

      if (localStorage.getItem('token')){
       headerLoginBtnToggler.current.classList.add('display-none')
      }
      else if (!localStorage.getItem('token')){
        headerProfileToggler.current.classList.add('display-none')
      }
   },[])

  

  const ToggleProfile = useRef()
  
async function Toggler () {
    ToggleProfile.current.classList.toggle('display-none')
    const response = await axios.get('http://localhost:6007/Login')
  }
  
  const logout = ()=>{
    localStorage.removeItem('token')
    window.location.href = '/Login'
  }


  const linkStyles = {
    color:'black',
    fontSize:'17px',
    backgroundColor:'transparent',
    border:0
  }
  const btnstyle = {
    
    color:'white',
    border:'1px',
    backgroundColor:'green'
  }

  return (
    <>
    <img src={food} className="bg-image" />
    <div  className='Homepage '>
   

   <header className='Homepage-header'>
     <nav className='Homepage-header-nav'> 
      <h1 className='Homepage-header-nav-h1' > Junk land  </h1>
      <button > <Link  to='/Signup' ref={headerLoginBtnToggler} style={linkStyles}>Login / Signup</Link></button>
      <button  onClick={Toggler}  ref={headerProfileToggler}>Profile</button>
     </nav>

    </header> 
   
    {/* dropdown code*/ }
    <div className='drop-menu-container display-none' ref={ToggleProfile} >
       <h2>Profile</h2>
        <ul>
          <li> <Link to='/Profile' className='link'>Profile</Link> </li>
          <li><Link to='/Orders' className='link'>Order History</Link></li>
          <li><Link to='/Cart' className='link'>Cart</Link></li>
          <li><Link to='/Payment' className='link'>Payment Methods</Link></li>
          
        </ul>
      <button  onClick={logout} >Log out</button>

    </div>



     {/* dropdown code ends here*/ }
      <section className='Homepage-section-1'>
        <input onChange={(e)=>dispatch(updateSearchValue(e.target.value))} placeholder="Search a product or vendor..... " type="search" /> <button style={btnstyle}>Search</button>
      </section>

      <section  className='Homepage-section-2' >

        <h1>What's New </h1>
        
        <div className='newCards'>
       <WhatsNew/>
       </div>
      </section>

      <section className='Homepage-section-3'>
        <h1>Junk land's Special's</h1>

        <div className="specialsCards">
        <Specials/>
        </div>
      </section>

      <section className='Homepage-section-4'>
       <h1>Drink's</h1>
        <div className='drinkCards'>
       <Drinks/>
       </div>
      </section>

      <footer className='Homepage-footer' >


        <aside> <Link style={linkStyles}  to='/Termsandconditions'>Terms and conditions</Link></aside>
        <aside> <Link  style={linkStyles} to='About'>About us</Link></aside>
        <aside> &#169; Copyright 2023 , Eli's rights reserved lol </aside>
      </footer>

    </div>
    </>
  )
}

export default Home
