import { TextField, Button, Modal, Backdrop, Typography,Select, MenuItem, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Playground from "../../components/canvas/playground";
import { handleFormDataEntry,handleFormSubmit,getShit } from "../../utils";

const inputStyle = {
    marginBottom:'16px'
}

export default function ProductCreationForm(){
    const [openDesignModal, setOpenDesignModal] = useState(false);
    const handleOpen = () => setOpenDesignModal(true);
    const handleClose = () => setOpenDesignModal(false);
    const [formData,setFormData] = useState({})
    
    const [themes,setthemes] = useState([])
    const [availableProducts,setAvailableProducts] = useState([])
    const [selectedAvailableProduct,setSelectedAvailableProduct] = useState([])
    const [selectedTheme,setSelectedTheme] = useState('')

    useEffect(()=>{
        async function fetchThemes(){
            const themes = await getShit('theme')
            setthemes(themes)
            setSelectedTheme(themes[0].name)

            const availableproducts = await getShit('availableItem')
            setAvailableProducts(availableproducts)
        }
        fetchThemes()
    },[])
    
    
    return (
        <form className="adminForms" onSubmit={(e)=>handleFormSubmit(e,'products',formData,false)}>
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
                    <MenuItem value={theme.id} >{theme.name}</MenuItem>
                ))}
            </Select>
            <InputLabel>Select Item to Customize</InputLabel>
            <Select
                sx={{my:1}}
                fullWidth
                labelId="demo-simple-select-label"
                id="theme-select"
                value={selectedTheme}
                label='Item select'
                onChange={(e)=>{
                    const selectedAvailable = e.target.value
                    setSelectedAvailableProduct(selectedAvailable)
                }}
            >
                {availableProducts.map((product)=>(
                    <MenuItem value={product} >{product.name}</MenuItem>
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
                    <Playground isAdmin = {true} productDetail={selectedAvailableProduct} formStateHandler={setFormData} handleFormDataEntry={handleFormDataEntry}/>
            </Modal>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
        </form>
       
        
    )
}