

import React from "react";
import { Avatar, Badge, Box,  Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme, } from "@mui/material/styles";
import StyledBadge from "./settings/StyledBadge";

const ChatElement = ({id,name,img,msg,time,unread,online}) => {

    const theme = useTheme();
    return (
      <Box sx={{
        borderRadius: 1,
        width: "100%",
        backgroundColor: theme.palette.mode === "light"? "#fff" : theme.palette.background.default,
      }}
      p={2}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
           {online ? <StyledBadge overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">
            <Avatar src={img} />
          </StyledBadge> :
           <Avatar src={img} />
          }
          
          <Stack spacing={0.3}>
            <Typography variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="caption">
              {msg}
            </Typography>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography sx={{fontWeight: 600}}variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}>
  
            </Badge>
          </Stack>
        </Stack>
      </Box>
    )
  }

  export default ChatElement;