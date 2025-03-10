import { useRef,useEffect, useState, } from 'react';
import { Canvas, FabricImage, FabricObject } from 'fabric';
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
import ImageModal from './editModals/imageModal.js';

//usiguze hii tafadhali!!
FabricObject.customProperties = ['id'];

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
let initialRenderInfoModal = {
    position:'absolute',
    top:'10%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    border:'1px solid grey',
    borderSize:1,
    borderRadius:2,
    backgroundColor:'white',
    p:0.5,
    width:'auto',
    height:'auto',
    textAlign:'center'
    }

export default function Playground({isAdmin, handleFormDataEntry,formStateHandler,productDetail}){
    const isPhone = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');

    const [canvas, setCanvas] = useState('');
    const canvasWrapper = useRef(null)

    const [selectedEditButton, setSelectedEditButton] = useState('Template');

    const [isboxExpanded,setIsboxExpanded] = useState(false)
    
    const [initialRenderInfo,setInitialRenderInfo] = useState({productType:''})

    const [isImageUpdateMode,setIsImageUpdateMode] = useState(false)
    const [focusedObject, setfocusedObject] = useState({type:'',object:''})

    const handleExpandBox = ()=>{
        if (!isboxExpanded){
           setIsboxExpanded(true)
        }else{
            setIsboxExpanded(false)
        }
    }

    const handleAddImage = ()=>{
        setSelectedEditButton('Image')
        handleExpandBox()
    }

    const handleEditButtonClick = (buttonType) => {
        setSelectedEditButton(buttonType);
    };
    
    //proceed button
    const handleAdminDesign = ()=>{
        let canvasJSON = JSON.stringify(canvas.toJSON(['id','lockMovementX']))
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
        const newCanvas = new Canvas('canvas',{width:containerWidth, height: containerHeight,preserveObjectStacking: true});
        //handle base image, an image that has not been designed before.
        if (!productDetail.themed){
            const img = new Image()
            img.src = productDetail.base_image_url
            img.crossOrigin = "anonymous";  // This enables CORS
            img.onload = function (){
                const productImg = new FabricImage(this,{})
                productImg.selectable = false; // make it unselectable
                productImg.evented = false;
                const scaleFactor = Math.min(containerWidth / this.width);
                productImg.scale(scaleFactor);
                
                newCanvas.set('backgroundImage',productImg)
                setCanvas(newCanvas)
                newCanvas.renderAll()
                newCanvas.backgroundImage.translateToCenterPoint()

                // To Do:
                // https://stackoverflow.com/questions/40508523/fabricjs-setting-background-image-size-and-position
                // var canvasAspect = canvasWidth / canvasHeight;
                // var imgAspect = bgImage.width / bgImage.height;
                // var left, top, scaleFactor;

                // if (canvasAspect >= imgAspect) {
                //     var scaleFactor = canvasWidth / bgImage.width;
                //     left = 0;
                //     top = -((bgImage.height * scaleFactor) - canvasHeight) / 2;
                // } else {
                //     var scaleFactor = canvasHeight / bgImage.height;
                //     top = 0;
                //     left = -((bgImage.width * scaleFactor) - canvasWidth) / 2;

                // }
              }
            setInitialRenderInfo({productType:'originalProduct'})
        }else{
            newCanvas.loadFromJSON(productDetail.canvasJSON)
            .then( r => {
                // Get the current canvas dimensions
                newCanvas.renderAll()
                setCanvas(newCanvas)
                newCanvas.getObjects().forEach(obj=>{
                    if(obj.id==='text'){
                        obj.on('selected',(obj)=>{
                            const selectedObj={
                                type:'Text',
                                object:obj.target
                            }
                            setfocusedObject(selectedObj)
                        })
                        obj.on('deselected',()=>{
                            setfocusedObject({type:null,object:null})
                        })
                    }
                    if(obj.id==='img'){
                        const lockMovement = {
                            lockMovementX: true,
                            lockMovementY: true,
                            lockRotation: true,
                            lockScalingX: true,
                            lockScalingY: true,
                        }
                        obj.set(lockMovement)
                        obj.on('selected',(obj)=>{
                            const selectedObj={
                                type:'Image',
                                object:obj.target
                            }
                            setfocusedObject(selectedObj)
                            setIsImageUpdateMode(true)
                        })
                        obj.on('deselected',()=>{
                            setfocusedObject({type:null,object:null})
                            setIsImageUpdateMode(false)
                        })
                    }
                })
                })
                setInitialRenderInfo({productType:'themedProduct'})
            
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
                    //use onClick instead of onTouchStart becoz of the 
                    //double clicking and unexpected behaviuors
                    //that so uninted image selection in the Image & Template box. 
                    onClick={()=>setIsboxExpanded(true)}
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
                            <Typography m={1} variant='h6' sx={{fontFamily:'Montserrat', color:'rgb(46, 46, 46)', fontWeight:700}}>{selectedEditButton}</Typography>
                            <IconButton onClick={handleExpandBox}  aria-label="expand/minimize">
                                {isboxExpanded?<ExpandMoreIcon fontSize='large'/>:<ExpandLessIcon fontSize='large' />}
                            </IconButton>
                        </Stack>
                        
                            {
                            selectedEditButton === 'Template'?<TemplateBox productDetail={productDetail} canvas={canvas}/>:
                            selectedEditButton === 'Text'?<TextConfigBox canvas={canvas} setfocusedObject={setfocusedObject}/>:
                            selectedEditButton === 'Image'?<ImageBox canvas={canvas} setfocusedObject={setfocusedObject} focusedObject={focusedObject} setIsImageUpdateMode={setIsImageUpdateMode} isImageUpdateMode={isImageUpdateMode}/>:
                            selectedEditButton === 'Shapes'?<ShapeBox canvas={canvas} setfocusedObject={setfocusedObject}/>:
                            selectedEditButton === 'Draw'?<TextConfigBox/>:''
                            }
                        <Stack sx={{width:'100%',
                            backgroundColor:'white',
                            position:'absolute',
                                    bottom:'0px',}}>
                            <CanvasEditingBtns handleButtonClick={handleEditButtonClick} selectedEditButton={selectedEditButton}/>
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
                
                <Stack onTouchStart={()=>setIsboxExpanded(false)} sx={{position:'relative', width:{md:'60vw',xs:'100%'}, height:{md:'40%',xs:'70%'} ,display:'flex',justifyContent:'bottom',alignItems:{xs:'bottom'}}} ref={canvasWrapper}  id='canvasWrapper'>
                    <canvas style={{position:'fixed'}}  id="canvas" />
                    {
                        initialRenderInfo.productType==='originalProduct'&&!isImageUpdateMode?<Button onClick={handleAddImage} sx={initialRenderInfoModal}>Add Image</Button>:
                        initialRenderInfo.productType==='themedProduct'&&!isImageUpdateMode?<Typography sx={initialRenderInfoModal}>Select item to change</Typography>:''
                    }
                    {
                        focusedObject.type === 'Text'?<TextFieldEditModal focusedObject = {focusedObject.object} canvas={canvas}/>:
                        focusedObject.type === 'Shape'?<ShapeModal focusedObject = {focusedObject.object} canvas={canvas}/>:
                        focusedObject.type === 'Image'?<ImageModal focusedObject = {focusedObject.object} canvas={canvas} handleAddImage={handleAddImage}/>:''
                    }
                    
                </Stack>

            </Stack>
        </>
    )
}