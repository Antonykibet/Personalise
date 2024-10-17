import { Box, Stack, Typography } from "@mui/material";
import logo from "../logo512.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    return(
        <div>
            <Stack sx={{border:'solid'}} direction='column' component='footer' >
                <Stack mx={2} direction='row'>
                    <img width='15%' height='' src={logo} alt="" />
                    <Box sx={{display:'flex', justifyContent:'space-around', flexWrap:'wrap',border:'solid'}}  width='65%'>
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
                        <Stack m={1}>
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                    </Box>
                    <Stack justifyContent='space-between' spacing={1}>
                        <Stack m={1}>
                            <Typography sx={{fontWeight:'bold'}} variant="h6" >Category</Typography>
                            <Typography >Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                            <Typography>Hoodie</Typography>
                        </Stack>
                        <Stack spacing={2} direction='row'>
                            <InstagramIcon/>
                            <XIcon/>
                            <FacebookIcon/>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack height='16px' sx={{backgroundColor:'blue'}}></Stack>
            </Stack>
        </div>
    )
}