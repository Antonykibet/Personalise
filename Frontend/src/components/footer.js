import { Stack, Typography} from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <Stack color='white' direction='column' component='footer' >
            <Stack sx={{backgroundColor:'#3c67d8',py:2,justifyContent:'space-between',alignItems:'center',px:{md:10,xs:5}}} direction='row' >
                <Stack sx={{alignItems:'center'}} direction="row">
                    <AutoFixHighIcon />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            textDecoration:'none',
                            color: 'white',
                        }}
                    >
                    Personalyze
                    </Typography>
                </Stack>
                <Stack spacing={2} sx={{justifyContent:{xs:'center',md:'space-around',my:1}}} direction='row'>
                        <InstagramIcon/>
                        <XIcon/>
                        <FacebookIcon/>
                </Stack>
            </Stack>

            <Stack alignItems='center' sx={{backgroundColor:'#2638c0'}}>
                <Typography m={1} variant="body2" sx={{color:'white'}}>Designed and Developed by <Link>Antony</Link> </Typography>
            </Stack>
        </Stack>
    )
}