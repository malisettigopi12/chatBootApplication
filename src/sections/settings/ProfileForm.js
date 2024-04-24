import React, { useCallback } from "react";
import * as Yup from 'yup'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";


const ProfileForm = ()=>{

    const ProfileSchema = Yup.object().shape({
        name : Yup.string().required("name is required"),
        about : Yup.string().required("description is required"),
        avatarURL: Yup.string().required("avatar is required").nullable(true),
    });

    const defaultValues = {
        name: "default",
        about: "I am using chatBoot",
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {reset, watch, control, setValue,setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful},
} = methods;
  
const values = watch();
const handleDrop = useCallback((acceptedFiles) => {
    
    const file = acceptedFiles[0];

    const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
    })

    if(file){
        setValue("avatarUrl", newFile, {shouldValidate: true})
    }
},[setValue])
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

           <RHFTextField name={"name"} label={"user name"} helperText={"This name is visible to your contacts"}/>
           
           <RHFTextField multiline rows={3} maxRows = {5} name={"about"} label={"description"} />
           </Stack>
           <Stack alignItems={"flex-end"} sx={{my: 2}} spacing={0.5}>
             
             <Button color="primary" size="large" type="submit" variant="outlined">
                 save
             </Button>
           </Stack>
        </FormProvider>
    )
}

export default ProfileForm;