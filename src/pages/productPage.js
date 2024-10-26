import { useRef,useEffect, useState } from 'react';
import { Stage, Layer, Text, Image, Label} from 'react-konva';
import { Box, Button, Stack, TextField, Typography, Select, MenuItem, InputLabel} from "@mui/material";
import truckHat from '../truckhat.png'
import TopCategory from '../components/topCategory';

export default function ProductPage(){
    const img = document.createElement('img')
    img.src = truckHat
    const stageWrapperRef = useRef(null);
    const [stageDimension,setStageDimension] = useState({width:0,height:0})
    const [text,setText] = useState('Add Text')
    const [fontSize,setFontSize] = useState(46)
    useEffect(() => {
        if (stageWrapperRef.current) {
          const { width, height } = stageWrapperRef.current.getBoundingClientRect();
          setStageDimension({width,height})
        }
      }, [stageWrapperRef]);

    const handleAddText = (e)=>{
        setText(e.target.value)
    }
    const handleChangeFontSize = (e)=>{
        setFontSize(e.target.value)
    }
    return (
        <>
        <Stack px={4} my={8}>
            <Stack direction='row' spacing={2} mb={6}  >
                <Box sx={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',borderRadius:'4px'}}   ref={stageWrapperRef} width='60vw' height='70vh'>
                    <Stage width={stageDimension.width} height={stageDimension.height}>
                    <Layer>
                        <Image image={img} />
                        <Text text={text} fontSize={fontSize} fontFamily='sans-serif' draggable />
                        <Label />
                    </Layer>
                    </Stage>
                </Box>
                <Stack  width='40vw'>
                    <Typography variant="h4" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>Product</Typography>
                    <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>200/=</Typography>
                    <Typography variant='body2' sx={{fontWeight:300,fontFamily:'Inter'}}>This product is fine fine finefine fine fine fine fine fine
                        product is fine fine finefine fine fine fine fine fine
                        product is fine fine finefine fine fine fine fine fine
                        product is fine fine finefine fine fine fine fine fine
                        product is fine fine finefine fine fine fine fine fine
                    </Typography>
                    <TextField sx={{my:1}} onChange={handleAddText} label="Add Text" variant="outlined" />
                    <TextField sx={{my:1}} onChange={handleChangeFontSize}  label='Text size' type='number' value={fontSize} />
                    <TextField sx={{my:1}} label='Font style' select>
                        <MenuItem>Woo</MenuItem>
                        <MenuItem>Woo</MenuItem>
                    </TextField>
                    <Button sx={{my:2,borderRadius:4,backgroundColor:'#e45a00',color:'white'}}  variant='solid'>Add to Cart</Button>
                </Stack>
            </Stack>
            <Typography variant="h5" sx={{fontFamily:'Montserrat',fontWeight:700,color:'rgb(34, 34, 34)'}}>Others also bought</Typography>
            <TopCategory/>
        </Stack>
            
        </>
    )
}