import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 동일
let user = createSlice({
    name : 'user',
    initialState : 'kim',

} ) 


export default configureStore({
    reducer: {
        작명 : user.reducer 
    } 

})