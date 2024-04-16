
import React from "react";
import { Avatar, Badge, Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { InputBase } from "@mui/material";
import { styled, alpha,useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

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
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));


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
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
          <Stack 
          spacing={3}
          direction={"column"} sx={{ flexGrow : 1, height: "100%", overflow: "scroll",}}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
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
            </SimpleBarStyle> 
          </Stack>
        </Stack>

      </Stack>
    </Box>
  )
}

export default Chats;