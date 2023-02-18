import React,{useState} from 'react'
import { Link , Route, Routes } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
     
<section className='landing-row-1'>


  <div className='row-1-content' >
        Easily manage your assets and returns with our platform
        <br />
        <button> <Link className='link'  to='/Login'>Log in</Link>  </button>
  </div>


      
 </section>

<section className='landing-row-2'>

        <h1>Statistics </h1>
       <div className='facts'>
          
          <div>
           <p> in over </p>
             
            <h1>100</h1>
            
            tex
          </div>


          <div>
          in over 
             <br />
             <h1>100</h1>
             <br />
             countries
          </div>


          <div>

           <h4>in</h4>
             <br />
             <h1>100</h1>
             <br />
             countries

          </div>

       </div>
      </section>
   
    
    
    </div>
  )
}

export default Landing
