import { useRef,useEffect, useState, } from 'react';
import { Canvas, FabricImage } from 'fabric';
import { Button, Stack, Typography, useMediaQuery, Box, IconButton } from "@mui/material";
import ImageBox from './imageBox';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import TextFieldEditModal from './editModals/textFieldEditModal';
import ShapeModal from './editModals/shapeModal.js';

import TemplateBox from './templateBox';
import TextConfigBox from './textBox.js';
import CanvasEditingBtns from './canvasBtns';
import ShapeBox from './shapeBox.js';

let ModalStyle = {
    position:'absolute',
    left: {xs:'',md:'50%'}, 
    top: {xs:'30px',md:'50%'},
    transform: {xs:'',md:'translate(-50%, -50%)'},
    margin:'auto',
    width: {xs:'100dvw',md:'90dvw'},
    height: {xs:'65dvh',md:'90dvh'},
    bgcolor: 'background.paper',
    boxShadow: 24,
    display:'flex',
    flexDirection:{sm:'column-reverse',md:'row'},
    borderRadius:'16px',
    overflow:'hidden',
    justifyContent:'space-between',
  };


export default function Playground({isAdmin, handleFormDataEntry,formStateHandler,productDetail}){
    const isPhone = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    const [canvas, setCanvas] = useState('');
    const canvasWrapper = useRef(null)
    const [selectedButton, setSelectedButton] = useState('Template');
    const [isboxExpanded,setIsboxExpanded] = useState(false)
    const [focusedObject, setfocusedObject] = useState({type:'',object:''})
    const [textFields, setTextFields] = useState([])
    
    const otherStateRef = useRef(textFields)
    const handleBoxExpand = ()=>{
        if (!isboxExpanded){
           setIsboxExpanded(true)
        }else{
            setIsboxExpanded(false)
        }
    }

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };
    
    //proceed button
    const handleAdminDesign = ()=>{
        let canvasJSON = JSON.stringify(canvas)
        let canvasSVG = canvas.toSVG()
        let canvasPNG = canvas.toDataURL('image/png');
        handleFormDataEntry('canvasJSON',formStateHandler,canvasJSON)
        handleFormDataEntry('canvasSVG',formStateHandler,canvasSVG)
        handleFormDataEntry('canvasPNG',formStateHandler,canvasPNG)
    }
    const handleUserDesign = ()=>{
        alert('Sawa chill!!')
    }

    

    useEffect(() => {
        const containerWidth = canvasWrapper.current.offsetWidth
        const containerHeight = canvasWrapper.current.offsetHeight
        const newCanvas = new Canvas('canvas',{width:containerWidth, height: containerHeight});
        otherStateRef.current = textFields

        //handle base image, an image that has not been designed before.
        if (!productDetail.themed){
            const img = new Image()
            img.src = productDetail.base_image
            img.crossOrigin = "anonymous";  // This enables CORS
            img.onload = function () {
                const productImg = new FabricImage(img,{})
                productImg.selectable = false; // make it unselectable
                productImg.evented = false;
                const scaleFactor = Math.min(containerWidth / img.width, containerHeight / img.height);
                productImg.scale(scaleFactor);
                newCanvas.set('backgroundImage',productImg)
                setCanvas(newCanvas)
                newCanvas.renderAll()
              }
            
            
        }else{
            newCanvas.loadFromJSON(productDetail.canvasJSON)
            .then( r => {
                // Get the current canvas dimensions
                const canvasWidth = 800
                const canvasHeight = 800
               
                const scaleRatio = 0.55
                newCanvas.setDimensions({ width: canvasWidth * scaleRatio, height: canvasHeight * scaleRatio });
                newCanvas.setZoom(scaleRatio)

                
                newCanvas.renderAll()
                setCanvas(newCanvas)
                })
            
        }
        
        // Cleanup function
        return () => {
            newCanvas.dispose();
            };

        },[productDetail]);
      
      
   
    return(
        <>
            <Stack  sx={ModalStyle} direction={isPhone||isTablet ? 'column':'row'}   > 
                <Stack 
                    onTouchStart={()=>setIsboxExpanded(true)}
                    direction={{md:'row',xs:'column'}}
                    sx={{
                        position:{xs:'fixed',md:'static'},
                        bottom:'0',
                        zIndex:'1000',
                        justifyContent:'space-between',
                        width:{md:'30%',xs:'100vw'},
                        height:{xs:isboxExpanded?'65dvh':'35dvh', md:'100%'},
                        backgroundColor:'#E9E9E9',
                        borderTopRightRadius:{xs:'8px',md:'0px'},
                        borderTopLeftRadius:{xs:'8px',md:'0px'},
                        }}
                    >
                    <Box sx={{height:{xs:'100%', md:'100%'}}}>
                        <Stack direction='row' sx={{px:1,justifyContent:'space-between',alignItems:'center'}}>
                            <Typography m={1} variant='h6' sx={{fontFamily:'Montserrat', color:'rgb(46, 46, 46)', fontWeight:700}}>{selectedButton}</Typography>
                            <IconButton onClick={handleBoxExpand}  aria-label="expand/minimize">
                                {isboxExpanded?<ExpandMoreIcon fontSize='large'/>:<ExpandLessIcon fontSize='large' />}
                            </IconButton>
                        </Stack>
                        
                            {
                            selectedButton === 'Template'?<TemplateBox/>:
                            selectedButton === 'Text'?<TextConfigBox canvas={canvas} setfocusedObject={setfocusedObject}/>:
                            selectedButton === 'Image'?<ImageBox/>:
                            selectedButton === 'Shapes'?<ShapeBox canvas={canvas} setfocusedObject={setfocusedObject}/>:
                            selectedButton === 'Draw'?<TextConfigBox/>:''
                            }
                        <Stack sx={{width:'100%',
                            backgroundColor:'white',
                            position:'absolute',
                                    bottom:'0px',}}>
                            <CanvasEditingBtns handleButtonClick={handleButtonClick} selectedButton={selectedButton}/>
                            <Button  
                                sx={{
                                    m:1,
                                    mx:2,
                                    borderRadius:4,
                                    backgroundColor:'#e45a00',
                                    color:'white'}}
                                    variant='solid'
                                    onClick={isAdmin?()=>handleAdminDesign():()=>handleUserDesign()}
                                >
                                        {isAdmin?'SUBMIT DESIGN':'PROCEED TO ADD TO CART'}
                            </Button>
                        </Stack>
                    </Box>
                    {isPhone||isTablet ? '':<CanvasEditingBtns/>}
                </Stack>
                
                <Stack onTouchStart={()=>setIsboxExpanded(false)} sx={{position:'relative', width:{md:'60vw',xs:'100%'}, height:'100%',display:'flex',justifyContent:'center'}} ref={canvasWrapper}  id='canvasWrapper'>
                    <canvas  id="canvas" />
                    {focusedObject.type==='Text'?<TextFieldEditModal focusedText = {focusedObject.object} canvas={canvas}/>:
                    focusedObject.type==='Shape'?<ShapeModal focusedText = {focusedObject.object} canvas={canvas}/>:''}
                </Stack>

            </Stack>
        </>
    )
}