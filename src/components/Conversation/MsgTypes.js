
import { Divider, Stack, Typography, useTheme, Box, Link, IconButton, Menu, MenuItem } from "@mui/material"
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";

import React from "react"
import {Message_options} from "../../data"

const DocMsg = ({ ele , menu}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: ele.incoming ?
                        theme.palette.background.default :
                        theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2} direction={"row"}
                        spacing={3} alignItems={"center"}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                        }}
                       >
                        <Image size={48} />
                        <Typography variant="captain">Abstract.png</Typography>
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>
                    </Stack>
                    <Stack>
                        <Typography
                            variant="body2"
                            sx={{ color: ele.incoming ? theme.palette.text : "#fff" }}
                        >{ele.message}</Typography>
                    </Stack>
                </Stack>
            </Box>
            {menu && <MessageOptions/>}
        </Stack>
    )
}
const LinkMsg = ({ ele , menu}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: ele.incoming ?
                        theme.palette.background.default :
                        theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2} spacing={3}
                        alignItems={"start"}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}
                    >
                        <img src={ele.preview} alt={ele.message}
                            style={{ maxHeight: 210, borderRadius: "10px" }}
                        />
                        <Stack spacing={2}>
                            <Typography variant="subtitle2">Creating Chat App</Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: theme.palette.primary.main }}
                                component={Link}
                                to="//https://www.youtube.com"
                            > www.youtube.com
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color={ele.incoming ? theme.palette.text : "#fff"}>
                            {ele.message}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            {menu && <MessageOptions/>}
        </Stack>
    )
}
const ReplyMsg = ({ ele,menu }) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: ele.incoming ?
                        theme.palette.background.default :
                        theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Stack spacing={2}>
                    <Stack p={2} direction="column" spacing={3} alignItems={"center"} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ color: theme.palette.text }}>
                            {ele.message}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: ele.incoming ? theme.palette.text : "#fff" }}>
                        {ele.reply}
                    </Typography>
                </Stack>
            </Box>
            {menu && <MessageOptions/>}
        </Stack>
    )
}
const MediaMsg = ({ ele,menu }) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: ele.incoming ?
                        theme.palette.background.default :
                        theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Stack spacing={1}>
                    <img src={ele.img}
                        alt={ele.message}
                        style={{ maxHeight: 210, borderRadius: "10px" }}
                    />
                    <Typography variant="body2" color={ele.incoming ? theme.palette.text : "#fff"}>
                        {ele.message}
                    </Typography>
                </Stack>
            </Box>
            {menu && <MessageOptions/>}
        </Stack>
    )
}
const TextMsg = ({ ele,menu }) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={ele.incoming ? "start" : "end"}>
            <Box
                p={1.5}
                sx={{
                    backgroundColor: ele.incoming ?
                        theme.palette.background.default :
                        theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Typography
                    variant="body2" color={ele.incoming ? theme.palette.text : "#fff"}
                >{ele.message}</Typography> 
            </Box>
            {menu && <MessageOptions/>}
        </Stack>
    )
}
const Timeline = ({ ele }) => {

    const theme = useTheme();
    return (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Divider width="46%" />
            <Typography variant="captions" sx={{ color: theme.palette.text }}>{ele.text}</Typography>
            <Divider width="46%" />
        </Stack>
    )
}

const MessageOptions = ()=>{

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(

        <>
        <DotsThreeVertical 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size={20}/>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <Stack spacing={1} px={1}>
              {Message_options.map((ele)=>(
                  <MenuItem onClick={()=>{}}>{ele.title}</MenuItem>
              ))}
          </Stack>
      </Menu>

        </>
    )
}
export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }; 