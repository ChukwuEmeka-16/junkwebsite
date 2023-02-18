
import {  configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import signupReducer from './signupSlice'
import  searchbarReducer from './searchbarSlice'
export default  configureStore({
    reducer: {
     login : loginReducer,
     signup : signupReducer,
     search: searchbarReducer
    },
  })