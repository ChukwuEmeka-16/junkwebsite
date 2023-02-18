import { createSlice } from "@reduxjs/toolkit";

export const searchbarSlice = createSlice({

    name:'searchbar',
    initialState:{
        searchValue :''
    },
    reducers:{
        updateSearchValue:(state,action)=>{
            state.searchValue = action.payload
        }
    }


})

export const { updateSearchValue} = searchbarSlice.actions
export default searchbarSlice.reducer