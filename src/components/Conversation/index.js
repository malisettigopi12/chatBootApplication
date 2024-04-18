
import { Box, Stack,} from "@mui/material"
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";

const Conversation = () => {

    return (

        <Stack width="auto" height="100%" maxHeight="100vh">
            <Header/>

            <Box width=  "100%" sx={{ flexGrow: 1,height: "100%", overflowY:"scroll"}}>
                <Messages menu={true}/>
            </Box>
            
            <Footer/>
            
        </Stack>
    );
}

export default Conversation;