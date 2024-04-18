import React from "react";
import { Box, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material"
import { Stack, useTheme } from "@mui/system";
import { CaretLeft, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../Redux/slices/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import Messages from "./Conversation/Messages";


const StarredMessages = ()=>{
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <Box sx={{width: 320, height: "100vh"}}>
            <Stack sx={{height:"100%"}}>
               {/* header */}
               <Box sx={{
                   boxShadow: "0px 0px 2px rbs(0, 0, 0, 0.25)",
                   width: "100%",
                   backgroundColor: theme.palette.mode === "light" ?
                   "F8FAFF" : theme.palette.background,
               }}>
                <Stack direction="row"
                      sx={{
                          height: "100px",
                          p : 2
                      }}
                      alignItems={"center"}
                      spacing={3}
                >
                    <IconButton onClick={()=>{
                    dispatch(UpdateSidebarType("CONTACT"));
                }}>
                    <CaretLeft/>
                </IconButton>
                <Typography variant="subtitle2">Starred Messages</Typography>
                </Stack>
                </Box>
                
                 {/* Body */}
                 <Stack sx={{height: "100%", position: "relative", flexGrow:1, 
                 overflowY: "scroll"}}
                 p={3} spacing={3}>
                   <Messages/>
                 </Stack>
                </Stack>
            
        </Box>
    )
}

export default StarredMessages;