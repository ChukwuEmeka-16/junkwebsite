import React,{useRef ,useState} from 'react';
import './App.scss';


//import Axios from 'axios'
import Signup from './components/Signup';
import Login from './components/Login'
import Landing from './components/Landing'
import About from './components/About'
import Home from './components/Home'
import { Link , Route, Routes } from 'react-router-dom'
import ForgotPass from './components/ForgotPass';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fas)




function App() {
  
   
return (
    
    <>
   
      <Routes>
    <Route path='/'  element={ <Home/> } />
    <Route path='/Login'  element={ <Login/> } />
    <Route path='/Signup'  element={ <Signup/> } />
    <Route path='/Aboutus'  element={ <About/> } />
    <Route  path='/Forgotten'  element={<ForgotPass/> } />
     </Routes>
   
     
     
    </>
  );
}

export default App;
