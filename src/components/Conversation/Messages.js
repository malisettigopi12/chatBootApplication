
import {Box, Stack} from "@mui/material"
import {Chat_History} from "../../data"
import React from "react";
import {MediaMsg, TextMsg, Timeline,ReplyMsg, LinkMsg, DocMsg} from "./MsgTypes";
const Messages = () => {
    return (
      <Box p={3}>
        <Stack spacing={3}>
           {Chat_History.map((ele) => {
               switch (ele.type){
                   case "divider":
                       return <Timeline ele={ele}/>
                   case "msg":

                       switch(ele.subtype){
                           case "img":
                               return <MediaMsg ele={ele}/>
                               
                           case "doc":
                              return <DocMsg ele={ele}/>

                           case "link":
                               return <LinkMsg ele={ele}/>
                               
                            case "reply":
                                return <ReplyMsg ele={ele}/>
                                
                           default :
                           return <TextMsg ele={ele}/>
                                               
                       }
                  default:
                      return <></> 
               }
           })}
        </Stack>
      </Box>
    )
}

export default Messages;