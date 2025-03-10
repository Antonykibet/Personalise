import { Button, IconButton, Stack } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTheme } from "@emotion/react";
import { useState } from "react";

export default function ImageModal({canvas,focusedObject,handleAddImage}){
    const theme = useTheme() 
    const [isLocked,setIsLocked] = useState(focusedObject.lockMovementX)

    const handleDelete = ()=>{
        canvas.remove(focusedObject)
    }
    

    const handleImageLock = ()=>{
        setIsLocked((prevIsLocked) => {
            const newIsLocked = !prevIsLocked;
            const lockState = {
                lockMovementX: newIsLocked,
                lockMovementY: newIsLocked,
                lockRotation: newIsLocked,
                lockScalingX: newIsLocked,
                lockScalingY: newIsLocked,
            };
            focusedObject.set(lockState);
            canvas.renderAll();
            return newIsLocked;
        });
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
                    width:'auto',
                    height:'auto',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <Button onClick={handleAddImage} disableElevation variant='outlined' sx={{fontFamily:'poppins'}}>change</Button>
            <IconButton >
                {isLocked?<LockIcon onClick={()=>handleImageLock()} size='large' sx={{color:theme.palette.primary.main}}/>:<LockOpenIcon onClick={()=>handleImageLock()} size='large'/>}
            </IconButton>

            <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon size='large' sx={{color:theme.palette.primary.main}}/>
            </IconButton>
            
        </Stack>
    )
}