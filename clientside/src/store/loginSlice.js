import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',// name of this slice
    initialState:{
     email:'',
     password:''
    },
    reducers: {
      // actions (increment, decrement, increment by amount) and their reducer function
      updateEmail: (state,action) => {
       
        state.email =action.payload
      },
      updatePass: (state,action) => {
        state.password = action.payload
      }
    },
  })

// exports the action functions to the target component
export const { updateEmail,updatePass } = loginSlice.actions

  // this exports the reducer as loginReducer
export default loginSlice.reducer