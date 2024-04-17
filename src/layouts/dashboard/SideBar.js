import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Box, Divider, IconButton, Avatar} from "@mui/material";
import { Stack } from "@mui/system";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import Logo from "../../assets/Images/logo.ico"
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons } from "../../data/index"
import useSettings from "../../hooks/useSettings";

const SideBar = () =>{

    const theme = useTheme();
    const {onToggleMode} = useSettings();
    const [selected, setSelected] = useState(0);
    return(
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
                      <IconButton key={ele.index}>
                        {ele.icon}
                      </IconButton>
                    </Box>
                    :
                    <Box>
                      <IconButton
                        p={1}
                        onClick={() => setSelected(ele.index)}
                        sx={{ width: "max-content", color: theme.palette.mode === "light"? "#000": theme.palette.text.primary  }}
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
                    onClick={() => setSelected(3)}
                    sx={{ width: "max-content", color: theme.palette.mode === "light"? "#000": theme.palette.text.primary }}>
                    <IconButton>
                      <Gear />
                    </IconButton>
                  </Box>
              }
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <AntSwitch onChange={()=>{
              onToggleMode();
            }}
            defaultChecked/>
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
    );
}

export default SideBar;