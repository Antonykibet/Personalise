import { Box, Button, Stack, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import { getShit } from "../../utils";
import ThemeSelector from "../themeSelector";


export default function ImageBox(){
    const [stockImages,setStockImages] = useState([])
    useEffect(()=>{
        getShit('stockImage')
        .then(data=>{
            setStockImages(data)
        })
        .catch(err=>{
            console.log(`Error getting stockImages:${err}`)
        })
    },[])
    return(
        <Box  sx={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            <Stack sx={{justifyContent:'center',alignItems:'center',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',width:'100%',mb:2,pb:1}}>
                <Button
                    sx={{mb:4,mt:2 }}
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    >
                    Upload Image
                </Button>
                <ThemeSelector setResults={setStockImages} results={stockImages} isGiftSection={false}/>
            </Stack>
            
            {/*Ive set a padding bottom  to take care of the images being hidden by the canvas btns */}
            <Box sx={{height:'auto',width:'100%',overflowY:'scroll',display:'flex',justifyContent:'space-around',paddingBottom:'200px',flexWrap:'wrap'}}>
                {stockImages.map(img=>{
                    return (
                        <Stack sx={{alignItems:'center'}}>
                            <img style={{backgroundColor:'white',borderRadius:'8px',height:'20vh',width:'20vh',objectFit:'contain'}} src={img.stock_image} alt={img.name}/>
                            <Typography variant="body1" color="initial">{img.name}</Typography>
                        </Stack>
                    ) 
                })}
                {stockImages.map(img=>{
                    return <img style={{borderRadius:'8px',height:'20vh',width:'20vh',objectFit:'contain'}} src={img.stock_image} alt={img.name}/>
                })}
                {stockImages.map(img=>{
                    return <img style={{borderRadius:'8px',height:'20vh',width:'20vh',objectFit:'contain'}} src={img.stock_image} alt={img.name}/>
                })}
            </Box>
        </Box>
    )
}