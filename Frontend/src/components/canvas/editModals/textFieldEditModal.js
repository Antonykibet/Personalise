import { IconButton, MenuItem, Stack, TextField, useTheme } from "@mui/material";
import { MuiColorInput } from 'mui-color-input'
import { useEffect, useState } from "react";

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const modalStyle={
    position:'absolute',
    top:'10%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    border:'1px solid grey',
    borderSize:1,
    borderRadius:2,
    backgroundColor:'white',
    p:0.5,
    width:'90%',
    height:'24px',
    justifyContent:'center',
    alignItems:'center'
}

export default function TextFieldEditModal({focusedObject ,canvas}){
    const theme = useTheme()
    const primaryColor = theme.palette.primary.main
    const [color, setColor] = useState(focusedObject.fill)
    const [fontSize,setFontSize] = useState(focusedObject.fontSize)
    const [fontFamily,setFontFamily] = useState(focusedObject.fontFamily)
    const [fontWeight, setFontweight] = useState(focusedObject.fontWeight)
    const [fontStyle, setFontStyle] = useState(focusedObject.fontStyle)
    const [underline, setunderline] = useState(focusedObject.underline)

    const handleDelete = ()=>{
        canvas.remove(focusedObject)
    }
    const handleFamilyChange = (e)=>{
        const typography = e.target.value
        focusedObject.set({fontFamily:typography})
        setFontFamily(typography)
        canvas.renderAll()
    }
    const handleFontSizeChange = (e)=>{
        const size = e.target.value
        focusedObject.set({fontSize:size})
        setFontSize(size)
        canvas.renderAll()
    }
    const handleFontWeightChange = ()=>{
        if (fontWeight==='bold'){
            setFontweight('normal')
            focusedObject.set({fontWeight:'normal'})
        }else{
            setFontweight('bold')
            focusedObject.set({fontWeight:'bold'})
        }
        canvas.renderAll()
    }
    const handleFontStyleChange = ()=>{
        if (fontStyle==='italic'){
            setFontStyle('normal')
            focusedObject.set({fontStyle:'normal'})
        }else{
            setFontStyle('italic')
            focusedObject.set({fontStyle:'italic'})
        }
        canvas.renderAll()
    }
    const handleUnderlineToggle=()=>{
        if (underline){
            setunderline(false)
            focusedObject.set({underline:false})
        }else{
            setunderline(true)
            focusedObject.set({underline:true})
        }
        canvas.renderAll()
    }
    const handleColorChange = (newValue) => {
        focusedObject.set({fill: newValue})
        setColor(newValue)
        canvas.renderAll()
      }

    return(
        <Stack 
            direction='row'
            spacing={1}
            sx={modalStyle}>
            <TextField
                size="small"
                sx={{mb:2,width:'40%',"& .MuiInputBase-input": { fontSize: 15,  padding: 0.2, top:0},}}
                select
                onChange={handleFamilyChange}
                value={fontFamily}
            >
                <MenuItem value='Poppins'>Poppins</MenuItem>
                <MenuItem value='Inter'>Inter</MenuItem>
                <MenuItem value='Robotto'>Robotto</MenuItem>
            </TextField>

            <TextField
                size="small"
                sx={{width:'20%',"& .MuiInputBase-input": { fontSize: 15,  padding: 0.2, top:0 }}}
                select
                value={fontSize}
                onChange={handleFontSizeChange}
            >
                {[...Array(71)].map((number,index)=>{
                    return <MenuItem value={index}>{index}</MenuItem>
                })}
            </TextField>

            <MuiColorInput  sx={{width:'24px'}} variant="standard" size="small" format="rgb" value={color} onChange={handleColorChange} />
            
            <Stack spacing={0.5} direction='row'>
                <IconButton onClick={handleFontWeightChange}>
                    <FormatBoldIcon onClick={handleFontWeightChange} size='small' sx={{color:fontWeight==='bold'?primaryColor:'rgba(0, 0, 0, 0.54)'}}  />
                </IconButton>
                <IconButton onClick={handleFontStyleChange}>
                    <FormatItalicIcon sx={{color:fontStyle==='italic'?primaryColor:'rgba(0, 0, 0, 0.54)'}} />
                </IconButton>
                <IconButton onClick={handleUnderlineToggle}>
                    <FormatUnderlinedIcon sx={{color:underline?primaryColor:'rgba(0, 0, 0, 0.54)'}} />
                </IconButton>
            </Stack>

            <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon size='small' sx={{color:primaryColor}}/>
            </IconButton>
            
        </Stack>
    )
}