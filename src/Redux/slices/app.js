import { createSlice } from "@reduxjs/toolkit";

import {dispatch} from "../Store";

const initialState = {
    sideBar: {
        open: false,
        type: "CONTACT", // can be CONTACT, SHARED, STARRED 
    }
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
            }
        }
    }
);

export default slice.reducer;

export function ToggleSidebar(){
    return async ()=> {
        dispatch(slice.actions.toggleSidebar())
    }
}

export function UpdateSidebarType(type){
     return async () => {
         dispatch(slice.actions.updateSidebarType({
             type,
         }))
     }
}