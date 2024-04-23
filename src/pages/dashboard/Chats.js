
import React from "react";
import {  Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/search";
import ChatElement from "../../components/ChatElement";


const Chats = () => {

  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: theme.palette.mode === "light"? "#fff" : theme.palette.background.paper,
        boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.25)'
      }}>

      <Stack p={3} spacing={2} sx={{height: "100vh",}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography variant="h5">
            chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="search..." />
          </Search>
        </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Stack 
           spacing={3}
           direction={"column"} sx={{ flexGrow : 1, height: "100%", overflowY: "scroll",}}>
            {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
            <Stack spacing={2.4}>
             <Typography sx={{color: "#676767"}} variant="subtitle1">
                pinned
             </Typography>
             {ChatList.filter((ele) => ele.pinned).map((ele) => {
               return <ChatElement {...ele}/>;
             })}
            </Stack>
            <Stack spacing={2.4}>
             <Typography sx={{color: "#676767"}} variant="subtitle1">
                All Chats
             </Typography>
             {ChatList.filter((ele) => !ele.pinned).map((ele) => {
               return <ChatElement {...ele}/>;
             })}
            </Stack>
            {/* </SimpleBarStyle>  */}
          </Stack>

      </Stack>
    </Box>
  )
}

export default Chats;