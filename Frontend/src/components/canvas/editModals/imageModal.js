import { Button, IconButton, Stack } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTheme } from "@emotion/react";

export default function ImageModal({canvas,focusedObject,handleAddImage}){
    const theme = useTheme() 
    const handleDelete = ()=>{
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
                    width:'auto',
                    height:'auto',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
            <Button onClick={handleAddImage} disableElevation variant='outlined' sx={{fontFamily:'poppins'}}>change</Button>

            <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon size='large' sx={{color:theme.palette.primary.main}}/>
            </IconButton>
        </Stack>
    )
}