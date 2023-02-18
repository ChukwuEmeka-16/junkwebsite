import { createSlice } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";


export  const signupSlice = createSlice(
{
name :'signupSlice',
initialState:{
    name:'horse',
    email:'',
    password:''
},
reducers:{
    updateEmail: (state,action) => {
       
        state.email =action.payload
      },
    updatePass: (state,action) => {
        state.password = action.payload
      },
    updateName :(state,action)=>{
        state.name = action.payload
    }
}

})

export const { updateName , updateEmail , updatePass} = signupSlice.actions

export default signupSlice.reducer