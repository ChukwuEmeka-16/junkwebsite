import React,{useRef ,useState} from 'react';
import './App.scss';



import Signup from './components/Signup';
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import {  Route, Routes } from 'react-router-dom'
import ForgotPass from './components/ForgotPass';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from './components/Item';

import Specials from './components/Specials';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Order from './components/Order';
import Profile from './components/Profile';
//import Modal from './components/modal';
library.add(fas)




function App() {
  //https://businessday.ng/wp-content/uploads/2022/10/World-Food-Day.jpg
   
return (
    
    <>
    
      <Routes>
    <Route path='/'  element={ <Home/> } />
    <Route path='/Login'  element={ <Login/> } />
    <Route path='/Signup'  element={ <Signup/> } />
    <Route path='/Aboutus'  element={ <About/> } />
    <Route  path='/Forgotten'  element={<ForgotPass/> } />
    <Route  path='/Cart' element={<Cart/>} />
    <Route  path='/Profile'  element={<Profile/> } />
     </Routes>
   
     
     
    </>
  );
}

export default App;
