import { useRef,useEffect, useState, } from 'react';
import { Canvas, Textbox, FabricImage } from 'fabric';
import { Button, Stack, Typography, IconButton, useMediaQuery, Box } from "@mui/material";
import stanleyCup from '../stanleyCup-removebg-preview.png'

import ViewStreamIcon from '@mui/icons-material/ViewStream';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InterestsIcon from '@mui/icons-material/Interests';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ModeIcon from '@mui/icons-material/Mode';

import TextFieldEditModal from './textFieldModal';
import TemplateBox from './templateBox';
import TextConfigBox from './TextConfigBox';

const img = document.createElement('img')
img.src = stanleyCup

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
const canvasButtons = [
    {
        type:'Template',
        icon:<ViewStreamIcon />
    },
    {
        type:'Text',
        icon:<TextFieldsIcon />
    },
    {
        type:'Photo',
        icon:<AddPhotoAlternateIcon/>
    },
    {
        type:'Shapes',
        icon:<InterestsIcon/>
    },
    {
        type:'Draw',
        icon:<ModeIcon/>
    },
]

export default function Playground({isAdmin, handleFormDataEntry}){
    const isPhone = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 820px)');
    const [canvas, setCanvas] = useState('');
    const canvasWrapper = useRef(null)
    const [selectedButton, setSelectedButton] = useState('Template');
    const [focusedText, setFocusedText] = useState(
        {
            id:0,
            text:'',
            fontWeight:'',
            fontStyle:'',
            fill:'',
            fontSize:0,
            fontFamily:'',
            linethrough: false,
            underline: false
        })
    const [textFields, setTextFields] = useState([])
    
    const otherStateRef = useRef(textFields)
    
    useEffect(() => {
        otherStateRef.current = textFields
      })
      
    const addTextField = ()=>{
        let field = {
            id:textFields.length + 1,
            text:'AddText',
            fontWeight:'normal',
            fontStyle:'normal',
            fill:'red',
            fontSize:24,
            fontFamily:'Poppins',
            linethrough: false,
            underline: false
        }
        const text = new Textbox(field.text,field)
        text.on('selected',()=>{
            setFocusedText(field)
        })
        canvas.add(text)
        setTextFields((previous)=>{
            previous.push(text)
            return previous
        })
    }

    const handleTextConfig = (id,editfield) =>{
        textFields.forEach((field)=>{
            if (field.id === id){
                const key = Object.keys(editfield)[0]
                field.set(key, editfield[key])

                //Once a fabric js object is selected/is on focus,
                //changes made to it will not reflect until you deselect it.
                canvas.discardActiveObject()
                canvas.renderAll()
            }
        })
    }
    
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };
    
    //proceed button
    const handleAdminDesign = ()=>{
        let canvasJSON = JSON.stringify(canvas)
        let canvasSVG = canvas.toSVG()
        handleFormDataEntry('canvasJSON',canvasJSON)
        handleFormDataEntry('canvasSVG',canvasSVG)
    }
    const handleUserDesign = ()=>{
        alert('Sawa chill!!')
    }

    

    useEffect(() => {
        const newCanvas = new Canvas('canvas',{width:canvasWrapper.current.offsetWidth, height: canvasWrapper.current.offsetHeight});
        const img = new Image()
        img.src = stanleyCup
        const productImg = new FabricImage(img,{})
        productImg.selectable = false; // make it unselectable
        productImg.evented = false;
        newCanvas.requestRenderAll();
        newCanvas.add(productImg)
        newCanvas.centerObject(productImg)
        setCanvas(newCanvas)

        // Cleanup function
        return () => {
            newCanvas.dispose();
            };

        },[]);
      
      
   
    return(
        <>
            <Stack  sx={ModalStyle} direction={isPhone||isTablet ? 'column':'row'}   > 
                <Stack 
                    direction={{md:'row',xs:'column'}}
                    sx={{
                        position:{xs:'fixed',md:'static'},
                        bottom:'0',
                        justifyContent:'space-between',
                        width:{md:'30%',xs:'100vw'},
                        height:{xs:'35dvh', md:'100%'},
                        backgroundColor:'#E9E9E9',
                        borderTopRightRadius:{xs:'8px',md:'0px'},
                        borderTopLeftRadius:{xs:'8px',md:'0px'},
                        }}
                >
                    <Box sx={{height:{xs:'65%', md:'100%'}}}>
                        <Typography m={1} variant='h6' sx={{fontFamily:'Montserrat', color:'rgb(46, 46, 46)', fontWeight:700}}>{selectedButton}</Typography>
                            {
                            selectedButton === 'Template'?<TemplateBox/>:
                            selectedButton === 'Text'?<TextConfigBox addTextFunc={addTextField}/>:
                            selectedButton === 'Photo'?<TextConfigBox/>:
                            selectedButton === 'Shapes'?<TextConfigBox/>:
                            selectedButton === 'Draw'?<TextConfigBox/>:''
                            }
                        <Stack>
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

                    <Stack sx={{pl:{xs:0,md:2},backgroundColor:'white',justifyContent:'center'}} >
                        <Stack 
                            sx={{
                                justifyContent:'space-around',
                                height:{md:'80%',xs:'auto'},
                                backgroundColor: {md:'#E9E9E9',xs:'white'},
                                borderRadius:2
                            }}
                            direction={isPhone||isTablet ? 'row':'column'}
                        >
                            {canvasButtons.map((button)=>{
                                return (
                                    <Stack
                                        sx={{
                                            color: selectedButton === button.type ? '#e45a00' : 'rgba(0, 0, 0, 0.54)',
                                            justifyContent:'center',
                                            alignItems:'center'
                                        }}
                                        direction='column'
                                        onClick={() => handleButtonClick(button.type)}
                                    >
                                        <IconButton
                                            sx={{
                                                color: selectedButton === button.type ? '#e45a00' : 'rgba(0, 0, 0, 0.54)',
                                            }}
                                            disableFocusRipple
                                            disableRipple
                                            aria-label= {button.type}
                                            
                                            >
                                            {button.icon}
                                        </IconButton>
                                        <Typography variant='caption'>{button.type}</Typography>
                                    </Stack>
                                        )
                            })}
                        
                        </Stack>
                    </Stack>
                </Stack>
                
                <Stack sx={{position:'relative', width:{md:'60vw',xs:'100%'}, height:'100%'}} ref={canvasWrapper}  id='canvasWrapper'>
                    <canvas  id="canvas" />
                    <TextFieldEditModal textFields = {textFields}  focusedText = {focusedText} handleTextConfig={handleTextConfig}/>
                </Stack>

            </Stack>
        </>
    )
}