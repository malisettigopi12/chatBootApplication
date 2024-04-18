
import { faker } from "@faker-js/faker";
import { Box, IconButton, Typography,Avatar, Divider, Button } from "@mui/material"
import { Stack, useTheme } from "@mui/system"
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React from "react"
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../Redux/slices/app";
import AntSwitch from "./AntSwitch";

const Contact = ()=>{
    const theme = useTheme();
    const dispatch = useDispatch();
    return(
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
                      justifyContent={"space-between"}
                      spacing={3}
                >
                <Typography variant="subtitle2">Contact info</Typography>
                <IconButton onClick={()=>{
                    dispatch(ToggleSidebar());
                }}>
                    <X/>
                </IconButton>
                </Stack>
               </Box>
               {/* body */}
               <Stack sx={{height: "100%", position: "relative", flexGrow:1, overflowY: "scroll"}} p={3} spacing={3}>
                 <Stack direction={"row"} spacing={2} alignItems={"center"}>
                       <Avatar  src={faker.image.avatar()} alt={faker.name.firstName()} sx={{
                           height: 64,
                           width: 64
                       }}/>
                    <Stack spacing={0.5}>
                      <Typography subtitle="article" fontWeight={600}>{faker.name.fullName()}</Typography>
                      <Typography variant="body2" fontWeight={500}>{"7389-999-000"}</Typography>
                    </Stack>
                 </Stack>
                 <Stack alignItems={"center"} justifyContent={"space-evenly"}
                   direction={"row"}
                 >
                   <Stack spacing={1} alignItems={"center"}>
                     <IconButton>
                         <Phone/>
                     </IconButton>
                     <Typography variant="overline">
                         Voice
                     </Typography>
                   </Stack>
                   <Stack spacing={1} alignItems={"center"}>
                     <IconButton>
                         <VideoCamera/>
                     </IconButton>
                     <Typography variant="overline">
                         video
                     </Typography>
                   </Stack>
                 </Stack>
                 <Divider/>
                 <Stack spacing={0.5}>
                  <Typography variant="article">About</Typography>
                  <Typography variant="body2">Imagination is the only limit</Typography>
                 </Stack>
                 <Divider/>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                     <Typography variant="subtitle2">{"Media, Links & Docs"}</Typography>
                     <Button endIcon={<CaretRight/>} 
                     onClick={()=> dispatch(UpdateSidebarType("SHARED"))}>
                         401
                     </Button>
                 </Stack>
                 <Stack direction={"row"} spacing={2} alignItems={"center"}>
                       {[1,2,3].map((ele)=> (
                           <Box>
                              <img src={faker.image.food()} alt={faker.name.fullName()}/> 
                           </Box>
                       ))}
                 </Stack>
                <Divider/>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                   <Star size={20}/>
                   <Typography variant="subtitle2" 
                     onClick={()=> dispatch(UpdateSidebarType("STARRED"))}
                   > Starred Messages</Typography>
                </Stack>
                <IconButton>
                    <CaretRight/>
                </IconButton>
                </Stack>
                <Divider/>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                   <Bell size={20}/>
                   <Typography variant="subtitle2"> Mute Notifications</Typography>
                </Stack>
                <IconButton>
                    <AntSwitch/>
                </IconButton>
                </Stack>
                <Divider/>
                <Typography>1 group in common</Typography>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                 <Avatar src={faker.image.avatar()} atl={faker.name.fullName()}/>
                 <Stack spacing={0.5}>
                    <Typography variant="subtitle2">Coding Monk</Typography>
                    <Typography variant="caption">parrat, buffalo, You</Typography>
                 </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Button startIcon={<Prohibit/>}fullWidth variant="outlined">
                    block
                   </Button>
                   <Button startIcon={<Trash/>} fullWidth variant="outlined">
                    delete
                   </Button>
                </Stack>
               </Stack>
           </Stack>
        </Box>
    )
}

export default Contact