
import { Dialog,DialogContent,Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequest, FetchFriends, FetchUser } from "../../Redux/slices/app";

const UsersList = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchUser());
    },[])

    const {users} = useSelector((state)=> state.app)
    return(
        <>
        {users.map((ele,ind) =>{
            // TODO => user Component
            return<></>
        })}
        </>
    )
}

const FriendsList = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchFriends());
    },[])

    const {Friends} = useSelector((state)=> state.app)
    return(
        <>
        {Friends.map((ele,ind) =>{
            // TODO => render friend Component
            return<></>
        })}
        </>
    )
}

const FriendRequestList  = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchFriendRequest());
    },[])

    const {friendRequests} = useSelector((state)=> state.app)
    return(
        <>
        {friendRequests.map((ele,ind) =>{
            // TODO => render friend request Component
            return<></>
        })}
        </>
    )
}

const Friends = ({open, handleClose}) => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue)=>{
       setValue(newValue);
    }
    return(
        <Dialog fullWidth maxWidth="xs" open={open} keepMounted onClose={handleClose}>
          <Stack p={2} sx={{width: "100%"}}>
            <Tabs value={value} onChange={handleChange} centered>
               
               <Tab label="Explore"/>
               <Tab label="Friends"/>
               <Tab label="Requests" />

            </Tabs>
          </Stack>
          {/* Dialog content */}

          <DialogContent>
              <Stack sx={{height: "100%"}}>
                  <Stack spacing={2.5}>
                   {
                       (()=>{
                           switch (value) {
                               case 0: // all users
                                   return <UsersList/>
                               case 1:
                                   return <FriendsList/>
                               case 2 :
                                   return <FriendRequestList/> 
                           }
                       })
                   }
                  </Stack>
              </Stack>
          </DialogContent>
        </Dialog>
    )
}

export default Friends;