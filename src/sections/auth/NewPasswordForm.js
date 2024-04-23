
import React, { useState } from "react";
import * as Yup from 'yup'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import {Link as RouterLink} from "react-router-dom"

const NewPasswordForm = ()=>{

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const NewPasswordSchema = Yup.object().shape({
        newPassword: Yup.string().min(6, 'password must be atleast 6 characters').required("password is required"),
        confirmPassword: Yup.string().required("password is required").oneOf([Yup.ref('newPassword')], 'password must match'),
    });

    const defaultValues = {
        newPassword: "",
        confirmPassword:"",
    }

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema),
        defaultValues,
    });

    const {reset, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful},
} = methods;

  const onSubmit = async (data) => {
      try{
          // backend
      }catch(error){
          console.log(error);
          reset();
          setError("afterSubmit",{
              ...error,
              message: error.message
          })
      }
  }
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
           <Stack spacing={3}>
             {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

           <RHFTextField name={"newPassword"} label={"New Password"} type={showNewPassword ? "text" : "password"} InputProps={{
               endAdornment:(
                   <InputAdornment>
                   <IconButton onClick={()=>{
                       setShowNewPassword(!showNewPassword)
                   }}>
                       {showNewPassword ? <Eye/> : <EyeSlash/>}
                    </IconButton>
                    </InputAdornment>
               )
           }}/>
           <RHFTextField name={"ConfirmPassword"} label={"confirm password"} type={showConfirmPassword ? "text" : "password"} InputProps={{
               endAdornment:(
                   <InputAdornment>
                   <IconButton onClick={()=>{
                       setShowConfirmPassword(!showConfirmPassword)
                   }}>
                       {showConfirmPassword ? <Eye/> : <EyeSlash/>}
                    </IconButton>
                    </InputAdornment>
               )
           }}/>
           </Stack>
           <Stack alignItems={"flex-end"} sx={{my: 2}} spacing={0.5}>
             <Button fullWidth color="inherit" size="large" type="submit"
             variant="contained"
             sx={{bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ? 
                "common.white" : "grey.800",
                '&hover':{
                    bgcolor: "GrayText.primary",
                    color: (theme) => theme.palette.mode === "light" ?
                    "common.white" : "grey.800"
                }
            }}
             >
              submit
             </Button>
           </Stack>
        </FormProvider>
    )
}

export default NewPasswordForm;