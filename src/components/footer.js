import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

export default function Footer(){
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    return(
        <div>
            <Stack color='white' direction='column' component='footer' >
                <Stack sx={{backgroundColor:'#3c67d8'}} paddingTop={2} px={2} justifyContent= 'space-around' direction={isSmallScreen?'column-reverse':'row'}>
                    <Stack direction='column' justifyContent='space-around'>
                        <Stack direction="row" alignItems='center'>
                            <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
                            <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                textDecoration:'none',
                                color: 'white',
                            }}
                            >
                            Personalyze
                            </Typography>
                        </Stack>
                        <Stack spacing={2} justifyContent= {isSmallScreen?'center':'space-around'} my={1} direction='row'>
                                <InstagramIcon/>
                                <XIcon/>
                                <FacebookIcon/>
                        </Stack>
                    </Stack>
                    <Box sx={{display:'flex', justifyContent:isSmallScreen?'start':'space-around' , flexWrap:'wrap',p:1}}  width={isSmallScreen?'100%':'65%'} >
                        <Stack m={1}>
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography variant="body2" >Hoodie</Typography>
                            <Typography variant="body2">Hoodie</Typography>
                            <Typography variant="body2">Hoodie</Typography>
                            <Typography variant="body2">Hoodie</Typography>
                            <Typography variant="body2">Hoodie</Typography>
                        </Stack>
                        <Stack m={1}>
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack m={1}>
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack >
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack >
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack >
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack >
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                    </Box>
                   
                </Stack>
                <Stack alignItems='center' sx={{backgroundColor:'#2638c0'}}>
                    <Typography m={1} variant="body2" sx={{color:'white'}}>Designed and Developed by <Link>Antony</Link> </Typography>
                </Stack>
            </Stack>
        </div>
    )
}