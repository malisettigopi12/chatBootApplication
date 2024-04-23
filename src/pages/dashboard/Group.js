import { Box, Stack, Typography,Link, IconButton, useTheme, Divider } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React from "react";
import ChatElement from "../../components/ChatElement";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/search";
import { ChatList } from "../../data";

const Group = () => {
    
    const theme = useTheme();
    return(
        <>
        <Stack direction={"row"} sx={{width: "100%"}}>
           {/*left*/}
           <Box sx={{
               height: "100vh",
               backgroundColor: (theme)=> theme.palette.mode === "light" ?
               "#F8FAFF" : theme.palette.background,
               width: 320,
               boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.26)"
           }}>
            <Stack p={3} spacing={2} sx={{maxHeight: "100vh"}}>
              
              <Stack>

                 <Typography variant="h5">Groups</Typography> 

              </Stack>
              <Stack sx={{width: "100%"}}>
                <Search>
                <SearchIconWrapper>
                    <MagnifyingGlass color="#709CE6" />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="search..." />
                </Search>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                  <Typography variant="subtitle2" component={Link}>
                      Create New Group
                  </Typography>
                  <IconButton>
                      <Plus styled={{color: theme.palette.primary.main}}/>
                  </IconButton>
              </Stack>

              <Divider/>
              
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
                        All Groups
                    </Typography>
                    {ChatList.filter((ele) => !ele.pinned).map((ele) => {
                    return <ChatElement {...ele}/>;
                    })}
                    </Stack>
                    {/* </SimpleBarStyle>  */}
                </Stack>

            </Stack>
           </Box>
        </Stack>
        </>
    )
}

export default Group;