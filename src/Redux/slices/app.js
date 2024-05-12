import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    sideBar: {
        open: false,
        type: "CONTACT", // can be CONTACT, SHARED, STARRED 
    },
    snackbar:{
        open: null,
        message: null,
        severity: null,
    },
    users: [],
    friends: [],
    friendRequests:[],
}

const slice = createSlice(
    {
        name: 'app',
        initialState,
        reducers:{
            // Toggle sidebar
            toggleSidebar(state,action){
                 state.sideBar.open = !state.sideBar.open;

            },
            updateSidebarType(state,action){
                state.sideBar.type = action.payload.type;
            },
            openSnackbar(state, action){
                state.snackbar.open = true;
                state.snackbar.severity = action.payload.severity;
                state.snackbar.message = action.payload.message;
            },
            closeSnackbar(state, action){
                state.snackbar.open = false;
                state.snackbar.severity = null;
                state.snackbar.message = null;
            },
            updateUsers(state, action){
                state.users = action.payload.users;
            },
            updateFriends(state, action){
                state.friends = action.payload.friends;
            },
            updateFriendRequest(state, action){
                state.users = action.payload.request;
            }
        }
    }
);

export default slice.reducer;

export function ToggleSidebar(){
    return async (dispatch, getState)=> {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function UpdateSidebarType(type){
     return async (dispatch, getState) => {
         dispatch(slice.actions.updateSidebarType({
             type,
         }))
     }
}

export function showSnackbar({severity, message}){
    return async (dispatch, getState) => {
        dispatch(slice.actions.openSnackbar({
            message,
            severity,
        })
        );

        setTimeout(()=>{
          dispatch(slice.actions.closeSnackbar());
        },4000)
    }
}


export const closeSnackbar = () =>
    async (dispatch, getState) => {
        dispatch(slice.actions.openSnackbar());
    }

export const FetchUser = () => {
    return async (dispatch, getState)=>{
        await axios.get("/user/get-users",{
            headers:{
                "content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res)=>{
            console.log(res);
            dispatch(slice.actions.updateUsers({users: res.data.data}))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const FetchFriends = () => {
    return async (dispatch, getState)=>{
        await axios.get("/user/get-friends",{
            headers:{
                "content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res)=>{
            console.log(res);
            dispatch(slice.actions.updateFriends({friends: res.data.data}))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const FetchFriendRequest = () => {
    return async (dispatch, getState)=>{
        await axios.get("/user/get-friend-requests",{
            headers:{
                "content-type": "application/json",
                Authorization: `Bearer ${getState().auth.token}`,
            }
        }).then((res)=>{
            console.log(res);
            dispatch(slice.actions.updateFriendRequest({request: res.data.data}))
        }).catch((err)=>{
            console.log(err);
        })
    }
}