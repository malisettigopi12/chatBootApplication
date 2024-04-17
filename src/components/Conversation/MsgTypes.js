
import { Divider, Stack, Typography, useTheme, Box, Link, IconButton } from "@mui/material"
import { DownloadSimple, Image } from "phosphor-react";

import React from "react"

const DocMsg = ({ ele }) => {
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

        </Stack>
    )
}
const LinkMsg = ({ ele }) => {
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
        </Stack>
    )
}
const ReplyMsg = ({ ele }) => {
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
        </Stack>
    )
}
const MediaMsg = ({ ele }) => {
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
        </Stack>
    )
}
const TextMsg = ({ ele }) => {
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

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg }; 