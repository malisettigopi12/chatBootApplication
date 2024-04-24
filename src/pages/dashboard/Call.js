
import React from "react";
import { Box, Stack, Typography,Link, IconButton, useTheme, Divider } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useState } from "react";
import { CallLogs } from "../../data";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/search";
import {CallLogElement} from "../../components/CallElement";
import StartCall from "../../sections/main/StartCall";


const Call = ()=>{
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

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

                 <Typography variant="h5">Call Logs</Typography> 

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
                      start new Call
                  </Typography>
                  <IconButton onClick={() => setOpenDialog(true)}>
                      <Plus styled={{color: theme.palette.primary.main}}/>
                  </IconButton>
              </Stack>

              <Divider/>
              
              <Stack 
                spacing={3}
                direction={"column"} sx={{ flexGrow : 1, height: "100%", overflowY: "scroll",}}>
                    {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
                    {/* </SimpleBarStyle>  */}
                     {/* call logs */}
                {CallLogs.map((ele) => <CallLogElement online={true} missed={ele.missed} incoming={ele.incoming}
                   
                />)}

            </Stack>
            </Stack>
           </Box>
        </Stack>

        {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
        </>
    )
}

export default Call;