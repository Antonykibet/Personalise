import { Box, Button, Stack, Typography, } from "@mui/material"
import 'react-multi-carousel/lib/styles.css';
import { useTheme } from "@emotion/react";



export default function Hero(){
  const theme = useTheme()
    return(
      <>
        <Stack sx={{width:'100%',height:'80vh',alignItems:'center'}}>
          <Stack direction={{xs:'column',md:'row',xl:'row'}} sx={{my:2,py:2,px:2,justifyContent:'space-around',alignItems:'center',borderRadius:2,width:{xs:'95%',md:'90%',lg:'90%',xl:'90%'},height:'100%',backgroundColor:'#EE7A13'}}>
            
            <Stack sx={{alignItems:'start',justifyContent:{md:'space-around'},height:{md:'90%'},width:{md:'45%'}}} mx={3} spacing={1}>
              <Box>
                <Typography variant="h2" sx={{fontFamily:'poppins',fontWeight:700,color:'white',fontSize:{md:'80px'}}}>Personalise with Ease.</Typography>
                <Typography variant="p" sx={{fontFamily:'poppins',fontWeight:500,color:'white'}}>Design and get customizable products at your comfort, 
                  no design skills required.</Typography>
              </Box>
              <Button disableElevation variant="contained" sx={{display:{xs:'none',md:'block',xl:'block'},width:'auto',color:theme.palette.primary.main,backgroundColor:'white',fontFamily:'poppins',borderRadius:4}}>Customize Gift</Button>
            </Stack>

            <Stack mx={3} my={2} sx={{borderRadius:2,width:{md:'40%',xs:'90%'} ,height:{md:'65vh',xs:'40vh'},border:'solid'}}></Stack>
            <Stack mx={3}  spacing={2} sx={{width:'90%',display:{md:'none',xl:'none'}}} direction='row'>
              <Button disableElevation variant="contained" sx={{width:'auto',color:theme.palette.primary.main,backgroundColor:'white',fontFamily:'poppins',borderRadius:4}}>Customize Gift</Button>
            </Stack>
          </Stack>
        </Stack>      
      </>
    )
}