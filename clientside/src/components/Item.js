import React,{useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'


const Item = ({image,price,itemName}) => {

const [count,setCount] = useState(1)

const modalRef = useRef()


function negCheck(){
 if( count < 1 ){
  alert('cant have negatie values')
}
else{
  setCount(count - 1)
}
}

function toggleModal(){
modalRef.current.classList.toggle('translate')

}


   

async function addToCart(){
   const data = {
    itemname:itemName,
    itemimage:image,
    itemprice:price,
    quantity:count

   }




const response = await axios.post('http://localhost:6007/Cart',data).then(alert("sucessfully added to cart"))
.then( window.location.href ='/Cart')

}


return (
    <>
    <div ref={modalRef} onClick={toggleModal} className='itemCard'>
      <img src={image} className='itemImage' />
     
      <aside className='itemName'>{itemName}</aside>
       <div className='itemPrice'> NGN {price}</div>
     
    </div>

  

<div ref={modalRef} className="modal translate" >
<FontAwesomeIcon   type="button"  icon="x"  size='xl' onClick={toggleModal} />

<div className='modalContent'>

   <section> {itemName}</section>

   <section> NGN { Number(price) *count}</section>

   <section>

   <aside onClick={()=> negCheck()}>
   <FontAwesomeIcon  type="button"  icon="minus"  size='xl'  />
    </aside> 
  
    <aside>
      {count}
    </aside>
     
     <aside >

     <FontAwesomeIcon   type="button"  icon="plus"  size='xl' onClick={ ()=>setCount(count + 1) } />

     </aside>

   </section>

   <section>
    <button onClick={addToCart}>Add to Cart </button>
   </section>

</div>

</div>

    </>
    
  )
}

export default Item
