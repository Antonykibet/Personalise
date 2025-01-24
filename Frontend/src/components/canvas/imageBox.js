import { Box, Button } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import { getShit } from "../../utils";

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
            <Button
                sx={{my:2, }}
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                >
                Upload Image
            </Button>
            {/*Ive set a padding bottom  to take care of the images being hidden by the canvas btns */}
            <Box sx={{height:'auto',overflowY:'scroll',display:'flex',justifyContent:'top',paddingBottom:'200px'}}>
                {stockImages.map(img=>{
                    return <img style={{borderRadius:'8px',height:'20vh',width:'20vh',objectFit:'contain'}} src={img.stock_image} alt={img.name}/>
                })}
            </Box>
        </Box>
    )
}