import { useState } from "react"
import { handleFormDataEntry,handleFormSubmit } from "../../utils";
import { Typography, TextField, Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function AvailableItemCreation(){
    const [formData,setFormData] = useState({})
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    return (
        <>
        <form className="adminForms" onSubmit={(e)=>handleFormSubmit(e,'availableItem',formData,true) } >
            <Typography variant="h4">Add customizable item</Typography>
            <TextField 
                sx={{my:1}}
                fullWidth
                onChange={(e)=>{
                    handleFormDataEntry('name',setFormData,e.target.value)}
                }
                label='name'  />
            <TextField 
                sx={{my:1}}
                fullWidth
                onChange={(e)=>{
                    handleFormDataEntry('description',setFormData,e.target.value)}
                }
                label='description'  />
            <TextField 
                sx={{my:1}}
                fullWidth
                onChange={(e)=>{
                    handleFormDataEntry('price',setFormData,e.target.value)}
                }
                label='price'/>
            <Button
                sx={{my:1, width:'90%'}}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload Thumbnail(for the catalogue section)
                <VisuallyHiddenInput
                    type="file"
                    onChange={(e) =>{
                        handleFormDataEntry('thumbnail_image_url',setFormData,e.target.files[0])
                    }} 
                    single
                />
            </Button>
            <Button
                sx={{my:1, width:'90%'}}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload Base Image(image to be edited on)
                <VisuallyHiddenInput
                    type="file"
                    onChange={(e) =>{
                        handleFormDataEntry('base_image_url',setFormData,e.target.files[0])
                    }} 
                    single
                />
            </Button>
            <Button type='submit' variant='contained'>Create</Button>
        </form>
        </>
    )
}