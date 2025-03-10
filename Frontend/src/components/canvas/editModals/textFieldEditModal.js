import { IconButton, MenuItem, Stack, TextField, useTheme } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'
import { useEffect, useRef, useState } from "react";

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const formatIcons = [
    {format:'bold', cssProperty:'fontWeight',defaultOption:'normal', secondOption:'bold', isSelected:false, icon:<FormatBoldIcon/>},
    {format:'italic', cssProperty:'fontStyle', defaultOption:'normal', secondOption:'italic', isSelected:false, icon:<FormatItalicIcon/>},
    {format:'underline',cssProperty:'underline',defaultOption:'false', secondOption:'true',  isSelected:false, icon:<FormatUnderlinedIcon/>},
    {format:'strikethrough',cssProperty:'linethrough', defaultOption:'false', secondOption:'true',  isSelected:false, icon:<StrikethroughSIcon/>}
]

export default function TextFieldEditModal({focusedObject ,canvas}){
    const theme = useTheme()
    const [color, setColor] = useState('')

    const handleDelete = ()=>{
        canvas.remove(focusedObject)
    }

    useEffect(()=>{
        setColor(focusedObject.fill)
    },[focusedObject])
   
    const handleColorChange = (newValue) => {
        focusedObject.set({fill: newValue})
        setColor(newValue)
        canvas.renderAll()
      }

    return(
        <Stack 
            direction='row'
            spacing={1}
            sx={{
                    position:'absolute',
                    top:'10%',
                    left:'50%',
                    transform: 'translate(-50%,-50%)',
                    border:'1px solid grey',
                    borderSize:1,
                    borderRadius:2,
                    backgroundColor:'white',
                    p:0.5,
                    width:'60%',
                    height:'24px',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <TextField
                size="small"
                sx={{mb:2,width:'40%',"& .MuiInputBase-input": { fontSize: 15,  padding: 0.2, top:0},}}
                select
                defaultValue={''}
            >
                <MenuItem value='Poppins'>Poppins</MenuItem>
                <MenuItem value='Inter'>Inter</MenuItem>
                <MenuItem value='Robotto'>Robotto</MenuItem>
            </TextField>

            <TextField
                size="small"
                sx={{width:'20%',"& .MuiInputBase-input": { fontSize: 15,  padding: 0.2, top:0 }}}
                select
                defaultValue='20'
            >
                <MenuItem value='1' >1</MenuItem>
                
            </TextField>

            <MuiColorInput  sx={{width:'24px'}} variant="standard" size="small" format="rgb" value={color} onChange={handleColorChange} />
            
            {formatIcons.map((icon)=>{
                return(
                    <IconButton
                        onClick={()=>{
                            const newFormatIcons = formatIcons.map((formatIcon)=>{
                                if (formatIcon.format === icon.format){
                                    const cssProperty = icon.cssProperty
                                    // handleTextConfig(focusedObject.id,{cssProperty:formatIcon.isSelected === true? formatIcon.secondOption:formatIcon.defaultOption})
                                    return {...formatIcon,...{isSelected:!formatIcon.isSelected}}
                                    
                                }
                                return formatIcon
                            })
                            
                        }}
                        disableFocusRipple
                        disableRipple
                        sx={{borderRadius:2,color:icon.isSelected === true ? 'red':'blue'}} 
                        aria-label={icon.format} 
                        size="small">
                            {icon.icon}
                    </IconButton>
                )
                
            })}
            <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon size='large' sx={{color:theme.palette.primary.main}}/>
            </IconButton>
            
        </Stack>
    )
}