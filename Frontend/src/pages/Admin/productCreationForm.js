import axios from "axios";
import { TextField, Button, Modal, Backdrop, Typography,Select, MenuItem, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Playground from "../../Playground/playground";
import { handleFormDataEntry,handleSubmit } from "./admin";
import { getShit } from "./admin";

const inputStyle = {
    marginBottom:'16px'
}

export default function ProductCreationForm(){
    const [openDesignModal, setOpenDesignModal] = useState(false);
    const handleOpen = () => setOpenDesignModal(true);
    const handleClose = () => setOpenDesignModal(false);
    const [formData,setFormData] = useState({})
    
    const [themes,setthemes] = useState([])
    const [selectedTheme,setSelectedTheme] = useState('')

    useEffect(()=>{
        async function fetchThemes(){
            const themes = await getShit('theme')
            setthemes(themes)
            console.log(themes)
            setSelectedTheme(themes[0].name)
        }
        fetchThemes()
        
    },[])
    
    
    return (
        <form className="adminForms" onSubmit={(e)=>handleSubmit(e,'products',formData)}>
            <Typography variant="h4">Product Creation</Typography>
            <TextField fullWidth onChange={(e)=>handleFormDataEntry('name',setFormData,e.target.value)} style={inputStyle}
                label='Name'
            />
            <TextField fullWidth onChange={(e)=>handleFormDataEntry('price',setFormData,e.target.value)} style={inputStyle}
                label='Price'
            />
            <TextField fullWidth onChange={(e)=>handleFormDataEntry('description',setFormData,e.target.value)} style={inputStyle}
                label='Description'
            />
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
                    <MenuItem value={theme.url} >{theme.name}</MenuItem>
                ))}
            </Select>
            <Button fullWidth variant = 'outlined' onClick={handleOpen} sx={{borderRadius:4,backgroundColor:'#e45a00',color:'white', width:'30vw',my:1}}  >Design</Button>
            <Modal
                open={openDesignModal}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}>
                    <Playground isAdmin = {true} formStateHandler={setFormData} handleFormDataEntry={handleFormDataEntry}/>
            </Modal>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
        </form>
       
        
    )
}