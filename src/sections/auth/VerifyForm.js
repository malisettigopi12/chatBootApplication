

import React, { useState } from "react";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, verifyEmail } from "../../Redux/slices/auth";
import RHFCodes from "../../components/hook-form/RHFCodes";

const VerifyForm = () => {

    const {email} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const VerifyCodeSchema = Yup.object().shape({
        code1: Yup.string().required("code is required"),
        code2: Yup.string().required("code is required"),
        code3: Yup.string().required("code is required"),
        code4: Yup.string().required("code is required"),
        code5: Yup.string().required("code is required"),
        code6: Yup.string().required("code is required"),
    })

    const defaultValues = {
        code1 : "",
        code2 : "",
        code3 : "",
        code4 : "",
        code5 : "",
        code6 : "",
    }

    const methods = useForm({
        mode: "onChange",
        resolver: yupResolver(VerifyCodeSchema),
        defaultValues,
    })

    const { handleSubmit, formState } = methods;

    const onSubmit = async (data) => {
        try {
            //backend
            dispatch(verifyEmail({
                email: email,
                otp: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`
            }));
        } catch (err) {
            console.lof(err);
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

            <Stack spacing={2.5}>
                
            <RHFCodes keyName="code" inputs={["code1","code2","code3","code4","code5","code6"]}/>

                <Button fullWidth color="inherit" size="large" type="submit"
                    variant="contained"
                    sx={{
                        bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ?
                            "common.white" : "grey.800",
                        '&hover': {
                            bgcolor: "GrayText.primary",
                            color: (theme) => theme.palette.mode === "light" ?
                                "common.white" : "grey.800"
                        }
                    }}
                >
                    verify
                </Button>
            </Stack>
        </FormProvider>
    )
}

export default VerifyForm;