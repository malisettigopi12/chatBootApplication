import React from "react";
import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/search";
import { MagnifyingGlass } from "phosphor-react";
import { Stack } from "@mui/system";
import { CallElement } from "../../components/CallElement";
import { Members_list } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({open, handleClose})=>{
    return (
        <>
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition}
                keepMounted onClose={handleClose}
                aria-describedby="alert-dialog-slide-description" sx={{ p: 4 }}
            >
                {/* title */}
                <DialogTitle sx={{mb : 1}}>strat a Call</DialogTitle>
                {/* content */}
                <DialogContent sx={{mt: 2}}>
                     {/* search */}
                <Stack sx={{width: "100%"}}>
                    <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="search..." />
                    </Search>
                </Stack>

                {/* call list */}
                    {Members_list.map((ele) => <CallElement {...ele}/>)}
                </DialogContent>
            </Dialog>
        </>
    )
};

export default StartCall;