import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logIn(state,action){
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state,action){
            state.isLoggedIn = false;
            state.token = "";
        }
     }
})

// reducer
export default slice.reducer;


export function LogginUser(formValues){
     // formValues => {email, password};

     return async (dispatch, getState)=>{
         await axios.post('/auth/login',
         {
             ...formValues,
         },
         {
             headers:{
                 "Content-Type": "application/json",
             },
         }
         ).then(function (res){
           console.log(res);
           
           dispatch(
               slice.actions.logIn({
                   isLoggedIn: true,
                   token: res.data.token,
               })
           )

         }).catch(function (err){
             console.log(err);
         })
     }
}