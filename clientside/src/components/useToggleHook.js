import {  useRef} from 'react'

const useToggleHook = () => {
   
    const passToggler = useRef()

    const toggle = ()=>{
        console.log('clicked');
        if (passToggler.current.type==="text") {
          passToggler.current.type= "password"
        }else if(passToggler.current.type==="password"){
          passToggler.current.type= "text"
        }
      }
  
  
 return { passToggler, toggle}
}

export default useToggleHook
