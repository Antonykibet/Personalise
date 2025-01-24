import { IconButton, Stack, Typography } from "@mui/material"

import ViewStreamIcon from '@mui/icons-material/ViewStream';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InterestsIcon from '@mui/icons-material/Interests';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ModeIcon from '@mui/icons-material/Mode';

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
        type:'Image',
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
export default function CanvasEditingBtns({handleButtonClick,selectedButton}){
    return(
        <>
            <Stack sx={{pl:{xs:0,md:2},backgroundColor:'white',justifyContent:'center'}} >
                <Stack 
                    sx={{
                        justifyContent:'space-around',
                        height:{md:'80%',xs:'auto'},
                        backgroundColor: {md:'#E9E9E9',xs:'white'},
                        borderRadius:2
                    }}
                    direction={{md:'column',xs:'row'} }
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
        </>
    )
}