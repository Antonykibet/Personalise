import { Box, Button, IconButton, Stack, Typography, } from "@mui/material"
import 'react-multi-carousel/lib/styles.css';
import { useTheme } from "@emotion/react";
import giftHeroImage from '../../images/giftHeroImage.jpg'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useState } from "react";


export default function Hero(){
  const theme = useTheme()
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(true)
  const primaryColor = theme.palette.primary.main
  const handlePreviewPlayBtnClick = ()=>{
    setIsPreviewPlaying(prev=>!prev)
  }
    return(
      <>
        <Stack sx={{width:'100%',height:'80vh',alignItems:'center'}}>
          <Stack 
            
            sx={{
              my:{md:4,xs:2},
              borderRadius:2,
              width:{xs:'95%',md:'90%',lg:'90%',xl:'90%'},
              height:'100%',
              backgroundImage:`url(${giftHeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}
              >
            <Stack
              direction={{xs:'column',md:'row',xl:'row'}}
              sx={{
                height: '100%',
                background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
                borderRadius: 2,
                py:2,
                px:2,
                justifyContent:'space-around',
                alignItems:'center',
              }}
            >
              <Stack sx={{alignItems:'start',justifyContent:{md:'space-around'},height:{md:'90%'},width:{md:'45%'}}} mx={3} spacing={1}>
                <Box>
                  <Typography variant="h2" sx={{fontFamily:'poppins',fontWeight:700,color:'white',fontSize:{md:'80px'}}}>Personalise with Ease.</Typography>
                  <Typography variant="p" sx={{fontFamily:'poppins',fontWeight:500,color:'white'}}>Design and get customizable products at your comfort, 
                    no design skills required.</Typography>
                </Box>
                <Button disableElevation variant="contained" sx={{display:{xs:'none',md:'block',xl:'block'},width:'auto',color:theme.palette.primary.main,backgroundColor:'white',fontFamily:'poppins',borderRadius:4}}>Customize Gift</Button>
              </Stack>

              <Stack 
                sx={{
                  mx:3,
                  my:2,
                  borderRadius:2,
                  width:{md:'40%',xs:'100%'},
                  height:{md:'65vh',xs:'40vh'},
                  border:'solid',
                  alignItems:'center',
                  position:'relative'
                  }}>
                    <IconButton 
                      onClick={handlePreviewPlayBtnClick}
                      sx={{
                        position:'absolute',
                        bottom: 5,
                        right: 5
                        }}>
                          {isPreviewPlaying?<PauseCircleIcon sx={{color:primaryColor}}/>:<PlayCircleIcon sx={{color:primaryColor}}/>}
                    </IconButton>
              </Stack>
              <Stack mx={3}  spacing={2} sx={{width:'100%',display:{md:'none',xl:'none'}}} direction='row'>
                <Button disableElevation variant="contained" sx={{width:'auto',color:primaryColor,backgroundColor:'white',fontFamily:'poppins',borderRadius:4}}>Customize Gift</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>      
      </>
    )
}