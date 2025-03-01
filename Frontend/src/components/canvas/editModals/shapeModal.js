import { IconButton, MenuItem, Stack, TextField } from "@mui/material"
import { MuiColorInput } from "mui-color-input"
import { useEffect, useState } from "react"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTheme } from "@emotion/react";





export default function ShapeModal({focusedObject ,canvas}){
    const theme = useTheme() 
    const [color, setColor] = useState('')
    const [shapeColorType, setShapeColorType] = useState('Background color')
    const [hideShapeColorTypeLabel,setshapeColorTypeLabel] = useState(false)
    const [hideBorderWidthLabel,setHideTextfieldLabel] = useState(false)
    
        useEffect(()=>{
            setColor(focusedObject.fill)
        },[focusedObject])
       
        const handleBackgroundColorChange = (newValue) => {
            focusedObject.set({fill: newValue})
            setColor(newValue)
            canvas.renderAll()
        }
        const handleBorderColorChange = (newValue) => {
            focusedObject.set({stroke: newValue})
            setColor(newValue)
            canvas.renderAll()
        }
        const handleShapeColorType = (event) =>{
            const shapeColorType = event.target.value
            setShapeColorType(shapeColorType)
            setshapeColorTypeLabel(true)
            shapeColorType === 'Border color'?setColor(focusedObject.stroke):setColor(focusedObject.fill)
        }
        const handleBorderSizeChange = (event)=>{
            const size = event.target.value
            focusedObject.set({strokeWidth:size})
            setHideTextfieldLabel(true)
            canvas.renderAll()
        }
        const handleShapeDelete = ()=>{
            canvas.remove(focusedObject)
        }
    return (
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
                    width:'90%',
                    height:'auto',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <Stack direction='row' sx={{p:0,alignItems:'center',justifyContent:'space-around',width:'50%',height:'34px',border:'1px solid grey',borderRadius:2,}}>
                <TextField
                    variant="standard"
                    size="small"
                    sx={{mb:1,width:'80%',"& .MuiInputBase-input": { fontSize: 15},borderColor:'transparent'}}
                    select
                    InputLabelProps={{shrink: false}}
                    label={hideShapeColorTypeLabel?'':shapeColorType}
                    onChange={handleShapeColorType}
                >
                    <MenuItem value='Background color'>Background color</MenuItem>
                    <MenuItem value='Border color'>Border color</MenuItem>
                </TextField>
                <MuiColorInput  sx={{width:'24px'}} variant="standard" size="small" format="rgb" value={color} onChange={shapeColorType==='Background color'?handleBackgroundColorChange:handleBorderColorChange} />
            </Stack>
            
            <TextField
                size="small"
                sx={{width:'30%',"& .MuiInputBase-input": { fontSize: 15, top:0},}}
                select
                label={hideBorderWidthLabel?'':'Border size'}
                InputLabelProps={{shrink: false}}
                onChange={handleBorderSizeChange}
            >
                {[...Array(11).keys()].map((i)=>{
                    return(<MenuItem value={i}>{i}</MenuItem>)
                })}
            </TextField>
            <IconButton onClick={handleShapeDelete}>
                <DeleteOutlineIcon size='large' sx={{color:theme.palette.primary.main,}}/>
            </IconButton>
        </Stack>
    )
}