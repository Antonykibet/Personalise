import { useEffect, useState } from "react"
import { getShit, handleFormDataEntry, handleFormSubmit } from "../../utils"
import { Button, InputLabel, MenuItem, Select, styled, TextField, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function AddStockImageForm(){
    const [formData,setFormData] = useState({})
    const [themes,setThemes] = useState([])
    const [selectedTheme,setSelectedTheme] = useState('')
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

    useEffect(()=>{
        getShit('theme')
        .then(data=>{
            setThemes(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <>
            <form className="adminForms" onSubmit={(e)=>handleFormSubmit(e,'stockImage',formData,true) } >
            <Typography variant="h4">Add a Stock Image</Typography>
            <TextField 
                sx={{my:1}}
                fullWidth
                onChange={(e)=>{
                    handleFormDataEntry('name',setFormData,e.target.value)}
                }
                label='name'  />
            <InputLabel>Theme</InputLabel>
            <Select
                sx={{my:1}}
                fullWidth
                labelId="demo-simple-select-label"
                id="theme-select"
                value={selectedTheme}
                label='theme'
                onChange={(e)=>{
                    const selectedTheme = e.target.value
                    handleFormDataEntry('theme',setFormData,selectedTheme)
                    setSelectedTheme(selectedTheme)
                }}
                >
                    {themes.map((theme)=>(
                        <MenuItem value={theme.id} >{theme.name}</MenuItem>
                    ))}
            </Select>
            <Button
                sx={{my:1, width:'90%'}}
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload image
                <VisuallyHiddenInput
                    type="file"
                    onChange={(e) =>{
                        handleFormDataEntry('stock_image_url',setFormData,e.target.files[0])
                    }} 
                    single
                />
            </Button>
           
            <Button type='submit' variant='contained'>Add</Button>
        </form>
        </>
    )
}