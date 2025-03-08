import { Box, Button, Stack, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import { FabricImage } from 'fabric';
import ThemeSelector from "../themeSelector";


export default function ImageBox({canvas,setfocusedObject,focusedObject,setIsImageUpdateMode,isImageUpdateMode}){
    const [stockImages,setStockImages] = useState([])
    const [searchResult,setSearchResult] = useState([])
    const [renderSearchResults,setRenderSearchResults] = useState(false)

    const handleAddImage = (selectedImg)=>{
        const img = new Image()
        img.src = selectedImg.stock_image_url
        img.crossOrigin = "anonymous";
        img.onload = function(){
            const fabricImg = new FabricImage(this,{
                left: 100,
                top: 100,
                id:'img'
                })
            fabricImg.on('selected',(obj)=>{
                const selectedObj={
                    type:'Image',
                    object:obj.target
                }
                setfocusedObject(selectedObj)
                setIsImageUpdateMode(true)
            })
            if (this.height<1000){
                fabricImg.scale(0.4);
            }else{
                fabricImg.scale(0.1);
            }
                
            canvas.add(fabricImg)
            canvas.renderAll()
        }
    }    
    const handleUpdateImage = (selectedImg)=>{
        const img = new Image()
        img.src = selectedImg.stock_image_url
        img.crossOrigin = "anonymous";
        img.onload = ()=>{
            focusedObject.object.setSrc(img.src)
            canvas.renderAll()
        }
        
    }
    return(
        <Box  sx={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center',overflow:'auto', backgroundColor:'#F6F5F5'}}>
            <Stack sx={{justifyContent:'center',alignItems:'center',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',width:'100%',mb:2,pb:1}}>
                <Button
                    sx={{my:4}}
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    onClick={()=>{
                        alert('Wozaa')
                    }}
                    >
                    Upload Image
                </Button>
                <ThemeSelector setRenderSearchResults={setRenderSearchResults} renderSearchResults={renderSearchResults} searchResult={searchResult} setSearchResult={setSearchResult} setResults={setStockImages} results={stockImages} isGiftSection={false} searchURI={'stockImage?'} />
            </Stack>
            
            {/*Ive set a padding bottom  to take care of the images being hidden by the canvas btns */}
            <Box sx={{height:'auto',width:'100%',overflowY:'scroll',display:'flex',justifyContent:'space-around',paddingBottom:'200px',flexWrap:'wrap'}}>
                {(renderSearchResults?searchResult:stockImages).map(img=>{
                    return (
                        <Stack onClick={isImageUpdateMode?()=>handleUpdateImage(img):()=>handleAddImage(img)} sx={{alignItems:'center'}}>
                            <img style={{backgroundColor:'white',borderRadius:'8px',height:'20vh',width:'20vh',objectFit:'contain'}} src={img.stock_image_url} alt={img.name}/>
                            <Typography variant="body1" color="initial">{img.name}</Typography>
                        </Stack>
                    ) 
                })}
            </Box>
        </Box>
    )
}