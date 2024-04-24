import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Box, Divider, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import Logo from "../../assets/Images/logo.ico"
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons, Profile_Menu } from "../../data/index"
import useSettings from "../../hooks/useSettings";

import { useNavigate } from "react-router-dom";
import { getMenuItemUnstyledUtilityClass } from "@mui/base";

const getPath = (index) => {

  switch(index){
    case 0 : return "/app";
    case 1 : return "/group";
    case 2 : return "/call";
  }
}
const getMenuItem = (index) => {

  switch(index){
    case 0 : return "/profile";
    case 1 : return "/settings";
    case 2 : 
    // TODO : update token and isAuth = false;
    return "/auth/login";
  }
}


const SideBar = () => {
   
  const navigate = useNavigate();
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}>
      <Stack direction="column" alignItems={"center"} sx={{ height: "100%" }} justifyContent="space-between" spacing={3}>
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadiud: 1.5,
            }}>
            <img src={Logo} alt={"chat app logo"} />
          </Box>
          <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
            {
              Nav_Buttons.map((ele) => (
                selected === ele.index ?
                  <Box
                    p={1} sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}>
                    <IconButton key={ele.index} >
                      {ele.icon}
                    </IconButton>
                  </Box>
                  :
                  <Box>
                    <IconButton
                      p={1}
                      onClick={() => {
                        setSelected(ele.index)
                        navigate(getPath(ele.index));
                      }}
                      sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                      key={ele.index}>
                      {ele.icon}
                    </IconButton>
                  </Box>
              ))
            }
            <Divider sx={{ width: "48px" }} />
            {
              selected === 3 ?
                <Box p={1} sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}>
                  <IconButton>
                    <Gear />
                  </IconButton>
                </Box>
                :
                <Box p={1}
                  onClick={() => {
                    setSelected(3);
                    navigate("/settings")
                  }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                  <IconButton>
                    <Gear />
                  </IconButton>
                </Box>
            }
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <AntSwitch onChange={() => {
            onToggleMode();
          }}
            defaultChecked />
          <Avatar src={faker.image.avatar()}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((ele,idx) => (
                <MenuItem onClick={() => { }}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{ width: 100 }}
                    onClick={()=> navigate(getMenuItem(idx))}
                  >
                    <span>{ele.title}</span>
                    {ele.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideBar;