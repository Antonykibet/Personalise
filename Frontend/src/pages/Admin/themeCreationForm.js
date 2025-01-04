import { Button, Select, TextField, MenuItem, Typography } from "@mui/material";
import { handleFormDataEntry,handleFormSubmit } from "../../utils";
import { useEffect, useState } from "react";

export default function ThemeCreationForm(){
    const [formData,setFormData] = useState({})
    const [themeType, setThemeType] = useState('Random theme')
    useEffect(()=>{
        handleFormDataEntry('type',setFormData,themeType)
    },[])
    return (
        <>
        <form className="adminForms" onSubmit={(e)=>handleFormSubmit(e,'theme',formData,false)}>
            <Typography variant="h4">Theme Creation</Typography>
            <TextField sx={{my:1}} fullWidth onChange={(e)=>handleFormDataEntry('name',setFormData,e.target.value)} label='name'  />
            <Select
                sx={{my:1}}
                fullWidth
                labelId="demo-simple-select-label"
                id="theme-select"
                value={themeType}
                label="Theme type"
                onChange={(e)=>{
                    const selectedTheme = e.target.value
                    setThemeType(selectedTheme)
                    handleFormDataEntry('type',setFormData,selectedTheme)
                }}
            >
                <MenuItem value={'RANDOM THEME'}>Random theme</MenuItem>
                <MenuItem value={'GIFT THEME'}>Gift theme</MenuItem>
            </Select>
            <Button type='submit' variant='contained'>Create</Button>
        </form>
        </>
    )
}