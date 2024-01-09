import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggle: (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        remove: (state)=>{
            state.isMenuOpen=false;
        }
    },
});

export const {toggle,remove} = appSlice.actions;
export default appSlice.reducer;