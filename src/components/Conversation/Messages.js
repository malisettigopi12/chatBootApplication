
import {Box, Stack} from "@mui/material"
import {Chat_History} from "../../data"
import React from "react";
import {MediaMsg, TextMsg, Timeline,ReplyMsg, LinkMsg, DocMsg} from "./MsgTypes";
const Messages = ({menu}) => {
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
                               return <MediaMsg ele={ele} menu={menu}/>
                               
                           case "doc":
                              return <DocMsg ele={ele} menu={menu}/>

                           case "link":
                               return <LinkMsg ele={ele} menu={menu}/>
                               
                            case "reply":
                                return <ReplyMsg ele={ele} menu={menu}/>
                                
                           default :
                           return <TextMsg ele={ele} menu={menu}/>
                                               
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