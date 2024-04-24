import React from "react";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { faker } from "@faker-js/faker";
import { useTheme, } from "@mui/material/styles";
import StyledBadge from "./settings/StyledBadge";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {

    const theme = useTheme();
    return (
        <>
            <Box sx={{
                borderRadius: 1,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            }}
                p={2}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    {online ? <StyledBadge overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    </StyledBadge> :
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    }

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle1">
                            {faker.name.fullName()}
                        </Typography>
                        <Stack direction={"row"} alignItems={"center"} spacing={0.8}>
                            {incoming ? <ArrowDownLeft color={missed ? "red" : "green"} /> : <ArrowUpRight color={missed ? "red" : "green"} />}
                            <Typography variant="caption">{"yesterday 21:24"} </Typography>
                        </Stack>
                    </Stack>
                    <IconButton>
                        <Phone size={"25"} color="green" />
                    </IconButton>
                </Stack>
            </Box>
        </>
    )
}

const CallElement = ({online}) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                borderRadius: 1,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            }}
                p={2}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    {online ? <StyledBadge overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    </StyledBadge> :
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                    }

                    <Stack spacing={0.3}>
                        <Typography variant="subtitle1">
                            {faker.name.fullName()}
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                    <IconButton>
                        <Phone size={"25"} color="green" />
                    </IconButton>
                    <IconButton>
                        <VideoCamera size={"25"} color="green" />
                    </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}


export { CallLogElement, CallElement };