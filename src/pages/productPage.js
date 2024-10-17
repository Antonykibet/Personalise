import { useRef,useEffect, useState } from 'react';
import { Stage, Layer, Text, Image, Label} from 'react-konva';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import truckHat from '../truckhat.png'

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
            <Stack direction='row' spacing={2} my={8} mx={8}>
                <Box ref={stageWrapperRef} border='solid' width='60vw' height='70vh'>
                    <Stage width={stageDimension.width} height={stageDimension.height}>
                    <Layer>
                        <Image onClick={()=>alert('Woyoo                       ')} image={img} />
                        <Text text={text} fontSize={fontSize} fontFamily='sans-serif' draggable />
                        <Label la />
                    </Layer>
                    </Stage>
                </Box>
                <Stack width='40vw'>
                    <Typography variant='h2'>Product</Typography>
                    <Typography variant='h3'>200/=</Typography>
                    <Typography variant='p'>THis product is fine fine finefine fine fine fine fine fine
                    product is fine fine finefine fine fine fine fine fine
                    product is fine fine finefine fine fine fine fine fine
                    product is fine fine finefine fine fine fine fine fine
                    product is fine fine finefine fine fine fine fine fine
                    </Typography>
                    <TextField onChange={handleAddText} sx={{my:2}} label="Add Text" variant="outlined" />
                    <TextField onChange={handleChangeFontSize}  label='Text size' type='number' value={fontSize} />
                    <Button variant='outlined'>Add to Cart</Button>
                </Stack>
            </Stack>
        </>
    )
}