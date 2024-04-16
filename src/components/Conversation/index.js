import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { Avatar, Badge, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material"
import React from "react";

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

const Conversation = () => {
    return (

        <Stack width="auto" height="100%" maxHeight="100vh">
            <Box sx={{
                height: 100, width: "100%", backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0,0,0, 0.25",
            }}
            p={2}>
            <Stack alignItems={"center"} direction={"row"}
                justifyContent={"space-between"}
                sx={{ width: "100%", height: "100%" }}>

                <Stack direction={"row"} spacing={2}>
                <Box>
                    <StyledBadge overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">

                    <Avatar alt={faker.name.fullName()} 
                    src={faker.image.avatar()} />

                    </StyledBadge>
                </Box>
                <Stack spacing={0.2}>
                    <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                   <Typography variant={"caption"}>Online</Typography>
                </Stack>
            </Stack>
        </Stack>
        </Box>
            <Box sx={{ flexGrow: 1, width: "100%" }}>

            </Box>
            <Box sx={{
                height: 100, width: "100%", backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0,0,0, 0.25",
            }}>

            </Box>
        </Stack>
    );
}

export default Conversation;