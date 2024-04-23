
import React from "react";
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import * as Yup from 'yup'
import { RHFTextField } from "../../components/hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from 'react-hook-form';
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";

const MEMBERS = ["name 1", "name 2", "name 3"]
// TODO create reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({handleClose }) => {

    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "select atleast two members"),
    });

    const defaultValues = {
        title: "",
        members: [],
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues
    });

    const { reset, watch, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
    } = methods;

    const onSubmit = async (data) => {

        try {
            console.log("DATA", data)
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Stack spacing={3} sx={{mb: 2, mt: 2}}>
                <RHFTextField name="title" label="title" />
                <RHFAutocomplete name="members" label="members" multiple freeSolo options={MEMBERS.map((option) => option)} ChipProps={{ size: "medium" }} />
            </Stack>
            <Stack spacing={2} direction={"row"} justifyContent={"end"} alignItems={"center"}>
               <Button onClick={handleClose}>
                   Cancel
               </Button>
               <Button type="submit" variant="contained">
                   Create
               </Button>
            </Stack>
        </FormProvider>
    );
};

const CreateGroup = ({ open, handleClose }) => {

    return (
            <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition}
                keepMounted onClose={handleClose}
                aria-describedby="alert-dialog-slide-description" sx={{ p: 4 }}
            >
                {/* title */}
                <DialogTitle sx={{mb : 1}}>Create New Group</DialogTitle>
                {/* content */}
                <DialogContent sx={{mt: 4}}>
                    {/* from */}
                    <CreateGroupForm handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
    )
}

export default CreateGroup;