import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";
import { showSnackbar } from "./app";

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
    email:"",
    error:false,
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        updateIsLoading(state,action){
            state.error = action.payload.error;
            state.isLoading = action.payload.isLoading;
        },
        logIn(state,action){
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        signOut(state,action){
            state.isLoggedIn = false;
            state.token = "";
        },
        updateRegisterEmail(state,action){
            state.email = action.payload.email;
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

           dispatch(showSnackbar({severity: "success", message: res.data.message}))

         }).catch(function (err){
             console.log(err);

             dispatch(showSnackbar({severity: "error", message: err.message}))
         })
     }
}

export function logoutUser(){

    return async (dispatch, getState)=>{

        dispatch(slice.actions.signOut());
    }
}

export function resetPassword(formValues){

    return async (dispatch, getState)=>{
      
        await axios.post('/auth/forgot-password',
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
        }).catch(function (err){
            console.log(err);
        })
    }
}

export function newPassword(formValues){

    return async (dispatch, getState)=>{
      
        await axios.post('/auth/reset-password',
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

            dispatch(slice.actions.logIn({
                isLoggedIn : true,
                token: res.data.token,
            }))
        }).catch(function (err){
            console.log(err);
        })
    }
}

export function registerUser(formValues){

    return async (dispatch, getState)=>{

        dispatch(slice.actions.updateIsLoading({
            isLoading: false,
            error: false
        }))

        await axios.post('/auth/register',
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

            dispatch(slice.actions.updateRegisterEmail({
                email: formValues.email
            }))
            dispatch(slice.actions.updateIsLoading({
                isLoading: false,
                error: false
            }))
        }).catch(function (err){
            console.log(err);
            dispatch(slice.actions.updateIsLoading({
                isLoading: false,
                error: true
            }))
        }).finally(function (){
            if(!getState().auth.error){
            window.location.href = "/auth/verify"
            }
        })
    }
}

export function verifyEmail(formValues){

    return async (dispatch, getState)=>{
      
        await axios.post('/auth/verify-otp',
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

            dispatch(slice.actions.logIn({
                isLoggedIn : true,
                token: res.data.token,
            }))
        }).catch(function (err){
            console.log(err);
        })
    }
}