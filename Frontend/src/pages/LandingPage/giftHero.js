import {Box, Stack, Typography} from '@mui/material'
import giftHeroImage from '../../giftHeroImage.jpg'
export default function GiftHero(){
    return(
        <>
            <Stack sx={{my:3,position:'relative'}}>
                <div style={{position:'absolute',bottom:0,width:'100%',background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',padding:'16px'}}>
                <Typography variant="h4" sx={{fontFamily:'poppins',fontWeight:700,color:'white'}}>Curate a gift that reflects their unique essence.</Typography>
                <Typography variant="p" sx={{fontFamily:'poppins',fontWeight:500,color:'white'}}>Express your deepest love with a truly personalized creation.</Typography> 
                </div>
                <img style={{borderRadius:'8px'}} src={giftHeroImage} alt='Personalised cups for an anniversary gift.'/>
            </Stack>
        </>
    )
}